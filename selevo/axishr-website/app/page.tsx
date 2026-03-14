import Link from "next/link"
import { Users, Clock, Globe, BarChart3, Shield, Briefcase } from "lucide-react"
import type { CSSProperties, ReactNode } from "react"
import { AnimatedPhrase } from "@/components/hero/AnimatedPhrase"
import { FeatureCarousel } from "@/components/home/FeatureCarousel"

const TEAL = "#0b6b62"

export default function Home() {
  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[calc(100vh-71px)] flex items-center overflow-hidden bg-white">

        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(11,107,98,0.07) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Upper-right corner glow — spreads across the full hero */}
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
              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  People ops that
                  <br />
                  truly works
                  <br />
                  <AnimatedPhrase />
                </h1>

                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Give every employee a seamless HR experience — from
                  onboarding to global payroll, powered by smart automation
                  and built for growing organisations.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  href="/contact"
                  className="hero-demo-btn inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{
                    backgroundColor: TEAL,
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  Get a demo
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 group-hover:border-[#0b6b62]/30 transition-colors shadow-sm bg-white"
                  >
                    {/* play triangle */}
                    <svg width="10" height="13" viewBox="0 0 10 13" fill={TEAL}>
                      <path d="M0 0L10 6.5L0 13V0Z" />
                    </svg>
                  </span>
                  Watch video
                </Link>
              </div>
            </div>

            {/* ── Right: Tree Infographic ── */}
            <div className="hidden lg:flex items-center justify-center">
              <TreeInfographic />
            </div>

          </div>
        </div>
      </section>

      {/* ── Feature Carousel ── */}
      <FeatureCarousel />

    </main>
  )
}

/* ─────────────────────────────────────────────
   Tree Infographic
───────────────────────────────────────────── */
function TreeInfographic() {
  const junctionDots: [number, number][] = [
    [260, 112], [90, 177], [260, 177], [430, 177],
    [260, 247], [175, 312], [345, 312],
  ]

  return (
    <div className="relative" style={{ width: 520, height: 445 }}>

      {/* Soft teal radial blob behind the tree */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 72% 72% at 50% 44%, rgba(11,107,98,0.06) 0%, transparent 100%)`,
        }}
      />

      {/* ── SVG connector lines ── */}
      <svg
        className="absolute inset-0"
        width="520"
        height="445"
        viewBox="0 0 520 445"
        fill="none"
        aria-hidden="true"
      >
        {/* Root → Left branch */}
        <path
          d="M 260 112 C 260 148 90 148 90 177"
          stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.42"
        />
        {/* Root → Center branch */}
        <path
          d="M 260 112 L 260 177"
          stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.42"
        />
        {/* Root → Right branch */}
        <path
          d="M 260 112 C 260 148 430 148 430 177"
          stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.42"
        />
        {/* Center branch → Left leaf */}
        <path
          d="M 260 247 C 260 282 175 282 175 312"
          stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.42"
        />
        {/* Center branch → Right leaf */}
        <path
          d="M 260 247 C 260 282 345 282 345 312"
          stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.42"
        />

        {/* Junction dots */}
        {junctionDots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill={TEAL} opacity="0.48" />
        ))}
      </svg>

      {/* ── Cards ── */}

      {/* ROOT */}
      <HRCard
        pos={{ left: 195, top: 42 }}
        icon={<Briefcase size={15} color="white" />}
        title="Selevo HR"
        subtitle="Central Hub"
        isRoot
      />

      {/* Branch 1: Time & Leave */}
      <HRCard
        pos={{ left: 25, top: 177 }}
        icon={<Clock size={14} color={TEAL} />}
        title="Time & Leave"
        subtitle="Automated"
      />

      {/* Branch 2: People Ops */}
      <HRCard
        pos={{ left: 195, top: 177 }}
        icon={<Users size={14} color={TEAL} />}
        title="People Ops"
        subtitle="Centralised"
      />

      {/* Branch 3: Global Payroll */}
      <HRCard
        pos={{ left: 365, top: 177 }}
        icon={<Globe size={14} color={TEAL} />}
        title="Global Payroll"
        subtitle="Multi-currency"
      />

      {/* Leaf 1: Analytics */}
      <HRCard
        pos={{ left: 110, top: 312 }}
        icon={<BarChart3 size={14} color={TEAL} />}
        title="Analytics"
        subtitle="Real-time data"
      />

      {/* Leaf 2: Compliance */}
      <HRCard
        pos={{ left: 280, top: 312 }}
        icon={<Shield size={14} color={TEAL} />}
        title="Compliance"
        subtitle="Always secure"
      />
    </div>
  )
}

/* ─────────────────────────────────────────────
   HR Card
───────────────────────────────────────────── */
interface HRCardProps {
  pos: CSSProperties
  icon: ReactNode
  title: string
  subtitle: string
  isRoot?: boolean
}

function HRCard({ pos, icon, title, subtitle, isRoot = false }: HRCardProps) {
  return (
    <div
      className="absolute flex items-center gap-2.5 px-3 rounded-xl"
      style={{
        ...pos,
        width: 130,
        height: 68,
        background: isRoot ? TEAL : "white",
        border: isRoot ? "none" : `1.5px solid rgba(11,107,98,0.16)`,
        borderLeft: isRoot ? "none" : `3px solid ${TEAL}`,
        boxShadow: isRoot
          ? `0 6px 24px rgba(11,107,98,0.28)`
          : `0 2px 12px rgba(0,0,0,0.06)`,
      }}
    >
      {/* Icon container */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: isRoot ? "rgba(255,255,255,0.18)" : "rgba(11,107,98,0.08)",
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <div
          className="text-[0.8rem] font-semibold leading-tight"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            color: isRoot ? "white" : "#1e293b",
          }}
        >
          {title}
        </div>
        <div
          className="text-[0.7rem] mt-0.5 leading-tight"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            color: isRoot ? "rgba(255,255,255,0.62)" : "#94a3b8",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  )
}
