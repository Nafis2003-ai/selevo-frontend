import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  ShoppingBag,
  Clock,
  Building2,
  TrendingUp,
  DollarSign,
  UserPlus,
  LineChart,
  ChevronRight,
  CheckCircle2,
  Heart,
} from "lucide-react"



const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const solutions = [
  {
    icon: Clock,
    name: "Time & Attendance",
    description: "Manage part-time, casual, and seasonal staff hours across all stores — with rules that automatically adapt to each location's roster.",
    href: "/platform/time-attendance",
  },
  {
    icon: DollarSign,
    name: "Payroll",
    description: "Handle varied pay rates, shift premiums, weekend penalties, and commission-based structures across your entire retail network.",
    href: "/platform/payroll",
  },
  {
    icon: Building2,
    name: "Multi-Branch Operations",
    description: "Unify HR policies and reporting across every store location — HQ stays in control while store managers retain the access they need.",
    href: "/platform/multi-branch-operations",
  },
  {
    icon: UserPlus,
    name: "Onboarding & Offboarding",
    description: "Onboard large seasonal cohorts in days, not weeks — with templated workflows, digital documents, and automated access provisioning.",
    href: "/platform/onboarding-offboarding",
  },
  {
    icon: Heart,
    name: "Employee Engagement",
    description: "Keep frontline staff motivated, recognised, and connected — reducing costly churn before it impacts store performance.",
    href: "/platform/employee-engagement",
  },
  {
    icon: LineChart,
    name: "Reports & Analytics",
    description: "Track turnover, absenteeism, and headcount by store in real time — with dashboards that surface the insights that matter most.",
    href: "/platform/reports-analytics",
  },
]

const deepFeatures = [
  {
    label: "Seasonal Hiring",
    heading: "Onboard large seasonal cohorts quickly for peak periods",
    bullets: [
      "Batch-onboard hundreds of seasonal workers simultaneously with a single workflow",
      "Templated onboarding checklists ensure every new hire follows the same compliant process",
      "Digital document submission and e-signatures eliminate paperwork bottlenecks",
      "Get seasonal staff store-ready in hours — not weeks — so you never miss a peak period",
    ],
    cta: { label: "Explore Onboarding & Offboarding", href: "/platform/onboarding-offboarding" },
    imageRight: true,
  },
  {
    label: "Store Operations",
    heading: "Unified HR across every store location",
    bullets: [
      "Centralised HR policies applied consistently across every store and region",
      "Per-store reporting gives area managers instant visibility into their locations",
      "Store manager self-service reduces HR ticket volume at the head office level",
      "HQ oversight with full cross-store dashboards and consolidated workforce data",
    ],
    cta: { label: "Explore Multi-Branch Operations", href: "/platform/multi-branch-operations" },
    imageRight: false,
  },
  {
    label: "Compliance",
    heading: "Stay compliant with retail labour law — automatically",
    bullets: [
      "Roster compliance rules flag scheduling breaches before they happen",
      "Penalty rates and weekend loadings calculated and applied without manual intervention",
      "Working hours limits enforced automatically for part-time and casual staff",
      "A complete, timestamped audit trail for every HR action across every store",
    ],
    cta: { label: "Explore Compliance & Security", href: "/platform/compliance-security" },
    imageRight: true,
  },
  {
    label: "Retention",
    heading: "Reduce costly frontline staff turnover",
    bullets: [
      "Employee self-service app gives staff instant access to rosters, leave, and payslips",
      "Recognition programs surface high performers and reward consistent contributions",
      "Performance visibility helps store managers have meaningful development conversations",
      "Engagement surveys identify at-risk employees before they hand in their notice",
    ],
    cta: { label: "Explore Employee Engagement", href: "/platform/employee-engagement" },
    imageRight: false,
  },
]

const faqs = [
  {
    question: "How does Selevo handle high-volume seasonal hiring for retail peak periods?",
    answer:
      "Selevo's onboarding module supports batch processing — you can initiate onboarding for hundreds of seasonal workers simultaneously. Templated checklists, digital document submission, and automated approval workflows mean every hire follows a consistent, compliant process regardless of volume. Entire cohorts can be store-ready within hours of starting the process.",
  },
  {
    question: "Can Selevo manage HR across a large network of store locations?",
    answer:
      "Yes. Selevo is built for multi-entity, multi-location retail operations. Each store can maintain its own roster configurations, cost centres, and workflows, while head office administrators have full cross-store visibility, consolidated reporting, and centralised control over shared policies. Area managers can drill down into their specific locations without needing full system access.",
  },
  {
    question: "How does the platform ensure compliance for part-time and casual retail workers?",
    answer:
      "Selevo includes configurable compliance rules aligned to retail labour legislation — covering penalty rates, maximum rostered hours, mandatory break periods, and casual loading requirements. The system flags scheduling violations in real-time before rosters are published, and maintains a full audit trail for every HR action across every store for regulatory reporting.",
  },
  {
    question: "What tools does Selevo offer to reduce frontline staff turnover in retail?",
    answer:
      "Selevo includes an employee self-service app so frontline staff can access rosters, leave balances, and payslips without contacting HR. Built-in recognition workflows, engagement surveys, and performance visibility tools give store managers the data they need to support their teams. Identifying at-risk employees early allows managers to take action before turnover becomes a problem.",
  },
]

