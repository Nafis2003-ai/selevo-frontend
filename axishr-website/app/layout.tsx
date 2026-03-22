import type { Metadata } from "next"
import { Merriweather, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Selevo — Modern HR Management Platform",
    template: "%s | Selevo",
  },
  description:
    "Selevo is a comprehensive HR management platform covering payroll, attendance, performance, global employment, and more — built for modern teams.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-white text-slate-900">
        <Navbar />
        {/* Offset for fixed navbar height (68px bar + 2.5px gradient line) */}
        <div className="pt-[70.5px]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
