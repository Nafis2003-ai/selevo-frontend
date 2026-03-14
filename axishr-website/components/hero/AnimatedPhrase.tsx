"use client"

import { useState, useEffect } from "react"

const TEAL = "#0b6b62"

const phrases = [
  "for your team.",
  "for your employees.",
  "for your companies.",
]

export function AnimatedPhrase() {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const loop = setInterval(() => {
      // 1) fade out + slide up
      setExiting(true)

      // 2) after fade-out, swap text and fade back in from below
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setExiting(false)
      }, 420)
    }, 2600) // display time per phrase

    return () => clearInterval(loop)
  }, [])

  return (
    <span
      style={{
        color: TEAL,
        display: "inline-block",
        transition: "opacity 0.42s ease, transform 0.42s ease",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "translateY(-10px)" : "translateY(0px)",
        willChange: "opacity, transform",
        fontFamily: "var(--font-merriweather)",
      }}
    >
      {phrases[index]}
    </span>
  )
}
