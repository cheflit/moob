"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
// import { Logo } from "./logo"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col md:hidden">
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            {/* <Logo /> */}
            <button onClick={toggleMenu} className="text-white p-2">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link href="#how-it-works" className="text-xl font-medium text-white" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link href="#benefits" className="text-xl font-medium text-white" onClick={toggleMenu}>
              Benefits
            </Link>
            <Link href="#testimonials" className="text-xl font-medium text-white" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#faq" className="text-xl font-medium text-white" onClick={toggleMenu}>
              FAQ
            </Link>
            <Button className="bg-white text-black hover:bg-zinc-200 mt-4">Shop Now</Button>
          </nav>
        </div>
      )}
    </>
  )
}
