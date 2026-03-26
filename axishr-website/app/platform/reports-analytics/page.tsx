import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import { PlatformVideoSection } from "@/components/platform/PlatformVideoSection"
import {
  PieChart, CheckCircle2, ArrowRight,
  Filter, Download, BarChart2, LayoutDashboard,
  FileText, Calendar, Users, Database,
} from "lucide-react"

const TEAL = "#0b6b62"

const steps = [
  {
    num: 1,
    icon: LayoutDashboard,
    title: "Select Report Type",
    body: "Choose from pre-built report templates covering headcount, payroll, leave, attendance, compliance, and more.",
  },
  {
    num: 2,
    icon: Filter,
    title: "Apply Filters",
    body: "Segment data by branch, department, entity, employment type, or any combination of parameters.",
  },
  {
    num: 3,
    icon: Calendar,
    title: "Set Date Range",
    body: "Define the reporting period — daily, monthly, quarterly, or custom date ranges — for precise data extraction.",
  },
  {
    num: 4,
    icon: BarChart2,
    title: "Review Data",
    body: "View interactive charts, summary tables, and drill-down data directly within the platform in real time.",
  },
  {
    num: 5,
    icon: Download,
    title: "Export or Schedule",
    body: "Export reports to Excel, PDF, or CSV formats, or schedule automated delivery to defined recipients on a recurring basis.",
  },
]

const coreFeatures = [
  {
    icon: Users,
    title: "Headcount Analytics",
    description:
      "Real-time headcount dashboards broken down by entity, branch, department, employment type, and tenure — with trend data over configurable periods.",
  },
  {
    icon: BarChart2,
    title: "Payroll Reports",
    description:
      "Payroll cost summaries, payslip breakdowns, variance reports, and statutory contribution schedules — all generated from locked payroll runs.",
  },
  {
    icon: Calendar,
    title: "Leave Dashboards",
    description:
      "Leave utilisation, balance summary, and absence trend reports across teams and entities — enabling proactive workforce planning.",
  },
  {
    icon: FileText,
    title: "Compliance Reports",
    description:
      "Statutory reporting outputs, audit trail exports, and data integrity reports designed to support internal and external compliance requirements.",
  },
  {
    icon: Database,
    title: "Branch Summaries",
    description:
      "Consolidated and branch-segmented performance summaries covering payroll cost, headcount, turnover, and leave metrics for leadership review.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Report Builder",
    description:
      "Build and save custom report configurations selecting the exact fields, filters, and date ranges required for recurring business reporting needs.",
  },
]

const faqs = [
  {
    question: "Can we access reports for all branches from one view?",
    answer:
      "Yes. Group-level administrators can access consolidated reports across all entities simultaneously, with the ability to filter down to a specific branch, department, or individual. Branch-level users see data scoped to their entity.",
  },
  {
    question: "What export formats are supported?",
    answer:
      "Selevo supports export to Excel (XLSX), CSV, and PDF. Each format is appropriate for different downstream uses — Excel and CSV for data analysis in finance tools, PDF for formal reporting and audit submissions.",
  },
  {
    question: "Can we schedule reports to be generated and sent automatically?",
    answer:
      "Yes. Reports can be scheduled to generate on a daily, weekly, or monthly basis and delivered by email to defined recipients. This is useful for recurring payroll cost summaries, headcount snapshots, and compliance reports.",
  },
  {
    question: "How current is the data in the dashboards?",
    answer:
      "HR module data such as headcount, leave balances, and attendance is updated in real time as changes are made in the system. Payroll data reflects the most recently locked and approved payroll run.",
  },
]

