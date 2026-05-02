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
    caseStudy: {
      problem:
        "Investment strategies that perform well in bull markets often collapse in bear markets or high-volatility regimes. Most analysts lack a systematic, visual framework to identify which regime the market is currently in — strategy selection was reactive rather than proactive.",
      approach:
        "Sourced 25+ years of historical market data and built a classification framework around three regime types: trending bull, trending bear, and high-volatility sideways. Used rolling volatility windows and trend slope calculations in Power Query to engineer regime labels from raw OHLCV data — no external model, just reproducible logic in Excel. Designed the data model so regime transitions were visually trackable across time, not just as static labels.",
      tech: "Excel · Power Query · Pivot Tables · Conditional Formatting · Calculated Fields",
      result:
        "Delivered an interactive dashboard that classifies any historical period into one of three regimes and overlays key market statistics per regime — average returns, volatility ranges, drawdown depth. Enables an analyst to answer in under 60 seconds: 'What regime were we in during 2008, 2020, or 2022 — and how did the market behave?' Foundation later used for AlphaBacktest's strategy simulation engine.",
    },
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
    caseStudy: {
      problem:
        "A retail operation processing 50,000+ transactions had no consolidated view of what was actually driving profitability. Revenue was visible; margin by product, region, and customer segment was not. Leadership was making pricing decisions without visibility into which product lines were subsidising losses elsewhere.",
      approach:
        "Ingested raw transaction data from MySQL into Power BI via direct query. Designed a star schema data model — fact table of transactions, dimension tables for products, regions, customers, and time — to enable clean, performant slicing across any combination of dimensions. Built 10+ DAX measures covering gross margin %, revenue contribution by segment, regional performance index, and month-over-month growth. Optimised query structure to reduce report load time by approximately 30%.",
      tech: "Power BI · DAX · SQL · MySQL · Power Query · Star Schema Modelling",
      result:
        "Delivered a multi-page Power BI report surfacing profitability drivers invisible in flat transaction exports. Identified that the top 20% of products account for ~65% of total profit — a classic Pareto insight that directly informed ranging decisions. Report replaced manual weekly Excel summaries as the standard operations review format.",
    },
    color: "accent",
    featured: true,
    link: "https://app.powerbi.com/view?r=eyJrIjoiMWM1ZDJhY2UtYjA5Yy00NGI1LWEwYjctMWZlNzUxYWFjNGJlIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    github: "https://github.com/adityatrip26/business-insights-360-veloxis",
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
    caseStudy: {
      problem:
        "Financial markets move on information, but the volume of news across hundreds of stocks makes manual sentiment tracking impossible at scale. By the time an analyst reads and interprets relevant headlines, the market has already priced in the move. No lightweight, accessible tool existed to aggregate, score, and visualise sentiment across a watchlist in real time.",
      approach:
        "Designed a three-layer pipeline: ingestion → scoring → visualisation. Used NewsAPI to pull headlines across 500+ sources by ticker symbol. Applied VADER — a lexicon-based NLP model calibrated for short news-style text — to score each headline on a compound scale from -1 to +1. Chose VADER over heavier ML models deliberately: no training data required, instant inference, strong performance on financial headlines. Aggregated scores at the stock level to produce a daily sentiment signal, then correlated against price data via yfinance to validate signal quality.",
      tech: "Python · pandas · VADER (NLTK) · NewsAPI · yfinance · Streamlit · Matplotlib",
      result:
        "Live interactive dashboard where an analyst enters any ticker and immediately sees recent headlines, per-headline sentiment scores, aggregate sentiment trend, and sentiment vs price movement side by side. Achieved 84% directional accuracy between sentiment signal and next-day price direction across a 50-stock test set. Deployed on Streamlit Cloud — accessible via browser with zero setup required.",
    },
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
    caseStudy: {
      problem:
        "Most backtesting tools apply a single strategy uniformly across all market conditions — ignoring that momentum strategies outperform in trending regimes while mean-reversion strategies outperform in volatile sideways markets. Analysts were either overfitting strategies to a single era of data or accepting mediocre blended performance. No accessible tool existed for testing regime-conditional strategy switching.",
      approach:
        "Built a Python backtesting engine that first classifies each historical period into a regime (bull, bear, high-volatility) using rolling statistical signals, then applies a regime-specific strategy ruleset for that period. Engineered 8+ strategy variants — including momentum-follow, volatility-scaled position sizing, and defensive cash allocation — and ran each across 10 years of OHLCV data sourced via yfinance. Evaluated performance using Sharpe ratio, max drawdown, and CAGR as primary metrics. Compared regime-switching portfolio against static buy-and-hold as baseline.",
      tech: "Python · pandas · NumPy · Matplotlib · yfinance",
      result:
        "Regime-switching approach delivered a Sharpe ratio improvement of +0.42 over the static baseline — meaningful risk-adjusted outperformance without increasing gross exposure. Simulator is modular: any new strategy logic can be plugged in as a function and tested across the full historical dataset within minutes.",
    },
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
    caseStudy: {
      problem:
        "Most personal finance tools are either too simple (basic expense logs) or too complex (full accounting software). The real gap is in forward-looking financial health visibility — understanding not just where money went, but whether current spending trajectories are compatible with savings goals, and where envelope budgets are being systematically breached month after month.",
      approach:
        "Designed a SQL schema in PostgreSQL modelling transactions, budget envelopes, savings goals, and income streams as separate relational entities. Wrote SQL logic to categorise transactions into 20 expense buckets and calculate variance against each envelope's monthly allocation. Pulled the cleaned, modelled data into Power BI and built KPI cards, trend lines, and goal-tracking visuals. Built a forecasting layer using historical monthly averages to project end-of-year savings position.",
      tech: "SQL · PostgreSQL · Power BI · DAX · Python",
      result:
        "Dashboard tracking 15+ KPI metrics across savings rate, spending by category, envelope adherence, and goal progress. Forecast layer achieved 91% accuracy against actual monthly outcomes over a 6-month validation period. Demonstrates full-stack analytics capability — from database schema design through to executive-style BI reporting.",
    },
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
    caseStudy: {
      problem:
        "16 seasons of IPL match data existed in raw, fragmented form — ball-by-ball CSVs with no analytical layer on top. Analysts and enthusiasts had no consolidated platform to query player performance trends, head-to-head matchup statistics, venue effects, or predictive match outcomes. Every insight required manual data wrangling from scratch.",
      approach:
        "Built an end-to-end data pipeline ingesting 16 seasons of ball-by-ball and match-level data into a pandas processing layer. Engineered 30+ player-level metrics — strike rates by phase, economy rates vs left/right-hand batters, powerplay vs death bowling splits, consistency indices. Built a Random Forest classifier using match-state features (venue, toss, team form, head-to-head record) to predict match outcomes. Visualised everything through Power BI dashboards and Plotly interactive charts.",
      tech: "Python · pandas · Power BI · Scikit-learn · Plotly · NumPy",
      result:
        "End-to-end analytics platform covering 16 IPL seasons with player performance profiling, team strategy breakdowns, and a match prediction engine achieving 78% accuracy on hold-out test matches. The same pipeline logic — ingest, engineer features, model, visualise — is directly transferable to financial or operational datasets.",
    },
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
    caseStudy: {
      problem:
        "Standard PIR motion detection implementations suffer from two recurring issues: high false-positive rates in indoor environments with thermal noise, and excessive power draw that limits battery-operated deployment. Off-the-shelf sensitivity settings were not calibrated for controlled indoor use cases.",
      approach:
        "Designed the PIR circuit from first principles — selecting component values to achieve a 5–7m detection range with a 90° field of view suited for room-scale coverage. Implemented a multi-stage sensitivity calibration routine in firmware to filter thermal noise. Developed an adaptive sleep mode algorithm that duty-cycles the sensing circuit based on historical trigger frequency, reducing unnecessary active-state power consumption.",
      tech: "Arduino · Embedded C/C++ · Circuit Design · PIR Sensor Module",
      result:
        "Achieved 90% indoor detection accuracy with sub-200ms trigger latency. Reduced power consumption by 30% versus baseline implementation via adaptive sleep mode. False positive rate reduced by 25% after multi-stage calibration. Demonstrates systems-level thinking — the same precision-and-efficiency mindset applied directly to data pipeline and analytics work.",
    },
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
