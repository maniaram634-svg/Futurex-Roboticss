import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Robotics lab" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>
    <div className="relative z-10 container mx-auto text-center px-4 pt-20">
      <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in neon-text">
        ENGINEERED EVOLUTION.
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up text-foreground">
        THE FUTURE IS<br />
        <span className="gradient-text">AUTONOMOUS.</span>
      </h1>
      <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        Deploy aerospace-grade intelligent robotics. High-precision automation. Seamless machine synergy.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <a href="#services" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-heading font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all neon-glow text-center">
          DEPLOY SOLUTIONS
        </a>
        <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-heading font-semibold text-sm border border-primary/40 text-primary hover:bg-primary/10 transition-all text-center">
          INITIATE DEMO
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
