"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, DollarSign, TrendingUp, CalendarDays, UserCheck, Users, Globe, Clock, BarChart3, Shield, Receipt } from "lucide-react"

const VISIBLE = 4

const features = [
  {
    icon: DollarSign,
    iconBg: "#1a56db",
    title: "Full Service Payroll",
    description: "Simplify payroll management and ensure compliance with accurate, automated processing in minutes.",
    href: "/platform/payroll",
  },
  {
    icon: TrendingUp,
    iconBg: "#16a34a",
    title: "Performance Appraisal",
    description: "Streamline evaluations, track progress, and enhance employee growth with structured review cycles.",
    href: "/platform/performance-management",
  },
  {
    icon: CalendarDays,
    iconBg: "#ea580c",
    title: "Leave & Attendance",
    description: "Automate leave tracking, ensure compliance, and manage employee schedules effortlessly.",
    href: "/platform/leave-management",
  },
  {
    icon: UserCheck,
    iconBg: "#7c3aed",
    title: "Hiring & Onboarding",
    description: "Streamline recruitment, simplify onboarding, and get new hires up to speed quickly.",
    href: "/platform/onboarding-offboarding",
  },
  {
    icon: Users,
    iconBg: "#0b6b62",
    title: "Employee Management",
    description: "Centralise all employee data, records, and workflows in a single source of truth.",
    href: "/platform/employee-management",
  },
  {
    icon: Globe,
    iconBg: "#0284c7",
    title: "Global Employment",
    description: "Hire and manage talent across borders with multi-currency payroll and local compliance.",
    href: "/platform/global-employment",
  },
  {
    icon: Clock,
    iconBg: "#d97706",
    title: "Time & Attendance",
    description: "Track work hours with precision using automated timesheets and real-time dashboards.",
    href: "/platform/time-attendance",
  },
  {
    icon: BarChart3,
    iconBg: "#4f46e5",
    title: "Reports & Analytics",
    description: "Turn workforce data into strategic insights with real-time reports and custom dashboards.",
    href: "/platform/reports-analytics",
  },
  {
    icon: Shield,
    iconBg: "#dc2626",
    title: "Compliance & Security",
    description: "Stay audit-ready with role-based access, field-level permissions, and built-in compliance tools.",
    href: "/platform/compliance-security",
  },
  {
    icon: Receipt,
    iconBg: "#db2777",
    title: "Claims & Expenses",
    description: "Simplify expense submissions, approvals, and reimbursements across your entire organisation.",
    href: "/platform/claims-expenses",
  },
]

const BG = "#071f1c"

export function PlatformFeaturesSlider() {
  const [start, setStart] = useState(0)

  const canPrev = start > 0
  const canNext = start + VISIBLE < features.length

  const prev = () => { if (canPrev) setStart((s) => s - 1) }
  const next = () => { if (canNext) setStart((s) => s + 1) }

  return (
    <section className="overflow-hidden flex flex-col justify-center" style={{ backgroundColor: BG, height: "100vh" }}>
      <div className="relative flex-1 flex flex-col justify-center">

        {/* Sliding track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${start * (100 / VISIBLE)}%)` }}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.href}
                  className="flex-shrink-0 flex flex-col px-10 py-14"
                  style={{
                    width: `${100 / VISIBLE}%`,
                  }}
                >
                  {/* Icon badge */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 flex-shrink-0"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white text-2xl font-bold leading-snug mb-4"
                    style={{ fontFamily: "var(--font-merriweather)" }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-8 flex-1"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-plus-jakarta)",
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Learn More
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Nav arrows — overlaid on left/right edges */}
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{
            backgroundColor: canPrev ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            cursor: canPrev ? "pointer" : "default",
          }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: canPrev ? "#fff" : "rgba(255,255,255,0.25)" }} />
        </button>

        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{
            backgroundColor: canNext ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.12)",
            cursor: canNext ? "pointer" : "default",
          }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: canNext ? "#fff" : "rgba(255,255,255,0.25)" }} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 pb-8">
        {Array.from({ length: features.length - VISIBLE + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            aria-label={`Go to position ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === start ? "20px" : "6px",
              height: "6px",
              backgroundColor: i === start ? "#fff" : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  )
}
