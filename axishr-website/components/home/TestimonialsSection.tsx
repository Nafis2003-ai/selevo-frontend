const TEAL = "#0b6b62"
const TEAL_LIGHT = "#4ecdc4"
const BG = "#071f1c"

const testimonials = [
  {
    quote:
      "Selevo transformed how we manage payroll across our branches. What used to take days now runs in minutes — with zero errors.",
    name: "Aisha Rahman",
    role: "Chief People Officer",
    company: "Nexora Group",
  },
  {
    quote:
      "The multi-branch setup is exactly what we needed. One employee record, one approval flow, one payroll run — no more duplicates or confusion.",
    name: "Daniel Osei",
    role: "Head of HR Operations",
    company: "Meridian Retail",
  },
  {
    quote:
      "Compliance used to keep me up at night. With Selevo's audit trails and role-based access, I finally have full visibility and control.",
    name: "Priya Menon",
    role: "Finance Director",
    company: "HealthCore Asia",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: BG }}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16 leading-snug"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          What our clients are{" "}
          <span style={{ color: TEAL_LIGHT }}>saying</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-2xl p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Quote mark */}
              <span
                className="text-5xl font-bold leading-none"
                style={{ color: TEAL_LIGHT, fontFamily: "var(--font-merriweather)" }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="text-[0.93rem] leading-relaxed flex-1"
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-plus-jakarta)" }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

              {/* Attribution */}
              <div>
                <p
                  className="text-white font-semibold text-[0.95rem]"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[0.8rem] mt-0.5"
                  style={{ color: "rgba(255,255,255,0.42)", fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
