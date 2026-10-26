import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { focusRing } from '@/lib/focus'

type NavItemProps = {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

// One navigation link. The desktop bar and the phone menu both render it,
// and the phone menu adds spacing through className.
const NavItem = ({ href, children, className, onClick }: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          focusRing,
          'rounded-sm decoration-2 underline-offset-4 hover:underline hover:decoration-star',
          className
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem
