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
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#FB5530" }}>
                    Project Background:
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: "#A59385" }}>
                    This is a simple analysis I created for a children's fashion company. Since the actual data is
                    confidential, the dataset used here is fictional. The objective was to analyze sales trends for:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6" style={{ color: "#A59385" }}>
                    <li>
                      <strong className="text-white">Department:</strong> Mini Miss
                    </li>
                    <li>
                      <strong className="text-white">Pricing Tier:</strong> Discounted
                    </li>
                    <li>
                      <strong className="text-white">Subclass:</strong> Dress
                    </li>
                    <li>
                      <strong className="text-white">Store Type:</strong> Webstore
                    </li>
                  </ul>

                  <p className="leading-relaxed mb-8" style={{ color: "#A59385" }}>
                    The goal was to identify the lenient, moderate, and peak months for 2024.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#FB5530" }}>
                    Key Findings:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "#A59385" }}>
                    <li>
                      <strong className="text-white">Lenient months:</strong> January to May
                    </li>
                    <li>
                      <strong className="text-white">Moderate months:</strong> June to October
                    </li>
                    <li>
                      <strong className="text-white">Peak months:</strong> November and December
                    </li>
                  </ul>
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

                {/* Project Image */}
                <div className="mb-8">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/images/kiddie-vogue-dashboard.png"
                      alt="Excel Sales Dashboard Screenshot"
                      fill
                      className="object-cover"
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
                  <h3 className="text-xl font-bold mb-4">Project Overview</h3>
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
