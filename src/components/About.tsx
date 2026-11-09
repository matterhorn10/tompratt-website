export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-tp-navy mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tom Pratt Automotive opened in 1987 with a simple commitment: honest service at fair prices. That promise has carried us through four decades and three generations of the Pratt family.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We've sold thousands of vehicles and serviced countless more. Our customers come back because they know we'll do the job right—no surprises, no upsells. We're part of Dundee, and we know reputation is built one customer at a time, over years of trust.
            </p>
          </div>
          <div className="space-y-4">
            <div className="card bg-gray-50">
              <div className="text-3xl font-bold text-tp-navy">Since 1987</div>
              <p className="text-sm text-gray-600">Four decades strong</p>
            </div>
            <div className="card bg-gray-50">
              <div className="text-3xl font-bold text-tp-navy">2,500+</div>
              <p className="text-sm text-gray-600">Vehicles sold with pride</p>
            </div>
            <div className="card bg-gray-50">
              <div className="text-2xl font-bold text-tp-navy">Tom Pratt III</div>
              <p className="text-sm text-gray-600">Third generation owner</p>
            </div>
            <div className="card bg-gray-50">
              <div className="text-2xl font-bold text-tp-navy">Your Neighbors</div>
              <p className="text-sm text-gray-600">Trust us every year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
