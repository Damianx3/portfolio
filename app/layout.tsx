
import type { Metadata, Viewport } from "next";

import { Header } from "@/components/header";
import { ChatWidget } from "@/components/chat-widget";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";
import "./hero-v2.css";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Damian Ramirez — Software & Data",
    template: "%s — Damian Ramirez",
  },
  description:
    "The portfolio of Damian Ramirez, a Computer Science student focused on data engineering, backend systems, and practical software.",
  applicationName: "Damian Ramirez Portfolio",
  authors: [{ name: "Damian Ramirez" }],
  creator: "Damian Ramirez",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Damian Ramirez Portfolio",
    title: "Damian Ramirez — Software & Data",
    description:
      "Computer Science student building reliable data systems, backend software, and practical tools.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Damian Ramirez — Software & Data",
    description:
      "Computer Science student building reliable data systems, backend software, and practical tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />

        {children}

        <ChatWidget />

        <footer className="site-footer">
          <div className="shell footer-inner">
            <p>Designed and built by Damian Ramirez.</p>

            <p>
              <span className="status-dot" />
              Available for the next opportunity
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
