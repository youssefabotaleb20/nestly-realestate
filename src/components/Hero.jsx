import { useState } from 'react'

export default function Hero() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('For Sale')

  const handleSearch = (e) => {
    e.preventDefault()
    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#0D0D0D] min-h-[88vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Left */}
      <div className="px-8 md:px-14 py-20 flex flex-col justify-center">
        {/* Badge */}
        <div className="anim-hidden animate-fadeUp delay-200 inline-flex items-center gap-2 bg-[#1D6F42]/15 border border-[#1D6F42]/30 text-[#1D6F42] px-4 py-1.5 text-[0.75rem] tracking-[0.08em] uppercase font-instrument mb-8 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1D6F42] animate-pulseDot" />
          2,400+ active listings
        </div>

        {/* Heading */}
        <h1 className="anim-hidden animate-fadeUp delay-400 font-syne text-[#F7F6F1] text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight mb-6">
          Find Your<br />
          <span className="text-[#1D6F42]">Perfect</span><br />
          Property
        </h1>

        {/* Sub */}
        <p className="anim-hidden animate-fadeUp delay-600 text-[#F7F6F1]/55 text-[1rem] leading-[1.75] max-w-[420px] mb-10 font-instrument">
          Egypt's most intelligent real estate platform. Search, compare, and connect with verified agents — all in one place.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="anim-hidden animate-fadeUp delay-800 bg-[#F7F6F1] flex flex-col sm:flex-row overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by neighbourhood, city..."
            className="flex-1 bg-transparent border-none px-4 py-4 text-[0.9rem] text-[#0D0D0D] placeholder-[#4A4A4A]/50 outline-none font-instrument"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-transparent border-l border-[#0D0D0D]/10 px-4 py-4 text-[0.85rem] text-[#4A4A4A] outline-none cursor-pointer font-instrument"
          >
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
          <button
            type="submit"
            className="bg-[#1D6F42] text-white px-6 py-4 text-[0.85rem] font-medium font-instrument border-none cursor-pointer hover:bg-[#155230] transition-colors whitespace-nowrap"
          >
            Search →
          </button>
        </form>

        {/* Stats */}
        <div className="anim-hidden animate-fadeUp delay-1000 flex gap-10 mt-10">
          {[['2.4K', 'Listings'], ['340', 'Agents'], ['98%', 'Satisfied']].map(([n, l]) => (
            <div key={l}>
              <span className="font-syne text-[#F7F6F1] text-3xl font-bold tracking-tight block">{n}</span>
              <span className="text-[#F7F6F1]/40 text-[0.78rem] uppercase tracking-[0.1em] font-instrument">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — image grid */}
      <div className="hidden lg:grid grid-rows-2 relative min-h-[88vh]">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80')" }}
        />
        <div className="grid grid-cols-2">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&q=80')" }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80')" }}
          />
        </div>
        {/* Price tag overlay */}
        <div className="absolute bottom-1/2 left-0 bg-[#F7F6F1] px-5 py-4">
          <strong className="font-syne text-[#0D0D0D] text-lg font-bold block tracking-tight">EGP 4.2M</strong>
          <span className="text-[#4A4A4A] text-[0.82rem] font-instrument">Zamalek, Cairo · 3BR</span>
        </div>
      </div>
    </section>
  )
}
