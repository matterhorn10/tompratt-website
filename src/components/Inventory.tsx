export default function Inventory() {
  return (
    <section id="vehicles" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-tp-navy">Quality Used Vehicles</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">75–100 vehicles per year. Inspected. Fair pricing. Financing available.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-white">
            <h3 className="text-tp-navy mb-3">Current Inventory</h3>
            <p className="text-gray-600 text-sm mb-6">Browse our selection. All inspected and ready for the road.</p>
            <a href="tel:6072437442" className="btn-primary block text-center py-2">Call for Inventory</a>
          </div>
          <div className="card bg-white">
            <h3 className="text-tp-navy mb-3">Financing Options</h3>
            <p className="text-gray-600 text-sm mb-6">Flexible payment plans with multiple lenders.</p>
            <a href="tel:6072437442" className="btn-primary block text-center py-2">Discuss Financing</a>
          </div>
          <div className="card bg-white">
            <h3 className="text-tp-navy mb-3">Trade-In Appraisals</h3>
            <p className="text-gray-600 text-sm mb-6">Fair market value for your current vehicle.</p>
            <a href="tel:6072437442" className="btn-primary block text-center py-2">Get Appraisal</a>
          </div>
        </div>
      </div>
    </section>
  )
}
