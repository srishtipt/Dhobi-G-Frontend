'use client';

import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Our Laundry Services</h1>

      <p className="max-w-3xl mx-auto text-lg text-center mb-10">
        At Dhobi G, we offer reliable and affordable laundry solutions for your daily wear, business formals,
        delicate fabrics, and even large-scale corporate laundry needs.
      </p>

      {/* Service Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: '🧺 Wash & Fold', desc: 'Perfect for everyday wear. Freshly washed and neatly folded.' },
          { title: '🧼 Dry Cleaning', desc: 'Gentle care for delicate fabrics like silk, wool, and suits.' },
          { title: '👕 Ironing Services', desc: 'Crisp and wrinkle-free clothes, ready to wear.' },
          { title: '🏢 Bulk Corporate Laundry', desc: 'Affordable, scheduled laundry for offices and hostels.' },
          { title: '🚚 Pickup & Delivery', desc: 'No hassle — we pick it up, clean it, and drop it back.' },
          { title: '🌿 Eco-Friendly Detergents', desc: 'We care for your clothes and the environment.' },
        ].map((item, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Dhobi G?</h2>
        <ul className="list-disc text-left list-inside text-base space-y-2">
          <li>Fast turnaround times (same day available)</li>
          <li>Friendly customer service</li>
          <li>Hygienic, sanitized handling</li>
          <li>Transparent pricing</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link href="/book">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-all">
            Book a Service Now
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm mt-14 text-gray-500">
        &copy; {new Date().getFullYear()} Dhobi G Laundry. All rights reserved.
      </footer>
    </div>
  );
}
