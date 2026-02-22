import product1 from "@/assets/fx_vision_ai_hero_1771780358464.png";
import product2 from "@/assets/fx_arm_pro_hero_1771780335149.png";
import product3 from "@/assets/fx_mobile_x1_hero_1771780383252.png";
import { Zap, Target, Cpu, ShieldCheck, Database, Battery, Wifi } from "lucide-react";

const products = [
  {
    id: "arm",
    img: product2,
    name: "FX-ARM PRO",
    tagline: "Engineering Precision Beyond Human Limits.",
    desc: "The FX-Arm Pro is our flagship 7-axis robotic manipulator, engineered for enterprises that demand absolute sub-micron reliability. Built with a high-integrity carbon-fiber chassis and aerospace-grade actuators, the Pro model features integrated 6-axis torque sensing in every joint for delicate, high-velocity interactions. It utilizes our proprietary Distributed Neural Control to make millisecond trajectory adjustments, eliminating the mechanical 'overshoot' common in legacy industrial arms.",
    specs: [
      { label: "DOF", value: "7-axis redundant kinematic architecture" },
      { label: "Repeatability", value: "Sub-micron precision (±0.005mm)" },
      { label: "Payload", value: "15kg continuous / 25kg peak rating" },
      { label: "Reach", value: "1200mm radius spherical operation" },
      { label: "Material", value: "Aerospace carbon-fiber / Titanium" }
    ],
    benefits: [
      "Sub-Zero Defect Rate: Eliminates manual assembly errors.",
      "40% Velocity Increase: Independent joint-control logic.",
      "Rapid Re-Tasking: Modular 30-second end-effector swap."
    ]
  },
  {
    id: "vision",
    img: product1,
    name: "FX-VISION AI",
    tagline: "Perception Reimagined for the Autonomous Age.",
    desc: "FX-Vision AI is not a camera; it is a cognitive spatial ecosystem. Designed for unmanaged industrial environments, it fuses multi-spectral LiDAR with high-fidelity HDR sensors and a 500 TOPS on-device neural engine. This allows your machines to perceive depth, material density, and movement with superhuman resolution. By processing raw spatial data directly at the edge, FX-Vision AI provides zero-latency decision logic.",
    specs: [
      { label: "Sensor Array", value: "128-channel LiDAR + 4K HDR Neural" },
      { label: "Compute", value: "500 TOPS On-board AI Edge Engine" },
      { label: "Latency", value: "Sub-5ms from detection to output" },
      { label: "Field", value: "360° Horizontal / 180° Vertical" },
      { label: "Rating", value: "IP68-rated extreme ruggedization" }
    ],
    benefits: [
      "Zero-Collision Downtime: Anticipates human motion.",
      "Hyper-Spectral QC: Flaw detection invisible to humans.",
      "Infrastructure-Free: Enables true SLAM navigation."
    ]
  },
  {
    id: "mobile",
    img: product3,
    name: "FX-MOBILE X1",
    tagline: "Liquid Logistics at Scale.",
    desc: "The FX-Mobile X1 is an autonomous logistics platform designed for high-density, mission-critical environments. Powered by FutureX's Swarm-Sync technology, the X1 operates as a self-aware node in a larger fleet, negotiating path priority and load distribution with zero centralized bottlenecks. Integrated with Aura Neural OS, the X1 learns the optimal routes and patterns of your facility in real-time.",
    specs: [
      { label: "Navigation", value: "Multi-modal SLAM (LiDAR + Visual + IMU)" },
      { label: "Payload", value: "1,500kg heavy-duty modular chassis" },
      { label: "Battery", value: "Bio-Pulse cells / 12hr continuous" },
      { label: "Charging", value: "Autonomous docking (10% to 90% in 18m)" },
      { label: "Connectivity", value: "Integrated 5G + Zero-latency Mesh Hub" }
    ],
    benefits: [
      "Autonomous Optimization: Fleet re-routing in ms.",
      "Unmatched Scalability: Up to 1,000 units per site.",
      "Sovereign Security: Local only navigation processing."
    ]
  },
];

const ProductsSection = () => (
  <section id="products" className="section-padding bg-background border-t border-border/50">
    <div className="container mx-auto">
      <div className="text-center mb-20">
        <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">Pro Series Products</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          KINETIC <span className="gradient-text">POWER.</span>
        </h2>
      </div>

      <div className="grid gap-20">
        {products.map((p) => (
          <div key={p.id} id={p.id} className="glass-card overflow-hidden group">
            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden h-80 lg:h-auto border-b lg:border-b-0 lg:border-r border-border/50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-background/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1 tracking-tight">{p.name}</h3>
                  <p className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">{p.tagline}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-12 mb-10">
                  <div>
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Technical Core</h4>
                    <div className="space-y-4">
                      {p.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col border-b border-border/50 pb-2">
                          <span className="text-[9px] uppercase text-muted-foreground font-medium">{spec.label}</span>
                          <span className="text-xs text-foreground font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Quantified Benefits</h4>
                    <div className="space-y-4">
                      {p.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex gap-3 items-start">
                          <Zap size={10} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed italic">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-xs uppercase tracking-widest hover:neon-glow hover:scale-105 transition-all">
                  Configure System
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
