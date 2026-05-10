import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://melosclaw.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melos Claw | AI Agent Intelligence for the Web3 Era",
    template: "%s | MelosClaw.com",
  },
  description:
    "MelosClaw is a strategic .com identity for autonomous AI agents, Web3 work networks, and skill-native infrastructure. Melos Claw for the AI-native economy.",
  applicationName: "MelosClaw.com",
  keywords: [
    "Melos Claw",
    "strategic domain asset",
    "premium AI domain asset",
    "autonomous agent domain",
    "autonomous agent intelligence",
    "agentic web domain",
    "Web3 work network",
    "AI skill network",
    "agentic infrastructure",
    "brandable AI domain",
    "premium .com identity",
  ],
  authors: [{ name: "MelosClaw.com" }],
  creator: "MelosClaw.com",
  publisher: "MelosClaw.com",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MelosClaw",
    title: "Melos Claw | AI Agent Intelligence for the Web3 Era",
    description:
      "MelosClaw is a strategic .com identity for autonomous AI agents, Web3 work networks, and skill-native infrastructure. Melos Claw for the AI-native economy.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MelosClaw.com strategic domain asset for autonomous agent intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melos Claw | AI Agent Intelligence for the Web3 Era",
    description:
      "MelosClaw is a strategic .com identity for autonomous AI agents, Web3 work networks, and skill-native infrastructure. Melos Claw for the AI-native economy.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
