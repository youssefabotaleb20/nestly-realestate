const areas = [
  'New Cairo', 'Zamalek', 'Sheikh Zayed', 'Maadi', 'Heliopolis',
  'Ain Sokhna', 'North Coast', 'Obour City', 'Garden City', 'Mohandessin',
]

export default function Marquee() {
  const doubled = [...areas, ...areas]

  return (
    <div className="bg-[#1D6F42] py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {doubled.map((area, i) => (
          <span key={i} className="font-syne text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-white px-10">
            {area}
            <span className="text-white/40 ml-10">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
