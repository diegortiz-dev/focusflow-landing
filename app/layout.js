import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FocusFlow - Maximize Sua Produtividade com Técnica Pomodoro",
  description: "Plataforma profissional de gestão de tempo e produtividade. Técnica Pomodoro avançada, analytics em tempo real e foco absoluto.",
  keywords: "pomodoro, produtividade, gestão de tempo, foco, timer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
