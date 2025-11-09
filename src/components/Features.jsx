import { Rocket, Sparkles, Shield, Layers } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Lightning-fast setup',
    desc: 'Spin up full-stack apps with sensible defaults and modern tooling.'
  },
  {
    icon: Sparkles,
    title: 'AI-assisted workflow',
    desc: 'Generate components, endpoints, and data models with guidance.'
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Best practices baked in so you can ship with confidence.'
  },
  {
    icon: Layers,
    title: 'Composable UI',
    desc: 'Beautiful components that scale with your product.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">Everything you need to build faster</h2>
          <p className="mt-3 text-gray-600">A curated toolkit that takes you from idea to production without the friction.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center rounded-lg p-2 bg-gray-900 text-white">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
