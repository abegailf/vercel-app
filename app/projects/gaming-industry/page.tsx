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
    // For now, let's link directly to a PDF file in your /public folder.
    // Replace 'your-pdf-filename.pdf' with the actual name of your file.
    window.open('/files/VIDEO GAMES SALES ANALYSIS.pdf', '_blank');
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "#111024", color: "white" }}>
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
            <h1 className="text-4xl md:text-5xl font-bold">Uncovering Market Trends in the Gaming Industry</h1>
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
                           <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Analyzing Video Game Sales Data</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  For this project, I wanted to do a full, deep-dive analysis of a video game sales dataset. The main goal was to practice the entire data analysis process, from cleaning the raw data all the way to providing strategic recommendations for a business.
                </p>
                <p className="text-gray-300 leading-relaxed font-bold mb-4">I set a few key objectives for my analysis:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-8">
                    <li>Find the top-performing games, genres, and consoles.</li>
                    <li>Understand what types of games are popular in different regions, like North America vs. Japan.</li>
                    <li>See how critic scores impact sales.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Process: From Messy Data to Clean Insights</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The first big challenge was cleaning the data. The game names were very inconsistent (like "King Kong" vs "KingKong"), so I used SQL and OpenRefine to clean and normalize everything. The "Clustering Facet" in OpenRefine was especially helpful for grouping all the different name variations together, which was critical for accurate analysis.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  After cleaning the data, I used Tableau to create a lot of visualizations. This helped me to easily see the key trends in platform preferences, genre popularity, and regional sales performance.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Outcome: Strategic Recommendations</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Based on all my findings, I put together a full PDF report. It doesn't just show the data; it also includes strategic recommendations that a real gaming company could use. For example, I recommended focusing on high-quality Shooter and Action games for the holiday season and adapting marketing strategies for different regions.
                </p>
                <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mb-8 bg-transparent"
                    onClick={handleDownloadPDF}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Report
                </Button>
              </div>

              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/game-console.png"
                    alt="Gaming Industry Case Study Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
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
