import { Rocket, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 text-white">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Vibe Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition">Showcase</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="#" className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">Launch App</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#features" className="py-2">Features</a>
            <a href="#showcase" className="py-2">Showcase</a>
            <a href="#contact" className="py-2">Contact</a>
            <a href="#" className="py-2 px-3 rounded-md bg-gray-900 text-white text-center">Launch App</a>
          </div>
        </div>
      )}
    </header>
  )
}
