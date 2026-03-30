import Link from "next/link"

const TEAL = "#0b6b62"

export function CTASection() {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/tealbg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.72)" }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-5"
          style={{ fontFamily: "var(--font-merriweather)" }}
        >
          Ready to simplify your people operations?
        </h2>
        <p
          className="text-[1rem] mb-10 max-w-xl mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Join hundreds of growing organisations that trust Selevo to manage
          payroll, attendance, compliance, and more — all in one place.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "white",
              color: TEAL,
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            Get a demo
          </Link>
          <Link
            href="/platform"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1.5px solid rgba(255,255,255,0.45)",
              fontFamily: "var(--font-plus-jakarta)",
            }}
          >
            Explore the platform
          </Link>
        </div>
      </div>
    </section>
  )
}
