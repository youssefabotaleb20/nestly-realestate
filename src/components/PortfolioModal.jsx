import { useState, useEffect } from 'react'

export default function PortfolioModal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show the modal on every visit (no localStorage suppression — it's the point of the demo)
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(13,13,13,0.72)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden anim-hidden animate-fadeUp"
        style={{ background: '#F7F6F1', boxShadow: '0 32px 80px rgba(13,13,13,0.35)' }}
      >
        {/* Accent bar */}
        <div className="h-1.5 w-full" style={{ background: '#1D6F42' }} />

        <div className="px-8 py-10">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
            style={{ background: 'rgba(29,111,66,0.1)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1D6F42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          {/* Heading */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#1D6F42', fontFamily: 'Syne, sans-serif' }}
          >
            Portfolio Project
          </p>
          <h2
            className="text-2xl font-bold leading-snug mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#0D0D0D' }}
          >
            Welcome to Nestly
          </h2>

          {/* Body */}
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#4A4A4A' }}>
            This is a <strong style={{ color: '#0D0D0D' }}>portfolio demonstration</strong> built to
            showcase front-end development and UI/UX design skills. While it looks and feels like a
            fully operational real estate platform, it is not connected to live listings, real agents,
            or any transactional services.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#4A4A4A' }}>
            Explore freely — every section, interaction, and detail has been crafted to reflect
            real-world product quality.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setVisible(false)}
              className="flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ background: '#1D6F42', color: '#F7F6F1' }}
              onMouseEnter={e => e.currentTarget.style.background = '#15582f'}
              onMouseLeave={e => e.currentTarget.style.background = '#1D6F42'}
            >
              Explore the Demo
            </button>
            <a
              href="https://linktr.ee/YoussefAbotaleb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 rounded-xl text-sm font-semibold text-center transition-all duration-200 border"
              style={{ borderColor: '#0D0D0D', color: '#0D0D0D', background: 'transparent' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0D0D0D'; e.currentTarget.style.color = '#F7F6F1' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0D0D0D' }}
            >
              View My Work ↗
            </a>
          </div>

          {/* Footer note */}
          <p className="text-xs text-center mt-6" style={{ color: '#4A4A4A', opacity: 0.6 }}>
            Built by Youssef Abotaleb ·{' '}
            <a
              href="https://linktr.ee/YoussefAbotaleb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1D6F42', textDecoration: 'underline' }}
            >
              linktr.ee/YoussefAbotaleb
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
