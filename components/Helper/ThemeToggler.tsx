"use client";
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Moon02Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import React from 'react'
import { cn } from '@/lib/utils';
import { focusRing } from '@/lib/focus';

const ThemeToggler = () => {
    const [mounted, setMounted] = React.useState(false);

    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => {
        const mountCheck = () => setMounted(true);
        mountCheck();
    }, []);

    if (!mounted) return <span className="size-10" aria-hidden="true" />;

    const isDark = resolvedTheme === "dark";

  return <button
    type="button"
    onClick={()=> setTheme(isDark ? "light" : "dark")}
    aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    className={cn(
      focusRing,
      "size-10 cursor-pointer rounded-full border border-border bg-muted text-foreground flex items-center justify-center transition-colors duration-200 ease-out hover:text-star"
    )}
  >
    <HugeiconsIcon icon={isDark ? Sun03Icon : Moon02Icon} className="size-5" />
  </button>
}

export default ThemeToggler
