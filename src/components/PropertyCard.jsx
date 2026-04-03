import { useState } from 'react'

export default function PropertyCard({ property }) {
  const [saved, setSaved] = useState(false)

  return (
    <div className="bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1 group">
      {/* Image */}
      <div className="relative img-zoom h-56">
        <img
          src={property.img}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-3 left-3 text-white text-[0.68rem] tracking-[0.1em] uppercase px-2.5 py-1 font-medium font-instrument ${
            property.type === 'rent' ? 'bg-[#0D0D0D]' : 'bg-[#1D6F42]'
          }`}
        >
          {property.type === 'rent' ? 'For Rent' : 'For Sale'}
        </span>
        <button
          onClick={() => setSaved(!saved)}
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white border-none cursor-pointer text-base transition-all duration-200 ${
            saved ? 'bg-[#1D6F42] text-white' : 'text-[#0D0D0D] hover:bg-[#1D6F42] hover:text-white'
          }`}
        >
          {saved ? '♥' : '♡'}
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="font-syne text-[1.35rem] font-bold tracking-tight mb-0.5">
          {property.price}
          <span className="text-[0.82rem] font-instrument font-normal text-[#4A4A4A] ml-1">{property.unit}</span>
        </div>
        <div className="text-[0.95rem] font-medium mb-0.5 font-instrument">{property.name}</div>
        <div className="text-[0.82rem] text-[#4A4A4A] mb-4 font-instrument">◎ {property.location}</div>

        <div className="flex gap-4 pt-3.5 border-t border-[#0D0D0D]/10">
          {[
            [property.beds, 'bed'],
            [property.baths, 'bath'],
            [property.area, 'm²'],
            [property.feature, ''],
          ].map(([val, unit], i) => (
            <span key={i} className="text-[0.8rem] text-[#4A4A4A] font-instrument">
              <span className="text-[#0D0D0D] font-medium">{val}</span>
              {unit ? ` ${unit}` : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
