import type { Metadata } from "next";
import "./globals.css"; // ← Import this

export const metadata: Metadata = {
  title: "Glynac WMS Analytics",
  description: "Warehouse Management System Analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}