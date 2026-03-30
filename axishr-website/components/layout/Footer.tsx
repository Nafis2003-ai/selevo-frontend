import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"
import { SelevoLogo } from "@/components/ui/SelevoLogo"

const TEAL = "#0b6b62"
const TEAL_DARK = "#095950"

const companyLinks = [
  { label: "Why Selevo", href: "/why-selevo" },
  { label: "Compare Selevo", href: "/compare" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Implementation", href: "/implementation" },
  { label: "Book A Demo", href: "/contact" },
]

const platformLinks = [
  { label: "Employee Management", href: "/platform/employee-management" },
  { label: "Multi-Branch Operations", href: "/platform/multi-branch-operations" },
  { label: "Global Employment", href: "/platform/global-employment" },
  { label: "Time & Attendance", href: "/platform/time-attendance" },
  { label: "Leave Management", href: "/platform/leave-management" },
  { label: "Payroll", href: "/platform/payroll" },
  { label: "Performance Management", href: "/platform/performance-management" },
  { label: "Onboarding & Offboarding", href: "/platform/onboarding-offboarding" },
  { label: "Reports & Analytics", href: "/platform/reports-analytics" },
  { label: "Compensation", href: "/platform/compensation" },
  { label: "Compliance & Security", href: "/platform/compliance-security" },
  { label: "Claims & Expenses", href: "/platform/claims-expenses" },
  { label: "Engagement & Surveys", href: "/platform/employee-engagement" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#071f1c" }}>
      <div className="max-w-7xl mx-auto px-8 sm:px-10 pt-12 pb-8">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">

            {/* Logo */}
            <Link href="/" className="w-fit">
              <SelevoLogo variant="light" size={36} />
            </Link>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed text-white/70"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Selevo helps growing teams run people operations with clarity
              across entities, branches, and borders.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {["People Ops", "Payroll", "Compliance"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full text-white/85"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-plus-jakarta)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/[0.12] border border-white/20 hover:bg-white/25 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Company column ── */}
          <div>
            <h3
              className="text-white font-bold text-base mb-5"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Platform Features col 1 ── */}
          <div>
            <h3
              className="text-white font-bold text-base mb-5"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Platform Features
            </h3>
            <ul className="space-y-3">
              {platformLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Platform Features col 2 ── */}
          <div>
            <h3
              className="text-white font-bold text-base mb-5 invisible"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              &nbsp;
            </h3>
            <ul className="space-y-3">
              {platformLinks.slice(7).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div
          className="mt-10 mb-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        />

        {/* ── Copyright ── */}
        <p
          className="text-xs text-white/50"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          © 2026 Selevo. Built for teams scaling across branches, entities, and countries.
        </p>
      </div>
    </footer>
  )
}
