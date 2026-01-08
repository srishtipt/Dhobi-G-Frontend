'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
        <p className="mt-2 text-lg">We would love to hear from you!</p>
      </header>

      <section className="max-w-3xl mx-auto space-y-4">
        <p><strong>📍 Address:</strong> 2nd Floor, No. 8 & 9, Pillaiyar Kovil St, Om Sakthi Nagar, Kaikankuppam, Valasaravakkam, Chennai 600087</p>
        <p><strong>📞 Phone:</strong> <a href="tel:+919962585818" className="text-blue-600 hover:underline">+91 99625 85818</a></p>
        <p><strong>✉️ Email:</strong> <a href="mailto:care@dhobig.com" className="text-blue-600 hover:underline">care@dhobig.com</a></p>
        <p><strong>⏰ Working Hours:</strong> Mon–Sat: 8 AM–8 PM</p>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Find Us Here:</h2>
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.123456!2d80.188765!3d13.060000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c1df123456%3A0xabcdef1234567890!2sDhobi%20G%20Laundry%20Service!5e0!3m2!1sen!2sin!4v1695232000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center space-y-3">
        <h2 className="text-2xl font-semibold">Connect With Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/dhobig" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
            🔗 LinkedIn
          </a>
          <a href="https://www.instagram.com/dhobigonline" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            📸 Instagram
          </a>
          <a href="https://www.facebook.com/DhobiGOnline" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            👍 Facebook
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Dhobi G Laundry. All rights reserved.
      </footer>
    </div>
  );
}
