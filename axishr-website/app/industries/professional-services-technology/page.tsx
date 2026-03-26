import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  DollarSign,
  UserPlus,
  LineChart,
  BarChart3,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"



const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const solutions = [
  {
    icon: Users,
    name: "Employee Management",
    description: "A single source of truth for all employee records — from offer letter to offboarding, every data point in one place.",
    href: "/platform/employee-management",
  },
  {
    icon: DollarSign,
    name: "Payroll",
    description: "Handle complex salary structures, performance bonuses, contractor payroll, and multi-currency pay runs without manual reconciliation.",
    href: "/platform/payroll",
  },
  {
    icon: TrendingUp,
    name: "Performance Management",
    description: "Structured review cycles, goal tracking, and calibration workflows built for high-performance professional teams.",
    href: "/platform/performance-management",
  },
  {
    icon: UserPlus,
    name: "Onboarding & Offboarding",
    description: "Get new hires productive from day one with role-based access provisioning, digital documents, and templated checklists.",
    href: "/platform/onboarding-offboarding",
  },
  {
    icon: LineChart,
    name: "Compensation",
    description: "Transparent pay bands, bonus tracking, and equity visibility that keep your compensation strategy competitive and consistent.",
    href: "/platform/compensation",
  },
  {
    icon: BarChart3,
    name: "Reports & Analytics",
    description: "Real-time headcount dashboards, capacity planning signals, and attrition data to keep people ops ahead of the business.",
    href: "/platform/reports-analytics",
  },
]

const deepFeatures = [
  {
    label: "Onboarding",
    heading: "Get new hires up to speed instantly",
    bullets: [
      "Digital onboarding checklists that adapt to each role and department from day one",
      "Role-based system access provisioning triggered automatically on hire date",
      "Document collection, e-signatures, and policy acknowledgement in a single workflow",
      "First-day readiness scores so HR knows every new hire is fully set up before they start",
    ],
    cta: { label: "Explore Onboarding & Offboarding", href: "/platform/onboarding-offboarding" },
    imageRight: true,
  },
  {
    label: "Performance",
    heading: "Run structured reviews for high-performing teams",
    bullets: [
      "Configurable review cycles — quarterly, bi-annual, or annual — with automated reminders",
      "Goal tracking linked directly to individual contributor and team-level OKRs",
      "360-degree feedback loops that gather input from peers, managers, and direct reports",
      "Calibration workflows so managers align on ratings before results are shared",
    ],
    cta: { label: "Explore Performance Management", href: "/platform/performance-management" },
    imageRight: false,
  },
  {
    label: "Compensation",
    heading: "Manage competitive pay transparently",
    bullets: [
      "Define and maintain pay bands by level, role, and geography in one place",
      "Track bonus cycles, variable pay, and commission structures without spreadsheets",
      "Give employees visibility into their compensation tier and progression path",
      "Generate compensation reports for board reviews, audits, and investor updates",
    ],
    cta: { label: "Explore Compensation", href: "/platform/compensation" },
    imageRight: true,
  },
  {
    label: "Analytics",
    heading: "Real-time headcount and capacity planning",
    bullets: [
      "Live org charts that reflect every hire, transfer, and team change as they happen",
      "Headcount forecasting tied to project pipeline and budget cycles",
      "Attrition signals that surface flight-risk employees before they hand in notice",
      "Project staffing gap analysis to align people capacity with client commitments",
    ],
    cta: { label: "Explore Reports & Analytics", href: "/platform/reports-analytics" },
    imageRight: false,
  },
]

const faqs = [
  {
    question: "How does Selevo handle compensation structures for professional services firms?",
    answer:
      "Selevo supports multi-tiered compensation configurations including base salary, performance bonuses, project-based incentives, and contractor pay. Pay bands can be defined by role level, practice area, or geography. The platform keeps compensation data centralised and auditable, with manager-level visibility controls so sensitive data stays appropriately restricted.",
  },
  {
    question: "Can Selevo support rapid hiring and offboarding cycles typical in tech and consulting?",
    answer:
      "Yes. Selevo's onboarding and offboarding modules are designed for speed and repeatability. Role-based templates let HR trigger a complete onboarding workflow — system access, document collection, introductory tasks — in minutes. Offboarding checklists ensure access is revoked, assets are returned, and exit documentation is completed consistently every time.",
  },
  {
    question: "How does the performance management module work for project-based teams?",
    answer:
      "Selevo's performance management module supports configurable review cycles that can align with project milestones or calendar quarters. You can set individual goals tied to OKRs, run peer and manager reviews simultaneously, and use calibration workflows to normalise ratings across teams. All review history is stored against each employee record for longitudinal tracking.",
  },
  {
    question: "Does Selevo give us real-time visibility into headcount and team capacity?",
    answer:
      "Selevo's reporting and analytics module provides live org charts, headcount dashboards segmented by department or practice area, and capacity signals that update as hires, transfers, and exits are processed. You can build custom reports for weekly people ops reviews, board decks, or investor reporting — with data that is always current, not exported from a stale spreadsheet.",
  },
]

