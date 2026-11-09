export default function Hero() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-tp-navy mb-6">Expert Auto Service & Diagnostics</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              40 years of honest repair. Fast turnaround. Fair pricing. Family-owned in Dundee, NY.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:6072437442" className="btn-primary text-center">Schedule Service</a>
              <a href="#contact" className="btn-secondary text-center">Get In Touch</a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 rounded-xl flex items-center justify-center">
            <span className="text-gray-400 text-center">
              <div className="text-4xl mb-2">📸</div>
              Shop Photo
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
