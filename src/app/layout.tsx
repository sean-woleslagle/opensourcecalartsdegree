import type { Metadata, Viewport } from "next";
import { Figtree, Syne } from "next/font/google";
import { ProgressProvider } from "@/components/ProgressProvider";
import { FocusModeProvider } from "@/components/FocusModeProvider";
import { AppHeader } from "@/components/AppHeader";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Open-Source CalArts Degree",
  description:
    "Daily-driver checklist for an independent open-source animation curriculum — one roadmap, sync via Supabase.",
  applicationName: "Open-Source CalArts Degree",
  appleWebApp: {
    capable: true,
    title: "CalArts Degree",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#e6ebe4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${figtree.variable} antialiased`}>
        <ProgressProvider>
          <FocusModeProvider>
            <div className="app-shell min-h-dvh">
              <AppHeader />
              <main className="mx-auto w-full max-w-3xl px-4 pb-16 pt-4 sm:px-6">
                {children}
              </main>
            </div>
          </FocusModeProvider>
        </ProgressProvider>
      </body>
    </html>
  );
}
