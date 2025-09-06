"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ZoomIn, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("*")

  const projects = [
    {
      id: 1,
      title: "Google Merch Shop Case Study",
      description: "Google Analytics (GA4)",
      image: "/images/google-merch-display-new.png",
      categories: ["ga4"],
      link: "/projects/google-merch",
    },
    {
      id: 2,
      title: "Gaming Industry Case Study",
      description: "SQL, OpenRefine, Tableau, Data Cleaning, Data Exploration, Data Visualization",
      image: "/images/game-console.png",
      categories: ["sql", "openrefine", "tableau", "datacleaning", "dataexp", "dataviz"],
      link: "/projects/gaming-industry",
    },
    {
      id: 5,
      title: "SQL Scripts",
      description: "SQL, Data Cleaning, Data Exploration",
      image: "/images/sql-scripts-display.png",
      categories: ["sql", "datacleaning", "dataexp"],
      link: "/projects/sql-scripts",
    },
    {
      id: 6,
      title: "Data Vizzes with Tableau",
      description: "Tableau, Data Visualization",
      image: "/images/tableau-display.png",
      categories: ["tableau", "dataviz"],
      link: "/projects/tableau-vizzes",
    },
  ]

  const filters = [
    { key: "*", label: "All" },
    { key: "sql", label: "SQL" },
    { key: "excel", label: "Excel" },
    { key: "tableau", label: "Tableau" },
    { key: "openrefine", label: "OpenRefine" },
    { key: "ga4", label: "Google Analytics (GA4)" },
    { key: "dataviz", label: "Data Visualization" },
    { key: "datacleaning", label: "Data Cleaning" },
    { key: "dataexp", label: "Data Exploration" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.location.href = "/"
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = `/#${sectionId}`
    }
    setIsMenuOpen(false)
  }

  // Filter function
  const filteredProjects =
    activeFilter === "*" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "#111024", color: "white" }}>
      {/* Header */}
            {/* Header */}
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
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Recent Work
                </button>
                <button
                  onClick={() => scrollToSection("personal-projects")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Personal Projects
                </button>
                <button
                  onClick={() => scrollToSection("tech-tools")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Tech Tools
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="pt-20">
        {/* Page Title */}
        <section className="py-12 border-b" style={{ borderColor: "#A59385" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#A59385" }}>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span>Personal Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Personal Projects</h1>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="container">
            {/* Portfolio Filters */}
            <div className="text-center mb-12">
              <div className="flex flex-wrap gap-2 justify-center text-sm">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeFilter === filter.key ? "text-white" : "border hover:text-white"
                    }`}
                    style={{
                      backgroundColor: activeFilter === filter.key ? "#FB5530" : "transparent",
                      color: activeFilter === filter.key ? "white" : "#A59385",
                      borderColor: activeFilter === filter.key ? "#FB5530" : "#A59385",
                    }}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
                       {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={project.link}>
                  <Card
                    className="overflow-hidden cursor-pointer transition-transform hover:scale-105 border border-[#A59385]"
                    style={{ backgroundColor: "#14132B" }}
                  >
                    <CardContent className="p-0">
                      <div className="aspect-video relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-2 text-[#FB5530]">{project.title}</h4>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t" style={{ color: "#A59385", borderColor: "#A59385" }}>
          <p className="mb-4">© Copyright 2024. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ using React + Tailwind</p>
        </footer>
      </div>
    </div>
  )
}
