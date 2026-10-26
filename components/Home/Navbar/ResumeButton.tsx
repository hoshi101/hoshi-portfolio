import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { resumeLink } from '@/content/nav'

// A file in public/, not a route, so a plain anchor is enough.
// It is a link that looks like a button, so it takes the button's classes.
const ResumeButton = ({ className }: { className?: string }) => {
  return (
    <a
      href={resumeLink.href}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        // Full-strength ring, the same as the other controls in the bar.
        'focus-visible:ring-ring',
        className
      )}
    >
      {resumeLink.label}
    </a>
  )
}

export default ResumeButton
