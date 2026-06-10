import { Github, Linkedin, Twitter } from "lucide-react";
import dev from "@/assets/developer.jpg";

export function DeveloperIntro() {
  return (
    <section id="author" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 rounded-3xl border border-border/60 bg-surface/50 p-8 backdrop-blur md:grid-cols-[auto_1fr] md:p-12">
          <div className="relative mx-auto">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary blur-2xl opacity-60" />
            <img
              src="src\assets\saif.jpg"
              alt="Author portrait"
              loading="lazy"
              width={280}
              height={280}
              className="h-56 w-56 rounded-full object-cover ring-4 ring-primary/30 md:h-64 md:w-64"
            />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Meet the author</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Md Saif Rahman
            </h2>
            <p className="mt-2 font-serif italic text-xl text-muted-foreground">
              AI Engineer · Educator · Software Engineer
            </p>

            <p className="mt-5 max-w-xl text-muted-foreground">
              গত কয়েক বছর ধরে AI ও LLM নিয়ে কাজ করছি । বাংলা ভাষায় কোয়ালিটি tech content-এর অভাব দেখে এই বই লেখা।
              লক্ষ্য একটাই — বাংলাদেশের প্রতিটি ছাত্র, ফ্রিল্যান্সার ও professional
              যেন AI কে নিজের ভাষায় আয়ত্ত করতে পারেন।
            </p>

            <div className="mt-7 flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/saif-rahman7/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
