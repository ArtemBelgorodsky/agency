import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Кадровое агенство Афипский НПЗ",
  description: "Веб приложение предназначено для обеспечения кадровой работы для Афипского НПЗ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
