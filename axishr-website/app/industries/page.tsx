import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"

const TEAL = "#0b6b62"

export default function IndustriesOverviewPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-lg w-full text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
          style={{ backgroundColor: "#f0fdfa", color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
        >
          <Clock className="w-4 h-4" />
          Coming Soon
        </div>
        <h1
          className="text-4xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          Industry Overview
        </h1>
        <p
          className="text-slate-500 text-lg leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          This page is under construction and will be available soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </main>
  )
}
