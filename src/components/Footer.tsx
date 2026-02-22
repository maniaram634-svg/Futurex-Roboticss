import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="font-display text-lg font-bold text-primary neon-text mb-1">FutureX Robotics</p>
        <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} FutureX Robotics. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-6">
        {[
          { href: "#about", label: "About" },
          { href: "#services", label: "Services" },
          { href: "#products", label: "Products" },
          { href: "#contact", label: "Contact" },
        ].map((l) => (
          <a key={l.href} href={l.href} className="text-muted-foreground text-xs hover:text-primary transition-colors">{l.label}</a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {[Twitter, Linkedin, Github].map((Icon, i) => (
          <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
