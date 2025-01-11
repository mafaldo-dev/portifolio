import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Guilherme - Desenvolvedor web",
  description: "Guilherme Mafaldo, Desenvolvedor web especializado e, criar soluções inovadoras e  eficientes",
  icons: {
    icon:['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
