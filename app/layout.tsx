import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveloka – Pilihan Utama untuk Jelajahi Dunia",
  description: "Pesan tiket pesawat, hotel, kereta, dan atraksi wisata di Traveloka. Harga terbaik, mudah, dan terpercaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
