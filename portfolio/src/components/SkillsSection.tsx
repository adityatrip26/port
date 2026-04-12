"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  BarChart3,
  Database,
  Wrench,
} from "lucide-react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  BarChart3,
  Database,
  Wrench,
};

const colorMap: Record<string, string> = {
  primary: "from-[hsl(var(--primary)/0.15)] to-[hsl(var(--primary)/0.05)] border-[hsl(var(--primary)/0.3)] text-[hsl(var(--primary))]",
  accent: "from-[hsl(var(--accent)/0.15)] to-[hsl(var(--accent)/0.05)] border-[hsl(var(--accent)/0.3)] text-[hsl(var(--accent))]",
  cyan: "from-[hsl(var(--cyan)/0.15)] to-[hsl(var(--cyan)/0.05)] border-[hsl(var(--cyan)/0.3)] text-[hsl(var(--cyan))]",
  emerald: "from-[hsl(var(--emerald)/0.15)] to-[hsl(var(--emerald)/0.05)] border-[hsl(var(--emerald)/0.3)] text-[hsl(var(--emerald))]",
};

const badgeColorMap: Record<string, string> = {
  primary: "hover:bg-[hsl(var(--primary)/0.1)] hover:border-[hsl(var(--primary)/0.4)] hover:text-[hsl(var(--primary))]",
  accent: "hover:bg-[hsl(var(--accent)/0.1)] hover:border-[hsl(var(--accent)/0.4)] hover:text-[hsl(var(--accent))]",
  cyan: "hover:bg-[hsl(var(--cyan)/0.1)] hover:border-[hsl(var(--cyan)/0.4)] hover:text-[hsl(var(--cyan))]",
  emerald: "hover:bg-[hsl(var(--emerald)/0.1)] hover:border-[hsl(var(--emerald)/0.4)] hover:text-[hsl(var(--emerald))]",
};

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[skill.icon] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass rounded-2xl p-6 card-hover gradient-border"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br border",
            colorMap[skill.color]
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-[hsl(var(--foreground))]">
          {skill.category}
        </h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
            className={cn(
              "skill-badge px-3 py-1.5 rounded-lg text-xs font-medium text-[hsl(var(--muted-foreground))] cursor-default",
              badgeColorMap[skill.color]
            )}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Technical Proficiencies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            Tools and technologies I use to transform raw data into actionable business intelligence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