export default function ProfessionalServicesTechnologyPage() {
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
            <Briefcase className="w-4 h-4" />
            Professional Services &amp; Technology
          </div>

          {/* heading */}
          <h1
            className="text-5xl lg:text-[64px] font-bold leading-tight text-white max-w-3xl mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            HR Built for{" "}
            <span style={{ color: TEAL_LIGHT }}>Fast-Moving Teams</span>
          </h1>

          {/* subtitle */}
          <p
            className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Manage project-based teams, stay competitive on talent, and run rapid hiring
            cycles without the admin overhead — all from one HR platform built for the pace
            of high-performance professional services and technology organisations.
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
              { value: "40%", label: "Less time on HR admin" },
              { value: "3×", label: "Faster new-hire onboarding" },
              { value: "Real-time", label: "Headcount data" },
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
              Being great at delivery{" "}
              <br />
              <span style={{ color: TEAL }}>isn't enough</span>
            </h2>
            <p
              className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              You're not alone.{" "}
              <strong className="text-slate-700">71% of professional services HR teams</strong>{" "}
              say fragmented people data and manual processes are their #1 operational bottleneck.
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
                {/* scattered dots — represents disconnected data across projects and tools */}
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
                  Headcount data is spread across projects, teams, and tools
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Employee records in one system, project assignments in a spreadsheet, capacity data in a slide deck. When there is no single source of truth, HR spends more time chasing information than acting on it — and leadership decisions get made on stale data.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* bar chart visual — represents compensation complexity */}
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
                  Competitive compensation structures are complex and opaque
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Variable pay, performance bonuses, equity grants, and contractor rates all managed in isolation. Without a centralised compensation framework, inconsistencies creep in — eroding trust, complicating reviews, and creating retention risk in a market where talent has options.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              {/* horizontal lines visual — represents HR always catching up */}
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
                  Rapid hiring and offboarding cycles leave HR constantly catching up
                </h3>
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Project ramp-ups, contract endings, and rolling headcount changes mean HR is always reacting. Manual onboarding processes, inconsistent offboarding steps, and delayed access provisioning slow teams down and introduce risk at exactly the moments speed matters most.
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
              <span style={{ color: TEAL_LIGHT }}>professional services HR</span>
            </h2>
            <p
              className="text-slate-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Every tool Selevo offers is designed around the real complexities of running people ops across fast-moving teams, competitive talent markets, and project-driven organisations.
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
                        /* Onboarding readiness mock */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { name: "Priya Sharma", dept: "Engineering · IC3", status: "Day 1 ready" },
                              { name: "Marcus Chen", dept: "Product · IC4", status: "Docs pending" },
                              { name: "Aoife Brennan", dept: "Client Services · AM", status: "Day 1 ready" },
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
                                  style={{
                                    backgroundColor: row.status === "Day 1 ready" ? "rgba(78,205,196,0.15)" : "rgba(239,68,68,0.12)",
                                    color: row.status === "Day 1 ready" ? TEAL_LIGHT : "#f87171",
                                  }}
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
                            Onboard 12 new hires this week
                          </div>
                        </>
                      )}

                      {idx === 1 && (
                        /* Performance review cycle mock */
                        <>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {[
                              { label: "Reviews open", value: "38" },
                              { label: "Completed", value: "24" },
                              { label: "Avg score", value: "4.1" },
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
                        /* Compensation pay bands mock */
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { label: "Engineering IC3 — Pay band set", ok: true },
                              { label: "Product IC4 — Pay band set", ok: true },
                              { label: "Client Services AM — Within band", ok: true },
                              { label: "1 offer above band — Design Lead", ok: false },
                              { label: "Q2 bonus cycle configured", ok: true },
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
                            <span className="text-[10px] text-slate-500">Compensation health</span>
                            <span className="text-sm font-bold" style={{ color: TEAL_LIGHT }}>96 / 100</span>
                          </div>
                        </>
                      )}

                      {idx === 3 && (
                        /* Analytics headcount & capacity mock */
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                              style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}
                            >
                              EP
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold">Elena Park</p>
                              <p className="text-slate-500 text-[10px]">Engineering · Senior IC</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[
                              { label: "Headcount", value: "142" },
                              { label: "Open roles", value: "11" },
                              { label: "Projects staffed", value: "94%" },
                              { label: "Attrition risk", value: "View →" },
                            ].map((item) => (
                              <div key={item.label} className="rounded-lg p-2.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                                <p className="text-[9px] text-slate-500 mb-0.5">{item.label}</p>
                                <p className="text-[11px] font-semibold" style={{ color: TEAL_LIGHT }}>{item.value}</p>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div className="flex justify-between text-[9px] text-slate-500 mb-1">
                              <span>Capacity utilisation</span><span>94%</span>
                            </div>
                            <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                              <div className="h-full rounded-full" style={{ width: "94%", backgroundColor: TEAL_LIGHT }} />
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
            <Briefcase className="w-4 h-4" />
            Professional Services &amp; Technology
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            See how Selevo works for{" "}
            <span style={{ color: TEAL_LIGHT }}>your team</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Get a personalised walkthrough of how Selevo streamlines people ops, accelerates hiring velocity, and powers performance management — tailored to the way your organisation works.
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
