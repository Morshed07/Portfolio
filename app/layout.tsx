import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Al Morshed Nayeem | Backend Developer",
  description:
    "Backend Developer specializing in Django, DRF, Python, and scalable microservices.",
  keywords: ["Backend Developer", "Django", "Python", "DRF", "Dhaka"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg">{children}</body>
    </html>
  );
}
