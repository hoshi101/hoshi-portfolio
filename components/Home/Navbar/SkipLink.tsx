import React from 'react'
import { cn } from '@/lib/utils'
import { focusRing } from '@/lib/focus'
import { skipLink } from '@/content/nav'

// First thing in the tab order. Hidden until it has focus, then it sits
// above the bar so keyboard users can jump straight to the page content.
const SkipLink = () => {
  return (
    <a
      href={skipLink.href}
      className={cn(
        focusRing,
        'sr-only rounded-md border border-border bg-background px-4 py-2 text-sm focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60'
      )}
    >
      {skipLink.label}
    </a>
  )
}

export default SkipLink
