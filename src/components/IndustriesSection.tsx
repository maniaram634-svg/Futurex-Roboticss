import { Car, Smartphone, HeartPulse, Ship, ShieldCheck, Activity, Zap } from "lucide-react";

const industries = [
    {
        id: "auto",
        icon: Car,
        name: "Automotive",
        overview: "The automotive sector demands 24/7 mission-critical output with zero tolerance for mechanical failure. FutureX provides the high-velocity foundation for the next generation of electric and autonomous vehicle production. We enable automotive leaders to transition from assembly lines to micro-factories.",
        solutions: [
            "FX-Arm Pro Series: High-payload welding manipulators.",
            "FX-Vision Intelligence: Sub-millimeter alignment.",
            "FX-Mobile X1 Fleet: Heavy battery autonomous transport."
        ],
        impacts: [
            "Sub-Zero Defect Production: Perfect seam-welds every time.",
            "Micro-Factory Agility: Reconfigure lines in hours.",
            "99.98% Operational Uptime: High-impact continuous output."
        ]
    },
    {
        id: "electronics",
        icon: Smartphone,
        name: "Electronics",
        overview: "In high-speed electronics, precision is the primary competitive moat. FutureX provides the delicate, high-velocity handling required for sub-millimeter component placement. We bridge the gap between human dexterity and machine speed for global consumer tech.",
        solutions: [
            "FX-Arm L-Series: Haptic force-feedback for micro-assembly.",
            "FX-Vision QC: Hyper-spectral micro-fissure detection.",
            "Custom Haptic Grippers: Non-conductive wafer handling."
        ],
        impacts: [
            "300% Throughput Surge: Increased SMT line velocity.",
            "Eliminated Static Discharge: Aerospace-grade materials.",
            "Adaptive Process Control: Real-time neural optimization."
        ]
    },
    {
        id: "healthcare",
        icon: HeartPulse,
        name: "Healthcare",
        overview: "Robotics in healthcare requires a level of sovereign trust and sub-millimeter precision. FutureX provides certified, sterilized solutions for surgical-grade manipulation and autonomous hospital logistics, enabling focus on patient outcomes.",
        solutions: [
            "FX-Arm Med-Spec: Sterilized surgical-assist manipulators.",
            "FX-AMR Sterile-Fleet: Secure medicine logistics.",
            "Aura Neural Hub: HIPAA-compliant local edge processing."
        ],
        impacts: [
            "Zero-Latency Surgical Support: Sub-millimeter accuracy.",
            "Fluid Institution Logistics: 24/7 autonomous supply delivery.",
            "Sovereign Patient Security: Data never leaves the facility."
        ]
    },
    {
        id: "logistics",
        icon: Ship,
        name: "Logistics",
        overview: "Modern logistics is a race against friction. FutureX 'liquifies' the physical warehouse, transforming static storage into high-velocity distribution hubs. We eliminate centralized bottlenecks, allowing up to 1,000 units to coordinate seamlessly.",
        solutions: [
            "FX-Mobile X1: High-capacity bin and pallet transport.",
            "FX-Vision Spatial Sync: Safe human-machine zones.",
            "Aura Swarm Orchestration: Decentralized fleet optimization."
        ],
        impacts: [
            "Infrastructure-Free Deployment: No floor markings needed.",
            "Real-Time Path Optimization: Millionth-of-a-second pathing.",
            "Autonomous Inventory Scaling: Handle seasonal peaks instantly."
        ]
    },
];

const IndustriesSection = () => (
    <section id="industries" className="section-padding bg-secondary/5 border-b border-border/50">
        <div className="container mx-auto">
            <div className="text-center mb-32">
                <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Sectors & Impact</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                    SECTOR-SPECIFIC <br />
                    <span className="gradient-text">AUTONOMOUS LEADERSHIP.</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {industries.map((ind) => (
                    <div key={ind.id} id={ind.id} className="group relative glass-card p-10 border-l-4 border-l-primary/30 hover:border-l-primary transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                            <ind.icon className="w-48 h-48 text-primary" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:neon-glow transition-all duration-500">
                                    <ind.icon className="text-primary w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wider">{ind.name}</h3>
                                    <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase opacity-60">Strategic Vertical</p>
                                </div>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
                                {ind.overview}
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 mb-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[1px] w-8 bg-primary/40"></div>
                                        <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Systems Deployed</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {ind.solutions.map((sol, i) => (
                                            <li key={i} className="flex gap-3 items-start group/li">
                                                <Activity size={14} className="text-primary/40 mt-0.5 group-hover/li:text-primary transition-colors" />
                                                <span className="text-[13px] text-foreground/80 font-medium leading-relaxed">{sol}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-[1px] w-8 bg-primary/40"></div>
                                        <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Quantified Impact</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {ind.impacts.map((imp, i) => (
                                            <li key={i} className="flex gap-3 items-start group/li">
                                                <ShieldCheck size={14} className="text-primary/40 mt-0.5 group-hover/li:text-primary transition-colors" />
                                                <span className="text-[13px] text-muted-foreground font-medium leading-relaxed">{imp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border/50 flex items-center justify-between">
                                <button className="group/btn flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] hover:gap-4 transition-all duration-300">
                                    Explore Sector Framework <Zap size={14} className="fill-primary" />
                                </button>
                                <span className="text-[10px] font-mono text-muted-foreground/30">Vertical.ID_{ind.id.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default IndustriesSection;
