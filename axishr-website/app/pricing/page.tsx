import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import {
  ArrowRight,
  Check,
  Tag,
  Users,
  Building2,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  Info,
  TrendingUp,
} from "lucide-react"

const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const plans = [
  {
    name: "Core",
    price: "$6–9",
    unit: "per employee / month",
    description: "Essential HR for teams building structured people operations from the ground up.",
    features: [
      "Employee Management",
      "Time & Attendance",
      "Leave Management",
      "Onboarding & Offboarding",
    ],
    cta: "Get a Quote",
    href: "/contact",
    highlight: false,
    badge: null,
    icon: Users,
  },
  {
    name: "Growth",
    price: "$10–14",
    unit: "per employee / month",
    description: "Everything in Core, plus payroll automation and performance tools for scaling teams.",
    features: [
      "Everything in Core",
      "Full-Service Payroll",
      "Performance Management",
      "Reports & Analytics",
    ],
    cta: "Get a Quote",
    href: "/contact",
    highlight: false,
    badge: null,
    icon: TrendingUp,
  },
  {
    name: "Scale",
    price: "$15–20",
    unit: "per employee / month",
    description: "The full platform for mature operations that need compensation, expenses, and engagement.",
    features: [
      "Everything in Growth",
      "Compensation Management",
      "Claims & Expenses",
      "Engagement & Surveys",
    ],
    cta: "Get a Quote",
    href: "/contact",
    highlight: true,
    badge: "Most Complete",
    icon: Zap,
  },
  {
    name: "Enterprise Global",
    price: "Custom",
    unit: "scoped quote",
    description: "Multi-entity, multi-country HR for complex global operations with advanced compliance.",
    features: [
      "Multi-Branch Operations",
      "Global Employment",
      "Advanced Compliance",
      "Dedicated Implementation",
    ],
    cta: "Talk to Sales",
    href: "/contact",
    highlight: false,
    badge: null,
    icon: Globe,
  },
]

const costFactors = [
  {
    icon: Users,
    title: "Employee count and active entities",
    description: "Pricing scales with your active headcount and the number of legal entities on the platform.",
  },
  {
    icon: Building2,
    title: "Branch complexity and policy differences",
    description: "Multi-branch operations with distinct HR policies and approval hierarchies affect scope.",
  },
  {
    icon: Layers,
    title: "Migration scope and data quality",
    description: "Historical data volume, source system structure, and data quality all drive migration effort.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance and integration requirements",
    description: "Country-specific compliance rules and third-party integrations are each scoped individually.",
  },
]

const implementations = [
  {
    label: "Standard Setup",
    range: "$2,500 – $6,000",
    description: "Single entity, clean data, standard module activation with guided onboarding support.",
    detail: "Typical for teams under 200 employees with structured existing records.",
  },
  {
    label: "Complex Migration",
    range: "$6,000 – $18,000",
    description: "Multiple data sources, legacy system migration, custom workflows and third-party integrations.",
    detail: "Common for multi-entity businesses consolidating from different HR systems.",
  },
  {
    label: "Global Rollout",
    range: "Scoped by country",
    description: "Multi-country deployment scoped by entity profile, compliance, and launch phasing.",
    detail: "Each country and entity is assessed individually for compliance and data requirements.",
  },
]

const scopes = [
  {
    title: "Workforce Scope",
    icon: Users,
    description: "Employee count, number of branches, legal entities, and manager hierarchy depth.",
  },
  {
    title: "Workflow Scope",
    icon: Layers,
    description: "Which features you activate: records, attendance, leave, payroll, performance, claims, and reporting.",
  },
  {
    title: "Rollout Scope",
    icon: Zap,
    description: "Migration effort, validation depth, integration requirements, and phased launch timeline.",
  },
]

const included = [
  "Core employee records with role-based access controls.",
  "Approval workflows with full audit trail visibility.",
  "Manager and employee self-service foundations.",
  "Implementation guidance aligned to your rollout phase.",
]

