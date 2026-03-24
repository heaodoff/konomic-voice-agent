"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ButtonWithIcon } from "@/components/ui/button-with-icon"

interface NavItem {
  label: string;
  href: string;
}

interface Navbar1Props {
  brand?: React.ReactNode;
  items?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

const Navbar1 = ({
  brand,
  items = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  ctaText = "Get Started",
  ctaHref = "#",
}: Navbar1Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-4 px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md rounded-full shadow-lg shadow-black/20 w-full max-w-3xl relative z-10 border border-border">
        <div className="flex items-center">
          {brand || (
            <motion.div
              className="mr-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#" className="flex items-center gap-2.5">
                <Image src="/logo-icon.svg" alt="Konomic" width={32} height={32} className="h-8 w-auto" />
                <span className="font-bold text-foreground text-base">Konomic Voice AI</span>
              </a>
            </motion.div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {items.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
                {item.label}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <ButtonWithIcon href={ctaHref}>{ctaText}</ButtonWithIcon>
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-foreground" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-foreground" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a href={item.href} className="text-base text-foreground font-medium" onClick={toggleMenu}>
                    {item.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
                onClick={toggleMenu}
              >
                <ButtonWithIcon href={ctaHref}>{ctaText}</ButtonWithIcon>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export { Navbar1 }
