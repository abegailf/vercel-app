"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowLeft, Github, Code, Database, FileText } from "lucide-react"

export default function SQLScripts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const sqlProjects = [
    {
      name: "Netflix EDA.sql",
      description: "Exploratory Data Analysis of Netflix content dataset",
      type: "Data Exploration",
    },
    {
      name: "netflix data cleaning.sql",
      description: "Data cleaning and standardization processes for Netflix dataset",
      type: "Data Cleaning",
    },
    {
      name: "video_game_sales_EDA.sql",
      description: "Comprehensive analysis of video game sales data",
      type: "Data Exploration",
    },
    {
      name: "netflix_titles.csv",
      description: "Raw Netflix dataset for analysis",
      type: "Dataset",
    },
  ]

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
        <section className="py-12 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Portfolio Details</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">SQL Scripts</h1>
          </div>
        </section>

        {/* Portfolio Details */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        Data Cleaning, Data Exploration
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        SQL
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                        style={{ borderColor: "#FB5530", color: "#FB5530" }}
                        onClick={() => window.open("https://github.com/abegailf/SQL-Scripts", "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Repository Stats */}
              <Card className="mt-6 border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5" style={{ color: "#FB5530" }} />
                    Repository Contents
                  </h3>
                  <div className="space-y-3">
                    {sqlProjects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg"
                        style={{ backgroundColor: "rgba(165, 147, 133, 0.1)" }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {project.type === "Dataset" ? (
                            <FileText className="w-4 h-4 text-blue-400" />
                          ) : (
                            <Code className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{project.name}</p>
                          <p className="text-xs mt-1" style={{ color: "#A59385" }}>
                            {project.description}
                          </p>
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                              project.type === "Data Cleaning"
                                ? "bg-blue-600/20 text-blue-400"
                                : project.type === "Data Exploration"
                                  ? "bg-green-600/20 text-green-400"
                                  : "bg-gray-600/20 text-gray-400"
                            }`}
                          >
                            {project.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This repository showcases my SQL projects, including exploratory data analysis (EDA) and data
                    cleaning tasks. Each script demonstrates my ability to manipulate, clean, and analyze raw datasets
                    to uncover meaningful insights.
                  </p>

                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mb-8 bg-transparent"
                    onClick={() => window.open("https://github.com/abegailf/SQL-Scripts", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Featured SQL Projects:</h3>

                  <div className="space-y-6">
                    <div
                      className="p-6 rounded-lg border"
                      style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}
                    >
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-400" />
                        Netflix Data Analysis
                      </h4>
                      <p className="text-gray-300 mb-3">
                        Comprehensive data cleaning and exploratory analysis of Netflix content dataset, including data
                        standardization, duplicate removal, and trend analysis.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full">
                          Data Cleaning
                        </span>
                        <span className="px-3 py-1 text-xs bg-green-600/20 text-green-400 rounded-full">EDA</span>
                      </div>
                    </div>

                    <div
                      className="p-6 rounded-lg border"
                      style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}
                    >
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-400" />
                        Video Game Sales Analysis
                      </h4>
                      <p className="text-gray-300 mb-3">
                        In-depth analysis of video game sales data, exploring market trends, platform performance, and
                        regional sales patterns using advanced SQL queries.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-xs bg-green-600/20 text-green-400 rounded-full">
                          Data Exploration
                        </span>
                        <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">
                          Market Analysis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">SQL Skills Demonstrated:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>
                      <strong className="text-white">Data Cleaning:</strong> Removing duplicates, standardizing data
                      formats, handling null values
                    </li>
                    <li>
                      <strong className="text-white">Data Exploration:</strong> Statistical analysis, trend
                      identification, pattern recognition
                    </li>
                    <li>
                      <strong className="text-white">Complex Queries:</strong> JOINs, subqueries, window functions, CTEs
                    </li>
                    <li>
                      <strong className="text-white">Data Transformation:</strong> Creating staging tables, data type
                      conversions, calculated fields
                    </li>
                    <li>
                      <strong className="text-white">Performance Optimization:</strong> Query optimization, indexing
                      strategies
                    </li>
                  </ul>
                </div>

                {/* Project Image */}
                <div className="mb-8">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/images/sql-scripts-display.png"
                      alt="SQL Scripts GitHub Repository"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Back to Projects */}
                <div className="pt-8 border-t border-gray-700">
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p className="mb-4">© Copyright 2024. All rights reserved.</p>
          {/* Social Links - Commented out for now
          <div className="flex gap-4 justify-center mb-4">
            <Button size="icon" variant="ghost" className="text-blue-400 hover:text-blue-300">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-gray-300">
              <Github className="w-5 h-5" />
            </Button>
          </div>
          */}
          <p className="text-sm">Made with ❤️ using React + Tailwind</p>
        </footer>
      </div>
    </div>
  )
}
