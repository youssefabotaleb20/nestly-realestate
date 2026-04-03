export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/[0.08] py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="font-syne text-[1.2rem] font-extrabold text-[#F7F6F1] tracking-tight">
          Nest<span className="text-[#1D6F42]">ly</span>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {['Privacy', 'Terms', 'Careers', 'Press', 'Contact'].map((l) => (
            <a key={l} href="#" className="text-[#F7F6F1]/40 text-[0.82rem] font-instrument no-underline hover:text-[#F7F6F1] transition-colors">
              {l}
            </a>
          ))}
        </div>
        <span className="text-[#F7F6F1]/25 text-[0.78rem] font-instrument">© 2025 Nestly. All rights reserved.</span>
      </div>
    </footer>
  )
}
