import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons'

type MenuToggleProps = {
  isOpen: boolean
  onToggle: () => void
}

// Icon-only, so the label and expanded state are what assistive technology reads.
const MenuToggle = ({ isOpen, onToggle }: MenuToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="flex size-10 cursor-pointer items-center justify-center rounded-md border border-border outline-none transition-colors duration-200 ease-out hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
    >
      <HugeiconsIcon
        icon={isOpen ? Cancel01Icon : Menu01Icon}
        className="size-5"
      />
    </button>
  )
}

export default MenuToggle