export default function RetailFMCGPage() {
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
            <ShoppingBag className="w-4 h-4" />
            Retail &amp; FMCG
          </div>

          {/* heading */}
          <h1
            className="text-5xl lg:text-[64px] font-bold leading-tight text-white max-w-3xl mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            HR Built for{" "}
            <span style={{ color: TEAL_LIGHT }}>High-Volume Retail</span>
          </h1>

          {/* subtitle */}
          <p
            className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Manage seasonal hiring surges, deliver consistent store-level HR, and keep your
            large frontline workforce engaged and compliant — all from one unified platform
            built for the pace of retail.
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
              { value: "50%", label: "Faster seasonal onboarding" },
              { value: "3×", label: "More stores per HR manager" },
              { value: "99.5%", label: "Payroll accuracy" },
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
              Being great at retail{" "}
              <br />
              <span style={{ color: TEAL }}>isn&apos;t enough</span>
            </h2>
            <p
              className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              You&apos;re not alone.{" "}
              <strong className="text-slate-700">68% of retail HR teams</strong>{" "}
              say managing seasonal spikes and fragmented store-level HR is their #1 operational challenge.
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
                  Seasonal workforce surges overwhelm HR
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Onboarding 200 workers in two weeks before a peak trading period is simply unmanageable with manual processes. Spreadsheets, paper forms, and email threads collapse under the volume — leaving new hires stuck waiting and stores understaffed when it matters most.
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
                  Store managers operate HR in isolation
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  When every store runs its own HR processes without central oversight, inconsistency is inevitable. Different rosters, different leave approvals, different onboarding steps — with no visibility at head office, compliance gaps and cost blowouts hide until it&apos;s too late.
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
                  High frontline turnover is draining capacity
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Retail frontline turnover rates can exceed 60% annually. Every departure means re-advertising, re-screening, re-onboarding — and a dip in service quality while the replacement gets up to speed. The recruiting treadmill burns HR time and budget that could be invested elsewhere.
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
              <span style={{ color: TEAL_LIGHT }}>retail &amp; FMCG HR</span>
            </h2>
            <p
              className="text-slate-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Every tool Selevo offers is designed around the real complexities of running HR across stores, seasonal peaks, and a large frontline workforce.
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

                {/* image side — mock UI */}
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
                        /* Seasonal onboarding batch mock */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { name: "Priya Sharma", dept: "Cashier · City Central", status: "Onboarding" },
                              { name: "Jake Nguyen", dept: "Stock Control · Westfield", status: "Onboarding" },
                              { name: "Amara Osei", dept: "Visual Merchandising · Eastgate", status: "Onboarding" },
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
                                <span
                                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                  style={{ backgroundColor: "rgba(78,205,196,0.15)", color: TEAL_LIGHT }}
                                >
                                  {row.status}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div
                            className="rounded-lg py-2 text-center text-xs font-semibold"
                            style={{ backgroundColor: TEAL, color: "#fff" }}
                          >
                            Batch onboard 186 seasonal workers
                          </div>
                        </>
                      )}

                      {idx === 1 && (
                        /* Store analytics dashboard mock */
                        <>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {[
                              { label: "Total stores", value: "34" },
                              { label: "Absent today", value: "18" },
                              { label: "Open shifts", value: "11" },
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
                              { label: "Roster hours within legal limits", ok: true },
                              { label: "Penalty rates applied to weekends", ok: true },
                              { label: "Break periods compliant", ok: true },
                              { label: "1 breach flagged — Westfield store", ok: false },
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

                      {idx === 3 && (
                        /* Employee self-service mock — retail context */
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}
                            >
                              RL
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold">Rachel Lim</p>
                              <p className="text-slate-500 text-[10px]">City Central · Store Manager</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                              { label: "Attendance", value: "97.4%" },
                              { label: "Leave balance", value: "9 days" },
                              { label: "Next shift", value: "Mon 08:30" },
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
                              <span>Engagement score</span><span>4.5 / 5</span>
                            </div>
                            <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                              <div className="h-full rounded-full" style={{ width: "90%", backgroundColor: TEAL_LIGHT }} />
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
            <ShoppingBag className="w-4 h-4" />
            Retail &amp; FMCG
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            See how Selevo works for{" "}
            <span style={{ color: TEAL_LIGHT }}>your retail business</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Get a personalised walkthrough of how Selevo handles seasonal hiring, multi-store management, payroll compliance, and frontline retention — tailored to your exact retail setup.
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
