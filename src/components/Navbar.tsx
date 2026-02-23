import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Factory, Brain, Microscope, Cpu, Eye, Move, Car, Smartphone, HeartPulse, Ship } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Solutions",
    href: "#services",
    subLinks: [
      { label: "Industrial Automation", href: "#automation", icon: Factory },
      { label: "AI Robotics", href: "#ai", icon: Brain },
      { label: "Custom Solutions", href: "#custom", icon: Microscope },
    ],
  },
  {
    label: "Products",
    href: "#products",
    subLinks: [
      { label: "FX-Arm Pro", href: "#arm", icon: Cpu },
      { label: "FX-Vision AI", href: "#vision", icon: Eye },
      { label: "FX-Mobile X1", href: "#mobile", icon: Move },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    subLinks: [
      { label: "Automotive", href: "#auto", icon: Car },
      { label: "Electronics", href: "#electronics", icon: Smartphone },
      { label: "Healthcare", href: "#healthcare", icon: HeartPulse },
      { label: "Logistics", href: "#logistics", icon: Ship },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:neon-border transition-all">
            <div className="w-4 h-4 rounded-sm bg-primary animate-pulse"></div>
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            FutureX
          </span>
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 font-heading text-[13px] font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {link.label}
                  {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </a>

                {link.subLinks && (
                  <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="glass-card p-4 border border-primary/20 bg-background/95 shadow-2xl">
                      <div className="grid gap-2">
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all group/item"
                          >
                            <div className="w-8 h-8 rounded bg-primary/5 flex items-center justify-center border border-primary/10 group-hover/item:border-primary/30 transition-colors">
                              <sub.icon size={16} className="text-primary/70 group-hover/item:text-primary transition-colors" />
                            </div>
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:block">
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-heading text-xs font-bold tracking-widest hover:neon-glow hover:scale-105 transition-all">
              GET IN TOUCH
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden glass border-t border-border max-h-[80vh] overflow-y-auto pb-6">
          <div className="grid gap-4 px-4 py-8">
            {navLinks.map((link) => (
              <div key={link.label} className="grid gap-2">
                <div className="flex items-center justify-between">
                  <a
                    href={link.href}
                    className="text-lg font-heading font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.subLinks && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      <ChevronDown
                        size={20}
                        className={cn(
                          "text-muted-foreground transition-transform duration-300",
                          activeDropdown === link.label && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                  )}
                </div>

                {link.subLinks && activeDropdown === link.label && (
                  <div className="grid gap-1 pl-4 border-l border-primary/20 animate-fade-down">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center gap-3 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <sub.icon size={18} className="text-primary/70" />
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="mt-4 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold tracking-wider text-center"
              onClick={() => setOpen(false)}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
