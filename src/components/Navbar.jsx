import { useState } from 'react'

const links = [
  { label: 'Buy', href: '#listings' },
  { label: 'Rent', href: '#listings' },
  { label: 'Sell', href: '#agents' },
  { label: 'Agents', href: '#agents' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-[#0D0D0D] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-syne text-[1.35rem] font-extrabold text-[#F7F6F1] tracking-tight">
          Nest<span className="text-[#1D6F42]">ly</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[#F7F6F1]/60 text-[0.85rem] font-instrument no-underline hover:text-[#F7F6F1] transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-[#F7F6F1]/60 text-[0.85rem] bg-transparent border-none cursor-pointer hover:text-[#F7F6F1] transition-colors font-instrument">
            Sign In
          </button>
          <button className="bg-[#1D6F42] text-white text-[0.82rem] font-medium px-5 py-2 border-none cursor-pointer hover:bg-[#155230] transition-colors font-instrument">
            List Property
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-[#F7F6F1] text-xl bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="text-[#F7F6F1]/70 text-sm font-instrument no-underline hover:text-[#F7F6F1] transition-colors">
              {l.label}
            </a>
          ))}
          <button className="bg-[#1D6F42] text-white text-sm font-medium px-5 py-2.5 border-none cursor-pointer font-instrument mt-2">
            List Property
          </button>
        </div>
      )}
    </nav>
  )
}
