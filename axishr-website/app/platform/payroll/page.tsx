import Link from "next/link"
import Image from "next/image"
import { PayrollFAQSection } from "@/components/platform/PayrollFAQSection"
import { PayrollVideoSection } from "@/components/platform/PayrollVideoSection"
import {
  CheckCircle2, DollarSign, ArrowRight,
  ClipboardList, Calculator, Globe, Clock, FileSearch, Lock,
  ClipboardCheck, Eye, PenLine, Send,
  Users, BarChart2,
} from "lucide-react"

const TEAL = "#0b6b62"

const steps = [
  {
    num: 1,
    icon: ClipboardCheck,
    title: "Validate Inputs",
    body: "Validate attendance, leave, claims, and compensation inputs before run.",
  },
  {
    num: 2,
    icon: Eye,
    title: "Preview Payroll",
    body: "Execute payroll preview to identify exceptions and outlier records.",
  },
  {
    num: 3,
    icon: PenLine,
    title: "Resolve Exceptions",
    body: "Resolve flagged records with traceable correction workflows.",
  },
  {
    num: 4,
    icon: Lock,
    title: "Approve & Lock",
    body: "Approve and lock payroll to prevent unauthorized post-approval edits.",
  },
  {
    num: 5,
    icon: Send,
    title: "Distribute Outputs",
    body: "Distribute outputs including payslips, bank files, and branch summaries.",
  },
]

const coreFeatures = [
  {
    icon: ClipboardList,
    title: "Payroll Run Management",
    description:
      "Staged review, approval, and locking controls ensure every pay cycle is verified before disbursement.",
  },
  {
    icon: Calculator,
    title: "Calculation Engine",
    description:
      "Handles earnings, deductions, taxes, and policy logic with precision — configurable to your organisation's rules.",
  },
  {
    icon: Globe,
    title: "Statutory Automation",
    description:
      "Region-specific contributions and tax handling are automated, keeping you compliant across every jurisdiction.",
  },
  {
    icon: Clock,
    title: "Attendance & Claims Integration",
    description:
      "Attendance records and approved claims flow directly into payroll for cleaner, validated input readiness.",
  },
  {
    icon: FileSearch,
    title: "Audit-Ready Breakdown",
    description:
      "Itemised calculation records per payslip give HR and finance a clear, traceable paper trail for every run.",
  },
  {
    icon: Lock,
    title: "Secure Payslip Delivery",
    description:
      "Employees access payslips through self-service with role-based controls protecting sensitive financial data.",
  },
]

