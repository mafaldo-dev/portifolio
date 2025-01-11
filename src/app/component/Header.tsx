'use client'

import { useState } from 'react'
import { MoonIcon, SunIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 m-auto items-center justify-between">
        <Link className="flex items-center space-x-2" href='/'>
          <span className="font-bold text-xl">Guilherme</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link className="transition-colors hover:text-primary" href='#about' >Sobre</Link>
          <Link className="transition-colors hover:text-primary" href='#projects'> Projetos</Link>
          <Link className="transition-colors hover:text-primary" href='#services'>Serviços</Link>
          <Link className="transition-colors hover:text-primary" href='#contact'> Contato</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDarkMode ? (
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link className="transition-colors hover:text-primary" href="#about">Sobre</Link>
                <Link className="transition-colors hover:text-primary" href="#projects">Projetos</Link>
                <Link className="transition-colors hover:text-primary" href="#services">Serviços</Link>
                <Link className="transition-colors hover:text-primary" href="#contact">Contato</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

