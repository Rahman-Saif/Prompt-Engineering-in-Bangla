import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  RadialBarChart, RadialBar, PolarAngleAxis,
  LineChart, Line,
} from "recharts";
import { BookOpen, CheckCircle2, Flame, Trophy, Target, Clock, LogIn } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { CHAPTERS, PARTS } from "@/lib/chapters";
import { hydrateFromServer, getProgress, getQuizResults, type ProgressMap, type QuizMap, type QuizAttempt } from "@/lib/progress";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Prompt Engineering eBook" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [quiz, setQuiz] = useState<QuizMap>({});
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      const isAuthed = !!data.session;
      if (!alive) return;
      setAuthed(isAuthed);

      const res = await hydrateFromServer();
      if (!alive) return;
      setProgress(res.progress);
      setQuiz(res.quiz);
      setAttempts(res.attempts);
      setLoading(false);
    })();
    const refresh = () => {
      setProgress(getProgress());
      setQuiz(getQuizResults());
    };
    window.addEventListener("ai-ebook:progress-changed", refresh);
    return () => { alive = false; window.removeEventListener("ai-ebook:progress-changed", refresh); };
  }, []);

  const total = CHAPTERS.length;
  const completed = useMemo(() => CHAPTERS.filter(c => progress[c.slug]?.completed).length, [progress]);
  const pct = Math.round((completed / total) * 100);
  const minutesRead = useMemo(
    () => CHAPTERS.filter(c => progress[c.slug]?.completed).reduce((a, c) => a + c.readingMinutes, 0),
    [progress],
  );

  const quizzesTaken = Object.keys(quiz).length;
  const avgScore = quizzesTaken === 0
    ? 0
    : Math.round(
        (Object.values(quiz).reduce((a, q) => a + (q.score / q.total), 0) / quizzesTaken) * 100,
      );

  // Per-part completion bars
  const partData = PARTS.map(p => {
    const chs = CHAPTERS.filter(c => c.partId === p.id);
    const done = chs.filter(c => progress[c.slug]?.completed).length;
    return {
      name: p.title.replace(/^Part \d+ — /, ""),
      Completed: done,
      Remaining: chs.length - done,
    };
  });

  // Quiz score over time (last 10 attempts, oldest first)
  const scoreSeries = [...attempts]
    .slice(0, 10)
    .reverse()
    .map((a, i) => ({ idx: i + 1, score: Math.round((a.score / a.total) * 100), slug: a.slug }));

  // Streak: count consecutive days back from today with a progress update
  const streak = useMemo(() => calcStreak(progress, attempts), [progress, attempts]);

  // Achievements
  const achievements = [
    { id: "first", label: "First Chapter", desc: "Complete any chapter", got: completed >= 1, icon: BookOpen },
    { id: "five", label: "On a Roll", desc: "Complete 5 chapters", got: completed >= 5, icon: Flame },
    { id: "half", label: "Halfway There", desc: "Reach 50% progress", got: pct >= 50, icon: Target },
    { id: "quiz", label: "Quiz Taker", desc: "Submit your first quiz", got: quizzesTaken >= 1, icon: CheckCircle2 },
    { id: "perfect", label: "Perfect Score", desc: "Score 100% on any quiz", got: Object.values(quiz).some(q => q.score === q.total), icon: Trophy },
    { id: "done", label: "Finisher", desc: "Complete the entire book", got: completed === total, icon: Trophy },
  ];

  return (
    <div className="min-h-dvh bg-gradient-hero">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Your Progress</p>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl">Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              {authed
                ? "Synced across every device you sign in on."
                : "Saved on this device — sign in to sync across devices."}
            </p>
          </div>
          {authed === false && (
            <Link to="/auth" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow">
              <LogIn className="h-4 w-4" /> Sign in to sync
            </Link>
          )}
        </header>

        {loading ? (
          <div className="rounded-2xl border border-border bg-surface p-12 text-center text-muted-foreground">Loading your stats…</div>
        ) : (
          <>
            {/* Stats grid */}
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={BookOpen} label="Chapters" value={`${completed}/${total}`} sub={`${pct}% complete`} />
              <StatCard icon={Clock} label="Minutes Read" value={minutesRead} sub="Estimated" />
              <StatCard icon={CheckCircle2} label="Quizzes Taken" value={quizzesTaken} sub={`Avg ${avgScore}%`} />
              <StatCard icon={Flame} label="Day Streak" value={streak} sub={streak === 1 ? "day" : "days"} />
            </section>

            {/* Charts */}
            <section className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6 shadow-elevated">
                <h2 className="font-serif text-xl">Progress by Part</h2>
                <p className="text-sm text-muted-foreground">Chapters completed across each part of the book.</p>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={partData} stackOffset="expand">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="currentColor" className="text-muted-foreground" />
                      <YAxis tick={{ fontSize: 12 }} stroke="currentColor" className="text-muted-foreground" />
                      <Tooltip contentStyle={{ background: "var(--background)", border: "1px solid var(--border)", borderRadius: 8 }} />
                      <Bar dataKey="Completed" stackId="a" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="Remaining" stackId="a" fill="var(--muted)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-elevated flex flex-col">
                <h2 className="font-serif text-xl">Overall</h2>
                <p className="text-sm text-muted-foreground">Total book completion.</p>
                <div className="flex-1 mt-4 grid place-items-center">
                  <ResponsiveContainer width="100%" height={200}>
                    <RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ name: "pct", value: pct, fill: "var(--primary)" }]} startAngle={90} endAngle={-270}>
                      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                      <RadialBar background dataKey="value" cornerRadius={20} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="-mt-32 font-serif text-4xl">{pct}%</div>
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-2xl border border-border bg-surface p-6 shadow-elevated">
              <h2 className="font-serif text-xl">Quiz Score Trend</h2>
              <p className="text-sm text-muted-foreground">Your last {scoreSeries.length || 0} quiz submissions.</p>
              <div className="mt-4 h-56">
                {scoreSeries.length === 0 ? (
                  <div className="grid h-full place-items-center text-sm text-muted-foreground">
                    No quizzes yet — take one from any chapter to see your trend.
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={scoreSeries}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="idx" tick={{ fontSize: 12 }} stroke="currentColor" className="text-muted-foreground" />
                      <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="currentColor" className="text-muted-foreground" />
                      <Tooltip contentStyle={{ background: "var(--background)", border: "1px solid var(--border)", borderRadius: 8 }} formatter={(v: number) => `${v}%`} />
                      <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </section>

            {/* Achievements */}
            <section className="mt-6 rounded-2xl border border-border bg-surface p-6 shadow-elevated">
              <h2 className="font-serif text-xl">Achievements</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((a) => (
                  <div
                    key={a.id}
                    className={`flex items-center gap-3 rounded-xl border p-4 ${a.got ? "border-primary/50 bg-primary/5" : "border-border opacity-60"}`}
                  >
                    <div className={`grid h-10 w-10 place-items-center rounded-full ${a.got ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <a.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{a.label}</div>
                      <div className="text-xs text-muted-foreground">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent activity */}
            <section className="mt-6 rounded-2xl border border-border bg-surface p-6 shadow-elevated">
              <h2 className="font-serif text-xl">Recent Quiz Activity</h2>
              {attempts.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">Submit a chapter quiz to start your history.</p>
              ) : (
                <ul className="mt-4 divide-y divide-border">
                  {attempts.slice(0, 8).map((a, i) => {
                    const ch = CHAPTERS.find(c => c.slug === a.slug);
                    const pctA = Math.round((a.score / a.total) * 100);
                    return (
                      <li key={i} className="flex items-center justify-between py-3">
                        <div className="min-w-0">
                          <Link to="/chapter/$slug" params={{ slug: a.slug }} className="font-medium hover:underline truncate block">
                            {ch?.title ?? a.slug}
                          </Link>
                          <div className="text-xs text-muted-foreground">{new Date(a.takenAt).toLocaleString()}</div>
                        </div>
                        <div className={`text-sm font-mono ${pctA === 100 ? "text-emerald-500" : pctA >= 60 ? "" : "text-amber-500"}`}>
                          {a.score}/{a.total} · {pctA}%
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-elevated">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      </div>
      <div className="mt-3 font-serif text-3xl">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

function calcStreak(progress: ProgressMap, attempts: QuizAttempt[]): number {
  const days = new Set<string>();
  Object.values(progress).forEach(p => {
    if (p.completed) days.add(new Date(p.updatedAt).toDateString());
  });
  attempts.forEach(a => days.add(new Date(a.takenAt).toDateString()));
  let streak = 0;
  const d = new Date();
  // Allow streak to include today or start from yesterday
  if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1);
  while (days.has(d.toDateString())) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