const faqs = [
  {
    question: "Do we need all features on day one?",
    answer:
      "No. Most teams launch in phases. Selevo is designed for phased activation — you start with the modules that matter most and expand as your operations grow. A typical rollout begins with records and attendance, then adds payroll, performance, and reporting over the following months.",
  },
  {
    question: "Is implementation charged separately?",
    answer:
      "Yes. Implementation is scoped by migration complexity and rollout requirements, with typical ranges shown on this page. We share a detailed scope document before any work begins so you know exactly what is included.",
  },
  {
    question: "Can we start with one business unit?",
    answer:
      "Yes. Pilot-first rollout is a common and recommended pattern. You can launch Selevo within a single team, department, or legal entity and expand to your full operation once you are comfortable with the platform.",
  },
  {
    question: "Do you provide a written scope?",
    answer:
      "Yes. We share a written scope document covering assumptions, feature activation sequence, rollout phasing, and implementation milestones before you commit to anything. There are no surprises after signing.",
  },
]

export default function PricingPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[68px]"
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

        <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
          {/* badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
          >
            <Tag className="w-4 h-4" />
            Pricing
          </div>

          {/* headline */}
          <h1
            className="text-5xl lg:text-[64px] font-bold leading-tight text-white max-w-4xl mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Transparent Pricing For{" "}
            <span style={{ color: TEAL_LIGHT }}>Growing Teams</span>
          </h1>

          {/* subtext */}
          <p
            className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Pricing is based on active employee count, module scope, and operational complexity.
            We publish realistic ranges so buyers can evaluate fit early — no surprises after the call.
          </p>

          {/* info pill */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            <Info className="w-4 h-4 flex-shrink-0" style={{ color: TEAL_LIGHT }} />
            These are indicative ranges. Final quote depends on rollout and complexity scope.
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-[#f5f7f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Plan Ranges
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
            >
              Plans and Pricing
            </h2>
            <p
              className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              All plans are per-employee, per-month. Final quote is scoped after a short discovery call.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {plans.map((plan) => {
              const PlanIcon = plan.icon
              return (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-2xl overflow-hidden"
                  style={
                    plan.highlight
                      ? {
                          backgroundColor: DARK,
                          border: `1.5px solid ${TEAL}`,
                          boxShadow: `0 0 48px rgba(11,107,98,0.22)`,
                          padding: "28px 24px 24px",
                        }
                      : {
                          backgroundColor: "#fff",
                          border: "1px solid #e8edf0",
                          boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                          padding: "28px 24px 24px",
                        }
                  }
                >
                  {/* badge */}
                  {plan.badge && (
                    <div
                      className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold rounded-bl-xl rounded-tr-2xl tracking-wide"
                      style={{ backgroundColor: TEAL, color: "#fff", fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  {/* plan name */}
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3"
                    style={{ color: plan.highlight ? TEAL_LIGHT : TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {plan.name}
                  </p>

                  {/* price */}
                  <div className="mb-1">
                    <span
                      className="text-4xl font-bold leading-none"
                      style={{ color: plan.highlight ? "#fff" : DARK, fontFamily: "var(--font-merriweather)" }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className="text-xs mb-5"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.38)" : "#94a3b8", fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {plan.unit}
                  </p>

                  {/* description */}
                  <p
                    className="text-xs leading-relaxed mb-6"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#64748b", fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {plan.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={plan.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold mb-7 transition-opacity hover:opacity-85"
                    style={
                      plan.highlight
                        ? { backgroundColor: TEAL, color: "#fff", fontFamily: "var(--font-plus-jakarta)" }
                        : { backgroundColor: "rgba(11,107,98,0.08)", color: TEAL, fontFamily: "var(--font-plus-jakarta)" }
                    }
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* "Standout Features" divider */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex-1 h-px" style={{ backgroundColor: plan.highlight ? "rgba(255,255,255,0.08)" : "#edf0f2" }} />
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.18em] whitespace-nowrap"
                      style={{ color: plan.highlight ? "rgba(255,255,255,0.25)" : "#b0bac4", fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      Standout Features
                    </span>
                    <div className="flex-1 h-px" style={{ backgroundColor: plan.highlight ? "rgba(255,255,255,0.08)" : "#edf0f2" }} />
                  </div>

                  {/* features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: plan.highlight ? "rgba(78,205,196,0.18)" : "rgba(11,107,98,0.09)" }}
                        >
                          <Check className="w-2.5 h-2.5" style={{ color: plan.highlight ? TEAL_LIGHT : TEAL }} />
                        </div>
                        <span
                          className="text-xs leading-relaxed"
                          style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#475569", fontFamily: "var(--font-plus-jakarta)" }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* bottom note */}
          <p
            className="text-center text-xs mt-8"
            style={{ color: "#94a3b8", fontFamily: "var(--font-plus-jakarta)" }}
          >
            Start with a discovery call · No credit card required
          </p>

        </div>
      </section>

      {/* ── WHAT CHANGES COST ── */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Pricing Variables
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
            >
              What changes the final cost
            </h2>
            <p
              className="text-slate-500 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              The ranges above are a starting point. Four factors shape the final scoped quote.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {costFactors.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="flex gap-5 p-6 rounded-2xl border border-slate-100"
                  style={{ backgroundColor: "#fafbfa" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(11,107,98,0.1)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: TEAL }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-sm mb-1.5"
                      style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-slate-500 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {f.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION RANGES ── */}
      <section className="min-h-screen flex flex-col justify-center py-20" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ backgroundColor: "rgba(75,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
            >
              <Zap className="w-4 h-4" />
              Implementation
            </div>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Implementation ranges
            </h2>
            <p
              className="text-slate-400 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Implementation is scoped and charged separately. The ranges below reflect typical projects — your actual scope is documented before you commit.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {implementations.map((impl, i) => (
              <div
                key={impl.label}
                className="flex flex-col gap-4 p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: i === 1 ? `1px solid ${TEAL}` : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {impl.label}
                </p>
                <p
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  {impl.range}
                </p>
                <p
                  className="text-slate-400 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {impl.description}
                </p>
                <p
                  className="text-xs leading-relaxed pt-3 border-t"
                  style={{ color: "rgba(78,205,196,0.6)", borderColor: "rgba(255,255,255,0.06)", fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {impl.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW PRICING IS SCOPED ── */}
      <section className="min-h-screen relative overflow-hidden flex flex-col justify-center py-20">
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')" }}
        />
        {/* very light overlay so text stays readable */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(245,247,246,0.90)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">

          {/* heading */}
          <div className="text-center mb-20">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              How We Scope
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
            >
              How final pricing is determined
            </h2>
          </div>

          {/* 3 steps */}
          <div className="grid sm:grid-cols-3 gap-10 text-center">
            {scopes.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center">

                {/* "Step" label */}
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Step
                </p>

                {/* double-ring circle + number */}
                <div className="relative w-24 h-24 flex items-center justify-center mb-8">
                  {/* outer ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `1.5px solid ${TEAL}` }}
                  />
                  {/* inner ring */}
                  <div
                    className="absolute inset-3 rounded-full"
                    style={{ border: `1px solid rgba(11,107,98,0.3)` }}
                  />
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* title */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                >
                  {s.title}
                </h3>

                {/* description */}
                <p
                  className="text-slate-600 text-sm leading-relaxed max-w-xs"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center mt-20 gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Request a Scoped Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              No commitment required
            </p>
          </div>

        </div>
      </section>

      {/* ── INCLUDED IN EVERY PLAN ── */}
      <section className="min-h-screen flex flex-col justify-center py-20" style={{ backgroundColor: DARK }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* left */}
            <div className="flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
              >
                Every Plan
              </p>
              <h2
                className="text-3xl lg:text-4xl font-bold leading-snug mb-5 text-white"
                style={{ fontFamily: "var(--font-merriweather)" }}
              >
                What is included in{" "}
                <span style={{ color: TEAL_LIGHT }}>every plan</span>
              </h2>
              <p
                className="text-slate-400 text-sm leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Regardless of which plan you choose, every Selevo deployment includes the following as standard — no add-on required.
              </p>
            </div>

            {/* right — checklist */}
            <div className="flex-1 flex flex-col gap-4">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(78,205,196,0.15)" }}
                  >
                    <Check className="w-4 h-4" style={{ color: TEAL_LIGHT }} />
                  </div>
                  <p
                    className="text-sm leading-relaxed pt-1"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

      {/* ── CTA ── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/tealbg.jpg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.72)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "rgba(78,205,196,0.15)", color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
          >
            <Tag className="w-4 h-4" />
            Get a Scoped Quote
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Ready to see what{" "}
            <span style={{ color: TEAL_LIGHT }}>Selevo costs for you?</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Share your employee count, locations, and feature needs — we'll send a written scope and realistic cost range within one business day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Request a Quote
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

    </main>
  )
}
