import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holder Frontend",
  description: "Modern frontend application built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
