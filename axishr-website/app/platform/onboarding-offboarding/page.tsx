import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import { PlatformVideoSection } from "@/components/platform/PlatformVideoSection"
import {
  UserPlus, CheckCircle2, ArrowRight,
  ClipboardList, FileText, Key, Shield,
  DollarSign, MessageSquare, Users, Settings,
} from "lucide-react"

const TEAL = "#0b6b62"

const steps = [
  {
    num: 1,
    icon: UserPlus,
    title: "Trigger Workflow",
    body: "Onboarding or offboarding is triggered automatically on hire confirmation or resignation approval, initiating the relevant task sequence.",
  },
  {
    num: 2,
    icon: ClipboardList,
    title: "Assign Tasks",
    body: "Tasks are automatically assigned to HR, IT, line managers, and the employee based on the workflow configuration.",
  },
  {
    num: 3,
    icon: FileText,
    title: "Collect Documents",
    body: "Required documents are requested from the employee digitally, with reminders sent automatically for outstanding submissions.",
  },
  {
    num: 4,
    icon: Key,
    title: "Activate or Deactivate Access",
    body: "System access is provisioned for new joiners or revoked for leavers as part of the workflow, with IT notified at the right stage.",
  },
  {
    num: 5,
    icon: DollarSign,
    title: "Complete Settlement",
    body: "Final payroll calculations — including outstanding leave encashment, notice pay, or deductions — are triggered and processed accurately.",
  },
]

const coreFeatures = [
  {
    icon: ClipboardList,
    title: "Onboarding Workflows",
    description:
      "Configurable task lists triggered on hire confirmation — covering document collection, system setup, policy acknowledgement, and manager introductions.",
  },
  {
    icon: FileText,
    title: "Document Collection",
    description:
      "New joiners are prompted to submit required documents digitally, with automated reminders and a central HR review queue to track completion.",
  },
  {
    icon: Key,
    title: "System Access Provisioning",
    description:
      "IT access requests are included in the onboarding workflow, ensuring new employees have the right access from day one without manual coordination.",
  },
  {
    icon: Shield,
    title: "Clearance Workflows",
    description:
      "Offboarding clearance tasks — including asset return, access revocation, and handover completion — are systematically managed and tracked to close.",
  },
  {
    icon: DollarSign,
    title: "Final Settlement",
    description:
      "Outstanding leave encashment, notice pay, deductions, and pro-rated salary are calculated and fed into the final payroll run automatically.",
  },
  {
    icon: MessageSquare,
    title: "Exit Interview",
    description:
      "Structured exit interview forms are issued to departing employees as part of the offboarding sequence, with responses stored against the employee record.",
  },
]

const faqs = [
  {
    question: "Can onboarding tasks be customised by role or department?",
    answer:
      "Yes. AxisHR supports multiple onboarding workflow templates that can be triggered based on the new employee's role, department, branch, or employment type. Each template defines the specific tasks, documents, and assignees relevant to that group.",
  },
  {
    question: "How does offboarding connect to final payroll?",
    answer:
      "When an offboarding workflow is initiated, the system calculates final entitlements — including accrued leave, notice period pay, and any deductions — and feeds these into a final payroll run. The payroll team reviews and approves the final settlement before disbursement.",
  },
  {
    question: "Is there a way to track which onboarding tasks are still outstanding?",
    answer:
      "Yes. HR administrators have a live view of all active onboarding workflows showing task status, responsible party, and due date. Automated reminders are sent to task owners for items approaching or past their deadline.",
  },
  {
    question: "How is system access managed during offboarding?",
    answer:
      "The offboarding workflow includes an IT access revocation task that notifies the IT team and tracks confirmation. Access can be scheduled for revocation on the last working day or immediately upon resignation acceptance, depending on the workflow configuration.",
  },
]

export default function OnboardingOffboardingPage() {
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
                <UserPlus className="w-3.5 h-3.5" />
                Platform · Onboarding &amp; Offboarding
              </div>
              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  First day to last —
                  <br />
                  <span style={{ color: TEAL }}>handled end to end.</span>
                </h1>
                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Structured workflows from offer acceptance to role activation, and from resignation
                  to final settlement — all traceable.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Automated onboarding task lists and document collection",
                  "Policy-driven offboarding with clearance workflows",
                  "Payroll and access changes triggered automatically",
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
            Onboarding &amp; Offboarding Built For{" "}
            <span style={{ color: "#4ecdc4" }}>Speed, Structure, And Compliance</span>
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
                  body: "The experience of joining or leaving an organisation reflects the culture and operational maturity of the business. Poor onboarding delays productivity; uncontrolled offboarding creates security, compliance, and financial risk.",
                },
                {
                  label: "The Operational Job",
                  body: "Ensure every new joiner is set up correctly from day one — with the right access, documents, and introductions — and every leaver completes a structured exit with all obligations settled and access removed.",
                },
                {
                  label: "The Operational Challenge",
                  body: "Onboarding and offboarding often rely on manual checklists, email chains, and verbal handoffs between HR, IT, finance, and managers — resulting in inconsistent experiences and tasks falling through the gaps.",
                },
                {
                  label: "How AxisHR Resolves It",
                  body: "AxisHR automates both lifecycle transitions as configurable workflows — assigning tasks to the right people, tracking progress, collecting documents, and triggering payroll and access changes at the correct points.",
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
                Employee Lifecycle
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
              >
                Lifecycle Processes Built For Compliance And Experience
              </h2>
              <p
                className="text-slate-500 leading-relaxed mb-5 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Employment transitions carry significant compliance obligations. New joiners must complete statutory documentation, identity verification, and policy acknowledgement before they can be fully activated. Departing employees must have access revoked, assets returned, and final entitlements settled — all within defined timelines.
              </p>
              <p
                className="text-slate-500 leading-relaxed mb-12 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                AxisHR's lifecycle workflows are designed for organisations where multiple teams — HR, IT, finance, and line management — must coordinate across these transitions reliably and with a complete audit trail of every step completed.
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
                    role: "HR Operations Teams",
                    desc: "Initiating workflows, tracking task completion, managing document collection, and ensuring lifecycle transitions are fully closed out.",
                  },
                  {
                    icon: Settings,
                    role: "IT Administrators",
                    desc: "Receiving access provisioning and revocation tasks as part of the onboarding and offboarding workflow, with confirmation tracked centrally.",
                  },
                  {
                    icon: ClipboardList,
                    role: "Line Managers",
                    desc: "Completing their assigned onboarding or offboarding tasks, including introductions, handover plans, and asset confirmation.",
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
        heading="See Onboarding & Offboarding"
        headingAccent="in Action"
        subtitle="Watch how AxisHR automates lifecycle workflows from first day setup to final settlement and exit."
        videoId="f-tyrSsy04k"
      />

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
