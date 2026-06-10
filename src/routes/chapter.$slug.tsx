import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { QuizSection } from "@/components/QuizSection";
import { CHAPTERS, getChapter, type ChapterContentBlock } from "@/lib/chapters";
import { getProgress, setChapterCompleted } from "@/lib/progress";

export const Route = createFileRoute("/chapter/$slug")({
  head: ({ params }) => {
    const c = getChapter(params.slug);
    return {
      meta: [
        { title: c ? `${c.title} — Prompt Engineering` : "Chapter" },
        { name: "description", content: c?.summary ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const chapter = getChapter(params.slug);
    if (!chapter) throw notFound();
    return { chapter };
  },
  notFoundComponent: () => (
    <div className="min-h-dvh grid place-items-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl">Chapter not found</h1>
        <Link to="/contents" className="mt-4 inline-block text-primary underline underline-offset-4">
          Back to contents
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-dvh grid place-items-center p-8 text-center">
      <div>
        <h1 className="font-serif text-2xl">Couldn't load this chapter</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
  component: ChapterPage,
});

function ChapterPage() {
  const { chapter } = Route.useLoaderData();
  const [done, setDone] = useState(false);
  const [readPct, setReadPct] = useState(0);

  useEffect(() => {
    setDone(!!getProgress()[chapter.slug]?.completed);
    setReadPct(0);
    window.scrollTo({ top: 0 });

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.round((h.scrollTop / max) * 100)) : 0;
      setReadPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [chapter.slug]);

  const toggleDone = () => {
    const next = !done;
    setDone(next);
    setChapterCompleted(chapter.slug, next);
  };

  const prev = CHAPTERS[chapter.number - 2];
  const next = CHAPTERS[chapter.number];

  const content: ChapterContentBlock[] = chapter.content ?? placeholderContent(chapter.title);

  return (
    <div className="min-h-dvh bg-background">
      <Nav />
      {/* Reading progress bar */}
      <div className="sticky top-[57px] z-40 h-0.5 w-full bg-transparent">
        <div className="h-full bg-gradient-primary transition-[width] duration-150" style={{ width: `${readPct}%` }} />
      </div>

      <main className="mx-auto max-w-2xl px-4 py-10">
        <Link to="/contents" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All chapters
        </Link>

        <header className="mt-6">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Chapter {String(chapter.number).padStart(2, "0")}
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl leading-tight">{chapter.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {chapter.readingMinutes} min read</span>
            <button
              onClick={toggleDone}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              {done ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Circle className="h-4 w-4" />}
              {done ? "Marked complete" : "Mark complete"}
            </button>
          </div>
        </header>

        <article className="prose-reader mt-10">
          {content.map((b, i) => <Block key={i} block={b} />)}
        </article>

        {chapter.quiz && <QuizSection slug={chapter.slug} questions={chapter.quiz} />}

        {/* Prev / next */}
        <nav className="mt-12 grid grid-cols-2 gap-3">
          {prev ? (
            <Link
              to="/chapter/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-xl border border-border bg-surface p-4 hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ArrowLeft className="h-3 w-3" /> Previous
              </div>
              <div className="mt-1 font-medium truncate">{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/chapter/$slug"
              params={{ slug: next.slug }}
              className="group rounded-xl border border-border bg-surface p-4 text-right hover:bg-accent transition-colors"
            >
              <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                Next <ArrowRight className="h-3 w-3" />
              </div>
              <div className="mt-1 font-medium truncate">{next.title}</div>
            </Link>
          ) : <div />}
        </nav>
      </main>
    </div>
  );
}

function Block({ block }: { block: ChapterContentBlock }) {
  switch (block.type) {
    case "h2": return <h2>{block.text}</h2>;
    case "h3": return <h3>{block.text}</h3>;
    case "p": return <p>{block.text}</p>;
    case "ul": return <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
    case "ol": return <ol>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ol>;
    case "code": return <pre><code>{block.code}</code></pre>;
    case "callout": {
      const colors = {
        note: "border-primary/40 bg-primary/5",
        tip: "border-emerald-500/40 bg-emerald-500/5",
        warning: "border-amber-500/50 bg-amber-500/5",
        key: "border-accent bg-accent/40",
      } as const;
      const cls = colors[block.variant ?? "note"];
      return (
        <aside className={`my-6 rounded-xl border ${cls} p-4 not-prose`}>
          {block.title && <div className="font-medium text-sm">{block.title}</div>}
          <div className="mt-1 text-sm">{block.text}</div>
        </aside>
      );
    }
    case "table":
      return (
        <table>
          <thead>
            <tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((r, i) => (
              <tr key={i}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      );
  }
}

function placeholderContent(title: string): ChapterContentBlock[] {
  return [
    { type: "p", text: `This chapter — “${title}” — is in active development. The full long-form content, examples, and quiz are being written by the author.` },
    { type: "callout", variant: "note", title: "Coming soon", text: "Subscribers will get an email when this chapter ships." },
    { type: "h2", text: "What you'll learn" },
    { type: "ul", items: [
      "The core concept and why it matters in practice.",
      "A worked example from a real production prompt.",
      "Common mistakes and how to avoid them.",
      "Exercises to lock in the technique.",
    ]},
    { type: "p", text: "In the meantime, head back to the table of contents to pick another chapter — the foundations sections are fully written." },
  ];
}
