import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import StickyHeader from './StickyHeader'

// Both bars are in the DOM and CSS shows one at a time. display:none also
// removes the hidden one from the tab order and from screen readers.
const ResponsiveNav = () => {
  return (
    <StickyHeader>
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </StickyHeader>
  )
}

export default ResponsiveNav
