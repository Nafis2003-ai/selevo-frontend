import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  Truck,
  Clock,
  Building2,
  ShieldCheck,
  TrendingUp,
  DollarSign,
  UserPlus,
  LineChart,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"



const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const solutions = [
  {
    icon: Clock,
    name: "Time & Attendance",
    description: "Track driver hours, depot shift rotations, and route-based overtime automatically — attendance feeds straight into payroll without manual entry.",
    href: "/platform/time-attendance",
  },
  {
    icon: DollarSign,
    name: "Payroll",
    description: "One payroll engine handles route pay, shift allowances, and depot-based cost centres — from hours logged to final payslip, with full traceability.",
    href: "/platform/payroll",
  },
  {
    icon: Building2,
    name: "Multi-Branch Operations",
    description: "Every depot runs on unified HR policies while HQ gets consolidated dashboards and cross-depot workforce control from a single login.",
    href: "/platform/multi-branch-operations",
  },
  {
    icon: ShieldCheck,
    name: "Compliance & Security",
    description: "Real-time flags catch hours-of-service breaches, mandatory rest violations, and statutory gaps before they become costly regulatory problems.",
    href: "/platform/compliance-security",
  },
  {
    icon: UserPlus,
    name: "Onboarding & Offboarding",
    description: "Batch-onboard cohorts of drivers and warehouse staff with templated workflows, digital licence verification, and automated system access.",
    href: "/platform/onboarding-offboarding",
  },
  {
    icon: LineChart,
    name: "Reports & Analytics",
    description: "Live dashboards surface driver absenteeism, depot overtime costs, and frontline turnover data across every location in real time.",
    href: "/platform/reports-analytics",
  },
]

const deepFeatures = [
  {
    label: "Compliance",
    heading: "Stay ahead of hours-of-service rules — automatically",
    bullets: [
      "Configure hours-of-service limits, mandatory rest windows, and driving hour caps per driver class",
      "Get flagged the moment a driver is approaching a rest or hours violation before dispatch",
      "Maintain a complete, timestamped audit trail for every HR and scheduling action",
      "Auto-generate compliance reports ready for transport authority inspections",
    ],
    cta: { label: "Explore Compliance & Security", href: "/platform/compliance-security" },
    imageRight: true,
  },
  {
    label: "Automation",
    heading: "Automate complex route-based payroll and shift pay",
    bullets: [
      "Automatically calculate route allowances, overnight loadings, and multi-stop shift pay",
      "Onboard new drivers in minutes with digital licence uploads, document workflows, and e-signatures",
      "Get real-time alerts on attendance exceptions, late check-ins, and unplanned absences",
      "Connect with existing TMS, time-clock, and accounting systems via integrations",
    ],
    cta: { label: "Explore Payroll", href: "/platform/payroll" },
    imageRight: false,
  },
  {
    label: "Depot Visibility",
    heading: "Get a unified view across every depot and route",
    bullets: [
      "Track headcount, absenteeism, and overtime costs by depot, route type, or department",
      "Monitor shift coverage gaps before they impact delivery SLAs and route assignments",
      "Build custom HQ-level reports with live workforce data across all locations in one click",
      "Identify overtime trends and cost anomalies across depots before they escalate",
    ],
    cta: { label: "Explore Reports & Analytics", href: "/platform/reports-analytics" },
    imageRight: true,
  },
  {
    label: "Retention",
    heading: "Reduce frontline turnover in a tight driver market",
    bullets: [
      "Give drivers and warehouse staff self-service access to shifts, leave balances, and payslips",
      "Run structured performance reviews tied to real attendance, punctuality, and route data",
      "Use engagement data to identify at-risk frontline employees before they resign",
      "Automate recognition workflows to reward consistent, high-performing drivers and depot teams",
    ],
    cta: { label: "Explore Performance Management", href: "/platform/performance-management" },
    imageRight: false,
  },
]

