import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import { PlatformVideoSection } from "@/components/platform/PlatformVideoSection"
import {
  CalendarDays, CheckCircle2, ArrowRight,
  Settings, ClipboardCheck, RefreshCw,
  Users, BarChart2, Bell, Layers, BookOpen,
} from "lucide-react"

const TEAL = "#0b6b62"

const steps = [
  {
    num: 1,
    icon: BookOpen,
    title: "Define Policy",
    body: "Create leave policies specifying eligible leave types, entitlement rules, and carryover conditions per employment category.",
  },
  {
    num: 2,
    icon: Layers,
    title: "Set Entitlements",
    body: "Assign entitlement amounts to employees based on their role, seniority, or contract type with automatic accrual schedules.",
  },
  {
    num: 3,
    icon: Settings,
    title: "Configure Approvals",
    body: "Set up single or multi-level approval workflows so leave requests route to the correct authoriser automatically.",
  },
  {
    num: 4,
    icon: ClipboardCheck,
    title: "Process Requests",
    body: "Employees submit requests through self-service, and approvers are notified instantly to review and decide.",
  },
  {
    num: 5,
    icon: RefreshCw,
    title: "Sync Balances to Payroll",
    body: "Approved leave records and balance deductions sync to payroll, ensuring accurate deductions and no-pay calculations.",
  },
]

const coreFeatures = [
  {
    icon: Layers,
    title: "Entitlement Engine",
    description:
      "Configure leave entitlements by employment type, grade, or tenure with support for statutory minimums and enhanced contractual allowances.",
  },
  {
    icon: RefreshCw,
    title: "Accrual Automation",
    description:
      "Leave balances accrue automatically on a monthly, quarterly, or annual basis according to the policy rules set for each employee group.",
  },
  {
    icon: ClipboardCheck,
    title: "Approval Workflows",
    description:
      "Configurable single or multi-level approval chains ensure leave requests reach the right authoriser with notifications at each stage.",
  },
  {
    icon: BarChart2,
    title: "Balance Tracking",
    description:
      "Real-time leave balance visibility for employees and HR — including entitlement, accrued, taken, pending, and remaining days.",
  },
  {
    icon: CalendarDays,
    title: "Payroll Integration",
    description:
      "Approved leave deductions and no-pay calculations are synced directly into payroll, eliminating manual adjustments each cycle.",
  },
  {
    icon: Bell,
    title: "Leave Calendar",
    description:
      "A team and department calendar view gives managers visibility into planned absences to support workload planning and approvals.",
  },
]

const faqs = [
  {
    question: "Can we configure different leave policies for different employee groups?",
    answer:
      "Yes. Selevo supports multiple leave policy configurations that can be applied by employment type, department, grade, or branch. Each policy can have its own entitlement amounts, accrual rules, and carryover limits.",
  },
  {
    question: "How does the accrual engine work?",
    answer:
      "Leave accrues automatically based on the schedule defined in the policy — monthly, quarterly, or annually. The system calculates accrued balances in real time and updates employee records without manual intervention.",
  },
  {
    question: "Can leave balances be seen by employees?",
    answer:
      "Yes. Employees can view their current leave balances — including entitlement, accrued, taken, pending approval, and remaining days — through the self-service portal at any time.",
  },
  {
    question: "How does leave connect to payroll for unpaid leave or no-pay calculations?",
    answer:
      "When leave results in a deduction — such as unpaid leave or leave taken beyond entitlement — the approved record automatically triggers a payroll deduction in the next pay cycle without requiring manual adjustment from the payroll team.",
  },
]

export default function LeaveManagementPage() {
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
                <CalendarDays className="w-3.5 h-3.5" />
                Platform · Leave Management
              </div>
              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Leave policies that
                  <br />
                  <span style={{ color: TEAL }}>run themselves.</span>
                </h1>
                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Configure entitlements, automate accruals, and process approvals with full
                  visibility into team availability and balances.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Policy-driven entitlement and accrual engine",
                  "Multi-level approval workflows",
                  "Leave balance feeds into payroll deductions",
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
            Leave Management Built For{" "}
            <span style={{ color: "#4ecdc4" }}>Policy Accuracy And Team Clarity</span>
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
                  body: "Incorrect leave balances and manual approval processes erode employee trust and create payroll errors. Leave management is both a statutory obligation and a critical employee experience touchpoint.",
                },
                {
                  label: "The Operational Job",
                  body: "Apply leave entitlements correctly, automate balance accruals, manage approval workflows efficiently, and ensure leave data feeds accurately into payroll each cycle.",
                },
                {
                  label: "The Operational Challenge",
                  body: "Teams managing leave through spreadsheets or disconnected systems face balance errors, approval delays, and a payroll team that still needs to manually calculate no-pay deductions at month-end.",
                },
                {
                  label: "How Selevo Resolves It",
                  body: "Selevo handles leave as a fully automated policy engine — from entitlement configuration to accrual and payroll sync — removing manual work and ensuring employees and managers have real-time visibility.",
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
                People Operations
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
              >
                Leave Records That Support Payroll And Compliance
              </h2>
              <p
                className="text-slate-500 leading-relaxed mb-5 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Statutory leave entitlements are a legal obligation in every employment jurisdiction. Organisations must demonstrate that minimum annual leave, sick leave, and maternity or paternity entitlements are correctly applied and accurately recorded — with supporting evidence available for audit or dispute resolution.
              </p>
              <p
                className="text-slate-500 leading-relaxed mb-12 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Selevo's leave management module is built for organisations with complex entitlement structures across multiple employment types and locations, where policy consistency and payroll accuracy must be maintained simultaneously without manual reconciliation.
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
                    role: "HR Administrators",
                    desc: "Configuring leave policies, managing entitlements, and maintaining accurate leave records across the organisation.",
                  },
                  {
                    icon: BarChart2,
                    role: "Team Managers",
                    desc: "Approving leave requests, monitoring team availability calendars, and managing workload coverage during absences.",
                  },
                  {
                    icon: CalendarDays,
                    role: "Employees",
                    desc: "Submitting leave requests, checking real-time balances, and tracking approval status through the self-service portal.",
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
        heading="See Leave Management"
        headingAccent="in Action"
        subtitle="Watch how Selevo automates entitlements, accruals, approvals, and payroll sync in one connected leave system."
        videoId="f-tyrSsy04k"
      />

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
