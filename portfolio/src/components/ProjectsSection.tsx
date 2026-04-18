"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const GithubIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { badge: string; metric: string; tag: string; border: string }> = {
  primary: {
    badge: "bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)]",
    metric: "text-[hsl(var(--primary))]",
    tag: "bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary)/0.8)]",
    border: "border-[hsl(var(--primary)/0.4)]",
  },
  accent: {
    badge: "bg-[hsl(var(--accent)/0.1)] text-[hsl(var(--accent))] border-[hsl(var(--accent)/0.3)]",
    metric: "text-[hsl(var(--accent))]",
    tag: "bg-[hsl(var(--accent)/0.08)] text-[hsl(var(--accent)/0.8)]",
    border: "border-[hsl(var(--accent)/0.4)]",
  },
  cyan: {
    badge: "bg-[hsl(var(--cyan)/0.1)] text-[hsl(var(--cyan))] border-[hsl(var(--cyan)/0.3)]",
    metric: "text-[hsl(var(--cyan))]",
    tag: "bg-[hsl(var(--cyan)/0.08)] text-[hsl(var(--cyan)/0.8)]",
    border: "border-[hsl(var(--cyan)/0.4)]",
  },
  emerald: {
    badge: "bg-[hsl(var(--emerald)/0.1)] text-[hsl(var(--emerald))] border-[hsl(var(--emerald)/0.3)]",
    metric: "text-[hsl(var(--emerald))]",
    tag: "bg-[hsl(var(--emerald)/0.08)] text-[hsl(var(--emerald)/0.8)]",
    border: "border-[hsl(var(--emerald)/0.4)]",
  },
  amber: {
    badge: "bg-[hsl(var(--amber)/0.1)] text-[hsl(var(--amber))] border-[hsl(var(--amber)/0.3)]",
    metric: "text-[hsl(var(--amber))]",
    tag: "bg-[hsl(var(--amber)/0.08)] text-[hsl(var(--amber)/0.8)]",
    border: "border-[hsl(var(--amber)/0.4)]",
  },
  rose: {
    badge: "bg-[hsl(var(--rose)/0.1)] text-[hsl(var(--rose))] border-[hsl(var(--rose)/0.3)]",
    metric: "text-[hsl(var(--rose))]",
    tag: "bg-[hsl(var(--rose)/0.08)] text-[hsl(var(--rose)/0.8)]",
    border: "border-[hsl(var(--rose)/0.4)]",
  },
};

type TabType = "highlights" | "caseStudy";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("highlights");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const c = colorMap[project.color] || colorMap.primary;

  const hasCaseStudy = !!(project as any).caseStudy;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={cn(
        "glass rounded-2xl p-6 card-hover gradient-border flex flex-col gap-4",
        project.featured && "ring-1 ring-[hsl(var(--primary)/0.2)]"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={cn("px-2.5 py-0.5 rounded-full border text-xs font-medium", c.badge)}>
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 rounded-full bg-[hsl(var(--amber)/0.1)] border border-[hsl(var(--amber)/0.3)] text-[hsl(var(--amber))] text-xs font-medium">
                ⭐ Featured
              </span>
            )}
            <span className="text-xs text-[hsl(var(--muted-foreground))]">{project.year}</span>
          </div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg text-[hsl(var(--foreground))] leading-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {(project as any).github && (
                <a
                  href={(project as any).github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-all"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {(project as any).link && (
                <a
                  href={(project as any).link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-all"
                  title="View Live Project"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 py-3 border-y border-[hsl(var(--border)/0.5)]">
        {project.metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className={cn("text-xl font-bold", c.metric)}>{m.value}</div>
            <div className="text-[10px] text-[hsl(var(--muted-foreground))] mt-0.5 leading-tight">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className={cn("px-2.5 py-1 rounded-lg text-xs font-medium", c.tag)}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
      >
        {expanded ? (
          <>
            <ChevronUp className="w-3.5 h-3.5" /> Hide details
          </>
        ) : (
          <>
            <ChevronDown className="w-3.5 h-3.5" /> Show details
          </>
        )}
      </button>

      {/* Expanded Panel */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {/* Tab switcher — only show if caseStudy exists */}
            {hasCaseStudy && (
              <div className="flex gap-1 mb-4 p-1 rounded-lg bg-[hsl(var(--muted)/0.2)] border border-[hsl(var(--border)/0.5)]">
                <button
                  onClick={() => setActiveTab("highlights")}
                  className={cn(
                    "flex-1 text-xs py-1.5 rounded-md font-medium transition-all",
                    activeTab === "highlights"
                      ? cn("bg-[hsl(var(--muted)/0.6)] text-[hsl(var(--foreground))]")
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  )}
                >
                  Highlights
                </button>
                <button
                  onClick={() => setActiveTab("caseStudy")}
                  className={cn(
                    "flex-1 text-xs py-1.5 rounded-md font-medium transition-all",
                    activeTab === "caseStudy"
                      ? cn("bg-[hsl(var(--muted)/0.6)] text-[hsl(var(--foreground))]")
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  )}
                >
                  Case Study
                </button>
              </div>
            )}

            {/* Highlights Tab */}
            {(!hasCaseStudy || activeTab === "highlights") && (
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-[hsl(var(--muted-foreground))]"
                  >
                    <span
                      className={cn(
                        "mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0",
                        c.metric.replace("text-", "bg-")
                      )}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Case Study Tab */}
            {hasCaseStudy && activeTab === "caseStudy" && (
              <div className="space-y-3">
                {[
                  { label: "Problem", key: "problem" },
                  { label: "Approach", key: "approach" },
                  { label: "Tech", key: "tech" },
                  { label: "Result", key: "result" },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-widest block mb-1",
                        c.metric
                      )}
                    >
                      {label}
                    </span>
                    <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {(project as any).caseStudy[key]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="section-padding">
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            A collection of data analytics and financial intelligence projects, from market regime analysis to real-time sentiment tracking.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Show more */}
        {!showAll && projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-xl glass border border-[hsl(var(--border))] font-medium hover:border-[hsl(var(--primary)/0.5)] hover:text-[hsl(var(--primary))] transition-all"
            >
              Show All Projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}