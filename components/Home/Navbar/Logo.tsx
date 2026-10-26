import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { focusRing } from '@/lib/focus'
import { siteName } from '@/content/nav'

// Shared by the desktop bar and the phone bar so the sprite swap lives in one place.
const Logo = () => {
  return (
    <Link
      href="/"
      className={cn(focusRing, 'group flex items-center gap-2 rounded-sm')}
    >
      {/*
        24×24 sprite shown at 2×. A still frame is the default; the animated
        GIF replaces it on hover or keyboard focus, so it restarts from the
        first frame each time. A GIF cannot be paused by CSS, so the swap only
        happens when motion is allowed. Both are eager so the swap does not
        stutter, and unoptimized so the GIF stays animated and is never resampled.
      */}
      <Image
        src="/sprites/star.png"
        alt=""
        width={48}
        height={48}
        loading="eager"
        unoptimized
        className="block [image-rendering:pixelated] motion-safe:group-hover:hidden motion-safe:group-focus-visible:hidden"
      />
      <Image
        src="/sprites/star.gif"
        alt=""
        width={48}
        height={48}
        loading="eager"
        unoptimized
        className="hidden [image-rendering:pixelated] motion-safe:group-hover:block motion-safe:group-focus-visible:block"
      />
      <span className="font-pixel text-xl">{siteName}</span>
    </Link>
  )
}

export default Logo
