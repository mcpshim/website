import React, { useState } from 'react'

import Link from 'next/link'

import Logo from './Logo'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#quick-start', label: 'Quick Start' },
    { href: '#installation', label: 'Install' },
    { href: '/about', label: 'About', accent: true },
    { href: 'https://github.com/mcpshim/mcpshim', label: 'GitHub' },
  ]

  return (
    <nav className="dark-nav fixed top-0 left-0 w-full h-16 z-50 border-b border-stroke/50">
      <div className="relative container flex items-center justify-between h-full">
        <Link href="/" className="flex items-center space-x-3 group">
          <Logo className="text-accent group-hover:text-accent-secondary transition-colors" />
          <p className="font-bold text-xl tracking-tight text-white">MCPShim</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${
                  link.accent
                    ? 'text-accent hover:text-accent-secondary'
                    : 'text-content-secondary hover:text-content'
                } transition-colors text-sm flex items-center gap-1`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="https://github.com/mcpshim/mcpshim"
            className="h-9 px-4 text-sm text-content-secondary hover:text-content rounded-lg flex items-center gap-1 transition"
          >
            View Repo
          </Link>
          <Link
            href="#installation"
            className="h-9 px-4 text-sm bg-accent hover:bg-accent-secondary text-black font-medium rounded-lg flex items-center gap-2 transition"
          >
            Install
            <Download className="size-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="size-6 text-content" />
          ) : (
            <Menu className="size-6 text-content" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'tween', stiffness: 100, damping: 10 }}
              className="absolute top-16 left-0 w-full bg-background border-b border-stroke md:hidden"
            >
              <ul className="container py-4 divide-y divide-stroke">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-content-secondary hover:text-content transition-colors text-sm flex items-center gap-1 py-4 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      <ArrowRight className="size-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
                <li className="pt-4 flex flex-row gap-2">
                  <Link
                    href="https://github.com/mcpshim/mcpshim"
                    className="h-10 w-full text-sm text-content rounded-lg flex items-center gap-1 justify-center border border-stroke hover:bg-background-tertiary"
                  >
                    View Repo
                  </Link>
                  <Link
                    href="#installation"
                    className="h-10 w-full text-sm bg-accent hover:bg-accent-secondary text-black font-medium rounded-lg flex items-center gap-2 justify-center transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Install
                    <Download className="size-4" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
