"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2, Building2, ArrowRightLeft, Shield, Layers } from "lucide-react"
import type { ElementType } from "react"

const TEAL = "#0b6b62"

const slides: {
  number: string
  icon: ElementType
  shortTitle: string
  subtitle: string
  title: string
  description: string
  bullets: string[]
}[] = [
  {
    number: "01",
    icon: Building2,
    shortTitle: "Multi-Branch Ops",
    subtitle: "No duplicate records",
    title: "Multi-Branch Workforce Without Duplicate Records",
    description:
      "AxisHR keeps one employee record across branch transfers and cross-branch assignments, so reporting and approvals stay accurate as teams move.",
    bullets: [
      "One employee can work across branches with full branch history.",
      "Hierarchy visibility supports head office, regional office, and branch management.",
      "Branch-level controls reduce reporting confusion and access mistakes.",
    ],
  },
  {
    number: "02",
    icon: ArrowRightLeft,
    shortTitle: "Attendance to Payroll",
    subtitle: "One seamless data flow",
    title: "One Data Flow From Attendance To Payroll",
    description:
      "Instead of rebuilding payroll data every cycle, AxisHR routes attendance, leave, claims, and approvals into payroll-ready inputs.",
    bullets: [
      "Approval logic is policy-driven and traceable.",
      "Payroll runs use cleaner, validated workforce data.",
      "Finance sees fewer manual corrections and disputes.",
    ],
  },
  {
    number: "03",
    icon: Shield,
    shortTitle: "Daily Governance",
    subtitle: "Built-in compliance",
    title: "Governance Built Into Daily Work",
    description:
      "Security, role-based visibility, and audit trails are embedded in normal workflows, so compliance is maintained without extra manual checklists.",
    bullets: [
      "Field-level permissions and role scopes protect sensitive information.",
      "Every key edit and approval event is recorded for review.",
      "MFA-ready controls support stronger access governance.",
    ],
  },
  {
    number: "04",
    icon: Layers,
    shortTitle: "Phased Rollout",
    subtitle: "Continuous improvement",
    title: "Phased Rollout With Continuous Improvement",
    description:
      "AxisHR is designed for staged activation so teams can launch critical workflows first and expand without process rework.",
    bullets: [
      "Start with workforce data and payroll readiness.",
      "Add performance, engagement, and advanced reporting in sequence.",
      "Use KPI and audit reviews to improve execution after go-live.",
    ],
  },
]

const INTERVAL_MS = 5000

export function FeatureCarousel() {
  const [active, setActive] = useState(0)
  const [contentKey, setContentKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
      setContentKey((k) => k + 1)
    }, INTERVAL_MS)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goTo = (index: number) => {
    if (index === active) return
    setActive(index)
    setContentKey((k) => k + 1)
    startTimer()
  }

  const slide = slides[active]

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#cde8e4" }}
    >

      {/* ── Halftone dot pattern — top-right corner ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(11,107,98,0.28) 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
          WebkitMaskImage: `radial-gradient(ellipse 62% 65% at 100% 0%, black 0%, transparent 70%)`,
          maskImage: `radial-gradient(ellipse 62% 65% at 100% 0%, black 0%, transparent 70%)`,
        }}
      />

      {/* ── Halftone dot pattern — bottom-left corner ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(11,107,98,0.28) 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
          WebkitMaskImage: `radial-gradient(ellipse 62% 65% at 0% 100%, black 0%, transparent 70%)`,
          maskImage: `radial-gradient(ellipse 62% 65% at 0% 100%, black 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Eyebrow label */}
        <p
          className="text-center text-lg font-bold tracking-[0.08em] uppercase mb-8"
          style={{
            color: TEAL,
            opacity: 0.75,
            fontFamily: "var(--font-plus-jakarta)",
          }}
        >
          What makes Selevo different
        </p>

        {/* ── Top: horizontal icon tab cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {slides.map((s, i) => {
            const isActive = i === active
            const Icon = s.icon
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300"
                style={{
                  backgroundColor: isActive ? "white" : "rgba(255,255,255,0.55)",
                  border: `1.5px solid ${isActive ? TEAL : "rgba(11,107,98,0.15)"}`,
                  boxShadow: isActive ? "0 2px 14px rgba(11,107,98,0.13)" : "none",
                }}
              >
                {/* Icon box */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: isActive ? "rgba(11,107,98,0.10)" : "rgba(11,107,98,0.06)",
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: isActive ? TEAL : "rgba(11,107,98,0.38)" }}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div
                    className="text-[0.78rem] font-semibold leading-tight"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      color: isActive ? "#0f172a" : "#64748b",
                    }}
                  >
                    {s.shortTitle}
                  </div>
                  <div
                    className="text-[0.68rem] mt-0.5 leading-tight"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      color: isActive ? TEAL : "#94a3b8",
                    }}
                  >
                    {s.subtitle}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* ── White content card (separated from tabs) ── */}
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(11,107,98,0.10), 0 4px 20px rgba(0,0,0,0.06)" }}
        >
          {/* Slide content */}
          <div className="p-8 sm:p-12">
            <div key={contentKey} className="carousel-content-enter-slow">

              {/* Slide badge */}
              <span
                className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-6"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  backgroundColor: "rgba(11,107,98,0.08)",
                  color: TEAL,
                }}
              >
                {slide.number} / {String(slides.length).padStart(2, "0")}
              </span>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
                {/* Left: title + description */}
                <div>
                  <h3
                    className="text-2xl sm:text-[1.6rem] font-bold text-slate-900 leading-snug mb-4"
                    style={{ fontFamily: "var(--font-merriweather)" }}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className="text-[0.94rem] text-slate-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {slide.description}
                  </p>
                </div>

                {/* Right: bullets */}
                <ul className="space-y-4 pt-1">
                  {slide.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="flex-shrink-0 mt-[2px]"
                        size={17}
                        style={{ color: TEAL }}
                      />
                      <span
                        className="text-[0.9rem] text-slate-600 leading-relaxed"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* ── Bottom progress bar ── */}
          <div className="flex h-[3px] bg-slate-100">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex-1 transition-colors duration-500 focus:outline-none"
                style={{ backgroundColor: i === active ? TEAL : "transparent" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
