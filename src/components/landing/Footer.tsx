import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[90rem] px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-serif text-xl">Prompt<span className="text-gradient">.bn</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              বাংলায় AI শেখার সবচেয়ে practical গাইড। লেখা হয়েছে যত্নে, পড়ার জন্য আনন্দে।
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground">Home</a></li>
              <li><a href="#contents" className="hover:text-foreground">Table of Contents</a></li>
              <li><a href="#dashboard" className="hover:text-foreground">Dashboard</a></li>
              <li><a href="#author" className="hover:text-foreground">Author</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>rahmansaif.413@gmail.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Prompt.bn — All rights reserved.</p>
          <p>Crafted with care in Bangla.</p>
        </div>
      </div>
    </footer>
  );
}
