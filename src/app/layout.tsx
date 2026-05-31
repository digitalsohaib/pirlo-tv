import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { defaultMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[#0c0c0c] text-white antialiased`}>
        <style
          dangerouslySetInnerHTML={{
            __html: `*,*::before,*::after{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-height:100vh;background:#0c0c0c;color:#fff;font-family:var(--font-inter),system-ui,sans-serif}a{color:inherit;text-decoration:none}.container-app{max-width:1280px;margin:0 auto;padding:0 1rem;width:100%}.btn-primary{display:inline-flex;align-items:center;gap:.5rem;padding:.625rem 1.25rem;border-radius:.75rem;background:#e10600;color:#fff;font-weight:600;font-size:.875rem}.btn-ghost{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;border-radius:.75rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.85);font-weight:600;font-size:.875rem}header{position:sticky;top:0;z-index:50;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(12,12,12,.92)}`,
          }}
        />
        <div className="flex min-h-screen flex-col pb-[4.5rem] lg:pb-0">
          <SiteHeader />
          <main className="container-app flex-1 py-5 md:py-8">{children}</main>
          <SiteFooter />
          <MobileBottomNav />
        </div>
      </body>
    </html>
  );
}
