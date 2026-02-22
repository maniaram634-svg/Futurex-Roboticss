import { Zap, ShieldCheck, Atom, Target } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "RELIABILITY", desc: "Exceeding industrial durability standards." },
  { icon: Atom, title: "SOVEREIGNTY", desc: "Proprietary edge-learning. Absolute data security." },
  { icon: Target, title: "PRECISION", desc: "Sub-micron accuracy at scale." },
  { icon: Zap, title: "LATENCY", desc: "Zero-lag communication. Instant response." },
];

const WhyUsSection = () => (
  <section id="why-us" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Choose Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          THE FUTUREX DATA.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="glass-card p-8 text-center group hover:neon-border hover:-translate-y-1 transition-all duration-500">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
              <f.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
