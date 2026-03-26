import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  Factory,
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
    description: "Shift rotations, overtime rules, and night differentials configured once — attendance flows straight into payroll.",
    href: "/platform/time-attendance",
  },
  {
    icon: DollarSign,
    name: "Payroll",
    description: "One engine runs payroll across all plants with full traceability — from hours worked to final payslip.",
    href: "/platform/payroll",
  },
  {
    icon: Building2,
    name: "Multi-Branch Operations",
    description: "Every plant on unified policies, HQ gets consolidated dashboards and cross-site control from one login.",
    href: "/platform/multi-branch-operations",
  },
  {
    icon: ShieldCheck,
    name: "Compliance & Security",
    description: "Real-time flags catch rest period breaches, overtime caps, and statutory gaps before they become problems.",
    href: "/platform/compliance-security",
  },
  {
    icon: UserPlus,
    name: "Onboarding & Offboarding",
    description: "Batch-onboard entire worker cohorts with templated workflows, digital documents, and automated access.",
    href: "/platform/onboarding-offboarding",
  },
  {
    icon: LineChart,
    name: "Reports & Analytics",
    description: "Live dashboards surface absenteeism, overtime costs, and turnover data across every plant in real time.",
    href: "/platform/reports-analytics",
  },
]

const deepFeatures = [
  {
    label: "Automation",
    heading: "Automate routine manufacturing HR processes",
    bullets: [
      "Automatically calculate shift-based overtime, allowances, and payroll deductions",
      "Onboard new workers in minutes with digital document workflows and e-signatures",
      "Get real-time alerts on attendance exceptions, late arrivals, and no-shows",
      "Connect with existing ERP, time-clock, and accounting systems via integrations",
    ],
    cta: { label: "Explore Payroll", href: "/platform/payroll" },
    imageRight: true,
  },
  {
    label: "Workforce Visibility",
    heading: "Get full visibility across every plant and shift",
    bullets: [
      "Track headcount, absenteeism, and overtime costs by plant or department",
      "Monitor shift coverage gaps before they impact production output",
      "Build custom HQ-level reports with live workforce data in one click",
      "Identify overtime trends and cost anomalies before they escalate",
    ],
    cta: { label: "Explore Reports & Analytics", href: "/platform/reports-analytics" },
    imageRight: false,
  },
  {
    label: "Compliance",
    heading: "Stay ahead of labour law — automatically",
    bullets: [
      "Configure rest period rules, overtime caps, and statutory deduction thresholds",
      "Get flagged the moment a policy violation is about to occur",
      "Maintain a complete, timestamped audit trail for every HR action",
      "Auto-generate compliance reports ready for regulatory inspections",
    ],
    cta: { label: "Explore Compliance & Security", href: "/platform/compliance-security" },
    imageRight: true,
  },
  {
    label: "Retention",
    heading: "Reduce turnover in a competitive labour market",
    bullets: [
      "Give workers self-service access to shifts, leave balances, and payslips",
      "Run structured performance reviews tied to real attendance and shift data",
      "Use engagement data to identify at-risk employees before they leave",
      "Automate recognition workflows to reward consistent, high-performing teams",
    ],
    cta: { label: "Explore Performance Management", href: "/platform/performance-management" },
    imageRight: false,
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
              Being great at manufacturing{" "}
              <br />
              <span style={{ color: TEAL }}>isn't enough</span>
            </h2>
            <p
              className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              You're not alone.{" "}
              <strong className="text-slate-700">74% of manufacturing HR teams</strong>{" "}
              say manual processes and disconnected systems are their #1 operational challenge.
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
                {/* scattered dots — represents disconnected data */}
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
                  Workforce data is scattered — and impossible to act on
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Attendance sheets at one plant, shift rosters in a spreadsheet, payroll exports in an email thread. When data lives everywhere, HR spends more time chasing information than making decisions.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* bar chart visual — represents compliance chaos */}
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
                  Compliance gaps hide until it's too late
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Missed rest periods, overtime breaches, statutory deduction errors — in manufacturing, non-compliance doesn't just mean fines. It means production stoppages, legal exposure, and damaged workforce trust.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* horizontal lines visual — represents manual paperwork */}
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
                  Manual processes slow everything down at scale
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Onboarding a batch of 80 new hires, running payroll across three plants, reconciling leave balances for rotating shift workers — done manually, it's a recipe for errors, delays, and burned-out HR teams.
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
              <span style={{ color: TEAL_LIGHT }}>manufacturing HR</span>
            </h2>
            <p
              className="text-slate-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Every tool Selevo offers is designed around the real complexities of running HR across plants, shifts, and compliance requirements.
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
                        /* Payroll run mock */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { name: "Amir Hassan", dept: "Assembly Line A", amt: "$3,840" },
                              { name: "Sarah Mitchell", dept: "Quality Control", amt: "$4,200" },
                              { name: "James Okonkwo", dept: "Logistics", amt: "$3,150" },
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
                            Process 148 workers
                          </div>
                        </>
                      )}

                      {idx === 1 && (
                        /* Analytics dashboard mock */
                        <>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {[
                              { label: "Headcount", value: "248" },
                              { label: "Absent today", value: "12" },
                              { label: "On overtime", value: "34" },
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

                      {idx === 2 && (
                        /* Compliance checklist mock */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { label: "Rest periods compliant", ok: true },
                              { label: "Overtime within legal cap", ok: true },
                              { label: "Statutory deductions applied", ok: true },
                              { label: "2 violations flagged — Plant B", ok: false },
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
                            <span className="text-sm font-bold" style={{ color: TEAL_LIGHT }}>94 / 100</span>
                          </div>
                        </>
                      )}

                      {idx === 3 && (
                        /* Employee self-service mock */
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}
                            >
                              JM
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold">John Martinez</p>
                              <p className="text-slate-500 text-[10px]">Plant C · Shift Lead</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                              { label: "Attendance", value: "98.2%" },
                              { label: "Leave balance", value: "12 days" },
                              { label: "Next shift", value: "Tue 06:00" },
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
                              <span>Performance</span><span>4.2 / 5</span>
                            </div>
                            <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                              <div className="h-full rounded-full" style={{ width: "84%", backgroundColor: TEAL_LIGHT }} />
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
            <Factory className="w-4 h-4" />
            Manufacturing
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            See how Selevo works for{" "}
            <span style={{ color: TEAL_LIGHT }}>your factory</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Get a personalised walkthrough of how Selevo handles shifts, payroll, compliance, and multi-plant operations — tailored to your exact setup.
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
