'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Welcome to Dhobi G</h1>

      <section className="max-w-3xl mx-auto space-y-6 text-lg leading-7">
        <p>
          Dhobi G is your trusted partner for hassle-free laundry. We pick up, clean, and deliver your clothes —
          all while you relax at home.
        </p>
        <p>
          Whether you’re a busy professional or a large business, we bring professional-grade laundry services right to your doorstep.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Pickup & Delivery', desc: 'We collect and deliver right from your doorstep.' },
          { title: 'Affordable Pricing', desc: 'Premium care at pocket-friendly rates.' },
          { title: 'Eco-Friendly', desc: 'We use biodegradable detergents and save water.' },
          { title: 'Fast Turnaround', desc: 'Same-day express service available!' },
        ].map((item, idx) => (
          <div key={idx} className="bg-blue-50 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Why Choose Dhobi G?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
          <li>Trusted by over 1000+ happy customers</li>
          <li>Quality assurance with every wash</li>
          <li>Easy booking through our web app</li>
          <li>Friendly customer support always ready to help</li>
        </ul>
      </section>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link href="/book">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-all">
            Book a Laundry Pickup
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
