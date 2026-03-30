import Link from "next/link"

const TEAL = "#0b6b62"

const industries = [
  {
    label: "Retail",
    title: "Retail & Consumer",
    description: "Manage shift workers and high turnover with automated scheduling and payroll.",
    image: "https://picsum.photos/seed/retail/800/500",
    href: "/industries/retail",
  },
  {
    label: "Healthcare",
    title: "Healthcare",
    description: "Stay compliance-ready with credentialing, shift management, and multi-site payroll.",
    image: "https://picsum.photos/seed/healthcare/800/500",
    href: "/industries/healthcare",
  },
  {
    label: "Manufacturing",
    title: "Manufacturing",
    description: "Handle complex shift patterns, overtime, and claims across factory floors.",
    image: "https://picsum.photos/seed/manufacturing/800/500",
    href: "/industries/manufacturing",
  },
  {
    label: "Finance",
    title: "Finance & Banking",
    description: "Enforce secure role-based access and full audit trails for regulated teams.",
    image: "https://picsum.photos/seed/finance/800/500",
    href: "/industries/finance",
  },
  {
    label: "Technology",
    title: "Technology",
    description: "Scale headcount fast with streamlined onboarding and structured performance cycles.",
    image: "https://picsum.photos/seed/technology/800/500",
    href: "/industries/technology",
  },
  {
    label: "Hospitality",
    title: "Hospitality",
    description: "Coordinate part-time staff, overtime, and multi-branch payroll in one place.",
    image: "https://picsum.photos/seed/hospitality/800/500",
    href: "/industries/hospitality",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-bold tracking-[0.1em] uppercase mb-3"
            style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
          >
            Built for your industry
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            One platform, every sector
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="group relative rounded-2xl overflow-hidden flex flex-col justify-between"
              style={{ height: "320px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />

              {/* Gradient overlay — dark top + heavy dark bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(7,31,28,0.60) 0%, rgba(7,31,28,0.20) 40%, rgba(7,31,28,0.75) 100%)",
                }}
              />

              {/* Top: label */}
              <div className="relative z-10 p-6">
                <span
                  className="text-[0.65rem] font-bold tracking-[0.15em] uppercase"
                  style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {industry.label}
                </span>
              </div>

              {/* Bottom: title + description + arrow */}
              <div className="relative z-10 p-6 flex flex-col gap-2">
                <h3
                  className="text-xl font-bold text-white leading-snug"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  {industry.title}
                </h3>
                <div className="flex items-end justify-between gap-3">
                  <p
                    className="text-[0.82rem] leading-snug"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {industry.description}
                  </p>
                  <span
                    className="flex-shrink-0 text-lg font-bold text-white transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
