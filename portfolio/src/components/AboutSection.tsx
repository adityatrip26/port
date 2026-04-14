"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FolderKanban, Database, LayoutDashboard, Zap } from "lucide-react";
import { stats, personalInfo } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FolderKanban,
  Database,
  LayoutDashboard,
  Zap,
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Data-Driven{" "}
            <span className="gradient-text">Problem Solver</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
              My background in Electronics and Communication Engineering gives me a unique edge — I approach financial data problems with the precision of an engineer, building robust, scalable analytical systems rather than one-off reports.
            </p>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
              I&apos;m currently targeting <span className="text-[hsl(var(--primary))] font-semibold">Financial Analyst</span> roles where I can combine quantitative analysis, market intelligence, and data engineering to drive investment and business decisions.
            </p>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.icon] || FolderKanban;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="glass rounded-2xl p-5 text-center card-hover gradient-border"
                >
                  <Icon className="w-6 h-6 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))] leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