const faqs = [
  {
    question: "How does Selevo handle hours-of-service compliance for drivers?",
    answer:
      "Selevo supports fully configurable hours-of-service rules including maximum daily driving hours, mandatory rest windows, weekly hour caps, and public holiday overrides. The system monitors each driver's logged hours in real time and raises automated alerts before a violation is about to occur — giving dispatch and HR teams time to act before routes are assigned.",
  },
  {
    question: "Can Selevo manage HR across multiple depots or distribution centres?",
    answer:
      "Yes. Selevo is built for multi-entity, multi-location operations. Each depot can maintain its own shift patterns, cost centres, and HR workflows, while headquarter administrators have full cross-depot visibility, consolidated reporting, and centralised control over shared policies and compliance rules.",
  },
  {
    question: "How does Selevo handle the high-volume onboarding of drivers and warehouse staff?",
    answer:
      "Selevo's onboarding module supports batch processing — you can initiate onboarding for groups of new hires simultaneously. Templated checklists cover licence verification, digital document submission, and induction sign-offs. Automated approval workflows ensure every new hire follows a consistent, compliant process regardless of volume or depot location.",
  },
  {
    question: "Does Selevo support route-based or allowance-based payroll for logistics workers?",
    answer:
      "Selevo includes a flexible payroll engine that handles route allowances, overnight loadings, multi-stop pay structures, and depot-specific overtime rules. All pay components are configurable and feed automatically from time and attendance data — removing manual reconciliation and reducing payroll errors across your entire driver and warehouse workforce.",
  },
]

