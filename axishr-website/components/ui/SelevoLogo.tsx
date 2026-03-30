interface SelevoLogoProps {
  /** "dark" = teal mark + teal text (for light backgrounds)
   *  "light" = white mark + white text (for dark backgrounds) */
  variant?: "dark" | "light"
  /** Height of the mark in px — width scales automatically */
  size?: number
}

export function SelevoLogo({ variant = "dark", size = 36 }: SelevoLogoProps) {
  const color = variant === "light" ? "#ffffff" : "#0b6b62"

  return (
    <span className="flex items-center gap-2.5 select-none">
      {/* ── Mark ── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left vertical bar (L bracket) */}
        <rect x="1" y="1" width="9" height="38" rx="2.5" fill={color} />
        {/* Bottom horizontal bar (L bracket) */}
        <rect x="1" y="30" width="38" height="9" rx="2.5" fill={color} />
        {/* Inner small rounded square */}
        <rect x="15" y="2" width="22" height="22" rx="4" fill={color} />
        {/* Circle cutout inside inner square (white hole) */}
        <circle cx="26" cy="13" r="6" fill={variant === "light" ? "#071f1c" : "white"} />
      </svg>

      {/* ── Wordmark ── */}
      <span
        className="font-bold tracking-tight"
        style={{
          fontFamily: "var(--font-merriweather)",
          fontSize: size * 0.55,
          color,
          lineHeight: 1,
        }}
      >
        Selevo
      </span>
    </span>
  )
}
