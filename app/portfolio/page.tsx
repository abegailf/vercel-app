"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ZoomIn, ExternalLink, ArrowLeft } from "lucide-react"

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("*")

  const projects = [
{
      id: 2,
      title: "Uncovering Market Trends in the Gaming Industry",
      description: "SQL, OpenRefine, Tableau, Data Cleaning, Data Exploration, Data Visualization",
      image: "/images/game-console.png",
      categories: ["sql", "openrefine", "tableau", "datacleaning", "dataexp", "dataviz"],
      link: "/projects/gaming-industry",
    },
    {
      id: 1,
      title: "Driving E-commerce Insights with GA4",
      description: "Google Analytics (GA4)",
      image: "/images/google-merch-display-new.png",
      categories: ["ga4"],
      link: "/projects/google-merch",
    },
    {
      id: 5,
      title: "From Raw Data to Ready-for-Analysis",
      description: "SQL, Data Cleaning, Data Exploration",
      image: "/images/sql-scripts-display.png",
      categories: ["sql", "datacleaning", "dataexp"],
      link: "/projects/sql-scripts",
    },
    {
      id: 6,
      title: "Interactive Dashboards with Tableau",
      description: "Tableau, Data Visualization",
      image: "/images/tableau-display.png",
      categories: ["tableau", "dataviz"],
      link: "/projects/tableau-vizzes",
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
      id: 3,
      title: "Inventory Forecasting Model",
      description: "Excel",
      image: "/images/inventory-forecast.png",
      categories: ["excel"],
      link: "/projects/inventory-forecast",
    },
         {
      id: 7, 
      title: "Inventory Replenishment Template",
      description: "Excel, Process Automation",
      image: "/images/inventory-replenishment.png", 
      categories: ["excel", "processauto"],
      link: "/projects/inventory-replenishment", 
    },
           {
      id: 8, 
      title: "Store Pullout Automation (VBA)",
      description: "Excel, VBA, Process Automation",
      image: "/images/inventory-replenishment.png", 
      categories: ["excel", "vba", "processauto"],
      link: "/projects/store-pullout-automation", 
    },
  {
      id: 17, 
      title: "Data Collation Python Script",
      description: "Excel, Python, Process Automation, Visual Studio Code, AI",
      image: "/images/python-data-collation.png", 
      categories: ["ai", "python","vscode", "processauto", "excel"], 
      link: "/projects/python-data-collation", 
    },
     {
      id: 16, 
      title: "Automated Worksheet-Answer Checker",
      description: "Python, LLM Evaluation, Process Automation, Visual Studio Code, AI",
      image: "/images/ws-answer checking.png", 
      categories: ["ai", "python","vscode", "processauto"],
      link: "/projects/ai-answer-checker",
    },
     {
      id: 15, 
      title: "PT Curation Agent CLI",
      description: "AI Agent Design, Prompt Engineering, Process Automation",
      image: "/images/pt curation.png", 
      categories: ["ai", "aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-curation-agent", 
    },
     {
      id: 14, 
      title: "Data Visualization Scripting", 
      description: "AI, Python, Prompt Engineering", 
      image: "/images/histogram curve.png", 
       categories: ["ai", "python", "promptengineering"],
      link: "/projects/python-histogram-generator",
    },
  {
      id: 10, 
      title: "Worksheet-PT Alignment Agent CLI",
      description: "Prompt Engineering, AI Agent Design, Automation",
      image: "/images/ws-pt alignment creation.png", 
      categories: ["ai","aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-orchestrator-alignment", 
    },
            {
      id: 12,
      title: "Worksheet-PT Alignment QA Specialist Agent CLI",
      description: "AI Agent Design, QA Automation, Prompt Engineering",
      image: "/images/qa ws-pt alignment.png", 
      categories: ["ai","aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-qa-agent", 
    },
 {
      id: 11, 
      title: "PT Creation Agent CLI",
      description: "AI agent, Automation, Prompt Engineering",
      image: "/images/pt request creation.png", 
      categories: ["ai","aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-orchestrator-creation", 
    },
  {
      id: 13,
      title: "PT Creation QA Specialist Agent CLI",
      description: "AI Agent Design, QA Automation, Prompt Engineering",
      image: "/images/qa pt request.png", 
      categories: ["ai","aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-qa-agent-requests",
    },
    
      {
      id: 9, 
      title: "PT Creator AI",
      description: "Google AI Studio, Prompt Engineering, Automation",
      image: "/images/Pt creator AI.png",
      categories: ["googleAIstudio", "promptengineering", "processauto"], 
      link: "/projects/pt-creator-ai", 
    },
  ]

  const filters = [
    { key: "*", label: "All" },
    { key: "sql", label: "SQL" },
    { key: "vba", label: "VBA" },
    { key: "excel", label: "Excel" },
    { key: "tableau", label: "Tableau" },
    { key: "openrefine", label: "OpenRefine" },
    { key: "ga4", label: "Google Analytics (GA4)" },
    { key: "ai", label: "AI" },
    { key: "aiagent", label: "AI Agent" },
    { key: "python", label: "Python" },
    { key: "processauto", label: "Process Automation" },
    { key: "vscode", label: "Visual Studio Code" },
    { key: "promptengineering", label: "Prompt Engineering" },
    { key: "googleAIstudio", label: "Google AI studio" },
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
  

      <div className="pt-20">

        {/* Portfolio Section */}
        <section className="py-16 max-w-7xl mx-auto px-6">
           <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Portfolio</h2>

          </div>
          <div className="container">
            {/* Portfolio Filters */}
           <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
              {filters.map((filter) => (
                  <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`px-3 py-1 rounded-full transition-colors ${activeFilter === filter.key ? "bg-orange-600 text-white" : "text-gray-400 hover:text-orange-600"}`}>
                      {filter.label}
                  </button>
              ))}
          </div>

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
           <div className="pt-8">
                <Link href="/">
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
        </section>

        
      </div>
    </div>
  )
}
