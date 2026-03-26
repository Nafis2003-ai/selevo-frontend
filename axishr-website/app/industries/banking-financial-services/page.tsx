import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  Landmark,
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
  { icon: ShieldCheck, name: "Compliance & Security", description: "Automated audit trails, role-based access controls, and real-time policy flags keep your HR function aligned with financial sector regulations.", href: "/platform/compliance-security" },
  { icon: Building2, name: "Multi-Branch Operations", description: "Every branch on unified policies, with head office getting consolidated dashboards and cross-branch control from a single login.", href: "/platform/multi-branch-operations" },
  { icon: DollarSign, name: "Payroll", description: "Run accurate, fully traceable payroll across all branches and entities — from base salary and incentives to statutory deductions and payslips.", href: "/platform/payroll" },
  { icon: Clock, name: "Employee Management", description: "Maintain complete, up-to-date employee records with role histories, certifications, and performance data in one secure place.", href: "/platform/employee-management" },
  { icon: UserPlus, name: "Onboarding & Offboarding", description: "Onboard new hires with templated compliance checklists, digital document collection, and automated background verification workflows.", href: "/platform/onboarding-offboarding" },
  { icon: LineChart, name: "Reports & Analytics", description: "Live dashboards surface headcount, turnover, compliance scores, and payroll costs across every branch and department in real time.", href: "/platform/reports-analytics" },
]

const deepFeatures = [
  {
    label: "Regulatory Compliance",
    heading: "Stay audit-ready — automatically, every day",
    bullets: [
      "Maintain a complete, timestamped audit trail for every HR action across all branches",
      "Configure compliance rules aligned to financial sector labour and data regulations",
      "Get flagged the moment a policy violation is about to occur — before regulators do",
      "Auto-generate compliance reports ready for internal audits and regulatory submissions",
    ],
    cta: { label: "Explore Compliance & Security", href: "/platform/compliance-security" },
    imageRight: true,
  },
  {
    label: "Multi-Branch",
    heading: "Manage every branch from one unified platform",
    bullets: [
      "Track headcount, absenteeism, and overtime costs by branch, region, or department",
      "Monitor staffing gaps across branches before they impact customer service levels",
      "Build custom head-office reports with live workforce data across all locations",
      "Standardise HR policies across branches while allowing localised configurations",
    ],
    cta: { label: "Explore Multi-Branch Operations", href: "/platform/multi-branch-operations" },
    imageRight: false,
  },
  {
    label: "Automation",
    heading: "Automate payroll and HR processes at scale",
    bullets: [
      "Automatically calculate incentives, allowances, and statutory deductions across all roles",
      "Onboard new hires with digital compliance checklists, document workflows, and e-signatures",
      "Get real-time alerts on attendance exceptions, certification expirations, and policy breaches",
      "Connect with existing core banking, finance, and identity systems via secure integrations",
    ],
    cta: { label: "Explore Payroll", href: "/platform/payroll" },
    imageRight: true,
  },
  {
    label: "Retention",
    heading: "Keep your customer-facing staff engaged and loyal",
    bullets: [
      "Give employees self-service access to payslips, leave balances, and personal records",
      "Run structured performance reviews tied to real attendance and customer service data",
      "Use engagement data to identify at-risk frontline staff before they resign",
      "Automate recognition workflows to reward high-performing relationship managers and tellers",
    ],
    cta: { label: "Explore Performance Management", href: "/platform/performance-management" },
    imageRight: false,
  },
]

const faqs = [
  { question: "How does Selevo support compliance with financial sector HR regulations?", answer: "Selevo includes configurable compliance rules aligned to financial sector labour legislation and data governance requirements. Every HR action — from hiring to offboarding — is logged with a full, timestamped audit trail. The system flags policy violations in real time and can auto-generate compliance reports for internal audits and regulatory submissions." },
  { question: "Can Selevo manage HR across multiple bank branches or regional offices?", answer: "Yes. Selevo is built for multi-entity, multi-location operations. Each branch can maintain its own workforce policies, cost centres, and HR workflows, while head-office administrators have full cross-branch visibility, consolidated reporting, and centralised control over shared policies and compliance standards." },
  { question: "How does Selevo help reduce high turnover in frontline banking roles?", answer: "Selevo's retention tools give frontline staff self-service access to payslips, leave balances, and shift information, reducing administrative frustration. Structured performance reviews, engagement analytics, and automated recognition workflows help managers identify at-risk employees early and take proactive steps to improve retention before staff resign." },
  { question: "How is sensitive employee data protected within the Selevo platform?", answer: "Selevo enforces role-based access controls so employees only see data relevant to their function. All data is encrypted at rest and in transit, and every access event is logged in the audit trail. The platform is designed to support compliance with data protection regulations applicable to the financial services sector." },
]

