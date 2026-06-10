import { Languages, Zap, Brain, Target, Code2, BookOpen } from "lucide-react";

const reasons = [
  {
    icon: Languages,
    title: "১০০% বাংলায়",
    desc: "জটিল prompt engineering concept গুলো সহজ বাংলায় ব্যাখ্যা — কোনো ইংরেজি jargon ছাড়াই।",
  },
  {
    icon: Brain,
    title: "First Principles",
    desc: "শুধু trick না, কেন একটা prompt কাজ করে সেটার behind the scenes বুঝুন।",
  },
  {
    icon: Target,
    title: "Real-world Use Cases",
    desc: "Freelancing, content creation, coding, study — প্রতিটার জন্য আলাদা প্রমাণিত prompt template।",
  },
  {
    icon: Code2,
    title: "Multi-Model Coverage",
    desc: "ChatGPT, Claude, Gemini, Grok — প্রতিটার strength অনুযায়ী আলাদা strategy।",
  },
  {
    icon: Zap,
    title: "Hands-on Exercises",
    desc: "প্রতি chapter এ practice prompt এবং self-evaluation rubric, যাতে শিখাটা থেকে যায়।",
  },
  {
    icon: BookOpen,
    title: "Lifetime Updates",
    desc: "AI দিন দিন পাল্টাচ্ছে। বইয়ের update গুলো আজীবন বিনামূল্যে পাবেন।",
  },
];

export function WhyThisCourse() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Why this course</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Other tutorials teach <em className="text-gradient not-italic">prompts</em>.
            <br /> We teach <em className="italic">thinking</em>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            বাজারে অনেক "AI tips" আছে। এই বইটা আপনাকে শেখাবে কীভাবে নিজেই
            যেকোনো task-এর জন্য effective prompt design করতে পারেন।
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative rounded-2xl border border-border/60 bg-surface/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <r.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
