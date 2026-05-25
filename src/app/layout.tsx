import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Australian Education Consultants — Your Future Begins Here",
  description:
    "AE-Consultants helps students study abroad in Australia, New Zealand, the UK, Canada, USA and Europe with personalised guidance, university placements and visa support.",
  keywords: [
    "Australian Education Consultants",
    "study abroad",
    "education consultancy",
    "student visa",
    "Australia universities",
    "Melbourne",
    "Craigieburn",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
