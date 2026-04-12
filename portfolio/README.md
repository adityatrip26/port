# Aditya Tripathi — Portfolio

A premium personal portfolio website for **Aditya Tripathi**, Data Analyst targeting Financial Analyst roles.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Dark mode default with light mode toggle
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Navigate to project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       # Design system, animations, utility classes
│   │   ├── layout.tsx        # Root layout with metadata & fonts
│   │   └── page.tsx          # Main page assembly
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navbar with scroll detection
│   │   ├── HeroSection.tsx    # Typewriter effect hero
│   │   ├── AboutSection.tsx   # Bio and stats grid
│   │   ├── SkillsSection.tsx  # Animated skill categories
│   │   ├── ProjectsSection.tsx# Cards with metrics and highlights
│   │   ├── ExperienceSection.tsx # Timeline layout
│   │   ├── CertificationsSection.tsx # Badge-style cert cards
│   │   ├── ContactSection.tsx # Contact links and CTA
│   │   └── Footer.tsx         # Footer
│   └── lib/
│       ├── data.ts            # All portfolio content
│       └── utils.ts           # Utility functions
├── vercel.json
└── package.json
```

## 🎯 Features

- **Dark/Light Mode Toggle** — Persists via class toggle on `<html>`
- **Typewriter Effect** — Cycling through role titles in the hero
- **Scroll-Aware Navbar** — Glass effect on scroll, active section highlight
- **Framer Motion Animations** — Scroll-triggered entrance animations throughout
- **Expandable Project Cards** — Show/hide highlight bullets per project
- **Timeline Experience Section** — Alternating left-right layout
- **Fully Responsive** — Mobile-first design

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo in [Vercel Dashboard](https://vercel.com/new)
3. Deploy — zero config needed

Or via CLI:

```bash
npm install -g vercel
vercel
```

## 📝 Customization

All content lives in `src/lib/data.ts`. Edit:
- `personalInfo` — name, email, social links
- `skills` — tech categories and items
- `projects` — project cards with metrics
- `education` — academic background
- `certifications` — certs and credentials
- `stats` — hero stats

---

Built with ❤️ by Aditya Tripathi
