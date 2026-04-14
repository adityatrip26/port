export const personalInfo = {
  name: "Aditya Tripathi",
  role: "Data Analyst",
  targetRole: "Financial Analyst",
  email: "adityaat7tripathi2002@gmail.com",
  phone: "+91 8853833647",
  linkedin: "https://www.linkedin.com/in/aditya-tripathi-277850175",
  github: "https://github.com/Adityatrip26",
  summary:
    "Data Analyst with hands-on experience building analytical dashboards and processing financial and retail datasets to deliver actionable insights. Skilled in Excel, Power BI, SQL, and real-time data pipelines with a focus on financial analytics and KPI-driven decision making.",
  taglines: [
    "Financial Data Analyst",
    "Power BI Dashboard Builder",
    "SQL & Analytics Engineer",
    "Business Intelligence Specialist",
    "Market Regime Analyst",
  ],
};

export const skills = [
  {
    category: "Programming & Scripting",
    icon: "Code2",
    color: "primary",
    items: ["Python", "SQL", "DAX", "Embedded C/C++"],
  },
  {
    category: "Data & Analytics",
    icon: "BarChart3",
    color: "accent",
    items: [
      "Power BI",
      "Power Query",
      "Excel (Advanced)",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "cyan",
    items: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    color: "emerald",
    items: [
      "Jupyter Notebook",
      "VS Code",
      "Git",
      "Streamlit",
      "Arduino IDE",
      "Microsoft Office Suite",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Market Regime Analysis Dashboard",
    year: "2026",
    category: "Financial Analytics",
    status: "completed",
    description:
      "Analyzed 25+ years of historical stock market data to classify market regimes by volatility and trend patterns, enabling regime-based investment strategy development.",
    tools: ["Excel", "Power Query", "Pivot Tables"],
    metrics: [
      { label: "Years of Data", value: "25+" },
      { label: "Data Points Processed", value: "10K+" },
      { label: "Regimes Classified", value: "3" },
    ],
    highlights: [
      "Processed 10,000+ data points using Power Query and feature engineering",
      "Identified bull, bear, and high-volatility market phases with statistical precision",
      "Built interactive dashboards with pivot tables and slicers for regime filtering",
      "Applied statistical validation to improve data reliability by 40%",
    ],
    color: "primary",
    featured: true,
    link: "https://github.com/Adityatrip26",
    github: "https://github.com/Adityatrip26",
  },
  {
    id: 2,
    title: "Business Insights Dashboard",
    year: "2026",
    category: "Retail Analytics",
    status: "completed",
    description:
      "End-to-end retail analytics solution analyzing 50,000+ transactions to surface profitability drivers, regional performance gaps, and product-level revenue insights.",
    tools: ["Power BI", "DAX", "SQL", "MySQL"],
    metrics: [
      { label: "Transactions Analyzed", value: "50K+" },
      { label: "DAX Measures Built", value: "10+" },
      { label: "Query Time Reduction", value: "~30%" },
    ],
    highlights: [
      "Built 10+ DAX measures including Gross Margin, Net Sales, and Revenue Contribution",
      "Discovered top 20% products account for ~65% of total profit (Pareto insight)",
      "Drill-down dashboards across regions, categories, and time periods",
      "Optimized SQL queries with CTEs and window functions, reducing load time by ~30%",
    ],
    color: "accent",
    featured: true,
    link: "https://app.powerbi.com/view?r=eyJrgit remote add origin https://github.com/adityatrip26/port.gitIjoiNDQ0MDU2Y2QtOWUyOC00OTVhLWJiMzMtZWZhOGY2MjM4YzdkIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    github: "https://github.com/Adityatrip26",
  },
  {
    id: 3,
    title: "FinPulse — Financial News Sentiment Tracker",
    year: "2025",
    category: "NLP & Financial Intelligence",
    status: "completed",
    description:
      "Real-time financial news sentiment analysis pipeline that tracks 500+ news sources and correlates sentiment scores with market movements to surface trading signals.",
    tools: ["Python", "NLTK", "TextBlob", "Streamlit", "Pandas", "NewsAPI"],
    metrics: [
      { label: "News Sources Tracked", value: "500+" },
      { label: "Sentiment Accuracy", value: "84%" },
      { label: "Stocks Monitored", value: "50" },
    ],
    highlights: [
      "Built NLP pipeline using NLTK and TextBlob to classify news as bullish/bearish/neutral",
      "Correlated 7-day rolling sentiment scores with Nifty 50 index movements",
      "Interactive Streamlit dashboard with ticker-wise sentiment heatmaps",
      "Achieved 84% accuracy in directional sentiment prediction on validation set",
    ],
    color: "cyan",
    featured: true,
    link: "https://github.com/Adityatrip26",
    github: "https://github.com/Adityatrip26",
  },
  {
    id: 4,
    title: "AlphaBacktest — Regime-Based Strategy Simulator",
    year: "2025",
    category: "Quantitative Finance",
    status: "completed",
    description:
      "Python-based portfolio backtesting engine that simulates regime-switching investment strategies across bull, bear, and high-volatility market phases using 10+ years of OHLCV data.",
    tools: ["Python", "Pandas", "Matplotlib", "yfinance", "NumPy"],
    metrics: [
      { label: "Strategies Tested", value: "8+" },
      { label: "Sharpe Ratio Improvement", value: "+0.42" },
      { label: "Historical Data Range", value: "10 yrs" },
    ],
    highlights: [
      "Implemented regime detection using rolling volatility windows and trend filters",
      "Backtested 8 strategy variants, improving Sharpe Ratio by 0.42 over buy-and-hold",
      "Max drawdown visualization and rolling returns dashboard using Matplotlib",
      "Modular codebase with plug-and-play strategy definitions via class inheritance",
    ],
    color: "emerald",
    featured: false,
    link: "https://github.com/Adityatrip26",
    github: "https://github.com/Adityatrip26",
  },
  {
    id: 5,
    title: "WealthLens — Personal Finance Dashboard",
    year: "2024",
    category: "Personal Finance Analytics",
    status: "completed",
    description:
      "SQL-powered personal finance tracker with Power BI front-end, featuring envelope budgeting, expense categorization, and financial health KPIs across savings, spending, and goal tracking.",
    tools: ["SQL", "PostgreSQL", "Power BI", "DAX", "Python"],
    metrics: [
      { label: "KPI Metrics Tracked", value: "15+" },
      { label: "Expense Categories", value: "20" },
      { label: "Forecast Accuracy", value: "91%" },
    ],
    highlights: [
      "Designed normalized PostgreSQL schema for multi-account budget tracking",
      "Built 15+ Power BI KPIs including Savings Rate, Burn Rate, and Goal Progress",
      "Time-series forecasting model for monthly expense prediction with 91% accuracy",
      "Automated monthly financial health score report generation via Python scripts",
    ],
    color: "amber",
    featured: false,
    link: "https://github.com/Adityatrip26",
    github: "https://github.com/Adityatrip26",
  },
  {
    id: 6,
    title: "IPL Analytics Hub",
    year: "2024",
    category: "Sports Analytics",
    status: "completed",
    description:
      "End-to-end IPL cricket analytics platform covering 16 seasons of match data, providing player performance metrics, team strategy insights, and match outcome predictions.",
    tools: ["Python", "Pandas", "Power BI", "Scikit-learn", "Plotly"],
    metrics: [
      { label: "Seasons Analyzed", value: "16" },
      { label: "Match Prediction Accuracy", value: "78%" },
      { label: "Player Metrics Computed", value: "30+" },
    ],
    highlights: [
      "Processed 16 seasons of IPL ball-by-ball data (900K+ rows) using Pandas",
      "Built phase-wise run-rate, economy, and strike-rate indices for 200+ players",
      "Random Forest classifier for match outcome prediction with 78% accuracy",
      "Interactive Power BI report with team and player drill-down by season and venue",
    ],
    color: "rose",
    featured: false,
    link: "https://github.com/Adityatrip26",
    github: "https://github.com/Adityatrip26",
  },
  {
    id: 7,
    title: "Low-Power PIR Motion Detection System",
    year: "2024",
    category: "Embedded Systems",
    status: "completed",
    description:
      "Energy-efficient PIR-based motion detection system with calibrated sensitivity for indoor environments, achieving high accuracy with minimal false positives and sub-200ms response time.",
    tools: ["Arduino", "Embedded C/C++", "Circuit Design"],
    metrics: [
      { label: "Detection Range", value: "5–7m" },
      { label: "Indoor Accuracy", value: "90%" },
      { label: "Power Reduction", value: "30%" },
    ],
    highlights: [
      "Designed PIR circuit with 5–7m detection range and 90° field of view",
      "Achieved <200ms trigger latency enabling real-time response",
      "30% power consumption reduction via adaptive sleep mode algorithm",
      "25% reduction in false positives after multi-stage sensitivity calibration",
    ],
    color: "primary",
    featured: false,
    link: "https://github.com/Adityatrip26",
    github: "https://github.com/Adityatrip26",
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  year: string;
  type: "education" | "work";
  icon: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Lakshmi Narain College of Technology",
    location: "Bhopal, India",
    year: "2021 – 2025",
    type: "education",
    icon: "GraduationCap",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credentialId: string;
  icon: string;
  color: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "Excel: Mother of Business Intelligence",
    issuer: "Codebasics",
    year: "2026",
    credentialId: "CB-51-658839",
    icon: "FileSpreadsheet",
    color: "emerald",
    description:
      "Advanced Excel for business analytics, Power Query, Pivot Tables, and dashboard development.",
  },
  {
    title: "CCNA Security",
    issuer: "Cisco",
    year: "2023",
    credentialId: "CCNA-SEC-2023",
    icon: "ShieldCheck",
    color: "primary",
    description:
      "Network security fundamentals, Cisco security technologies, and network defense strategies.",
  },
];

export type Stat = {
  label: string;
  value: string;
  icon: string;
};

export const stats: Stat[] = [
  { label: "Projects Completed", value: "7+", icon: "FolderKanban" },
  { label: "Data Points Processed", value: "60K+", icon: "Database" },
  { label: "Dashboards Built", value: "10+", icon: "LayoutDashboard" },
  { label: "Query Time Reduced", value: "~30%", icon: "Zap" },
];
