import { Factory, Brain, Microscope, Zap, CheckCircle2 } from "lucide-react";
import automationImg from "@/assets/industrial_automation_visual_1771780439775.png";
import aiImg from "@/assets/ai_robotics_visual_1771780478274.png";
import customImg from "@/assets/custom_solutions_visual_1771780523539.png";

const solutions = [
  {
    id: "automation",
    icon: Factory,
    img: automationImg,
    title: "Industrial Automation",
    headline: "ENGINEERED FOR UNSTOPPABLE VELOCITY.",
    p1: "FutureX Industrial Automation represents the convergence of aerospace precision and industrial scale. We don’t just automate tasks; we architect high-performance ecosystems designed to operate at the peak of mechanical efficiency. Our systems transition your floor into a high-velocity environment where every cycle is a masterclass in sub-micron accuracy.",
    p2: "By integrating adaptive force-sensing technology with 7-axis redundant kinematics, our automation arrays eliminate the bottlenecks of traditional manufacturing. We provide the hardware foundation for the next industrial era, ensuring your operations remain resilient, scalable, and consistently ahead of the global production curve.",
    bullets: [
      "Kinetic Synchronicity: Perfectly timed multi-agent orchestration for complex workflows.",
      "Aerospace-Grade Durability: Mission-critical hardware designed for 24/7 high-impact output.",
      "Sub-Micron Repeatability: Precision testing at ±0.005mm to ensure zero-defect production."
    ]
  },
  {
    id: "ai",
    icon: Brain,
    img: aiImg,
    title: "AI-Powered Robotics",
    headline: "COGNITIVE ACTION. SOVEREIGN INTELLIGENCE.",
    p1: "Welcome to the era of autonomous decision-making. FutureX AI-Powered Robotics bridges the gap between raw compute and physical execution through our proprietary Aura Neural OS. We enable machines to perceive, learn, and adapt to dynamic surroundings in real-time, transforming static scripts into intelligent, self-optimizing outcomes.",
    p2: "Our sovereign AI architecture ensures that intelligence is generated and stored locally at the edge, providing absolute data security without sacrificing performance. Whether it’s swarm intelligence for mobile fleets or predictive spatial awareness for collaborative zones, our neural engines empower your machines to 'think' as fast as they move.",
    bullets: [
      "Aura Neural Sync: Continuous edge-learning that re-optimizes robotic cycles instantly.",
      "Predictive Spatial Logic: Superhuman awareness that anticipates environmental shifts before they occur.",
      "Swarm Orchestration: Decentralized fleet intelligence for complex, unmanaged logistics."
    ]
  },
  {
    id: "custom",
    icon: Microscope,
    img: customImg,
    title: "Custom Robotics Solutions",
    headline: "ARCHITECTING THE IMPOSSIBLE.",
    p1: "When the standard does not exist, we build it. FutureX Custom Robotics Solutions partners with your enterprise to prototype and deploy specialized hardware designed for unique, high-stakes requirements. From orbital fabrication modules to sterilized med-tech manipulators, our R&D team brings aerospace-grade engineering to your most specific challenges.",
    p2: "We provide an end-to-end innovation pipeline—starting with high-fidelity digital twin simulations and moving through rapid prototyping to full-scale deployment. With FutureX, custom robotics isn't just a service; it’s a strategic competitive moat, providing you with proprietary technology that defines your leadership in the field.",
    bullets: [
      "Bespoke Hardware Prototyping: Custom kinematic designs for specialized missions.",
      "Digital Twin Validation: High-fidelity simulation to de-risk complex deployments.",
      "Sovereign Neural Adaptation: Custom AI models tuned for your unique operational logic."
    ]
  }
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-secondary/10">
    <div className="container mx-auto">
      <div className="text-center mb-24">
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Solutions</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          ARCHITECTING THE <br />
          <span className="gradient-text">AUTONOMOUS ENTERPRISE.</span>
        </h2>
      </div>

      <div className="space-y-32">
        {solutions.map((s, idx) => (
          <div key={s.id} id={s.id} className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <s.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-display text-sm font-bold tracking-widest text-primary uppercase">{s.title}</h3>
              </div>
              <h4 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                {s.headline}
              </h4>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
                <p>{s.p1}</p>
                <p>{s.p2}</p>
              </div>
              <ul className="grid gap-4">
                {s.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-4 items-start group">
                    <div className="mt-1.5 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-foreground/80 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full h-full aspect-square lg:aspect-video relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
              <div className="relative glass-card h-full w-full overflow-hidden border-primary/20">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 right-8">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-widest text-primary/80 uppercase">Node Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
