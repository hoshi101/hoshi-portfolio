import React from 'react'
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { navLinks } from '@/content/nav'
import Logo from './Logo'
import NavItem from './NavItem'
import ResumeButton from './ResumeButton'

const Nav = () => {
  return (
    <nav
      aria-label="Main"
      className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8"
    >
      <Logo />

      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </ul>

        <ThemeToggler />
        <ResumeButton />
      </div>
    </nav>
  )
}

export default Nav
