import { Link } from "@tanstack/react-router";

const chapters = [
  { n: "01", title: "AI ও LLM-এর ভিত্তি", desc: "Tokens, context window, temperature — মৌলিক ধারণাগুলো বাংলায়।" },
  { n: "02", title: "Anatomy of a Great Prompt", desc: "Role, context, task, format — চারটি স্তম্ভ।" },
  { n: "03", title: "Zero-shot vs Few-shot", desc: "কখন কোনটা ব্যবহার করবেন, উদাহরণসহ।" },
  { n: "04", title: "Chain of Thought Prompting", desc: "AI-কে step by step ভাবতে শেখানোর কৌশল।" },
  { n: "05", title: "System Prompts ও Personas", desc: "নিজের কাস্টম AI assistant তৈরি করুন।" },
  { n: "06", title: "Prompt Templates Library", desc: "৫০+ ready-to-use template — copy, paste, customize।" },
  { n: "07", title: "Coding with AI", desc: "Code generation, debugging, code review প্রম্পট।" },
  { n: "08", title: "Content & Marketing", desc: "Blog, ad copy, social media — Bangla audience-এর জন্য।" },
  { n: "09", title: "RAG ও Long Context", desc: "বড় document থেকে নির্ভুল উত্তর বের করার কৌশল।" },
  { n: "10", title: "Multi-modal Prompting", desc: "Image, voice, document input handling।" },
  { n: "11", title: "Common Pitfalls", desc: "Hallucination, bias, prompt injection — কীভাবে এড়াবেন।" },
  { n: "12", title: "Building Your AI Workflow", desc: "Daily life ও কাজে AI integrate করার blueprint।" },
];

export function CourseStructure() {
  return (
    <section id="structure" className="relative py-24">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Course structure</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              ১২টি chapter, <br />
              <span className="italic text-gradient">একটি journey</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              শুরু থেকে advanced — প্রতিটি chapter আগেরটার ওপর গড়ে ওঠা। শেষে আপনি
              নিজেই নিজের prompt engineer হবেন।
            </p>
            <Link
              to="/contents"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/20"
            >
              See full table of contents →
            </Link>

          </div>

          <ol className="relative space-y-3">
            {chapters.map((c) => (
              <li
                key={c.n}
                className="group flex gap-5 rounded-2xl border border-border/40 bg-surface/40 p-5 backdrop-blur transition-all hover:border-primary/40 hover:bg-surface-elevated"
              >
                <span className="font-serif text-3xl text-gradient">{c.n}</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
