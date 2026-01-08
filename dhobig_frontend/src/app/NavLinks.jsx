'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
]

export default function NavLinks() {
  const path = usePathname()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex space-x-4">
        {links.map(({ href, label }) => (
          <Link
            href={href}
            key={href}
            className={`hover:underline ${path === href ? 'underline font-bold' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
