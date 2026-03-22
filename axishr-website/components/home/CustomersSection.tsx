import Link from "next/link"

const TEAL = "#0b6b62"

const customers = [
  {
    name: "Grab",
    logo: { letter: "G", bg: "#00b14f", text: "#fff" },
    description:
      "Managing a distributed workforce across 8 countries with seamless payroll compliance and real-time HR visibility.",
    href: "#",
  },
  {
    name: "Shopee",
    logo: { letter: "S", bg: "#ee4d2d", text: "#fff" },
    description:
      "Unified people operations for thousands of employees across regional offices, with automated onboarding and leave workflows.",
    href: "#",
  },
  {
    name: "AirAsia",
    logo: { letter: "A", bg: "#e31837", text: "#fff" },
    description:
      "Streamlined crew scheduling, leave tracking, and multi-entity payroll — all managed from a single platform.",
    href: "#",
  },
  {
    name: "Axiata",
    logo: { letter: "X", bg: "#0033a0", text: "#fff" },
    description:
      "End-to-end HR operations across 11 markets with consistent compliance, performance cycles, and workforce analytics.",
    href: "#",
  },
]

export function CustomersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
          >
            Our Customers
          </h2>
          <p
            className="text-[0.95rem] text-slate-500 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Trusted by fast-growing teams across industries to run their people
            operations with clarity and confidence.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="flex items-start gap-5 p-6 rounded-2xl border border-slate-100 hover:border-[#0b6b62]/20 hover:shadow-md transition-all duration-200"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              {/* Logo badge */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-xl font-bold"
                style={{
                  backgroundColor: customer.logo.bg,
                  color: customer.logo.text,
                  fontFamily: "var(--font-merriweather)",
                }}
              >
                {customer.logo.letter}
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3
                  className="text-base font-bold text-slate-900 mb-1.5"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  {customer.name}
                </h3>
                <p
                  className="text-sm text-slate-500 leading-relaxed mb-3"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {customer.description}
                </p>
                <Link
                  href={customer.href}
                  className="inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                >
                  View Page
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
