import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reg & Data AdGroup | Regulatory Affairs & Data Strategy",
  description:
    "Senior regulatory strategy and execution for medical devices, diagnostics, pharmaceuticals, combination products, and AI/ML SaMD across U.S. and global pathways.",
  metadataBase: new URL("https://example.com"), // <-- replace after domain goes live
  openGraph: {
    title: "Reg & Data AdGroup",
    description:
      "Regulatory rigor, disciplined execution, and senior-level expertise for complex and emerging healthcare technologies.",
    url: "https://example.com", // <-- replace
    siteName: "Reg & Data AdGroup",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}