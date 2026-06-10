import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

const chapters = [
  {
    n: "01",
    title: "AI ও LLM-এর ভিত্তি",
    summary: "Tokens, context window, temperature — মৌলিক ধারণাগুলো বাংলায়।",
    content: [
      "এই অধ্যায়ে আমরা শিখব Large Language Model আসলে কীভাবে কাজ করে। Token কী, কেন একটা মডেলের context window সীমিত, এবং temperature parameter আসলে কীভাবে output-এর creativity নিয়ন্ত্রণ করে।",
      "আপনি জানতে পারবেন GPT, Claude, Gemini-র মত মডেলগুলোর মধ্যে মৌলিক পার্থক্য কোথায় এবং কোন কাজের জন্য কোনটি বেছে নেওয়া উচিত।",
      "শেষে থাকবে একটি hands-on exercise — নিজে নিজে token count করে দেখুন এবং বুঝুন কেন দীর্ঘ prompt সবসময় ভালো নয়।",
    ],
  },
  {
    n: "02",
    title: "Anatomy of a Great Prompt",
    summary: "Role, context, task, format — চারটি স্তম্ভ।",
    content: [
      "একটি ভালো prompt-এর চারটি অংশ থাকে: Role (AI কে কী ভূমিকা পালন করবে), Context (background information), Task (সঠিক কাজটি কী), এবং Format (output কেমন হবে)।",
      "প্রতিটি অংশ বিস্তারিত উদাহরণসহ ব্যাখ্যা করা হয়েছে। আপনি দেখবেন একই প্রশ্ন কীভাবে চারটি অংশ যোগ করার পর সম্পূর্ণ ভিন্ন quality-র উত্তর দেয়।",
    ],
  },
  {
    n: "03",
    title: "Zero-shot vs Few-shot Prompting",
    summary: "কখন কোনটা ব্যবহার করবেন, উদাহরণসহ।",
    content: [
      "Zero-shot prompting মানে কোনো উদাহরণ না দিয়ে সরাসরি কাজ চাওয়া। Few-shot মানে ২-৫টি উদাহরণ দিয়ে pattern শেখানো।",
      "Classification, translation, formatting-এর মত কাজে few-shot prompting অনেক বেশি accurate result দেয়। এই chapter-এ থাকবে real-world use cases।",
    ],
  },
  {
    n: "04",
    title: "Chain of Thought Prompting",
    summary: "AI-কে step by step ভাবতে শেখানোর কৌশল।",
    content: [
      "জটিল reasoning-এর জন্য AI-কে \"let's think step by step\" বলার মাধ্যমে accuracy অনেক বেড়ে যায়। এই chapter-এ শিখবেন কীভাবে complex math, logic, এবং multi-step problem solve করাতে হয়।",
      "Self-consistency, tree of thought — advanced reasoning techniques-ও থাকবে।",
    ],
  },
  {
    n: "05",
    title: "System Prompts ও Personas",
    summary: "নিজের কাস্টম AI assistant তৈরি করুন।",
    content: [
      "System prompt দিয়ে আপনি AI-কে একটা নির্দিষ্ট personality দিতে পারেন — যেমন একজন senior developer, একজন marketing expert, বা একজন Bangla teacher।",
      "এই chapter-এ ১০+ ready-to-use system prompt template থাকবে।",
    ],
  },
  {
    n: "06",
    title: "Prompt Templates Library",
    summary: "৫০+ ready-to-use template — copy, paste, customize।",
    content: [
      "Writing, coding, research, brainstorming, summarization — প্রতিটি category-র জন্য tested template। শুধু copy করুন, আপনার context বসান, এবং ব্যবহার করুন।",
    ],
  },
  {
    n: "07",
    title: "Coding with AI",
    summary: "Code generation, debugging, code review prompt।",
    content: [
      "Developer হিসেবে AI-কে কীভাবে সবচেয়ে effective ভাবে ব্যবহার করবেন। Code generation, bug fixing, refactoring, code review — প্রতিটির জন্য specific prompting pattern।",
      "GitHub Copilot, Cursor, Claude Code — কোন tool কোন কাজের জন্য সবচেয়ে ভালো সেটাও জানবেন।",
    ],
  },
  {
    n: "08",
    title: "Content ও Marketing",
    summary: "Blog, ad copy, social media — Bangla audience-এর জন্য।",
    content: [
      "Bangla content writing-এর জন্য AI ব্যবহারে বিশেষ কিছু challenge আছে — যেমন proper tone, cultural context, এবং local idioms। এই chapter-এ সেগুলো address করা হয়েছে।",
    ],
  },
  {
    n: "09",
    title: "RAG ও Long Context",
    summary: "বড় document থেকে নির্ভুল উত্তর বের করার কৌশল।",
    content: [
      "Retrieval Augmented Generation কী, কেন এটা hallucination কমায়, এবং কীভাবে নিজের document collection-এর উপর AI assistant build করবেন।",
    ],
  },
  {
    n: "10",
    title: "Multi-modal Prompting",
    summary: "Image, voice, document input handling।",
    content: [
      "শুধু text নয় — image, audio, PDF, এমনকি video input দিয়েও AI-কে prompt করা যায়। প্রতিটি modality-র জন্য আলাদা best practice আছে।",
    ],
  },
  {
    n: "11",
    title: "Common Pitfalls",
    summary: "Hallucination, bias, prompt injection — কীভাবে এড়াবেন।",
    content: [
      "AI ভুল উত্তর দেয় কেন, কীভাবে চিনবেন, এবং কীভাবে আপনার prompt design করে এই সমস্যা কমাবেন। Production system-এ prompt injection attack থেকে বাঁচার উপায়ও থাকবে।",
    ],
  },
  {
    n: "12",
    title: "Building Your AI Workflow",
    summary: "Daily life ও কাজে AI integrate করার blueprint।",
    content: [
      "সকাল থেকে রাত — আপনার প্রতিদিনের কাজে AI কীভাবে integrate করবেন। Email, meeting notes, planning, learning — প্রতিটির জন্য concrete workflow।",
    ],
  },
  {
    n: "13",
    title: "Agentic AI ও Automation",
    summary: "Multi-step task automate করার পদ্ধতি।",
    content: [
      "AI agents কী, কীভাবে কাজ করে, এবং কীভাবে নিজে নিজের জন্য একটি simple agent build করবেন। Tool use, function calling, এবং autonomous workflow-এর foundation।",
    ],
  },
  {
    n: "14",
    title: "Prompt Engineering for Business",
    summary: "Team ও organization-এ AI adoption।",
    content: [
      "একজন individual থেকে এক ধাপ এগিয়ে — কীভাবে আপনার team বা company-তে AI culture build করবেন। Prompt library তৈরি, governance, এবং ROI measurement।",
    ],
  },
  {
    n: "15",
    title: "ভবিষ্যৎ ও আপনার পরবর্তী পদক্ষেপ",
    summary: "What's next — continuous learning roadmap।",
    content: [
      "AI দ্রুত পরিবর্তন হচ্ছে। কীভাবে up-to-date থাকবেন, কোন resources follow করবেন, এবং নিজের ক্যারিয়ারে এই skill-কে কীভাবে কাজে লাগাবেন।",
    ],
  },
];

