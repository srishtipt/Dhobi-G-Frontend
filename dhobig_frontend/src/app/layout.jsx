import './globals.css';

export const metadata = {
  title: 'Dhobi G',
  description: 'Professional Laundry Service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 text-white p-4 flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/book" className="hover:underline">Book</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
