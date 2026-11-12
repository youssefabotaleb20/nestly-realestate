import { useState } from 'react'
import PropertyCard from './PropertyCard'

const ALL_PROPERTIES = [
  { id:1, name:'Palm Hills Compound Villa',   location:'Sheikh Zayed, Giza',   price:'EGP 8,500,000', unit:'/unit',  type:'sale',   tag:'luxury', img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80', beds:5, baths:4, area:420, feature:'Pool' },
  { id:2, name:'Modern Penthouse Apartment',  location:'Zamalek, Cairo',       price:'EGP 18,000',    unit:'/month', type:'rent',   tag:'',       img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80', beds:3, baths:2, area:210, feature:'View' },
  { id:3, name:'Garden View Townhouse',       location:'Maadi, Cairo',         price:'EGP 3,200,000', unit:'/unit',  type:'sale',   tag:'',       img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80', beds:4, baths:3, area:280, feature:'Garden' },
  { id:4, name:'Nile Riviera Penthouse',      location:'Garden City, Cairo',   price:'EGP 15,000,000',unit:'/unit',  type:'sale',   tag:'luxury', img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=80', beds:6, baths:5, area:650, feature:'Nile' },
  { id:5, name:'Modern Studio with Balcony',  location:'New Cairo, Cairo',     price:'EGP 9,500',     unit:'/month', type:'rent',   tag:'',       img:'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=700&q=80', beds:1, baths:1, area:75,  feature:'Gym' },
  { id:6, name:'Luxury Compound Chalet',      location:'Ain Sokhna, Suez',     price:'EGP 45,000',    unit:'/month', type:'rent',   tag:'luxury', img:'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=700&q=80', beds:4, baths:3, area:300, feature:'Beach' },
]

const FILTERS = ['All', 'For Sale', 'For Rent', 'Luxury']

export default function Listings() {
  const [active, setActive] = useState('All')

  const filtered = ALL_PROPERTIES.filter((p) => {
    if (active === 'All')      return true
    if (active === 'For Sale') return p.type === 'sale'
    if (active === 'For Rent') return p.type === 'rent'
    if (active === 'Luxury')   return p.tag === 'luxury'
    return true
  })

  return (
    <section id="listings" className="scroll-mt-16 py-20 px-6 md:px-10 bg-[#F7F6F1]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <h2 className="font-syne text-[2.2rem] font-bold tracking-tight">Featured Listings</h2>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[0.8rem] font-instrument border cursor-pointer transition-all duration-200 ${
                  active === f
                    ? 'bg-[#0D0D0D] text-[#F7F6F1] border-[#0D0D0D]'
                    : 'bg-transparent text-[#4A4A4A] border-[#0D0D0D]/15 hover:border-[#0D0D0D]/40'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#4A4A4A] font-instrument">
            No properties found for this filter.
          </div>
        )}

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="border border-[#0D0D0D]/20 text-[#0D0D0D] px-10 py-3.5 text-[0.85rem] font-instrument bg-transparent cursor-pointer hover:bg-[#0D0D0D] hover:text-[#F7F6F1] transition-all duration-300">
            Load More Listings
          </button>
        </div>
      </div>
    </section>
  )
}
