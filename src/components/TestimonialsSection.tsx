import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CTO, AutoDrive", text: "Productivity surged 300%. Unmatched precision." },
  { name: "James Walker", role: "VP Engineering, NovaTech", text: "Core to our smart factory vision." },
  { name: "Dr. Amara Osei", role: "Director, MedRobotics", text: "Complete clarity in complex robotics." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          NETWORK ALIGNMENT.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card p-8 hover:neon-border transition-all duration-500">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
