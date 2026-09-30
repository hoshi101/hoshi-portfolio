"use client";
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import React from 'react'

const ThemeToggler = () => {
    const [mounted, setMounted] = React.useState(false);

    const { theme, setTheme, systemTheme } = useTheme();
    useEffect(() => {
        const mountCheck = () => setMounted(true);
        mountCheck();
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

  return <button onClick={()=> setTheme(currentTheme === "dark" ? "light" : "dark")} className="p-2 transition w-10 h-10 cursor-pointer bg-muted rounded-full flex items-center justify-center">
    {currentTheme === "dark" ? (
        <Sun className="text-white w-7 h-7 cursor-pointer" />
    ) : (
        <Moon className="text-black w-7 h-7 cursor-pointer" />
    )}
  </button>
}

export default ThemeToggler