export default function ReportsAnalyticsPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-71px)] flex items-center overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(11,107,98,0.07) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 75% 85% at 100% 0%, rgba(11,107,98,0.13) 0%, rgba(11,107,98,0.05) 45%, transparent 70%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-9">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(11,107,98,0.08)",
                  color: TEAL,
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                <PieChart className="w-3.5 h-3.5" />
                Platform · Reports &amp; Analytics
              </div>
              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Insight that drives
                  <br />
                  <span style={{ color: TEAL }}>smarter decisions.</span>
                </h1>
                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Headcount reports, payroll summaries, compliance dashboards, and branch-level
                  analytics — all in real time.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Real-time dashboards across all HR modules",
                  "Branch and entity level drill-down reports",
                  "Exportable formats for finance and compliance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                    <span className="text-sm text-slate-600" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Get a demo
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  See all features
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 24px 80px rgba(11,107,98,0.18), 0 4px 24px rgba(0,0,0,0.08)",
                  minHeight: "400px",
                  background: "linear-gradient(135deg, #cde8e4 0%, #0b6b62 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#071f1c" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight text-center mb-16 text-white"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Reports &amp; Analytics Built For{" "}
            <span style={{ color: "#4ecdc4" }}>Visibility, Decisions, And Governance</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                minHeight: "360px",
                background: "linear-gradient(135deg, #0f3d38 0%, #1a6b5e 100%)",
              }}
            />
            <div className="space-y-8">
              {[
                {
                  label: "Why This Matters",
                  body: "HR data that cannot be easily surfaced, filtered, and exported is not useful to the business. Leadership needs reliable, current data to make workforce decisions — and audit teams need structured records for compliance review.",
                },
                {
                  label: "The Operational Job",
                  body: "Provide HR, finance, and leadership with real-time visibility into headcount, payroll cost, leave, and compliance data — across all branches and entities — without manual report assembly.",
                },
                {
                  label: "The Operational Challenge",
                  body: "Organisations using fragmented HR tools often spend significant time manually pulling data from multiple systems and assembling it into reports — a process that is slow, error-prone, and always behind the current state.",
                },
                {
                  label: "How Selevo Resolves It",
                  body: "Selevo generates all reports directly from live system data, with pre-built templates, flexible filters, and export options — so HR teams spend time acting on insight rather than producing it.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-1 rounded-full mt-1"
                    style={{ backgroundColor: "#4ecdc4", minHeight: "100%" }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: "#4ecdc4", fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.58)", fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center text-3xl sm:text-4xl font-bold mb-16"
            style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
          >
            Core Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {coreFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <div key={feat.title} className="flex flex-col items-center text-center">
                  <div className="mb-5">
                    <Icon className="w-10 h-10" style={{ color: TEAL }} strokeWidth={1.4} />
                  </div>
                  <h3
                    className="text-base font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "var(--font-merriweather)" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-sm text-slate-500 leading-relaxed max-w-[240px]"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {feat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Implementation Process ── */}
      <section
        className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#071f1c", minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(78,205,196,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full py-24">
          <div className="text-center mb-28">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#4ecdc4", fontFamily: "var(--font-plus-jakarta)" }}
            >
              Step by Step
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Implementation Process
            </h2>
          </div>
          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div
              className="absolute left-[10%] right-[10%]"
              style={{
                top: "2.5rem",
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(78,205,196,0.35) 15%, rgba(78,205,196,0.35) 85%, transparent)",
              }}
            />
            <div className="grid grid-cols-5 gap-8">
              {steps.map(({ num, icon: Icon, title, body }) => (
                <div key={num} className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl mb-10 relative z-10 border-2"
                    style={{
                      backgroundColor: "#071f1c",
                      borderColor: "#4ecdc4",
                      color: "#4ecdc4",
                      fontFamily: "var(--font-plus-jakarta)",
                      boxShadow: "0 0 24px rgba(78,205,196,0.22), 0 0 6px rgba(78,205,196,0.15)",
                    }}
                  >
                    {num}
                  </div>
                  <Icon size={28} strokeWidth={1.4} style={{ color: "#4ecdc4" }} className="mb-5" />
                  <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-plus-jakarta)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="lg:hidden relative">
            <div
              className="absolute w-px"
              style={{
                left: "2.5rem",
                top: "2.5rem",
                bottom: "2.5rem",
                background: "linear-gradient(to bottom, transparent, rgba(78,205,196,0.35) 10%, rgba(78,205,196,0.35) 90%, transparent)",
              }}
            />
            <div className="space-y-14">
              {steps.map(({ num, icon: Icon, title, body }) => (
                <div key={num} className="flex gap-8 relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10 border-2"
                    style={{
                      backgroundColor: "#071f1c",
                      borderColor: "#4ecdc4",
                      color: "#4ecdc4",
                      fontFamily: "var(--font-plus-jakarta)",
                      boxShadow: "0 0 24px rgba(78,205,196,0.22)",
                    }}
                  >
                    {num}
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} strokeWidth={1.4} style={{ color: "#4ecdc4" }} />
                      <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-plus-jakarta)" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Context Section ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div
              className="lg:sticky lg:top-28 rounded-2xl overflow-hidden"
              style={{
                minHeight: "400px",
                background: "linear-gradient(135deg, #cde8e4 0%, #0b6b62 100%)",
              }}
            />
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
              >
                Business Intelligence
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
              >
                Analytics That Connect HR To Business Performance
              </h2>
              <p
                className="text-slate-500 leading-relaxed mb-5 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Workforce data is one of the most valuable inputs to business decision-making — covering cost, capacity, risk, and culture. Organisations that can access this data in real time and at the right level of detail make faster, better-informed decisions at every level of leadership.
              </p>
              <p
                className="text-slate-500 leading-relaxed mb-12 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Selevo's reporting layer is designed to serve every audience — from HR administrators needing operational detail to board-level leadership needing consolidated workforce cost and headcount summaries across their entire group.
              </p>
              <div className="h-px mb-10" style={{ backgroundColor: "rgba(11,107,98,0.1)" }} />
              <p
                className="text-xs font-bold uppercase tracking-widest mb-7"
                style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
              >
                Who Uses This Feature
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    role: "HR Directors",
                    desc: "Reviewing headcount trends, leave utilisation, and workforce composition data to inform strategic planning.",
                  },
                  {
                    icon: BarChart2,
                    role: "Finance Teams",
                    desc: "Accessing payroll cost summaries, statutory contribution reports, and branch-level financial breakdowns for accounting and budgeting.",
                  },
                  {
                    icon: Database,
                    role: "Branch Managers",
                    desc: "Monitoring their entity's headcount, attendance patterns, and leave usage to manage team productivity and resource allocation.",
                  },
                ].map(({ icon: Icon, role, desc }) => (
                  <div key={role} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(11,107,98,0.07)" }}
                    >
                      <Icon size={19} strokeWidth={1.4} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 mb-0.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {role}
                      </p>
                      <p className="text-sm text-slate-500" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <PlatformVideoSection
        heading="See Reports & Analytics"
        headingAccent="in Action"
        subtitle="Watch how Selevo delivers real-time workforce dashboards, branch summaries, and exportable compliance reports."
        videoId="f-tyrSsy04k"
      />

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
