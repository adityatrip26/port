import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aditya Tripathi | Data Analyst & Financial Analytics",
  description:
    "Portfolio of Aditya Tripathi — Data Analyst specializing in financial analytics, Power BI, SQL, and business intelligence dashboards.",
  keywords: [
    "Data Analyst",
    "Financial Analyst",
    "Power BI",
    "SQL",
    "Python",
    "Excel",
    "Dashboard",
    "Business Intelligence",
  ],
  authors: [{ name: "Aditya Tripathi" }],
  openGraph: {
    title: "Aditya Tripathi | Data Analyst",
    description:
      "Data Analyst with expertise in financial analytics and business intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
