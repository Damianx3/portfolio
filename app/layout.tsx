import type { Metadata } from "next";
import { Header } from "@/components/header";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Damian Ramirez — Software & Data", template: "%s — Damian Ramirez" },
  description: "The portfolio of Damian Ramirez, a Computer Science student focused on data engineering, backend systems, and practical software.",
  applicationName: "Damian Ramirez Portfolio",
  authors: [{ name: "Damian Ramirez" }],
  creator: "Damian Ramirez",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Damian Ramirez Portfolio",
    title: "Damian Ramirez — Software & Data",
    description: "Computer Science student building reliable data systems, backend software, and practical tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damian Ramirez — Software & Data",
    description: "Computer Science student building reliable data systems, backend software, and practical tools.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ChatWidget/>
        <footer className="site-footer">
          <div className="shell footer-inner">
            <p>Designed and built by Damian Ramirez.</p>
            <p><span className="status-dot" /> Available for the next opportunity</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
