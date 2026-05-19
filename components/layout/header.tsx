import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-base font-semibold tracking-tight transition-opacity hover:opacity-80 md:text-lg"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
            Jonathan Schneider
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/#projects"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/thinking"
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
            >
              Thinking
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-2">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
