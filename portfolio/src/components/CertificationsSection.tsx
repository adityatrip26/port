"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileSpreadsheet, ShieldCheck, Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  ShieldCheck,
  Award,
};

const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  emerald: {
    bg: "from-[hsl(var(--emerald)/0.15)] to-[hsl(var(--emerald)/0.03)]",
    text: "text-[hsl(var(--emerald))]",
    border: "border-[hsl(var(--emerald)/0.3)]",
    glow: "shadow-[0_0_20px_hsl(var(--emerald)/0.15)]",
  },
  primary: {
    bg: "from-[hsl(var(--primary)/0.15)] to-[hsl(var(--primary)/0.03)]",
    text: "text-[hsl(var(--primary))]",
    border: "border-[hsl(var(--primary)/0.3)]",
    glow: "shadow-[0_0_20px_hsl(var(--primary)/0.15)]",
  },
  accent: {
    bg: "from-[hsl(var(--accent)/0.15)] to-[hsl(var(--accent)/0.03)]",
    text: "text-[hsl(var(--accent))]",
    border: "border-[hsl(var(--accent)/0.3)]",
    glow: "shadow-[0_0_20px_hsl(var(--accent)/0.15)]",
  },
};

export default function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certifications &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            Industry-recognized credentials validating analytical and technical expertise.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            const c = colorMap[cert.color] || colorMap.primary;

            return (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={cn(
                  "relative glass rounded-2xl p-6 card-hover overflow-hidden border",
                  c.border,
                  "hover:" + c.glow
                )}
              >
                {/* Background gradient */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-50",
                    c.bg
                  )}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon + Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br border",
                        c.bg,
                        c.border
                      )}
                    >
                      <Icon className={cn("w-6 h-6", c.text)} />
                    </div>
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold border",
                        c.bg,
                        c.border,
                        c.text
                      )}
                    >
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[hsl(var(--foreground))] mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className={cn("font-semibold text-sm mb-2", c.text)}>
                    {cert.issuer}
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Credential ID */}
                  <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
                    <Award className="w-3.5 h-3.5" />
                    <span>Credential ID: </span>
                    <span className="font-mono font-medium text-[hsl(var(--foreground))]">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
