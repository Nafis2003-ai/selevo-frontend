import Link from "next/link"
import {
  DollarSign,
  GitMerge,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react"

const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const DARK = "#071f1c"

const workPrinciples = [
  {
    number: "01",
    title: "Customer-Question First",
    description:
      "We write and build around the real questions buyers and operators ask before and after launch.",
  },
  {
    number: "02",
    title: "Policy + Usability Together",
    description:
      "Good systems are both usable and controlled. We design for manager speed and governance at the same time.",
  },
  {
    number: "03",
    title: "Evidence Over Hype",
    description:
      "We prioritize claims we can demonstrate in workflow walkthroughs, not broad promises without proof.",
  },
]

const focusAreas = [
  {
    icon: DollarSign,
    title: "Cleaner Payroll Inputs",
    description: "Structured attendance, approved leaves, and validated claims mean payroll inputs arrive clean — every cycle.",
  },
  {
    icon: GitMerge,
    title: "Faster Approvals",
    description: "Clearly defined ownership and escalation paths so every request moves without ambiguity or delays.",
  },
  {
    icon: ShieldCheck,
    title: "Governance That Works Daily",
    description: "Compliance controls embedded into everyday workflows — not bolted on at audit time.",
  },
  {
    icon: Layers,
    title: "Practical Phased Rollouts",
    description: "Deployments scoped to what teams can actually execute, starting lean and expanding in stages.",
  },
]

export default function AboutPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden pt-[68px]"
        style={{ backgroundColor: DARK }}
      >
        {/* teal glow — top center */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "55%",
            background:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(78,205,196,0.22) 0%, transparent 70%)",
          }}
        />

        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.13] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #4ecdc4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-0">

          {/* badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              backgroundColor: "rgba(78,205,196,0.12)",
              color: TEAL_LIGHT,
              border: "1px solid rgba(78,205,196,0.2)",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            Our Mission
          </div>

          {/* heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-tight text-white max-w-4xl mb-6"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Built For Teams Running{" "}
            <span style={{ color: TEAL_LIGHT }}>Complex Workforce</span>{" "}
            Operations
          </h1>

          {/* subtext */}
          <p
            className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-14"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Selevo was built for organizations where branch structure, approvals,
            attendance, payroll inputs, and compliance evidence must stay connected
            every day.
          </p>

          {/* image */}
          <div className="w-full max-w-3xl mx-auto relative">
            {/* subtle bottom fade so image blends into next section */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none rounded-b-3xl"
              style={{
                background: `linear-gradient(to bottom, transparent, ${DARK})`,
              }}
            />
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team collaborating at Selevo"
                className="w-full object-cover"
                style={{ maxHeight: "480px", objectPosition: "center 30%" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY WE BUILT AXISHR ── */}
      <section className="min-h-screen lg:min-h-[65vh] flex flex-col justify-center py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* left — image */}
            <div className="w-full lg:w-[48%] flex-shrink-0">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
                  alt="Connected workforce operations"
                  className="w-full object-cover"
                  style={{ height: "400px", objectPosition: "center" }}
                />
              </div>
            </div>

            {/* right — text */}
            <div className="flex-1">
              <h2
                className="text-3xl lg:text-4xl font-bold leading-snug mb-7"
                style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
              >
                Why We Built{" "}
                <span style={{ color: TEAL }}>Selevo</span>
              </h2>

              <p
                className="text-base lg:text-lg leading-relaxed text-slate-600 mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Many growing teams do not fail because they lack effort. They fail
                because employee data, attendance, leave, claims, and payroll
                preparation live in disconnected tools.
              </p>

              <p
                className="text-base lg:text-lg leading-relaxed text-slate-600"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Selevo brings those workflows into one operating system with
                role-based access, policy routing, and traceable decision history.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT WE FOCUS ON ── */}
      <section
        className="min-h-screen lg:min-h-[80vh] flex flex-col justify-center py-20"
        style={{ backgroundColor: DARK }}
      >
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #4ecdc4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

          {/* heading */}
          <div className="text-center mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: TEAL_LIGHT, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Our Focus
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              What We Focus On
            </h2>
            <p
              className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Every decision we make maps back to the same goal — helping operations teams run people processes with less friction and more confidence.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
            {focusAreas.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-5 items-start">
                  {/* circle icon */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      border: `1.5px solid ${TEAL}`,
                      backgroundColor: "rgba(11,107,98,0.1)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: TEAL_LIGHT }} />
                  </div>

                  {/* text */}
                  <div>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ color: TEAL_LIGHT, fontFamily: "var(--font-merriweather)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-slate-400 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="min-h-screen lg:min-h-[70vh] flex flex-col justify-center py-20 bg-[#f5f7f6]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* heading */}
          <div className="mb-16">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
            >
              Our Approach
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold"
              style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
            >
              How We Work
            </h2>
          </div>

          {/* 3-column grid */}
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {workPrinciples.map((item) => (
              <div key={item.number} className="flex flex-col">
                {/* top accent line */}
                <div
                  className="w-10 h-[2px] mb-6"
                  style={{ backgroundColor: TEAL }}
                />
                {/* number */}
                <span
                  className="text-4xl font-bold mb-5 leading-none"
                  style={{ color: "rgba(11,107,98,0.18)", fontFamily: "var(--font-merriweather)" }}
                >
                  {item.number}
                </span>
                {/* title */}
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ color: DARK, fontFamily: "var(--font-merriweather)" }}
                >
                  {item.title}
                </h3>
                {/* description */}
                <p
                  className="text-slate-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative min-h-[70vh] overflow-hidden flex flex-col justify-center">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/tealbg.jpg')" }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.72)" }} />

        {/* content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Want To See If Selevo Fits Your{" "}
            <span style={{ color: TEAL_LIGHT }}>Operating Model?</span>
          </h2>

          <p
            className="text-slate-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Share your branch structure, approval flows, and payroll dependencies.
            We will map where Selevo creates immediate operational value.
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
