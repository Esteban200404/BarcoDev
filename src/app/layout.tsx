import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Barco Dev - Desarrollo de Software Profesional",
  description: "Soluciones profesionales en desarrollo de software. Especialistas en tecnología web, mobile y cloud con más de 10 años de experiencia.",
  keywords: ["desarrollo software", "desarrollo web", "desarrollo mobile", "soluciones tecnológicas", "barco dev"],
  creator: "Barco Dev",
  openGraph: {
    title: "Barco Dev - Desarrollo de Software Profesional",
    description: "Soluciones de software de alta calidad entregadas con excelencia.",
    type: "website",
    locale: "es_ES",
    url: "https://barco-dev.com",
    images: [
      {
        url: "https://barco-dev.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barco Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barco Dev - Desarrollo de Software",
    description: "Soluciones profesionales en desarrollo de software.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-black-primary via-black-secondary to-purple-dark/10">
        {children}
      </body>
    </html>
  );
}
