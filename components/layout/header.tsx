import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-base font-medium tracking-tight transition-opacity hover:opacity-70 md:text-lg"
          >
            Jonathan Schneider
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/thinking"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Thinking
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

