"use client"

import React from 'react'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { navLinks } from '@/content/nav'
import Logo from './Logo'
import MenuToggle from './MenuToggle'
import NavItem from './NavItem'
import ResumeButton from './ResumeButton'

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  // Escape closes the menu. The listener exists only while the menu is open.
  React.useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  return (
    <div className="relative">
      <div className="flex h-16 items-center justify-between px-6">
        <Logo />

        <div className="flex items-center gap-3">
          <ThemeToggler />
          <MenuToggle
            isOpen={isMenuOpen}
            onToggle={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </div>

      {/* Drops down over the page, under the bar, so the toggle stays visible. */}
      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-full z-40 border-b border-border bg-background px-6 pb-6"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-base"
              >
                {link.label}
              </NavItem>
            ))}
          </ul>

          <ResumeButton className="mt-4 w-full" />
        </nav>
      )}
    </div>
  )
}

export default MobileNav
