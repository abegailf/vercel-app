"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, ArrowLeft, ExternalLink } from "lucide-react"

export default function ExcelSalesDashboard() {
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

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "#111024", color: "white" }}>
      {/* <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#111024" }}>
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
              <span>Portfolio Details</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Excel Sales Dashboard</h1>
          </div>
        </section>

        {/* Portfolio Details */}
        <section className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 lg:order-1">
              <div className="prose prose-lg max-w-none">
                           <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Understanding Sales Trends</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I created this simple analysis for a children's clothing company to help them see their sales trends more clearly. Because the real data is confidential, I used a fictional dataset for this version.
                </p>
                <p className="text-gray-300 leading-relaxed font-bold mb-4">The main objective was to analyze the 2024 sales for a specific category:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-8">
                  <li>Dresses from the "Mini Miss" department.</li>
                  <li>That were sold at a discounted price.</li>
                  <li>And only from the online webstore.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mb-6">
                    My goal was to find out which months were lenient, moderate, and peak sales periods for these specific items.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A Simple and Clear Dashboard</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To present my findings, I built a simple dashboard in Excel. Instead of just showing a table of numbers, the dashboard uses charts and graphs to make the trends easy to see at a glance.
                </p>
                <p className="text-gray-300 leading-relaxed font-bold mb-4">From the dashboard, we could easily see the key findings:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Lenient Months:</strong> January to May had the lowest sales.
                  </li>
                  <li>
                    <strong className="text-white">Moderate Months:</strong> June to October showed average sales.
                  </li>
                  <li>
                    <strong className="text-white">Peak Months:</strong> November and December were the highest-selling months, likely because of the holidays.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/kiddie-vogue-dashboard.png"
                    alt="Excel Sales Dashboard Screenshot"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

                <div className="mb-8">
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mb-6 bg-transparent"
                    onClick={() => window.open("https://1drv.ms/x/s!AirSZr7mKLStawvEtzt0F6D3lUI?e=3gjwC2", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Excel Workbook Online
                  </Button>

                  <p className="leading-relaxed mb-6" style={{ color: "#A59385" }}>
                    You can explore the interactive dashboard below:
                  </p>
                </div>

                {/* Interactive Dashboard Embed */}
                <div className="mb-8">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-700"
                      src="https://onedrive.live.com/embed?resid=ADB428E6BE66D22A%21107&authkey=%21AA3k2NlWLWVWJLo&em=2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
                      frameBorder="0"
                      scrolling="no"
                      title="Excel Sales Dashboard"
                    />
                  </div>
                </div>

                {/* Back to Projects */}
                <div className="pt-8 border-t" style={{ borderColor: "#A59385" }}>
                  <Link href="/portfolio">
                    <Button
                      variant="outline"
                      className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                      style={{ borderColor: "#FB5530", color: "#FB5530" }}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Info Sidebar */}
            <div className="lg:col-span-1 lg:order-2">
              <Card className="border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Project Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        Dashboard, Data cleaning, Data visualization, Data Analysis
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                      <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                        Excel
                      </p>
                    </div>
                    <div>
                      <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                        style={{ borderColor: "#FB5530", color: "#FB5530" }}
                        onClick={() =>
                          window.open("https://1drv.ms/x/s!AirSZr7mKLStawvEtzt0F6D3lUI?e=3gjwC2", "_blank")
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Online
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  )
}
