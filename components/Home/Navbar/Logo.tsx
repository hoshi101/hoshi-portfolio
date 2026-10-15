import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteName } from '@/content/nav'

// Shared by the desktop bar and the phone bar so the sprite swap lives in one place.
const Logo = () => {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/*
        24×24 sprite shown at 2×. A still frame is the default; the animated
        GIF replaces it on hover or keyboard focus, so it restarts from the
        first frame each time. Both are eager so the swap does not stutter,
        and unoptimized so the GIF stays animated and is never resampled.
      */}
      <Image
        src="/sprites/star.png"
        alt=""
        width={48}
        height={48}
        priority
        unoptimized
        className="block [image-rendering:pixelated] group-hover:hidden group-focus-visible:hidden"
      />
      <Image
        src="/sprites/star.gif"
        alt=""
        width={48}
        height={48}
        priority
        unoptimized
        className="hidden [image-rendering:pixelated] group-hover:block group-focus-visible:block"
      />
      <span className="font-pixel text-xl">{siteName}</span>
    </Link>
  )
}

export default Logo