export default function LogisticsDistributionPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col overflow-hidden pt-[68px]"
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


        {/* ── Centered text block ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-10">

          {/* badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
          >
            <Truck className="w-4 h-4" />
            Logistics & Distribution
          </div>

          {/* heading */}
          <h1
            className="text-5xl lg:text-[64px] font-bold leading-tight text-white max-w-3xl mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            HR Built for{" "}
            <span style={{ color: TEAL_LIGHT }}>Logistics Operations</span>
          </h1>

          {/* subtitle */}
          <p
            className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Manage driver hours, depot staff, and compliance across a mobile, shift-heavy workforce —
            all from one unified HR platform built for the complexity of logistics and distribution operations.
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
              { value: "45%", label: "Reduction in overtime costs" },
              { value: "2×", label: "Faster driver onboarding" },
              { value: "Real-time", label: "Depot visibility" },
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

      </section>

      {/* ── PROBLEMS ── */}
      <section className="py-24 bg-[#f5f7f6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              The Problem
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
            >
              Being great at logistics{" "}
              <br />
              <span style={{ color: TEAL }}>isn&apos;t enough</span>
            </h2>
            <p
              className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              You&apos;re not alone.{" "}
              <strong className="text-slate-700">71% of logistics HR teams</strong>{" "}
              say tracking a dispersed, mobile workforce manually is their #1 operational challenge.
            </p>
          </div>

          {/* problem rows */}
          <div className="flex flex-col">

            {/* Problem 1 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* abstract visual card */}
              <div
                className="w-full sm:w-[200px] h-[130px] rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: DARK }}
              >
                {/* scattered dots — represents disconnected multi-depot data */}
                <div className="grid grid-cols-5 gap-[7px] p-1">
                  {[1,0,1,0,1, 0,1,0,0,1, 1,0,1,1,0, 0,0,1,0,1].map((on, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-sm"
                      style={{ backgroundColor: on ? "rgba(78,205,196,0.75)" : "rgba(255,255,255,0.06)" }}
                    />
                  ))}
                </div>
              </div>
              {/* text */}
              <div className="pt-1">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                >
                  Tracking hours and compliance for a mobile, multi-depot workforce is a constant manual struggle
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Driver logs at one depot, shift rosters in a spreadsheet, hours-of-service records in an email thread. When compliance data is scattered across locations, HR spends more time chasing paperwork than managing people.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* bar chart visual — represents turnover costs */}
              <div
                className="w-full sm:w-[200px] h-[130px] rounded-2xl flex-shrink-0 flex items-end justify-center px-5 pb-5"
                style={{ backgroundColor: DARK }}
              >
                <div className="flex items-end gap-2 w-full" style={{ height: 80 }}>
                  {[38, 65, 28, 100, 52, 88, 42].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor:
                          i === 3 || i === 5
                            ? "rgba(78,205,196,0.85)"
                            : "rgba(255,255,255,0.13)",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* text */}
              <div className="pt-1">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                >
                  High turnover in frontline driver and warehouse roles is costly and disruptive
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Driver shortages and warehouse churn mean constant re-hiring and re-training cycles. Without structured onboarding, engagement tracking, and retention workflows, logistics operators lose experienced frontline staff faster than they can replace them.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* horizontal lines visual — represents siloed depot HR */}
              <div
                className="w-full sm:w-[200px] h-[130px] rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: DARK }}
              >
                <div className="flex flex-col gap-[9px] w-32">
                  {[90, 55, 80, 40, 70, 50].map((w, i) => (
                    <div
                      key={i}
                      className="h-[7px] rounded-full"
                      style={{
                        width: `${w}%`,
                        backgroundColor:
                          i % 2 === 0
                            ? "rgba(78,205,196,0.75)"
                            : "rgba(255,255,255,0.11)",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* text */}
              <div className="pt-1">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                >
                  No central visibility across depots — each location runs HR independently
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  When every depot manages its own attendance, payroll, and compliance records in isolation, HQ has no consolidated view. Comparing overtime costs, flagging headcount gaps, or enforcing policy changes across locations becomes an impossible manual exercise.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* heading */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
            >
              <TrendingUp className="w-4 h-4" />
              How Selevo Solves It
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Purpose-built features for{" "}
              <span style={{ color: TEAL_LIGHT }}>logistics HR</span>
            </h2>
            <p
              className="text-slate-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Every tool Selevo offers is designed around the real complexities of running HR across depots, driver rosters, and transport compliance requirements.
            </p>
          </div>

          {/* feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.name}
                  href={s.href}
                  className="group flex flex-col gap-4 rounded-2xl p-6 border transition-all hover:border-teal-700"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(11,107,98,0.35)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: TEAL_LIGHT }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-white font-bold text-sm mb-1.5"
                      style={{ fontFamily: "var(--font-merriweather)" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="text-slate-400 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {s.description}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-semibold mt-auto"
                    style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Explore feature
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DEEP FEATURES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col">
            {deepFeatures.map((f, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-12 py-20 lg:flex-row lg:items-center ${
                  f.imageRight ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* text side */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {f.label}
                  </p>
                  <h3
                    className="text-2xl lg:text-3xl font-bold leading-snug mb-6"
                    style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                  >
                    {f.heading}
                  </h3>
                  <ul className="flex flex-col gap-3 mb-8">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: TEAL }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={f.cta.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                    style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {f.cta.label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* image side — mock UI placeholder */}
                <div className="flex-1 min-w-0 flex justify-center">
                  <div
                    className="w-full max-w-[460px] h-[280px] rounded-2xl overflow-hidden flex flex-col"
                    style={{ backgroundColor: DARK, border: "1px solid rgba(78,205,196,0.15)" }}
                  >
                    {/* mock title bar */}
                    <div
                      className="flex items-center gap-1.5 px-4 py-3 border-b"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                    >
                      {["rgba(255,255,255,0.2)", "rgba(255,255,255,0.12)", "rgba(255,255,255,0.08)"].map((c, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                      ))}
                      <div
                        className="ml-2 h-3.5 w-32 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                      />
                    </div>

                    {/* mock content — unique per index */}
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      {idx === 0 && (
                        /* Compliance checklist mock — hours-of-service */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { label: "Hours-of-service limits respected", ok: true },
                              { label: "Mandatory rest windows applied", ok: true },
                              { label: "Statutory deductions processed", ok: true },
                              { label: "1 violation flagged — Depot B driver", ok: false },
                              { label: "Audit trail up to date", ok: true },
                            ].map((item) => (
                              <div key={item.label} className="flex items-center gap-2.5">
                                <div
                                  className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                                  style={{ backgroundColor: item.ok ? "rgba(78,205,196,0.2)" : "rgba(239,68,68,0.15)" }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.ok ? TEAL_LIGHT : "#f87171" }} />
                                </div>
                                <p className="text-[11px]" style={{ color: item.ok ? "rgba(255,255,255,0.7)" : "#f87171", fontFamily: "var(--font-plus-jakarta)" }}>
                                  {item.label}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-2 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                            <span className="text-[10px] text-slate-500">Compliance score</span>
                            <span className="text-sm font-bold" style={{ color: TEAL_LIGHT }}>96 / 100</span>
                          </div>
                        </>
                      )}

                      {idx === 1 && (
                        /* Payroll run mock — logistics context */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { name: "Marcus Reid", dept: "Last Mile Delivery", amt: "$3,960" },
                              { name: "Priya Nair", dept: "Warehouse Ops", amt: "$3,420" },
                              { name: "Daniel Osei", dept: "Long Haul Freight", amt: "$4,710" },
                            ].map((row) => (
                              <div
                                key={row.name}
                                className="flex items-center justify-between rounded-lg px-3 py-2"
                                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                              >
                                <div className="flex items-center gap-2.5">
                                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}>
                                    {row.name[0]}
                                  </div>
                                  <div>
                                    <p className="text-white text-[11px] font-semibold">{row.name}</p>
                                    <p className="text-slate-500 text-[9px]">{row.dept}</p>
                                  </div>
                                </div>
                                <span className="text-[11px] font-bold" style={{ color: TEAL_LIGHT }}>{row.amt}</span>
                              </div>
                            ))}
                          </div>
                          <div
                            className="rounded-lg py-2 text-center text-xs font-semibold"
                            style={{ backgroundColor: TEAL, color: "#fff" }}
                          >
                            Process 214 workers
                          </div>
                        </>
                      )}

                      {idx === 2 && (
                        /* Analytics dashboard mock — depot context */
                        <>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {[
                              { label: "Total drivers", value: "186" },
                              { label: "Absent today", value: "9" },
                              { label: "On overtime", value: "27" },
                            ].map((stat) => (
                              <div key={stat.label} className="rounded-lg p-2.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                                <p className="text-[9px] text-slate-500 mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{stat.label}</p>
                                <p className="text-base font-bold" style={{ color: TEAL_LIGHT, fontFamily: "var(--font-merriweather)" }}>{stat.value}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-end gap-1.5 h-20 px-1">
                            {[45, 62, 38, 75, 55, 80, 48, 70, 52, 88, 60, 42].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t-sm"
                                style={{
                                  height: `${h}%`,
                                  backgroundColor: i === 9 ? TEAL_LIGHT : "rgba(78,205,196,0.25)",
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {idx === 3 && (
                        /* Employee self-service mock — driver context */
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}
                            >
                              TR
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold">Tom Rashid</p>
                              <p className="text-slate-500 text-[10px]">Depot A · Senior Driver</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                              { label: "Attendance", value: "97.6%" },
                              { label: "Leave balance", value: "10 days" },
                              { label: "Next shift", value: "Mon 05:30" },
                              { label: "Payslips", value: "View →" },
                            ].map((item) => (
                              <div key={item.label} className="rounded-lg p-2.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                                <p className="text-[9px] text-slate-500 mb-0.5">{item.label}</p>
                                <p className="text-[11px] font-semibold" style={{ color: TEAL_LIGHT }}>{item.value}</p>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                              <span>Performance</span><span>4.4 / 5</span>
                            </div>
                            <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                              <div className="h-full rounded-full" style={{ width: "88%", backgroundColor: TEAL_LIGHT }} />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-28">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/tealbg.jpg')" }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.72)" }} />

        {/* content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(78,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
          >
            <Truck className="w-4 h-4" />
            Logistics & Distribution
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            See how Selevo works for{" "}
            <span style={{ color: TEAL_LIGHT }}>your logistics operation</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Get a personalised walkthrough of how Selevo handles driver hours, depot payroll, hours-of-service compliance, and multi-depot operations — tailored to your exact setup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{
                borderColor: "rgba(78,205,196,0.4)",
                color: TEAL_LIGHT,
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
