"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowLeft, Download } from "lucide-react"
import { generateGamingIndustryPDF } from "@/lib/pdf-generator"

export default function GamingIndustryCaseStudy() {
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

  const handleDownloadPDF = () => {
    try {
      const doc = generateGamingIndustryPDF()
      doc.save("Video-Games-Sales-Analysis.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Error generating PDF. Please try again.")
    }
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "#111024", color: "white" }}>
      {/*  <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#111024" }}>
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
      </header */}
     

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
            <h1 className="text-4xl md:text-5xl font-bold">Gaming Industry Case Study</h1>
          </div>
        </section>

        {/* Portfolio Details */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Project Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        Data Cleaning, Data Exploration, Data Visualization
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        SQL, OpenRefine, Tableau
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                        style={{ borderColor: "#FB5530", color: "#FB5530" }}
                        onClick={handleDownloadPDF}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
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
                    In this project, I conducted an in-depth analysis of video game sales using SQL and OpenRefine to
                    extract, clean, and normalize complex datasets. OpenRefine was particularly useful in standardizing
                    video game names, which often have inconsistent naming conventions (e.g., "King Kong" vs.
                    "KingKong", "Final Fantasy 7" vs. "Final Fantasy VII"). The{" "}
                    <strong className="text-white">Clustering Facet</strong> feature in OpenRefine helped group and
                    merge these variations efficiently, ensuring accurate data aggregation and analysis.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Leveraging Tableau, I created insightful visualizations to highlight key trends in platform
                    preferences, genre popularity, and regional sales performance. The findings were compiled into a
                    comprehensive PDF report that includes strategic recommendations for sustained market growth.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Project Objectives:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Identify top-performing games, genres, and consoles.</li>
                    <li>Understand regional preferences and seasonal trends.</li>
                    <li>Track shifts in genre and console popularity over time.</li>
                    <li>Analyze the impact of critic scores on sales performance.</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Strategic Recommendations:</h3>
                  <ul className="list-disc list-inside space-y-4 text-gray-300 ml-4">
                    <li>
                      <strong className="text-white">Focus on High-Quality Shooter and Action Games:</strong>
                      <span className="block mt-1">
                        Prioritizing the development of high-quality Shooter and Action games for PlayStation and Xbox,
                        particularly with Q4 releases, can maximize holiday sales and strengthen brand loyalty. Ensuring
                        strong critic scores through rigorous quality assurance will enhance market impact and overall
                        sales potential.
                      </span>
                    </li>
                    <li>
                      <strong className="text-white">Implement Targeted Regional Marketing:</strong>
                      <span className="block mt-1">
                        Adapting marketing strategies to align with regional preferences can boost engagement. For
                        example, focusing on Shooters and sports titles in North America and Europe/Africa, while
                        promoting RPGs and locally developed games in Japan, can enhance brand visibility and drive
                        stronger regional sales.
                      </span>
                    </li>
                    <li>
                      <strong className="text-white">Diversify Genre Offerings:</strong>
                      <span className="block mt-1">
                        Expanding beyond Shooter and Action genres into RPGs, simulations, and strategy games can
                        attract a wider audience and diversify revenue streams. This approach reduces dependency on
                        top-performing genres and strengthens the company's position across multiple gaming markets.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This project not only honed my skills in data manipulation and visualization but also provided
                    valuable insights into the strategic dimensions of business intelligence within the gaming industry.
                  </p>

                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mb-8 bg-transparent"
                    onClick={handleDownloadPDF}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </div>

                {/* Project Image */}
                <div className="mb-8">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/images/game-console.png"
                      alt="Gaming Industry Case Study Analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Back to Projects */}
                <div className="pt-8 border-t border-gray-700">
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <footer className="py-8 text-center border-t" style={{ color: "#A59385", borderColor: "#A59385" }}>
          <p className="mb-4">© Copyright 2024. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ using React + Tailwind</p>
        </footer> */}
       
      </div>
    </div>
  )
}
