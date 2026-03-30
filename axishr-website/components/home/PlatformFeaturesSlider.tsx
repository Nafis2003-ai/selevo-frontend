import Link from "next/link"
import { DollarSign, TrendingUp, CalendarDays, UserCheck, Users, Globe, Clock, BarChart3, Shield, Receipt } from "lucide-react"

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
  return (
    <section style={{ backgroundColor: BG }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.href}
                className="flex flex-col px-8 py-10"
              >
                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-white text-xl font-bold leading-snug mb-3"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
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
    </section>
  )
}
