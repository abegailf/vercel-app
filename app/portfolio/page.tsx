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
      id: 3,
      title: "Inventory Forecasting Model",
      description: "Excel",
      image: "/images/inventory-forecast.png",
      categories: ["excel"],
      link: "/projects/inventory-forecast",
    },
    {
      id: 4,
      title: "Excel Sales Dashboard",
      description: "Excel, Data Visualization",
      image: "/images/kiddie-vogue-dashboard.png",
      categories: ["excel", "dataviz"],
      link: "/projects/excel-sales-dashboard",
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
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#111024" }}>
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold">
            AbegailF.
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "#FB5530" }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                Home
              </Link>
              <Link
                href="/#recentwork"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                Recent Work
              </Link>
              <Link
                href="/#personalprojects"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                Personal Projects
              </Link>
              <Link
                href="/#techtools"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                Tech Tools
              </Link>
              <Link
                href="/#certifications"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                Certifications
              </Link>
              <Link
                href="/#experience"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                Work Experience
              </Link>
              <Link
                href="/#about"
                className="transition-colors"
                style={{ color: "#A59385" }}
                onMouseEnter={(e) => (e.target.style.color = "#FB5530")}
                onMouseLeave={(e) => (e.target.style.color = "#A59385")}
              >
                About Me
              </Link>
              <span className="text-white font-medium">Portfolio</span>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 border-t"
            style={{ backgroundColor: "#111024", borderColor: "#A59385" }}
          >
            <nav className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("recentwork")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                Recent Work
              </button>
              <button
                onClick={() => scrollToSection("personalprojects")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                Personal Projects
              </button>
              <button
                onClick={() => scrollToSection("techtools")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                Tech Tools
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                Work Experience
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left transition-colors"
                style={{ color: "#A59385" }}
              >
                About Me
              </button>
            </nav>
          </div>
        )}
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
              <span>Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Portfolio</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group">
                  <Card
                    className="overflow-hidden transition-all duration-300 hover:scale-105 border"
                    style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Overlay with actions */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex gap-4">
                            <Button
                              size="icon"
                              variant="outline"
                              className="bg-white text-gray-900 hover:bg-gray-100"
                              onClick={() => {
                                window.open(project.image, "_blank")
                              }}
                            >
                              <ZoomIn className="w-4 h-4" />
                            </Button>
                            <Link href={project.link}>
                              <Button
                                size="icon"
                                variant="outline"
                                className="bg-white text-gray-900 hover:bg-gray-100"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-lg mb-2" style={{ color: "#FB5530" }}>
                          {project.title}
                        </h4>
                        <p className="text-sm" style={{ color: "#A59385" }}>
                          {project.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