export default function PayrollPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-71px)] flex items-center overflow-hidden bg-white">

        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(11,107,98,0.07) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Upper-right glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 75% 85% at 100% 0%, rgba(11,107,98,0.13) 0%, rgba(11,107,98,0.05) 45%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Copy ── */}
            <div className="space-y-9">

              {/* Eyebrow badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(11,107,98,0.08)",
                  color: TEAL,
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                <DollarSign className="w-3.5 h-3.5" />
                Platform · Payroll
              </div>

              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Payroll that runs
                  <br />
                  <span style={{ color: TEAL }}>on time, every time.</span>
                </h1>

                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  From attendance to disbursement in minutes — Selevo connects
                  every HR input into a single, accurate payroll cycle with
                  full compliance built in.
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  "Automated pay runs with zero manual entry",
                  "Multi-country & multi-currency support",
                  "Full audit trail on every transaction",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                    <span
                      className="text-sm text-slate-600"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
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

            {/* ── Right: Dashboard image ── */}
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 24px 80px rgba(11,107,98,0.18), 0 4px 24px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/payroll-dashboard.png"
                  alt="Payroll dashboard"
                  width={640}
                  height={460}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── About / Split Section ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#071f1c" }}>
        <div className="max-w-6xl mx-auto">

          {/* Centered heading */}
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight text-center mb-16 text-white"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Payroll Operations Built For{" "}
            <span style={{ color: "#4ecdc4" }}>Accuracy, Control, And Trust</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Image ── */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 4px 20px rgba(0,0,0,0.2)" }}
            >
              <Image
                src="/payroll-about.png"
                alt="Payroll operations"
                width={620}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* ── Right: Text blocks ── */}
            <div className="space-y-8">
              {[
                {
                  label: "Why This Matters",
                  body: "Payroll is one of the highest-trust processes in any company. Even small errors impact employee confidence and create legal and financial risk.",
                },
                {
                  label: "The Operational Job",
                  body: "Process payroll accurately with transparent calculations, statutory handling, and full approval governance.",
                },
                {
                  label: "The Operational Challenge",
                  body: "Payroll teams often depend on manual consolidation from attendance, leave, claims, and compensation changes. This creates end-of-cycle pressure and limited traceability when exceptions occur.",
                },
                {
                  label: "How AxisHR Resolves It",
                  body: "AxisHR manages payroll as a structured workflow from pre-check to lock. Every run is traceable, every exception is visible, and downstream outputs are controlled.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4">
                  {/* Accent bar */}
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

          {/* Heading */}
          <h2
            className="text-center text-3xl sm:text-4xl font-bold mb-16"
            style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
          >
            Core Features
          </h2>

          {/* 3 × 2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {coreFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <div key={feat.title} className="flex flex-col items-center text-center">

                  {/* Icon */}
                  <div className="mb-5">
                    <Icon
                      className="w-10 h-10"
                      style={{ color: TEAL }}
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "var(--font-merriweather)" }}
                  >
                    {feat.title}
                  </h3>

                  {/* Description */}
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
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(78,205,196,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full py-24">

          {/* Heading */}
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

          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:block relative">
            {/* Gradient connector line — fades at both ends */}
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
                  {/* Number circle with glow */}
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
                  {/* Icon */}
                  <Icon size={28} strokeWidth={1.4} style={{ color: "#4ecdc4" }} className="mb-5" />
                  {/* Title */}
                  <h3
                    className="text-base font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {title}
                  </h3>
                  {/* Body */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stepper */}
          <div className="lg:hidden relative">
            {/* Gradient vertical line */}
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
                      <h3
                        className="text-base font-bold text-white"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-plus-jakarta)" }}
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

      {/* ── Compliance And Governance Context ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* ── Left: Image ── */}
            <div className="lg:sticky lg:top-28">
              <Image
                src="/compliance-image - Copy.png"
                alt="Compliance and governance"
                width={620}
                height={520}
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 20px 48px rgba(11,107,98,0.18)) drop-shadow(0 6px 16px rgba(0,0,0,0.1))" }}
              />
            </div>

            {/* ── Right: Content ── */}
            <div>

              {/* Eyebrow */}
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
              >
                Compliance &amp; Governance
              </p>

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
              >
                Compliance And Governance Context
              </h2>

              {/* Paragraph 1 */}
              <p
                className="text-slate-500 leading-relaxed mb-5 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Payroll compliance requires defensible records for wages, deductions, taxes, and approvals.
                AxisHR maintains structured payroll evidence to support internal controls and external review.
              </p>

              {/* Paragraph 2 */}
              <p
                className="text-slate-500 leading-relaxed mb-12 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                This feature set is designed to support European and American compliance operations through
                policy-driven workflows and auditable change history, including wage-and-hour, statutory
                contribution, and payroll tax documentation practices.
              </p>

              {/* Divider */}
              <div className="h-px mb-10" style={{ backgroundColor: "rgba(11,107,98,0.1)" }} />

              {/* Who Uses This Feature */}
              <p
                className="text-xs font-bold uppercase tracking-widest mb-7"
                style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
              >
                Who Uses This Feature
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Calculator,
                    role: "Payroll Specialists",
                    desc: "Executing monthly or biweekly payroll cycles.",
                  },
                  {
                    icon: BarChart2,
                    role: "Finance Leaders",
                    desc: "Reviewing cost summaries and branch-level distributions.",
                  },
                  {
                    icon: Users,
                    role: "HR Operations Teams",
                    desc: "Validating employee and policy input accuracy.",
                  },
                ].map(({ icon: Icon, role, desc }) => (
                  <div key={role} className="flex items-start gap-4">
                    {/* Icon badge */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(11,107,98,0.07)" }}
                    >
                      <Icon size={19} strokeWidth={1.4} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-slate-800 mb-0.5"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {role}
                      </p>
                      <p
                        className="text-sm text-slate-500"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
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
      <PayrollVideoSection />

      {/* ── FAQ ── */}
      <PayrollFAQSection />

    </main>
  )
}
