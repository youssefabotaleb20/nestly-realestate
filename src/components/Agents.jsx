const agents = [
  { name: 'Karim Youssef',  spec: 'New Cairo Specialist',  rating: '4.9', reviews: 84,  img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sara El-Masri',  spec: 'Zamalek & Maadi',       rating: '5.0', reviews: 61,  img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Omar Hanafy',    spec: 'Sheikh Zayed Villas',   rating: '4.7', reviews: 120, img: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { name: 'Nadia Fahmy',    spec: 'North Coast & Sokhna',  rating: '4.8', reviews: 55,  img: 'https://randomuser.me/api/portraits/women/21.jpg' },
]

function Stars({ rating }) {
  const full = Math.floor(parseFloat(rating))
  const hasHalf = parseFloat(rating) % 1 >= 0.5
  return (
    <span className="text-[#1D6F42] text-sm">
      {'★'.repeat(full)}{hasHalf ? '½' : ''}{'☆'.repeat(5 - full - (hasHalf ? 1 : 0))}
      {' '}<span className="text-[#F7F6F1]/40 text-[0.78rem] font-instrument">{rating}</span>
    </span>
  )
}

export default function Agents() {
  return (
    <section className="bg-[#0D0D0D] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h2 className="font-syne text-[#F7F6F1] text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
            Meet Our{' '}
            <em className="text-[#1D6F42] not-italic italic font-instrument font-normal">Verified</em>
            <br />Agents
          </h2>
          <p className="text-[#F7F6F1]/50 leading-[1.8] text-[0.92rem] mb-8 font-instrument max-w-md">
            Work with Egypt's most trusted real estate professionals. Every agent on Nestly is
            background-checked, trained, and reviewed by clients like you.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#1D6F42] text-white px-7 py-3.5 text-[0.88rem] font-medium font-instrument border-none cursor-pointer hover:bg-[#155230] transition-colors">
              Browse All Agents
            </button>
            <button className="bg-transparent border border-[#F7F6F1]/20 text-[#F7F6F1] px-7 py-3.5 text-[0.88rem] font-instrument cursor-pointer hover:border-[#F7F6F1]/50 transition-colors">
              How It Works
            </button>
          </div>
        </div>

        {/* Right — agent cards */}
        <div className="grid grid-cols-2 gap-3">
          {agents.map((a) => (
            <div
              key={a.name}
              className="bg-white/[0.04] border border-[#F7F6F1]/08 p-5 hover:border-[#1D6F42]/40 transition-all duration-300"
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-12 h-12 rounded-full object-cover mb-3"
              />
              <div className="font-syne text-[#F7F6F1] text-[0.95rem] font-semibold mb-0.5">{a.name}</div>
              <div className="text-[#F7F6F1]/40 text-[0.75rem] mb-2 font-instrument">{a.spec}</div>
              <Stars rating={a.rating} />
              <div className="text-[#F7F6F1]/30 text-[0.72rem] font-instrument mt-0.5">{a.reviews} reviews</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
