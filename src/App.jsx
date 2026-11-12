import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Listings from './components/Listings'
import Agents from './components/Agents'
import Footer from './components/Footer'
import PortfolioModal from './components/PortfolioModal'

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <PortfolioModal />
      <Navbar />
      <Hero />
      <Marquee />
      <Listings />
      <Agents />
      <Footer />
    </div>
  )
}
