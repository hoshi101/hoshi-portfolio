import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'
import { focusRing } from '@/lib/focus'

type MenuToggleProps = {
  isOpen: boolean
  onToggle: () => void
  // Lets the parent move focus back here when the menu closes.
  ref?: React.Ref<HTMLButtonElement>
}

// Icon-only, so the label and expanded state are what assistive technology reads.
const MenuToggle = ({ isOpen, onToggle, ref }: MenuToggleProps) => {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className={cn(
        focusRing,
        'flex size-10 cursor-pointer items-center justify-center rounded-md border border-border transition-colors duration-200 ease-out hover:bg-muted'
      )}
    >
      <HugeiconsIcon
        icon={isOpen ? Cancel01Icon : Menu01Icon}
        className="size-5"
      />
    </button>
  )
}

export default MenuToggle
