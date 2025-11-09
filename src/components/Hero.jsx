import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [use3D, setUse3D] = useState(true)

  useEffect(() => {
    // Defer Spline mount to avoid initial paint flicker
    const t = setTimeout(() => setMounted(true), 50)
    // If the scene doesn't load in time, gracefully fall back
    const fallbackTimer = setTimeout(() => {
      if (!loaded) setUse3D(false)
    }, 6000)
    return () => {
      clearTimeout(t)
      clearTimeout(fallbackTimer)
    }
  }, [loaded])

  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

        {/* 3D scene (only if enabled) */}
        {mounted && use3D && (
          <Spline
            scene="https://prod.spline.design/bxJw9QB9w6BMwqfT/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setLoaded(true)}
            onError={() => setUse3D(false)}
          />
        )}

        {/* Decorative SVG fallback if 3D is disabled/unavailable */}
        {!use3D && (
          <div aria-hidden className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <g>
                <circle cx="150" cy="120" r="110" fill="url(#g1)" />
                <circle cx="680" cy="180" r="90" fill="url(#g1)" />
                <circle cx="420" cy="420" r="140" fill="url(#g1)" />
              </g>
            </svg>
          </div>
        )}

        {/* Soft gradient overlay that does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

        {/* Subtle loading indicator to prevent visual blinking before Spline onLoad */}
        {use3D && !loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200/70" />
          </div>
        )}

        {/* Toggle to disable 3D if user can't see it */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => setUse3D(v => !v)}
            className="text-xs px-3 py-1.5 rounded-md bg-white/80 backdrop-blur border border-gray-200 text-gray-700 hover:bg-white transition shadow-sm"
          >
            {use3D ? 'Disable 3D' : 'Enable 3D'}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-40 md:-mt-52 relative">
        <div className="pointer-events-auto bg-white/80 backdrop-blur rounded-2xl p-6 md:p-10 shadow-xl border border-white/60">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Build beautiful apps with AI, fast.
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Design, code, and ship in minutes. Bring your ideas to life with a delightful developer experience.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">Explore features</a>
            <a href="#showcase" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-900 hover:bg-gray-50 transition">See showcase</a>
          </div>
          {!use3D && (
            <p className="mt-4 text-sm text-gray-500">
              3D scene disabled or unavailable. You can enable it with the toggle in the bottom-right.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
