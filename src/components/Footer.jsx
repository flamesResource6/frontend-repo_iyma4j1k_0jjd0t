export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-gray-900">Vibe Studio</p>
            <p className="text-sm text-gray-600">Crafted with care for builders and dreamers.</p>
          </div>
          <div className="text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span className="mx-3">•</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <span className="mx-3">•</span>
            <a href="mailto:hello@example.com" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
