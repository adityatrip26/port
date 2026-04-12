"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Mail,
  Phone,
  TrendingUp,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";
import { personalInfo } from "@/lib/data";

const TAGLINES = personalInfo.taglines;

function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TAGLINES[taglineIdx];

    if (!deleting && charIdx < current.length) {
      timeout.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((i) => i + 1);
      }, 60);
    } else if (!deleting && charIdx === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((i) => i - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTaglineIdx((i) => (i + 1) % TAGLINES.length);
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [charIdx, deleting, taglineIdx]);

  return (
    <span className="gradient-text text-2xl md:text-3xl font-semibold">
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--background))]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--primary)/0.08)] rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(var(--accent)/0.06)] rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[hsl(var(--primary)/0.3)] text-[hsl(var(--primary))] text-sm font-medium mb-8"
        >
          <TrendingUp className="w-4 h-4" />
          Open to Financial Analyst Roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[hsl(var(--foreground))] mb-4"
        >
          Aditya{" "}
          <span className="gradient-text">Tripathi</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-12 flex items-center justify-center mb-6"
        >
          <TypewriterText />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-[hsl(var(--muted-foreground))] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            id="cta-view-work"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:opacity-90 transition-all glow-primary hover:scale-105 active:scale-95"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            id="cta-contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl glass border border-[hsl(var(--border))] font-semibold hover:border-[hsl(var(--primary)/0.5)] hover:text-[hsl(var(--primary))] transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            { icon: Phone, href: `tel:${personalInfo.phone}`, label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary)/0.5)] border border-[hsl(var(--border))] transition-all hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[hsl(var(--muted-foreground))] text-xs"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
