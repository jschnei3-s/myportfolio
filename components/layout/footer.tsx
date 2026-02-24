import Link from "next/link";
import { Linkedin, Github, Mail, FileText, Camera, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}

function FooterLink({ href, icon, label, external = false }: FooterLinkProps) {
  const LinkComponent = external ? "a" : Link;
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <LinkComponent
      {...linkProps}
      className={cn(
        "flex items-center gap-2 text-muted-foreground hover:text-foreground",
        "transition-colors duration-200"
      )}
      aria-label={label}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </LinkComponent>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jonathan Schneider
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <FooterLink
              href="https://www.linkedin.com/in/jonathanischneider/"
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              external
            />
            <FooterLink
              href="https://github.com/jschnei3-s"
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              external
            />
            <FooterLink
              href="mailto:yoniyschneider@gmail.com"
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              external
            />
            <FooterLink
              href="/thinking"
              icon={<BookOpen className="h-4 w-4" />}
              label="Thinking"
            />
            <FooterLink
              href="https://jsphotography629.squarespace.com/"
              icon={<Camera className="h-4 w-4" />}
              label="Photography"
              external
            />
            <FooterLink
              href="/resume.pdf"
              icon={<FileText className="h-4 w-4" />}
              label="Resume"
              external
            />
          </nav>
        </div>
      </div>
    </footer>
  );
}

