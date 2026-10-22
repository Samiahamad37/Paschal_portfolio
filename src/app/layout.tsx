import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://samiahamad37.github.io/Paschal_portfolio";

const title = "Pascal Jonathan — Sign Language & Interpretation Director · Military Officer";
const description =
  "Portfolio of Pascal Jonathan: sign language and interpretation director, military officer, educator, author of “Ushujaa Katika Giza Zito” and advocate for people with disabilities, based in Dar es Salaam, Tanzania.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`),
  title,
  description,
  keywords: [
    "Pascal Jonathan",
    "sign language interpreter",
    "Tanzania",
    "Dar es Salaam",
    "military officer",
    "Ushujaa Katika Giza Zito",
    "disability advocacy",
  ],
  authors: [{ name: "Pascal Jonathan" }],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: "Pascal Jonathan",
    locale: "en_US",
    images: [{ url: "/images/port.jpg", width: 1080, height: 1620, alt: "Portrait of Pascal Jonathan" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/port.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b10" },
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
  ],
};

// Runs before paint so the saved theme is applied without a flash. Dark is the default.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t!=='light');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
