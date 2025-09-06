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
      id: 13, // <-- New ID
      title: "AI QA Agent for New Content",
      description: "AI Agent Design, Quality Assurance Automation",
      image: "/images/Pt creator AI.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category
      link: "/projects/ai-qa-agent-requests", // <-- New link
    },
     {
      id: 12, // <-- New ID
      title: "AI QA Agent for Content Alignment",
      description: "AI Agent Design, Quality Assurance, Prompt Engineering",
      image: "/images/qa ws-pt alignment.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category
      link: "/projects/ai-qa-agent", // <-- New link
    },
       {
      id: 10, // <-- New ID
      title: "AI Agent for Content Alignment",
      description: "Prompt Engineering, AI Agent Design, Automation",
      image: "/images/ws-pt alignment creation.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category, can create an 'ai' one later
      link: "/projects/ai-orchestrator-alignment", // <-- New link
    },
      {
      id: 11, // <-- New ID
      title: "AI Agent for Content Creation",
      description: "Prompt Engineering, System Architecture, Code Generation",
      image: "/images/pt request creation.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category
      link: "/projects/ai-orchestrator-creation", // <-- New link
    },
    {
      id: 9, // <-- New ID
      title: "Problem Template Creator AI",
      description: "Google AI Studio, Prompt Engineering, Automation",
      image: "/images/Pt creator AI.png", // <-- New image
      categories: ["ga4"], // Using a placeholder category for now, you can create a new one like 'ai' later
      link: "/projects/pt-creator-ai", // <-- New link
    },
     {
      id: 8, // <-- New ID
      title: "Store Pullout Automation (VBA)",
      description: "Excel, VBA, Process Automation",
      image: "/images/inventory-replenishment.png", // Using placeholder image for now
      categories: ["excel"],
      link: "/projects/store-pullout-automation", // <-- New link
    },
    {
      id: 7, // <-- New ID
      title: "Inventory Replenishment Template",
      description: "Excel, Process Automation",
      image: "/images/inventory-replenishment.png", // <-- New image
      categories: ["excel"],
      link: "/projects/inventory-replenishment", // <-- New link
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
            {/*   <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "#111024" }}>
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
      </header> */}
    

      <div className="pt-20">
        {/* Page Title */}
        <section className="py-12 border-b" style={{ borderColor: "#A59385" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm mb-4" style={{ color: "#A59385" }}>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span>Work projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Work Projects</h1>
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
        
      </div>
    </div>
  )
}
