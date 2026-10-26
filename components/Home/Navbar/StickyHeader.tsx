"use client"

import React from 'react'
import { cn } from '@/lib/utils'

// Only the header shell needs the browser (scroll position). The bars are
// passed in as children, so this component does not pull the desktop bar
// into the client bundle.
const StickyHeader = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > 0)

    // Run once on mount so a reload in the middle of the page starts correct.
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent bg-background transition-colors duration-200 ease-out',
        scrolled && 'border-border'
      )}
    >
      {children}
    </header>
  )
}

export default StickyHeader