export const Route = createFileRoute("/syllabus")({
  head: () => ({
    meta: [
      { title: "Full Syllabus — Prompt Engineering in Bangla" },
      {
        name: "description",
        content:
          "১৫টি বিস্তারিত chapter — Prompt Engineering শেখার complete roadmap বাংলায়।",
      },
      { property: "og:title", content: "Full Syllabus — Prompt Engineering in Bangla" },
      {
        property: "og:description",
        content: "১৫টি chapter, hands-on exercises, real-world templates।",
      },
    ],
  }),
  component: SyllabusPage,
});

function SyllabusPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-5xl px-4 pt-32 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mt-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Full syllabus</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">
              Prompt Engineering <span className="italic text-gradient">in Bangla</span>
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              ১৫টি chapter — প্রতিটিতে theory, real-world example, এবং hands-on exercise।
              যেকোনো chapter-এ click করে বিস্তারিত দেখুন।
            </p>
          </div>
          <div className="hidden text-right md:block">
            <div className="font-serif text-3xl text-gradient">{chapters.length}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Chapters
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <ol className="mt-8 space-y-3">
          {chapters.map((c, idx) => {
            const isOpen = openIdx === idx;
            return (
              <li
                key={c.n}
                className="overflow-hidden rounded-2xl border border-border/40 bg-surface/40 backdrop-blur transition-colors hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full cursor-pointer items-center gap-5 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-3xl text-gradient w-12 shrink-0">
                    {c.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.summary}</p>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/40 px-5 pb-6 pt-5 md:pl-[4.25rem]">
                      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                        {c.content.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-border/50 bg-surface-elevated px-3 py-1 text-xs text-muted-foreground">
                          Theory
                        </span>
                        <span className="rounded-full border border-border/50 bg-surface-elevated px-3 py-1 text-xs text-muted-foreground">
                          Examples
                        </span>
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-foreground">
                          Hands-on exercise
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <Footer />
    </main>
  );
}
