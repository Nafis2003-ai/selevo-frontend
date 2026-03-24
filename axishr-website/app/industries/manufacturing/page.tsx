import Image from "next/image"
import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Clock,
  Building2,
  ShieldCheck,
  BarChart3,
  Zap,
  ClipboardList,
  TrendingUp,
} from "lucide-react"

const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const features = [
  {
    icon: Clock,
    title: "Shift & Attendance Automation",
    description:
      "Configure complex shift rotations, night differentials, and overtime rules once. Selevo auto-calculates attendance data and feeds it directly into payroll — no manual re-entry.",
  },
  {
    icon: Building2,
    title: "Centralised Multi-Plant Control",
    description:
      "Manage all your plants from a single dashboard. Each location retains its own policies while headquarters gets unified visibility, reporting, and control.",
  },
  {
    icon: Zap,
    title: "Rapid Onboarding at Scale",
    description:
      "Onboard batches of new hires with templated workflows, digital document collection, and automated system access — cut new-hire time-to-productivity by weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Labour Law Compliance",
    description:
      "Stay compliant with local and national labour regulations. Selevo flags policy violations, tracks rest period compliance, and generates audit-ready reports automatically.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    description:
      "Track headcount, absenteeism trends, overtime costs, and turnover rates across every plant with real-time dashboards built for manufacturing HR leaders.",
  },
  {
    icon: ClipboardList,
    title: "Integrated Payroll Engine",
    description:
      "From shift hours to final payslip — payroll runs with full traceability. All earnings, deductions, and allowances are computed by a single, auditable calculation engine.",
  },
]

const faqs = [
  {
    question: "How does Selevo handle complex shift patterns common in manufacturing?",
    answer:
      "Selevo supports fully configurable shift patterns including rotating shifts, split shifts, night shifts, and public holiday overrides. Each shift type can have its own allowance rules, overtime thresholds, and rest-period requirements. The system automatically calculates entitlements and feeds them into payroll without manual intervention.",
  },
  {
    question: "Can Selevo manage HR across multiple factories or plant locations?",
    answer:
      "Yes. Selevo is built for multi-entity, multi-location operations. Each plant can maintain its own policies, cost centres, and HR workflows, while headquarter administrators have full cross-plant visibility, consolidated reporting, and centralised control over shared policies.",
  },
  {
    question: "How does the platform help with high-volume onboarding?",
    answer:
      "Selevo's onboarding module supports batch processing — you can initiate onboarding for groups of new hires simultaneously. Templated checklists, digital document submission, and automated approval workflows mean each new hire follows a consistent, compliant process regardless of volume.",
  },
  {
    question: "Does Selevo support labour law compliance for manufacturing workers?",
    answer:
      "Selevo includes configurable compliance rules aligned to local labour legislation — covering maximum working hours, mandatory rest periods, overtime caps, and statutory deductions. The system flags violations in real-time and maintains a full audit trail for inspections and regulatory reporting.",
  },
]

export default function ManufacturingPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden pt-[68px]"
        style={{ backgroundColor: DARK }}
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #4ecdc4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* bottom glow behind image */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[55%] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, rgba(11,107,98,0.45) 0%, transparent 70%)`,
          }}
        />

        {/* ── Centered text block ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-10">

          {/* badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
          >
            <Factory className="w-4 h-4" />
            Manufacturing
          </div>

          {/* heading */}
          <h1
            className="text-5xl lg:text-[64px] font-bold leading-tight text-white max-w-3xl mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            HR Built for{" "}
            <span style={{ color: TEAL_LIGHT }}>the Factory Floor</span>
          </h1>

          {/* subtitle */}
          <p
            className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Manage shifts, automate payroll, and stay compliant across every plant —
            all from one unified HR platform built for the complexity of manufacturing operations.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Get a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{
                borderColor: "rgba(75,205,196,0.4)",
                color: TEAL_LIGHT,
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              Explore Platform
            </Link>
          </div>

          {/* stats row */}
          <div
            className="flex items-center gap-10 pb-2 border-b"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {[
              { value: "40%", label: "Faster payroll processing" },
              { value: "3×", label: "Faster new-hire onboarding" },
              { value: "99.8%", label: "Attendance accuracy" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-10">
                <div className="text-center">
                  <div
                    className="text-2xl font-bold"
                    style={{ color: TEAL_LIGHT, fontFamily: "var(--font-merriweather)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs text-slate-400 mt-0.5"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Full-width image pinned to bottom ── */}
        <div className="relative z-10 mt-auto w-full flex items-end justify-center">
          {/* top fade */}
          <div
            className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-10"
            style={{ background: `linear-gradient(to bottom, ${DARK}, transparent)` }}
          />
          <Image
            src="/manufacture.png"
            alt="Manufacturing workforce"
            width={1400}
            height={520}
            className="w-full object-contain block"
            style={{ mixBlendMode: "screen" }}
            priority
          />
        </div>
      </section>

      {/* ── HOW SELEVO HELPS ── */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* left — sticky */}
            <div className="lg:sticky lg:top-28">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
              >
                <TrendingUp className="w-4 h-4" />
                How Selevo Helps
              </div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                Purpose-built for{" "}
                <span style={{ color: TEAL_LIGHT }}>manufacturing</span>{" "}
                workforce management
              </h2>
              <p
                className="text-slate-400 text-sm leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                From the production line to the boardroom, Selevo connects every HR touchpoint — attendance, payroll, compliance, and people data — into one reliable system.
              </p>
              <div
                className="rounded-2xl p-6 border"
                style={{ borderColor: "rgba(75,205,196,0.2)", backgroundColor: "rgba(75,205,196,0.06)" }}
              >
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
                >
                  What you get with Selevo:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "One platform across all plants",
                    "Shift-aware payroll automation",
                    "Real-time compliance monitoring",
                    "Workforce analytics by plant, shift & role",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TEAL_LIGHT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right — feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl p-6 border transition-colors hover:border-teal-700"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(11,107,98,0.3)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: TEAL_LIGHT }} />
                    </div>
                    <h3
                      className="text-white font-bold text-sm mb-2"
                      style={{ fontFamily: "var(--font-merriweather)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-slate-400 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {f.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
