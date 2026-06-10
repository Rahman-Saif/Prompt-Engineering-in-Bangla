import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Clock, CheckCircle2, Circle, Search } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { CHAPTERS, PARTS } from "@/lib/chapters";
import { getProgress, getQuizResults, hydrateFromServer, type ProgressMap, type QuizMap } from "@/lib/progress";

export const Route = createFileRoute("/contents")({
  head: () => ({
    meta: [
      { title: "Table of Contents — Prompt Engineering eBook" },
      { name: "description", content: "All 30 chapters, organized into three parts. Track your reading progress as you go." },
    ],
  }),
  component: ContentsPage,
});

function ContentsPage() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [quiz, setQuiz] = useState<QuizMap>({});
  const [query, setQuery] = useState("");
  const [openParts, setOpenParts] = useState<Record<string, boolean>>(
    () => Object.fromEntries(PARTS.map((p) => [p.id, true])),
  );

  useEffect(() => {
    const refresh = () => {
      setProgress(getProgress());
      setQuiz(getQuizResults());
    };
    refresh();
    // Pull latest from server if signed in
    hydrateFromServer().then((r) => {
      setProgress(r.progress);
      setQuiz(r.quiz);
    }).catch(() => {});
    const handler = () => refresh();
    window.addEventListener("ai-ebook:progress-changed", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("ai-ebook:progress-changed", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const total = CHAPTERS.length;
  const completed = useMemo(
    () => CHAPTERS.filter((c) => progress[c.slug]?.completed).length,
    [progress],
  );
  const pct = Math.round((completed / total) * 100);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CHAPTERS;
    return CHAPTERS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-dvh bg-gradient-hero">
      <Nav />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">eBook</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">Table of Contents</h1>
          <p className="mt-3 text-muted-foreground">
            Thirty chapters across three parts. Your progress is saved automatically.
          </p>
        </header>

        {/* Progress card */}
        <section className="mb-8 rounded-2xl border border-border bg-surface p-6 shadow-elevated">
          <div className="grid grid-cols-3 gap-4 text-center">
            <Stat label="Total Chapters" value={total} />
            <Stat label="Completed" value={completed} />
            <Stat label="Progress" value={`${pct}%`} />
          </div>
          <div className="mt-5">
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-gradient-primary transition-[width] duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </section>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters…"
            className="w-full rounded-full border border-border bg-surface pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Parts */}
        <div className="space-y-4">
          {PARTS.map((part) => {
            const chapters = filtered.filter((c) => c.partId === part.id);
            if (chapters.length === 0) return null;
            const open = openParts[part.id];
            const partDone = chapters.filter((c) => progress[c.slug]?.completed).length;
            return (
              <section key={part.id} className="rounded-2xl border border-border bg-surface overflow-hidden">
                <button
                  onClick={() => setOpenParts((s) => ({ ...s, [part.id]: !s[part.id] }))}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/40 transition-colors"
                >
                  <div>
                    <h2 className="font-serif text-xl">{part.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{part.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">
                      {partDone}/{chapters.length}
                    </span>
                    {open ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </div>
                </button>

                {open && (
                  <ul className="divide-y divide-border border-t border-border">
                    {chapters.map((c) => {
                      const done = !!progress[c.slug]?.completed;
                      const qr = quiz[c.slug];
                      return (
                        <li key={c.slug}>
                          <Link
                            to="/chapter/$slug"
                            params={{ slug: c.slug }}
                            className="group flex items-center gap-4 px-5 py-4 hover:bg-accent/40 transition-colors"
                          >
                            <div className="shrink-0">
                              {done ? (
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2">
                                <span className="text-xs font-mono text-muted-foreground">
                                  {String(c.number).padStart(2, "0")}
                                </span>
                                <span className="font-medium group-hover:text-foreground truncate">
                                  {c.title}
                                </span>
                              </div>
                              <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">{c.summary}</p>
                            </div>
                            <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                              {qr && (
                                <span className="rounded-full bg-accent px-2 py-0.5">
                                  Quiz {qr.score}/{qr.total}
                                </span>
                              )}
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {c.readingMinutes} min
                              </span>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <div className="font-serif text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
