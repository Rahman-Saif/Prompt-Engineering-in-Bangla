// Progress + quiz store. Backed by localStorage (instant) and synced to
// Supabase per signed-in user when a session is available.

import { supabase } from "@/integrations/supabase/client";

const PROGRESS_KEY = "ai-ebook:progress:v1";
const QUIZ_KEY = "ai-ebook:quiz:v1";

export type ProgressMap = Record<string, { completed: boolean; updatedAt: number }>;
export type QuizResult = { score: number; total: number; takenAt: number; answers: number[] };
export type QuizMap = Record<string, QuizResult>;
export type QuizAttempt = QuizResult & { slug: string };

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}

function emit() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("ai-ebook:progress-changed"));
}

export function getProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  return safeParse<ProgressMap>(localStorage.getItem(PROGRESS_KEY), {});
}

export function getQuizResults(): QuizMap {
  if (typeof window === "undefined") return {};
  return safeParse<QuizMap>(localStorage.getItem(QUIZ_KEY), {});
}

async function getUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    return data.session?.user?.id ?? null;
  } catch { return null; }
}

export async function setChapterCompleted(slug: string, completed: boolean) {
  if (typeof window === "undefined") return;
  const map = getProgress();
  map[slug] = { completed, updatedAt: Date.now() };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(map));
  emit();

  const uid = await getUserId();
  if (!uid) return;
  await supabase
    .from("reading_progress")
    .upsert(
      { user_id: uid, chapter_slug: slug, completed },
      { onConflict: "user_id,chapter_slug" },
    );
}

export async function saveQuizResult(slug: string, result: QuizResult) {
  if (typeof window === "undefined") return;
  const map = getQuizResults();
  map[slug] = result;
  localStorage.setItem(QUIZ_KEY, JSON.stringify(map));
  emit();

  const uid = await getUserId();
  if (!uid) return;
  await supabase.from("quiz_results").insert({
    user_id: uid,
    chapter_slug: slug,
    score: result.score,
    total: result.total,
    answers: result.answers,
    taken_at: new Date(result.takenAt).toISOString(),
  });
}

/**
 * Hydrate local cache from the user's server-stored progress + latest quiz
 * per chapter. Call after sign-in or on dashboard mount.
 */
export async function hydrateFromServer(): Promise<{ progress: ProgressMap; quiz: QuizMap; attempts: QuizAttempt[] }> {
  const uid = await getUserId();
  if (!uid) {
    return { progress: getProgress(), quiz: getQuizResults(), attempts: [] };
  }

  const [{ data: prog }, { data: quizRows }] = await Promise.all([
    supabase.from("reading_progress").select("chapter_slug, completed, updated_at").eq("user_id", uid),
    supabase.from("quiz_results").select("chapter_slug, score, total, answers, taken_at").eq("user_id", uid).order("taken_at", { ascending: false }),
  ]);

  const progress: ProgressMap = {};
  (prog ?? []).forEach((r: any) => {
    progress[r.chapter_slug] = { completed: !!r.completed, updatedAt: new Date(r.updated_at).getTime() };
  });

  const quiz: QuizMap = {};
  const attempts: QuizAttempt[] = [];
  (quizRows ?? []).forEach((r: any) => {
    const item: QuizResult = {
      score: r.score,
      total: r.total,
      answers: Array.isArray(r.answers) ? r.answers : [],
      takenAt: new Date(r.taken_at).getTime(),
    };
    attempts.push({ ...item, slug: r.chapter_slug });
    // first row per chapter wins (already sorted desc)
    if (!quiz[r.chapter_slug]) quiz[r.chapter_slug] = item;
  });

  if (typeof window !== "undefined") {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    localStorage.setItem(QUIZ_KEY, JSON.stringify(quiz));
    emit();
  }
  return { progress, quiz, attempts };
}
