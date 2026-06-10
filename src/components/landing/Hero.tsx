import { ArrowRight, Download, Star } from "lucide-react";
import cover from "@/assets/ebook-cover.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-32 pb-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-full -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-[90rem] items-center gap-7  px-4 md:grid-cols-2">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-2xl text-muted-foreground backdrop-blur">
            <Star className="h-3 w-3 fill-accent text-accent" />
            বাংলায় প্রথম পূর্ণাঙ্গ গাইড
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Prompt Engineering
            <br />
            <span className="text-gradient italic">in Bangla</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            AI-কে আপনার মাতৃভাষায় কমান্ড করতে শিখুন। ChatGPT, Claude, Gemini —
            প্রতিটি মডেল থেকে সেরা ফলাফল বের করার complete handbook।
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contents"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Read eBook
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
            >
              Why this book
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "12+", v: "Chapters" },
              { k: "150+", v: "Prompts" },
              { k: "4.9★", v: "Early reviews" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-3xl text-foreground">{s.k}</dt>
                <dd className="text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: book */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 translate-y-10 scale-95 rounded-3xl bg-primary/30 blur-3xl" />
            <img
              src={cover}
              alt="Prompt Engineering in Bangla ebook cover"
              width={520}
              height={650}
              className="w-[280px] rotate-[-4deg] rounded-xl shadow-elevated transition-transform duration-500 hover:rotate-0 md:w-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
