/* import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css" */

// import "../styles/globals.css"
import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); */

/* const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});  */

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk", // <-- usaremos esta variable en @theme
})


export const metadata: Metadata = {
  title: "Eduardo Solano | Portfolio",
  description: "Portfolio de proyectos web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="es" className={`dark ${spaceGrotesk.variable}`}>
      <body className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}