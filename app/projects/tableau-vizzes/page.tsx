"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowLeft, ExternalLink, BarChart3, TrendingUp, Eye, Heart } from "lucide-react"

export default function TableauVizzes() {
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

  const tableauVizzes = [
    {
      title: "Netflix Analysis",
      description: "Comprehensive analysis of Netflix content trends and patterns",
      views: "41",
      likes: "0",
      type: "Entertainment Analytics",
    },
    {
      title: "Superstore Sales Analysis",
      description: "Business intelligence dashboard for retail sales performance",
      views: "54",
      likes: "0",
      type: "Business Intelligence",
    },
    {
      title: "Top Baby Names by State",
      description: "Geographic visualization of popular baby names across US states",
      views: "15",
      likes: "0",
      type: "Demographic Analysis",
    },
    {
      title: "World CO2 Emissions from 1960-2011",
      description: "Environmental data visualization showing global carbon emissions trends",
      views: "9",
      likes: "0",
      type: "Environmental Analytics",
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
            <h1 className="text-4xl md:text-5xl font-bold">Data Visualizations with Tableau</h1>
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
                        Data Visualization
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        Tableau
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                        style={{ borderColor: "#FB5530", color: "#FB5530" }}
                        onClick={() => window.open("https://public.tableau.com/app/profile/abegailf", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Tableau Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Stats */}
              <Card className="mt-6 border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" style={{ color: "#FB5530" }} />
                    Profile Statistics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: "#A59385" }}>
                        Total Vizzes
                      </span>
                      <span className="font-bold" style={{ color: "#FB5530" }}>
                        4
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: "#A59385" }}>
                        Total Views
                      </span>
                      <span className="font-bold" style={{ color: "#FB5530" }}>
                        119
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: "#A59385" }}>
                        Followers
                      </span>
                      <span className="font-bold" style={{ color: "#FB5530" }}>
                        0
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: "#A59385" }}>
                        Following
                      </span>
                      <span className="font-bold" style={{ color: "#FB5530" }}>
                        0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This collection features my data visualization projects created using Tableau. Each dashboard
                    transforms raw data into compelling visual insights, making complex patterns and trends easy to
                    understand.
                  </p>

                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mb-8 bg-transparent"
                    style={{ borderColor: "#FB5530", color: "#FB5530" }}
                    onClick={() => window.open("https://public.tableau.com/app/profile/abegailf", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View my Tableau Profile
                  </Button>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-600">Featured Visualizations:</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tableauVizzes.map((viz, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-lg border ${isMenuOpen ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
                      >
                        <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                          {viz.title}
                        </h4>
                        <p className="text-gray-300 mb-4 text-sm">{viz.description}</p>

                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`px-3 py-1 text-xs rounded-full ${
                              viz.type === "Entertainment Analytics"
                                ? "bg-red-600/20 text-red-400"
                                : viz.type === "Business Intelligence"
                                  ? "bg-blue-600/20 text-blue-400"
                                  : viz.type === "Demographic Analysis"
                                    ? "bg-green-600/20 text-green-400"
                                    : "bg-purple-600/20 text-purple-400"
                            }`}
                          >
                            {viz.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{viz.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{viz.likes}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Visualization Skills Demonstrated:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>
                      <strong className="text-white">Interactive Dashboards:</strong> Creating engaging, user-friendly
                      visualizations
                    </li>
                    <li>
                      <strong className="text-white">Data Storytelling:</strong> Transforming complex data into clear
                      narratives
                    </li>
                    <li>
                      <strong className="text-white">Geographic Mapping:</strong> Spatial data visualization and
                      analysis
                    </li>
                    <li>
                      <strong className="text-white">Time Series Analysis:</strong> Trend visualization over time
                      periods
                    </li>
                    <li>
                      <strong className="text-white">Business Intelligence:</strong> KPI dashboards and performance
                      metrics
                    </li>
                    <li>
                      <strong className="text-white">Multi-dimensional Analysis:</strong> Complex data relationships and
                      patterns
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Visualization Categories:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-red-600/10 border border-red-600/20">
                      <div className="text-2xl font-bold text-red-400">1</div>
                      <div className="text-sm text-gray-400">Entertainment</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-blue-600/10 border border-blue-600/20">
                      <div className="text-2xl font-bold text-blue-400">1</div>
                      <div className="text-sm text-gray-400">Business</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-green-600/10 border border-green-600/20">
                      <div className="text-2xl font-bold text-green-400">1</div>
                      <div className="text-sm text-gray-400">Demographics</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-purple-600/10 border border-purple-600/20">
                      <div className="text-2xl font-bold text-purple-400">1</div>
                      <div className="text-sm text-gray-400">Environmental</div>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className="mb-8">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/images/tableau-display.png"
                      alt="Tableau Public Profile"
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