export default function BankingFinancialServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex flex-col overflow-hidden pt-[68px]" style={{ backgroundColor: DARK }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #4ecdc4 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}>
            <Landmark className="w-4 h-4" />
            Banking & Financial Services
          </div>
          <h1 className="text-5xl lg:text-[64px] font-bold leading-tight text-white max-w-3xl mb-5" style={{ fontFamily: "var(--font-merriweather)" }}>
            HR Built for{" "}<span style={{ color: TEAL_LIGHT }}>Financial Services</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Manage regulatory compliance, multi-branch operations, and sensitive employee data — all from one unified HR platform built for the demands of financial services.
          </p>
          <div className="flex items-center gap-4 mb-10">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}>
              Get a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/platform" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5" style={{ borderColor: "rgba(75,205,196,0.4)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}>
              Explore Platform
            </Link>
          </div>
          <div className="flex items-center gap-10 pb-2 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {[
              { value: "60%", label: "Faster compliance reporting" },
              { value: "2×", label: "Faster branch onboarding" },
              { value: "100%", label: "Audit trail coverage" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-10">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: TEAL_LIGHT, fontFamily: "var(--font-merriweather)" }}>{s.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{s.label}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 bg-[#f5f7f6]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}>The Problem</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}>
              Being great at banking{" "}<br /><span style={{ color: TEAL }}>isn't enough</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              You're not alone. <strong className="text-slate-700">68% of financial services HR teams</strong> say compliance complexity and disconnected systems are their #1 operational challenge.
            </p>
          </div>
          <div className="flex flex-col">
            {/* Problem 1 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              <div className="w-full sm:w-[200px] h-[130px] rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: DARK }}>
                <div className="grid grid-cols-5 gap-[7px] p-1">
                  {[1,0,1,0,1, 0,1,0,0,1, 1,0,1,1,0, 0,0,1,0,1].map((on, i) => (
                    <div key={i} className="w-4 h-4 rounded-sm" style={{ backgroundColor: on ? "rgba(78,205,196,0.75)" : "rgba(255,255,255,0.06)" }} />
                  ))}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg mb-2" style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}>Audit trails are scattered — and impossible to produce on demand</h3>
                <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>HR records in one system, access logs in another, compliance sign-offs buried in email threads. When regulators or internal auditors ask for a full trail, HR teams scramble — wasting days assembling data that should be instant.</p>
              </div>
            </div>
            {/* Problem 2 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              <div className="w-full sm:w-[200px] h-[130px] rounded-2xl flex-shrink-0 flex items-end justify-center px-5 pb-5" style={{ backgroundColor: DARK }}>
                <div className="flex items-end gap-2 w-full" style={{ height: 80 }}>
                  {[38, 65, 28, 100, 52, 88, 42].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i === 3 || i === 5 ? "rgba(78,205,196,0.85)" : "rgba(255,255,255,0.13)" }} />
                  ))}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg mb-2" style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}>High turnover in frontline roles drains performance and costs</h3>
                <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Tellers, relationship managers, and customer service staff churn at rates that hit productivity and client satisfaction hard. Without visibility into engagement trends and retention risks, HR teams can only react — after it's already too late.</p>
              </div>
            </div>
            {/* Problem 3 */}
            <div className="flex flex-col sm:flex-row gap-7 items-start py-10 border-t border-slate-200">
              <div className="w-full sm:w-[200px] h-[130px] rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: DARK }}>
                <div className="flex flex-col gap-[9px] w-32">
                  {[90, 55, 80, 40, 70, 50].map((w, i) => (
                    <div key={i} className="h-[7px] rounded-full" style={{ width: `${w}%`, backgroundColor: i % 2 === 0 ? "rgba(78,205,196,0.75)" : "rgba(255,255,255,0.11)" }} />
                  ))}
                </div>
              </div>
              <div className="pt-1">
                <h3 className="font-bold text-lg mb-2" style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}>Sensitive employee data managed in disconnected systems</h3>
                <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>Personal records, background check results, certification statuses, and payroll data stored across siloed tools — often without adequate access controls. In financial services, that's not just an operational problem. It's a regulatory and reputational risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}>
              <TrendingUp className="w-4 h-4" />
              How Selevo Solves It
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-merriweather)" }}>
              Purpose-built features for{" "}<span style={{ color: TEAL_LIGHT }}>financial services HR</span>
            </h2>
            <p className="text-slate-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Every tool Selevo offers is designed around the real complexities of running HR across branches, regulators, and compliance requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.name} href={s.href} className="group flex flex-col gap-4 rounded-2xl p-6 border transition-all hover:border-teal-700" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(11,107,98,0.35)" }}>
                    <Icon className="w-5 h-5" style={{ color: TEAL_LIGHT }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-sm mb-1.5" style={{ fontFamily: "var(--font-merriweather)" }}>{s.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{s.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold mt-auto" style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}>
                    Explore feature <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* DEEP FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col">
            {deepFeatures.map((f, idx) => (
              <div key={idx} className={`flex flex-col gap-12 py-20 lg:flex-row lg:items-center ${f.imageRight ? "" : "lg:flex-row-reverse"}`}>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}>{f.label}</p>
                  <h3 className="text-2xl lg:text-3xl font-bold leading-snug mb-6" style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}>{f.heading}</h3>
                  <ul className="flex flex-col gap-3 mb-8">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: TEAL }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link href={f.cta.href} className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75" style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}>
                    {f.cta.label} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1 min-w-0 flex justify-center">
                  <div className="w-full max-w-[460px] h-[280px] rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: DARK, border: "1px solid rgba(78,205,196,0.15)" }}>
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      {["rgba(255,255,255,0.2)", "rgba(255,255,255,0.12)", "rgba(255,255,255,0.08)"].map((c, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                      ))}
                      <div className="ml-2 h-3.5 w-32 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      {idx === 0 && (
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { label: "Rest periods compliant", ok: true },
                              { label: "Overtime within legal cap", ok: true },
                              { label: "Statutory deductions applied", ok: true },
                              { label: "2 violations flagged — City Branch", ok: false },
                              { label: "Audit trail up to date", ok: true },
                            ].map((item) => (
                              <div key={item.label} className="flex items-center gap-2.5">
                                <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: item.ok ? "rgba(78,205,196,0.2)" : "rgba(239,68,68,0.15)" }}>
                                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.ok ? TEAL_LIGHT : "#f87171" }} />
                                </div>
                                <p className="text-[11px]" style={{ color: item.ok ? "rgba(255,255,255,0.7)" : "#f87171", fontFamily: "var(--font-plus-jakarta)" }}>{item.label}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mt-2 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                            <span className="text-[10px] text-slate-500">Compliance score</span>
                            <span className="text-sm font-bold" style={{ color: TEAL_LIGHT }}>97 / 100</span>
                          </div>
                        </>
                      )}
                      {idx === 1 && (
                        <>
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            {[{ label: "Headcount", value: "312" }, { label: "Absent today", value: "8" }, { label: "Open roles", value: "15" }].map((stat) => (
                              <div key={stat.label} className="rounded-lg p-2.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                                <p className="text-[9px] text-slate-500 mb-1">{stat.label}</p>
                                <p className="text-base font-bold" style={{ color: TEAL_LIGHT, fontFamily: "var(--font-merriweather)" }}>{stat.value}</p>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-end gap-1.5 h-20 px-1">
                            {[45,62,38,75,55,80,48,70,52,88,60,42].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: i === 9 ? TEAL_LIGHT : "rgba(78,205,196,0.25)" }} />
                            ))}
                          </div>
                        </>
                      )}
                      {idx === 2 && (
                        <>
                          <div className="flex flex-col gap-2.5">
                            {[
                              { name: "Fatima Al-Rashid", dept: "Retail Banking", amt: "$5,200" },
                              { name: "Daniel Osei", dept: "Risk & Compliance", amt: "$6,750" },
                              { name: "Priya Nair", dept: "Branch Operations", amt: "$4,480" },
                            ].map((row) => (
                              <div key={row.name} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                                <div className="flex items-center gap-2.5">
                                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}>{row.name[0]}</div>
                                  <div>
                                    <p className="text-white text-[11px] font-semibold">{row.name}</p>
                                    <p className="text-slate-500 text-[9px]">{row.dept}</p>
                                  </div>
                                </div>
                                <span className="text-[11px] font-bold" style={{ color: TEAL_LIGHT }}>{row.amt}</span>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-lg py-2 text-center text-xs font-semibold" style={{ backgroundColor: TEAL, color: "#fff" }}>Process 312 employees</div>
                        </>
                      )}
                      {idx === 3 && (
                        <>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "rgba(78,205,196,0.2)", color: TEAL_LIGHT }}>SC</div>
                            <div>
                              <p className="text-white text-sm font-semibold">Sophie Chen</p>
                              <p className="text-slate-500 text-[10px]">City Branch · Relationship Manager</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[{ label: "Attendance", value: "99.1%" }, { label: "Leave balance", value: "18 days" }, { label: "Next review", value: "Apr 10" }, { label: "Payslips", value: "View →" }].map((item) => (
                              <div key={item.label} className="rounded-lg p-2.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                                <p className="text-[9px] text-slate-500 mb-0.5">{item.label}</p>
                                <p className="text-[11px] font-semibold" style={{ color: TEAL_LIGHT }}>{item.value}</p>
                              </div>
                            ))}
                          </div>
                          <div>
                            <div className="flex justify-between text-[9px] text-slate-500 mb-1"><span>Performance</span><span>4.6 / 5</span></div>
                            <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                              <div className="h-full rounded-full" style={{ width: "92%", backgroundColor: TEAL_LIGHT }} />
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

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/tealbg.jpg')" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.72)" }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(78,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}>
            <Landmark className="w-4 h-4" />
            Banking & Financial Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "var(--font-merriweather)" }}>
            See how Selevo works for{" "}<span style={{ color: TEAL_LIGHT }}>your bank</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Get a personalised walkthrough of how Selevo handles compliance, multi-branch operations, and payroll — tailored to the exact structure and regulatory requirements of your institution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}>
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/platform" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-colors hover:bg-white/5" style={{ borderColor: "rgba(78,205,196,0.4)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}>
              Explore the Platform
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <PlatformFAQSection faqs={faqs} />
    </main>
  )
}
