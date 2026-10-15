import React from 'react'
import Link from 'next/link'
import PixelStar from '@/components/Pixel/PixelStar'
import { navLinks, resumeLink, siteName } from '@/content/nav'

const Nav = () => {
  return (
    <nav aria-label="Main">
      <Link href="/">
        <PixelStar />
        {siteName}
      </Link>

      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* A file in public/, not a route, so a plain anchor is enough. */}
      <a href={resumeLink.href}>{resumeLink.label}</a>
    </nav>
  )
}

export default Nav
