import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { LanguageProvider } from "@/i18n/context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Jiya Choudhary | Computer Science Engineering Student | Software Developer",
    template: "%s | Portfolio",
  },
  description:
    "Computer Science Engineering Student skilled in Python, Flask, SQL, JavaScript, HTML, CSS, Bootstrap, SQLite, and Software Development. Explore my projects, skills, and portfolio.",
  keywords: [
    "developer",
    "portfolio",
    "web development",
    "full stack",
    "react",
    "nextjs",
  ],
  authors: [{ name: "Jiya Choudhary" }],
  creator: "Jiya Choudhary",
  metadataBase: new URL("https://github.com/Jiya-Choudhary"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Jiya-Choudhary",
    title: "Jiya Choudhary | Computer Science Engineering Student | Software Developer",
    description:
      "Computer Science Engineering Student skilled in Python, Flask, SQL, JavaScript, HTML, CSS, Bootstrap, SQLite, and Software Development. Explore my projects, skills, and portfolio.",
    siteName: "Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.en.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: [
      {
        url: "/jiya_icon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/jiya_icon_dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <TooltipProvider delayDuration={0}>
              {/* Premium Layered Background */}
              <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
                {/* Mesh Gradient Blobs */}
                <div className="absolute top-[-10%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-primary/10 dark:bg-primary/5 blur-[120px] animate-pulse duration-[8000ms]" />
                <div className="absolute bottom-[-15%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-accent/8 dark:bg-accent/4 blur-[130px] animate-pulse duration-[12000ms]" />
                <div className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-[#38bdf8]/8 dark:bg-[#38bdf8]/4 blur-[110px]" />
                <div className="absolute bottom-[20%] left-[-15%] w-[55vw] h-[55vw] rounded-full bg-[#818cf8]/8 dark:bg-[#818cf8]/4 blur-[120px]" />
                
                {/* Grid Overlay Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] dark:opacity-[0.12] transition-opacity duration-500" />
                
                {/* Noise Texture Effect */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:12px_12px]" />
              </div>

              {/* Flicker Grid Top Header Accent */}
              <div className="absolute inset-0 top-0 left-0 right-0 h-[220px] overflow-hidden z-0 pointer-events-none">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={3}
                  color="var(--primary)"
                  maxOpacity={0.15}
                  flickerChance={0.1}
                  style={{
                    maskImage: "radial-gradient(circle at top, black 20%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(circle at top, black 20%, transparent 80%)",
                  }}
                />
              </div>

              <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6 select-none md:select-text">
                {children}
              </div>
              <Navbar />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
