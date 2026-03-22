"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const TEAL = "#0b6b62"

interface Props {
  heading: string
  headingAccent: string
  subtitle: string
  videoId: string
}

export function PlatformVideoSection({ heading, headingAccent, subtitle, videoId }: Props) {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#071f1c" }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-merriweather)" }}>
            {heading}{" "}
            <span style={{ color: "#4ecdc4" }}>{headingAccent}</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.52)", fontFamily: "var(--font-plus-jakarta)" }}>
            {subtitle}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 8px 32px rgba(0,0,0,0.3)" }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5" style={{ backgroundColor: "#0f2e29" }}>
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
            <div
              className="flex-1 mx-5 rounded-md px-4 py-1.5 text-xs text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-plus-jakarta)" }}
            >
              app.axishr.com
            </div>
          </div>

          {/* Video */}
          <div className="relative aspect-video bg-black">
            {!playing ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="Demo video" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(7,31,28,0.45)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setPlaying(true)}
                    className="flex items-center gap-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: TEAL, padding: "1rem 2rem", fontFamily: "var(--font-plus-jakarta)", fontSize: "1rem", boxShadow: "0 8px 40px rgba(11,107,98,0.55)" }}
                  >
                    <Play className="w-5 h-5 fill-white stroke-none" />
                    Watch Demo
                  </button>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
