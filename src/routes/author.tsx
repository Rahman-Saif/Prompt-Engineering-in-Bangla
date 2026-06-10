import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Sparkles, BookOpen, Users, Award, Send, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import dev from "@/assets/developer.jpg";

export const Route = createFileRoute("/author")({
  head: () => ({
    meta: [
      { title: "About the Author — Prompt Engineering in Bangla" },
      { name: "description", content: "Meet Md Saif Rahman — AI engineer, educator, and the author of Prompt Engineering in Bangla." },
    ],
  }),
  component: AuthorPage,
});

const stats = [
  { icon: BookOpen, value: "30+", label: "Chapters Written" },
  { icon: Users, value: "1k+ ", label: "Students Taught" },
  { icon: Sparkles, value: "2 yrs", label: "Building with AI" },
  { icon: Award, value: "1 Year", label: "Talks & Workshops" },
];

const milestones = [
  { year: "2020", title: "First steps into ML", text: "Started exploring NLP and transformer models during graduate research." },
  { year: "2021", title: "Joined an AI startup", text: "Shipped production LLM pipelines for content generation and moderation." },
  { year: "2023", title: "Started teaching in Bangla", text: "YouTube channel and bootcamp focused on practical AI for Bangla speakers." },
  { year: "2024", title: "Enterprise AI lead", text: "Architected RAG systems and agent frameworks for fintech and edtech." },
  { year: "2026", title: "This eBook", text: "30 chapters distilling everything that actually works in production prompt engineering." },
];

const gallery = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
];

function AuthorPage() {
  return (
    <div className="min-h-dvh bg-gradient-hero">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-6xl px-4 py-20 grid items-center gap-12 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary blur-3xl opacity-50" />
            <img
              src="src\assets\saif.jpg"
              alt="Rakib Hasan"
              width={320}
              height={320}
              className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover ring-4 ring-primary/30"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Meet the author</p>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-tight">Md Saif Rahman</h1>
            <p className="mt-3 font-serif italic text-xl text-muted-foreground">
              AI Engineer · Educator · 
            </p>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              I help builders, students, and teams ship reliable AI products — and I write
              about it in Bangla so the next generation doesn't have to choose between their
              language and their craft.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> Dhaka, Bangladesh
              </span>
              <a href="mailto:rahmansaif.413@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow">
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <div className="flex gap-2">
                {[
                  { Icon: Twitter, href: "#" },
                  { Icon: Github, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-surface p-5 text-center shadow-elevated">
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-serif text-3xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">My story</p>
        <h2 className="mt-2 font-serif text-4xl">Why I wrote this book</h2>
        <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
        <p>
  Software Engineering নিয়ে কাজ করার সময় একটা বিষয় খুব পরিষ্কারভাবে বুঝতে পেরেছিলাম—
  AI-কে যত ভালোভাবে নির্দেশনা দেওয়া যায়, তার output তত ভালো হয়। অনেক ক্ষেত্রেই
  একই AI model, কিন্তু prompt পরিবর্তন করলেই ফলাফল সম্পূর্ণ ভিন্ন হয়ে যায়।
</p>

<p>
  সময়ের সাথে সাথে AI আরও শক্তিশালী হয়েছে, আর Prompt Engineering-এর গুরুত্বও বহুগুণ
  বেড়েছে। আজ AI দিয়ে content লেখা, coding করা, research করা কিংবা business analysis
  করা—সবকিছুর পেছনেই একটি ভালো prompt গুরুত্বপূর্ণ ভূমিকা পালন করে।
</p>

<p>
  কিন্তু একটি বড় সমস্যা ছিল। Prompt Engineering নিয়ে প্রচুর তথ্য থাকলেও সেগুলোর
  বেশিরভাগই ইংরেজিতে। বাংলাভাষী শিক্ষার্থী, freelancer এবং professionals-দের জন্য
  সহজ ভাষায়, বাস্তব উদাহরণসহ কোনো পূর্ণাঙ্গ বাংলা resource খুঁজে পাওয়া কঠিন ছিল।
</p>

<p>
  সেই অভাব থেকেই এই বইটি লেখা। আমার লক্ষ্য ছিল Prompt Engineering-এর ধারণা,
  কৌশল এবং বাস্তব ব্যবহারগুলোকে বাংলায় এমনভাবে উপস্থাপন করা, যাতে যে কেউ নিজের
  ভাষায় বিষয়টি শিখতে পারে এবং বাস্তব কাজে প্রয়োগ করতে পারে।
</p>

<p>
  আশা করি এই বইটি আপনাকে শুধু ভালো prompt লিখতে নয়, AI-এর সাথে আরও কার্যকরভাবে
  কাজ করতে এবং ভবিষ্যতের AI-driven পৃথিবীর জন্য নিজেকে প্রস্তুত করতে সাহায্য করবে।
</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-4 pb-20">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Journey</p>
        <h2 className="mt-2 font-serif text-4xl">Milestones</h2>
        <ol className="mt-8 relative border-l border-border pl-6 space-y-8">
          {milestones.map((m) => (
            <li key={m.year}>
              <div className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="text-xs font-mono uppercase tracking-wider text-accent">{m.year}</div>
              <div className="mt-1 font-serif text-xl">{m.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Gallery */}
      {/* <section className="mx-auto max-w-6xl px-4 pb-20">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Talks & workshops</p>
        <h2 className="mt-2 font-serif text-4xl">In the wild</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <img src={src} loading="lazy" alt="Workshop" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact */}
      <section className="mx-auto max-w-3xl px-4 pb-24">
        <div className="rounded-3xl border border-border bg-surface p-8 md:p-12 shadow-elevated">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Say hello</p>
          <h2 className="mt-2 font-serif text-4xl">Get in touch</h2>
          <p className="mt-2 text-muted-foreground">
            Questions, collaborations, or just want to share what you're building? Drop a note.
          </p>
          <ContactForm />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-16 text-center">
        <Link to="/contents" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow">
          Start reading the book
        </Link>
      </div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only stub — wire to backend later.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form onSubmit={submit} className="mt-6 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <textarea
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Tell me what you're working on…"
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
      />
      <div className="flex items-center justify-between gap-3">
        {sent ? (
          <p className="inline-flex items-center gap-2 text-sm text-emerald-500">
            <CheckCircle2 className="h-4 w-4" /> Thanks — I'll get back to you soon.
          </p>
        ) : <span />}
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-glow">
          <Send className="h-4 w-4" /> Send message
        </button>
      </div>
    </form>
  );
}
