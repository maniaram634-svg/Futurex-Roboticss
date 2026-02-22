import { Bot, Target, Lightbulb } from "lucide-react";

const pillars = [
  { icon: Bot, title: "MISSION", desc: "Accelerating industrial autonomy." },
  { icon: Target, title: "VISION", desc: "Human potential, amplified by AI." },
  { icon: Lightbulb, title: "STRATEGY", desc: "Aerospace hardware meets 'Synapse' neural nets." },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          COGNITIVE PRECISION.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We bridge the chasm between neural AI and physical reality. FutureX delivers a paradigm shift in industrial autonomy. From smart factories to orbital labs, we build machines that understand outcomes.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div key={p.title} className="glass-card p-8 text-center group hover:neon-border transition-all duration-500">
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
