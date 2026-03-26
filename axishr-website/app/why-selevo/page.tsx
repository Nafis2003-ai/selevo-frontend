"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  GitBranch,
  Zap,
  ShieldCheck,
  Layers,
  TrendingDown,
  Clock,
  BarChart3,
  CheckCircle2,
  Target,
  X,
  GitMerge,
  SlidersHorizontal,
  Eye,
  ClipboardCheck,
} from "lucide-react"

const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const metrics = [
  {
    icon: TrendingDown,
    title: "Fewer Payroll Corrections",
    description: "Upstream data issues — attendance, leave, and claims — arrive approved and clean before payroll runs.",
  },
  {
    icon: Clock,
    title: "Faster Approval Cycle Time",
    description: "Clear ownership and escalation paths mean every request moves without ambiguity or bottlenecks.",
  },
  {
    icon: ShieldCheck,
    title: "Stronger Policy Consistency",
    description: "The same rules applied the same way across every branch, entity, and team — every time.",
  },
  {
    icon: BarChart3,
    title: "Better Operational Visibility",
    description: "HR, finance, and leadership see what matters in real time, not just what happened after the fact.",
  },
]

const differentiators = [
  {
    number: "01",
    icon: GitBranch,
    title: "Multi-Branch Logic Is Native, Not Layered On Later",
    whyDifferent: "Many teams end up duplicating employee records when staff move across branches or take temporary assignments.",
    solution: "One employee record across every branch — with hierarchy-aware approvals and full reporting continuity.",
    bullets: [
      "Single employee record across all branch assignments.",
      "Branch history preserved for reporting and audits.",
      "Entity and branch scope supported in visibility controls.",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Branch Logic", "Single Record"],
  },
  {
    number: "02",
    icon: Zap,
    title: "Payroll Readiness Starts Upstream",
    whyDifferent: "Payroll errors are usually created before payroll starts — in attendance, leave, claims, and late approvals.",
    solution: "Approved data flows directly into payroll preparation — controlled, traceable, and error-reduced.",
    bullets: [
      "Attendance and leave approvals feed payroll preparation.",
      "Claims follow governed approval and payout flow.",
      "Run-level traceability supports review and correction.",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tags: ["Payroll Flow", "Data Traceability"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Governance Is Embedded In Daily Work",
    whyDifferent: "Governance often becomes a separate manual exercise that teams only revisit during audits.",
    solution: "Access control, approval evidence, and activity history are embedded into everyday workflows by default.",
    bullets: [
      "Role and scope-based access across sensitive records.",
      "Audit logs for all critical changes and approvals.",
      "MFA-ready and password-policy controls for access governance.",
    ],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    tags: ["Audit Logs", "Access Control"],
  },
  {
    number: "04",
    icon: Layers,
    title: "Rollout Is Structured For Adoption, Not Just Go-Live",
    whyDifferent: "Large launches fail when every workflow is activated at once without clear ownership and checkpoints.",
    solution: "Phased rollout lets teams stabilize high-risk workflows first, then expand with real KPI and audit feedback.",
    bullets: [
      "Phase-wise rollout aligned to business risk and readiness.",
      "Clear ownership across HR, finance, operations, and managers.",
      "Post-launch optimization using measurable workflow outcomes.",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    tags: ["Phased Launch", "Ownership"],
  },
]

export default function WhySelevoPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[68px]"
        style={{ backgroundColor: DARK }}
      >
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #4ecdc4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "70%",
            height: "220px",
            background: "radial-gradient(ellipse at center bottom, rgba(11,107,98,0.55) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-7"
            style={{
              backgroundColor: "rgba(78,205,196,0.12)",
              color: TEAL_LIGHT,
              border: "1px solid rgba(78,205,196,0.2)",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            <Target className="w-4 h-4" />
            Why Selevo
          </div>

          <h1
            className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Built For The Operational Complexity{" "}
            <span style={{ color: TEAL_LIGHT }}>Most HR Tools Ignore</span>
          </h1>

          <p
            className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Selevo is designed for organizations that must run branch operations, attendance, leave,
            payroll preparation, and governance as one connected system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              See the Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5"
              style={{
                borderColor: "rgba(78,205,196,0.35)",
                color: TEAL_LIGHT,
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR POSITION ── */}
      <section className="py-28 bg-[#f5f7f6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

            {/* LEFT — label + heading + description */}
            <div className="lg:w-[38%] flex-shrink-0">
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest mb-7"
                style={{
                  borderColor: "#d1d5db",
                  color: "#6b7280",
                  backgroundColor: "#fff",
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                Our Position
              </div>

              <h2
                className="text-2xl lg:text-3xl font-bold leading-snug mb-5"
                style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
              >
                Most HR systems are easy to buy — difficult to operate at scale.
              </h2>

              <p
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Once branch complexity, policy exceptions, and payroll dependencies grow,
                most platforms buckle into workarounds and manual reconciliation.
                Selevo focuses on practical execution — built to hold up every day.
              </p>
            </div>

            {/* RIGHT — 2×2 feature cards */}
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                {
                  icon: GitMerge,
                  title: "Cleaner Data Flow",
                  description: "Attendance, leave, and claims feed downstream workflows without manual hand-offs or re-entry.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "Controlled Approvals",
                  description: "Every request has a defined owner, escalation path, and traceable decision record.",
                },
                {
                  icon: Eye,
                  title: "Role-Scoped Visibility",
                  description: "Managers, HR, finance, and leadership each see exactly what their role permits — nothing more.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Audit-Ready Records",
                  description: "Approval evidence, change history, and policy activity are captured as part of daily operations.",
                },
              ].map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="flex flex-col gap-4 p-5 rounded-2xl border bg-white"
                    style={{ borderColor: "#e8edf0" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#f1f5f4" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: TEAL }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-sm mb-1.5"
                        style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-xs text-slate-500 leading-relaxed"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE MEASURE VALUE ── */}
      <section className="py-28" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
            >
              How We Measure Value
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Outcomes that show up in{" "}
              <span style={{ color: TEAL_LIGHT }}>daily operations</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {metrics.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.title}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(78,205,196,0.12)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: TEAL_LIGHT }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-sm text-white mb-2"
                      style={{ fontFamily: "var(--font-merriweather)" }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-slate-400 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4 DIFFERENTIATOR CARDS ── */}
      <section className="py-28 bg-[#f5f7f6]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
            >
              What Makes{" "}
              <span style={{ color: TEAL }}>Selevo Different</span>
            </h2>
            <p
              className="text-slate-400 text-sm mt-3"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Click any card to explore the full detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-8">
            {differentiators.map((d, idx) => {
              const Icon = d.icon
              const isActive = activeCard === idx

              return (
                <div
                  key={d.number}
                  onClick={() => setActiveCard(isActive ? null : idx)}
                  className="relative rounded-3xl overflow-hidden cursor-pointer"
                  style={{
                    transition: "box-shadow 0.4s ease",
                    boxShadow: isActive
                      ? "0 24px 64px rgba(0,0,0,0.28)"
                      : "0 4px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.image}
                    alt={d.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, rgba(7,31,28,0.2) 0%, rgba(7,31,28,0.82) 45%, rgba(7,31,28,0.97) 100%)",
                    }}
                  />

                  {/* content */}
                  <div className="relative z-10 flex flex-col justify-end p-7" style={{ minHeight: 560 }}>

                    {/* expanded: why different */}
                    <div
                      style={{
                        maxHeight: isActive ? 300 : 0,
                        overflow: "hidden",
                        opacity: isActive ? 1 : 0,
                        transition: "max-height 0.45s ease, opacity 0.3s ease",
                        marginBottom: isActive ? 16 : 0,
                      }}
                    >
                      <div
                        className="p-4 rounded-2xl mb-4"
                        style={{
                          backgroundColor: "rgba(78,205,196,0.1)",
                          border: "1px solid rgba(78,205,196,0.25)",
                        }}
                      >
                        <p
                          className="text-[10px] font-bold uppercase tracking-widest mb-1.5"
                          style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
                        >
                          Why this is different
                        </p>
                        <p
                          className="text-xs text-slate-300 leading-relaxed italic"
                          style={{ fontFamily: "var(--font-plus-jakarta)" }}
                        >
                          {d.whyDifferent}
                        </p>
                      </div>

                      <ul className="flex flex-col gap-2.5 mb-2">
                        {d.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: TEAL_LIGHT }} />
                            <span
                              className="text-xs text-slate-300 leading-relaxed"
                              style={{ fontFamily: "var(--font-plus-jakarta)" }}
                            >
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* number */}
                    <div className="flex items-center mb-3">
                      <span
                        className="text-4xl font-bold leading-none"
                        style={{
                          color: "rgba(78,205,196,0.5)",
                          fontFamily: "var(--font-merriweather)",
                        }}
                      >
                        {d.number}
                      </span>
                    </div>

                    {/* title */}
                    <h3
                      className="text-white font-bold text-lg leading-snug mb-2"
                      style={{ fontFamily: "var(--font-merriweather)" }}
                    >
                      {d.title}
                    </h3>

                    {/* short solution */}
                    <p
                      className="text-slate-300 text-xs leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {d.solution}
                    </p>

                    {/* tag pills — hidden when active */}
                    <div
                      className="flex flex-wrap gap-2 mb-5"
                      style={{
                        maxHeight: isActive ? 0 : 40,
                        overflow: "hidden",
                        opacity: isActive ? 0 : 1,
                        transition: "max-height 0.3s ease, opacity 0.2s ease",
                      }}
                    >
                      {d.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.12)",
                            color: "rgba(255,255,255,0.8)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            fontFamily: "var(--font-plus-jakarta)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA button */}
                    <button
                      className="w-full py-3.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                      style={{
                        backgroundColor: isActive ? "rgba(11,107,98,0.9)" : "rgba(255,255,255,0.95)",
                        color: isActive ? "#fff" : DARK,
                        fontFamily: "var(--font-plus-jakarta)",
                      }}
                    >
                      {isActive ? (
                        <>Close <X className="w-3.5 h-3.5" /></>
                      ) : (
                        <>Explore <ArrowRight className="w-3.5 h-3.5" /></>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative min-h-[60vh] overflow-hidden flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/tealbg.jpg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.72)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: "rgba(78,205,196,0.15)",
              color: TEAL_LIGHT,
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            <Target className="w-4 h-4" />
            Want To See If Selevo Fits?
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            See if Selevo fits your{" "}
            <span style={{ color: TEAL_LIGHT }}>operating model</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Share your branch structure, approval flows, and payroll dependencies. We will map where
            Selevo creates immediate operational value.
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
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
