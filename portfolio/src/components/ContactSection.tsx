"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/lib/icons";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "primary",
  },
  {
    id: "contact-linkedin",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "aditya-tripathi-277850175",
    href: personalInfo.linkedin,
    color: "accent",
  },
  {
    id: "contact-github",
    icon: GithubIcon,
    label: "GitHub",
    value: "Adityatrip26",
    href: personalInfo.github,
    color: "cyan",
  },
  {
    id: "contact-phone",
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "emerald",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: "hover:bg-[hsl(var(--primary)/0.08)]",
    text: "text-[hsl(var(--primary))]",
    border: "hover:border-[hsl(var(--primary)/0.4)]",
  },
  accent: {
    bg: "hover:bg-[hsl(var(--accent)/0.08)]",
    text: "text-[hsl(var(--accent))]",
    border: "hover:border-[hsl(var(--accent)/0.4)]",
  },
  cyan: {
    bg: "hover:bg-[hsl(var(--cyan)/0.08)]",
    text: "text-[hsl(var(--cyan))]",
    border: "hover:border-[hsl(var(--cyan)/0.4)]",
  },
  emerald: {
    bg: "hover:bg-[hsl(var(--emerald)/0.08)]",
    text: "text-[hsl(var(--emerald))]",
    border: "hover:border-[hsl(var(--emerald)/0.4)]",
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="section-padding">
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
            I&apos;m actively looking for Financial Analyst and Data Analyst roles. Open to full-time positions, freelance projects, and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-[hsl(var(--primary)/0.2)] relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(var(--primary)/0.06)] rounded-full blur-3xl" />

            <MessageSquare className="w-10 h-10 text-[hsl(var(--primary))] mb-4" />
            <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-6">
              Whether you have a project, a job opportunity, or just want to talk data — my inbox is always open.
            </p>

            <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] mb-6">
              <MapPin className="w-4 h-4 text-[hsl(var(--primary))]" />
              <span>Bhopal, India · Open to Remote</span>
            </div>

            <a
              id="contact-email-cta"
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold hover:opacity-90 transition-all glow-primary hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              Send Me an Email
            </a>
          </motion.div>

          {/* Right: Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              const c = colorMap[link.color] || colorMap.primary;
              return (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
                  className={`glass rounded-xl p-4 flex items-center gap-4 border border-[hsl(var(--border))] transition-all ${c.bg} ${c.border} group`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.text} bg-[hsl(var(--muted))] group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[hsl(var(--muted-foreground))] mb-0.5">
                      {link.label}
                    </div>
                    <div className="text-sm font-medium text-[hsl(var(--foreground))] truncate">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
