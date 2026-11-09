export default function Services() {
  const services = [
    { title: "Oil Changes & Maintenance", desc: "Routine service keeps your car running. Scheduled maintenance, fluid checks, preventative care." },
    { title: "Diagnostics & Check Engine Light", desc: "Advanced computer diagnostics identify the real problem. We test—we don't guess." },
    { title: "Brakes & Suspension", desc: "Safety-critical work done right. Brake pads, rotors, shocks, struts, alignments." },
    { title: "NYS Inspections", desc: "State inspection center. Professional, efficient service." },
    { title: "Tires", desc: "Quality tires, expert installation, wheel balancing. Major brands at competitive prices." },
    { title: "Fleet & Commercial", desc: "Specialized fleet service. Volume pricing. Flexible scheduling." },
  ]

  return (
    <section id="service" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-tp-navy">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional diagnostics and repair. Quick turnaround. No surprises.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.title} className="card bg-white hover:border-tp-navy">
              <h3 className="text-tp-navy mb-4">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
