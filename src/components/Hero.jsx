import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Defer Spline mount to avoid initial paint flicker
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-none">
        {/* Fallback gradient while Spline loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

        {mounted && (
          <Spline
            scene="https://prod.spline.design/bxJw9QB9w6BMwqfT/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
            onLoad={() => setLoaded(true)}
          />
        )}

        {/* Soft gradient overlay that does not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

        {/* Subtle loading indicator to prevent visual blinking before Spline onLoad */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200/70" />
          </div>
        )}
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
        </div>
      </div>
    </section>
  )
}
