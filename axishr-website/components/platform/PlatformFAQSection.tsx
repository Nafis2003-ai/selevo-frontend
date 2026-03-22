"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, HelpCircle } from "lucide-react"

const TEAL = "#0b6b62"

interface FAQ { question: string; answer: string }

export function PlatformFAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-white" style={{ height: "100vh" }}>
      <div className="max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 h-full items-center">

          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 text-xs font-semibold"
              style={{ backgroundColor: "rgba(11,107,98,0.08)", color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently asked questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-merriweather)" }}>
              <span className="text-slate-900">Frequently asked</span>
              <br />
              <span style={{ color: TEAL }}>questions</span>
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Can&apos;t find an answer?{" "}
              <a href="/contact" className="font-medium underline underline-offset-2 hover:opacity-75 transition-opacity" style={{ color: TEAL }}>
                Reach out to our team.
              </a>
            </p>
          </div>

          {/* Right */}
          <div
            className="flex flex-col gap-3 overflow-y-scroll no-scrollbar"
            style={{ maxHeight: "80vh", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="rounded-2xl transition-all duration-200"
                  style={{
                    backgroundColor: isOpen ? "#f0faf9" : "#f8fafc",
                    border: `1.5px solid ${isOpen ? "rgba(11,107,98,0.2)" : "rgba(0,0,0,0.06)"}`,
                  }}
                >
                  <button onClick={() => toggle(i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                    <span className="text-sm font-semibold pr-4" style={{ fontFamily: "var(--font-plus-jakarta)", color: isOpen ? TEAL : "#1e293b" }}>
                      {faq.question}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ backgroundColor: isOpen ? TEAL : "rgba(11,107,98,0.10)" }}
                    >
                      {isOpen
                        ? <ChevronUp className="w-4 h-4 text-white" />
                        : <ChevronDown className="w-4 h-4" style={{ color: TEAL }} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
