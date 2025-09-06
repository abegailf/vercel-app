// File: app/layout.tsx

"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// You may need to adjust the path to your global CSS file
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // If we're already on the homepage, scroll smoothly
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Otherwise, navigate to the homepage and then scroll
      window.location.href = `/#${sectionId}`
    }
    setIsMenuOpen(false)
  }

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "#111024", color: "white" }}>
          {/* ================================================================== */}
          {/* SHARED HEADER */}
          {/* ================================================================== */}
          <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "#111024" }}>
            <div className="flex items-center justify-between p-6 max-w-7xl mx-auto relative">
              <Link href="/" className="text-xl font-bold">
                AbegailF.
              </Link>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white rounded-md p-2 hover:bg-[#A59385]/20 focus-visible:ring-2 focus-visible:ring-orange-600 transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>

              {isMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-lg z-50"
                  style={{ backgroundColor: "#111024", border: "1px solid #A59385" }}
                >
                  <div className="p-4">
                    <button onClick={() => scrollToSection("home")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Home</button>
                    <button onClick={() => scrollToSection("about")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>About Me</button>
                    <button onClick={() => scrollToSection("experience")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Work Experience</button>
                    <button onClick={() => scrollToSection("projects")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Recent Work</button>
                    <button onClick={() => scrollToSection("personal-projects")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Personal Projects</button>
                    <button onClick={() => scrollToSection("tech-tools")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Tech Tools</button>
                    <button onClick={() => scrollToSection("certifications")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Certifications</button>
                    <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800" style={{ color: "#A59385" }}>Get in Touch</button>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* This is where the content of each page will be inserted */}
          <main className="pt-20">
            {children}
          </main>

          {/* ================================================================== */}
          {/* SHARED FOOTER */}
          {/* ================================================================== */}
          <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
            <p className="mb-4">© Copyright 2024. All rights reserved.</p>
            <p className="text-sm">Made with ❤️ using React + Tailwind</p>
          </footer>
        </div>
      </body>
    </html>
  )
}