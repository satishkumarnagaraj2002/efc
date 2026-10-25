import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elitefclondon.uk"),
  title: "Elite Football Club London | Football Training & Youth Development",
  description:
    "Elite Football Club London offers youth football for ages 4–15 in East London. Friday training at Peter May Sports Centre, E17 — first session free.",
  openGraph: {
    title: "Elite Football Club London",
    description:
      "Youth football development, coaching, and competitive opportunities in East London. First session free.",
    images: [{ url: "/logo-shield.png" }],
    url: "https://www.elitefclondon.uk",
    siteName: "Elite Football Club London",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} ${manrope.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[#070B12] text-[#F8FAFC]">{children}</body>
    </html>
  );
}
