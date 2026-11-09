export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="text-tp-navy text-center mb-16">Get In Touch</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="card bg-white text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Phone</h3>
            <a href="tel:6072437442" className="text-lg font-semibold text-tp-navy hover:underline">607-243-7442</a>
          </div>
          <div className="card bg-white text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Email</h3>
            <a href="mailto:TomPrattauto@gmail.com" className="text-lg font-semibold text-tp-navy hover:underline break-all">TomPrattauto@gmail.com</a>
          </div>
          <div className="card bg-white text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Location</h3>
            <p className="text-lg font-semibold text-gray-900">Dundee, NY<br/><span className="text-sm font-normal text-gray-600">Finger Lakes</span></p>
          </div>
          <div className="card bg-white text-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Hours</h3>
            <p className="text-lg font-semibold text-gray-900">Mon–Thu<br/><span className="text-sm font-normal text-gray-600">8am–5pm</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
