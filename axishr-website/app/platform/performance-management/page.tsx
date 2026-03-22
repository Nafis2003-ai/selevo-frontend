import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import { PlatformVideoSection } from "@/components/platform/PlatformVideoSection"
import {
  BarChart2, CheckCircle2, ArrowRight,
  Target, Star, MessageSquare, Award,
  ClipboardCheck, TrendingUp, Users, Briefcase,
} from "lucide-react"

const TEAL = "#0b6b62"

const steps = [
  {
    num: 1,
    icon: ClipboardCheck,
    title: "Configure Cycle",
    body: "Define review periods, rating scales, and participant groups for each performance cycle.",
  },
  {
    num: 2,
    icon: Target,
    title: "Set Goals",
    body: "Managers and employees collaborate to set measurable goals aligned to team and organisational objectives.",
  },
  {
    num: 3,
    icon: MessageSquare,
    title: "Collect Feedback",
    body: "Gather structured feedback from managers, peers, and direct reports through configurable 360° review forms.",
  },
  {
    num: 4,
    icon: Star,
    title: "Calibrate Ratings",
    body: "HR and leadership calibrate final performance ratings across teams to ensure fairness and consistency.",
  },
  {
    num: 5,
    icon: TrendingUp,
    title: "Link to Compensation",
    body: "Performance outcomes connect directly to compensation review workflows, closing the loop between review and reward.",
  },
]

const coreFeatures = [
  {
    icon: ClipboardCheck,
    title: "Review Cycles",
    description:
      "Configure annual, bi-annual, or quarterly review cycles with defined timelines, participant scopes, and escalation paths for overdue submissions.",
  },
  {
    icon: Target,
    title: "Goal Management",
    description:
      "Set structured goals with measurable outcomes, progress milestones, and review-cycle alignment for both individual and team objectives.",
  },
  {
    icon: MessageSquare,
    title: "360° Feedback",
    description:
      "Collect multi-directional feedback from managers, peers, and direct reports through structured forms that feed into the final review.",
  },
  {
    icon: Star,
    title: "Rating Calibration",
    description:
      "Leadership and HR calibrate performance ratings across teams to remove bias and ensure score distributions reflect actual relative performance.",
  },
  {
    icon: TrendingUp,
    title: "Compensation Linkage",
    description:
      "Finalised performance ratings connect to salary revision and bonus workflows, ensuring pay decisions are grounded in documented performance data.",
  },
  {
    icon: Award,
    title: "Development Plans",
    description:
      "Create structured development plans linked to performance outcomes, with documented learning goals and progress tracking over time.",
  },
]

const faqs = [
  {
    question: "Can we run different review cycles for different employee groups?",
    answer:
      "Yes. AxisHR supports multiple concurrent review cycles with different timelines, rating scales, and participant configurations. You can run separate cycles for management, individual contributors, or specific departments simultaneously.",
  },
  {
    question: "How does the 360° feedback process work?",
    answer:
      "The system sends structured review forms to nominated participants — peers, direct reports, and managers. Responses are collected within the review period and aggregated into a feedback summary visible to the reviewer and HR, with configurable anonymity settings.",
  },
  {
    question: "How are performance ratings linked to compensation?",
    answer:
      "Once performance ratings are finalised and calibrated, HR can initiate a compensation review workflow for eligible employees. The performance score is visible within the salary revision workflow, giving approvers the context needed to make informed increment decisions.",
  },
  {
    question: "What happens if a manager or employee does not complete the review on time?",
    answer:
      "AxisHR sends automated reminders to outstanding participants as review deadlines approach. If submissions remain incomplete, the system escalates to the HR administrator for follow-up action before the cycle closes.",
  },
]

export default function PerformanceManagementPage() {
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
                <BarChart2 className="w-3.5 h-3.5" />
                Platform · Performance
              </div>
              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Performance reviews that
                  <br />
                  <span style={{ color: TEAL }}>drive real growth.</span>
                </h1>
                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Run structured review cycles, set measurable goals, and link performance outcomes
                  to compensation and career progression.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Configurable review cycles with 360° feedback",
                  "Goal setting with progress tracking",
                  "Performance scores linked to compensation reviews",
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
            Performance Management Built For{" "}
            <span style={{ color: "#4ecdc4" }}>Clarity, Fairness, And Development</span>
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
                  body: "Unstructured performance reviews create inconsistency, bias, and disconnect between what employees are told and how they are ultimately rewarded. The result is eroded trust and reduced retention.",
                },
                {
                  label: "The Operational Job",
                  body: "Run structured review cycles that collect meaningful feedback, produce calibrated ratings, and connect performance outcomes to compensation and development decisions with full documentation.",
                },
                {
                  label: "The Operational Challenge",
                  body: "Many organisations manage performance reviews in emails, PDF forms, and spreadsheets — making it difficult to track completion, calibrate ratings consistently, or connect review results to downstream HR processes.",
                },
                {
                  label: "How AxisHR Resolves It",
                  body: "AxisHR provides a structured, configurable performance workflow from goal-setting to calibration and compensation linkage — giving HR, managers, and employees a single connected process rather than a fragmented manual effort.",
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
                Talent Development
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
              >
                Performance Processes Built For Growth And Accountability
              </h2>
              <p
                className="text-slate-500 leading-relaxed mb-5 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Effective performance management is more than an annual review — it is a continuous process of goal alignment, feedback, and development that shapes how people grow within the organisation and how compensation reflects their contribution.
              </p>
              <p
                className="text-slate-500 leading-relaxed mb-12 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                AxisHR's performance module is designed for organisations that want structured, documented, and consistently applied review processes — whether running annual cycles, continuous check-ins, or project-based assessments across multiple business units.
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
                    role: "HR Business Partners",
                    desc: "Designing review cycles, monitoring completion rates, calibrating ratings, and linking outcomes to compensation workflows.",
                  },
                  {
                    icon: Briefcase,
                    role: "Line Managers",
                    desc: "Setting goals with their teams, completing manager reviews, providing feedback, and calibrating individual ratings.",
                  },
                  {
                    icon: Target,
                    role: "Employees",
                    desc: "Setting and tracking personal goals, completing self-assessments, and viewing their review outcomes and development plans.",
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
        heading="See Performance Management"
        headingAccent="in Action"
        subtitle="Watch how AxisHR structures review cycles, captures 360° feedback, and connects performance to compensation."
        videoId="f-tyrSsy04k"
      />

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
