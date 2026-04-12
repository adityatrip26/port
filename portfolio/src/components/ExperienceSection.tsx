"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { education } from "@/lib/data";

const experience = [
  {
    title: "Data Analyst — Freelance & Projects",
    organization: "Independent",
    location: "Remote",
    period: "2024 – Present",
    type: "work",
    description:
      "Designed and delivered analytical dashboards for financial and retail datasets, building Power BI reports, SQL pipelines, and Python-based analytics tools.",
    highlights: [
      "Built 8+ end-to-end analytics projects across finance, retail, and sports domains",
      "Processed 60,000+ data points using SQL, Power Query, and Pandas",
      "Developed real-time NLP pipeline for financial news sentiment classification",
      "Backtested 8+ investment strategies using regime-based quant models",
    ],
  },
];

const timelineItems = [
  ...experience.map((e) => ({ ...e, itemType: "work" as const })),
  ...education.map((e) => ({
    title: e.degree,
    organization: e.institution,
    location: e.location,
    period: e.year,
    type: "education" as const,
    itemType: "education" as const,
    description:
      "Completed B.Tech in Electronics and Communication Engineering, building a strong foundation in systems thinking, analytical problem solving, circuit design, and embedded systems.",
    highlights: [
      "Focused on embedded systems, communication networks, and signal processing",
      "Applied data-driven methods to engineering projects",
      "CCNA Security certified during final year",
    ],
  })),
];

function TimelineItem({
  item,
  index,
  isLeft,
}: {
  item: (typeof timelineItems)[0];
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const Icon = item.itemType === "work" ? Briefcase : GraduationCap;
  const color =
    item.itemType === "work"
      ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)] border-[hsl(var(--primary)/0.4)]"
      : "text-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.1)] border-[hsl(var(--accent)/0.4)]";

  return (
    <div
      ref={ref}
      className={`relative flex md:items-center gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        className="md:w-[calc(50%-2rem)] glass rounded-2xl p-6 card-hover gradient-border"
      >
        {/* Badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium mb-3 ${color}`}
        >
          <Icon className="w-3 h-3" />
          {item.itemType === "work" ? "Experience" : "Education"}
        </span>

        <h3 className="font-bold text-lg text-[hsl(var(--foreground))] mb-1">
          {item.title}
        </h3>
        <p className="text-[hsl(var(--primary))] font-medium text-sm mb-3">
          {item.organization}
        </p>

        <div className="flex items-center gap-4 text-xs text-[hsl(var(--muted-foreground))] mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </span>
        </div>

        <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <ul className="space-y-1.5">
          {item.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-[hsl(var(--muted-foreground))]"
            >
              <span
                className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                  item.itemType === "work"
                    ? "bg-[hsl(var(--primary))]"
                    : "bg-[hsl(var(--accent))]"
                }`}
              />
              {h}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
        className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 items-center justify-center z-10
          ${
            item.itemType === "work"
              ? "bg-[hsl(var(--background))] border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
              : "bg-[hsl(var(--background))] border-[hsl(var(--accent))] text-[hsl(var(--accent))]"
          }
        `}
      >
        <Icon className="w-4 h-4" />
      </motion.div>

      {/* Spacer for other side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            My professional journey and academic foundation in data analytics and engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block timeline-line" />

          <div className="flex flex-col gap-12">
            {timelineItems.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
