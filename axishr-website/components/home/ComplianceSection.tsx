const TEAL = "#0b6b62"

const badges = [
  { acronym: "GDPR", label: "EU General Data\nProtection Regulation" },
  { acronym: "SOC 2", label: "Type II\nAICPA Certified" },
  { acronym: "ISO\n27001", label: "Information Security\nManagement" },
  { acronym: "PDPA", label: "Personal Data\nProtection Act" },
  { acronym: "EPF", label: "Employees Provident\nFund Compliant" },
  { acronym: "SOCSO", label: "Social Security\nOrganisation" },
  { acronym: "LHDN", label: "Inland Revenue\nBoard Malaysia" },
  { acronym: "MOM", label: "Ministry of\nManpower Aligned" },
]

function ShieldBadge({ acronym, label }: { acronym: string; label: string }) {
  const lines = acronym.split("\n")
  const descLines = label.split("\n")

  return (
    <div className="flex flex-col items-center gap-3 group">
      {/* Shield SVG */}
      <div className="relative flex items-center justify-center" style={{ width: 80, height: 90 }}>
        <svg viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <path
            d="M40 4L8 16V44C8 62 22 78 40 86C58 78 72 62 72 44V16L40 4Z"
            fill="rgba(11,107,98,0.07)"
            stroke={TEAL}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        {/* Text inside shield */}
        <div className="relative z-10 flex flex-col items-center justify-center" style={{ marginTop: -4 }}>
          {lines.map((line, i) => (
            <span
              key={i}
              className="font-black leading-none text-center"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                color: TEAL,
                fontSize: lines.length > 1 ? "0.72rem" : "0.85rem",
                letterSpacing: "0.04em",
              }}
            >
              {line}
            </span>
          ))}
        </div>
      </div>

      {/* Label below shield */}
      <div className="text-center">
        {descLines.map((line, i) => (
          <p
            key={i}
            className="leading-tight"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "0.68rem",
              color: "#94a3b8",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

export function ComplianceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-bold tracking-[0.1em] uppercase mb-3"
            style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
          >
            Trust & Compliance
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Built to meet the standards <br className="hidden sm:block" />
            that matter most
          </h2>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-10">
          {badges.map((b) => (
            <ShieldBadge key={b.acronym} acronym={b.acronym} label={b.label} />
          ))}
        </div>

        {/* Divider + note */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid rgba(11,107,98,0.10)" }}>
          <p
            className="text-center text-[0.78rem] text-slate-400"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Compliance scope varies by region. Contact us to confirm applicability for your market.
          </p>
        </div>

      </div>
    </section>
  )
}
