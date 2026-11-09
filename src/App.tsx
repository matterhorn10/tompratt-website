import Nav from './components/Nav'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import Inventory from './components/Inventory'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Inventory />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
