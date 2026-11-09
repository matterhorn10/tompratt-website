export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="section-container py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-tp-navy">Tom Pratt Automotive</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#service" className="text-gray-700 hover:text-tp-navy transition">Service</a></li>
          <li><a href="#vehicles" className="text-gray-700 hover:text-tp-navy transition">Vehicles</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-tp-navy transition">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-tp-navy transition">Contact</a></li>
          <li><a href="tel:6072437442" className="btn-primary py-2 px-4">Call Now</a></li>
        </ul>
      </div>
    </nav>
  )
}
