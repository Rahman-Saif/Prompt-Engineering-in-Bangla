import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Sparkles, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

const links = [
  { label: "Table of Contents", to: "/contents" as const },
  { label: "Dashboard", to: "/dashboard" as const },
  { label: "Author", to: "/author" as const },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-[90rem] px-4">
        <nav className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-serif text-2xl tracking-tight">AI</span>
          </Link>

          <ul className="hidden md:flex items-center gap-7 text-lg">
            {links.map((l) => {
              const active = pathname === l.to || pathname.startsWith(l.to + "/");
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={
                      active
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground transition-colors"
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <button
                onClick={signOut}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-lg hover:bg-accent transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" /> Sign out
              </button>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2 text-lg font-medium text-primary-foreground shadow-glow"
              >
                Sign in
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              className="rounded-md p-2 text-foreground"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-lg text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                {user ? (
                  <button
                    onClick={() => { setOpen(false); signOut(); }}
                    className="w-full rounded-md border border-border px-3 py-2 text-lg"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setOpen(false)}
                    className="block rounded-md bg-gradient-primary px-3 py-2 text-center text-lg font-medium text-primary-foreground"
                  >
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
