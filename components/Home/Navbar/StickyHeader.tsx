import React from 'react'

// Stays at the top while the page scrolls. The bottom border always shows, so
// the bar reads as separate from the content passing under it.
const StickyHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      {children}
    </header>
  )
}

export default StickyHeader
