// File: app/projects/sql-scripts/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, Code, Database, FileText } from "lucide-react"

export default function SQLScripts() {
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
    <>
      {/* Page Title */}
      <section className="py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-orange-600 transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span>SQL Scripts</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">From Raw Data to Ready-for-Analysis</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <Card className="border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">Project Overview</h3>
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

              <Card className="mt-6 border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5" style={{ color: "#FB5530" }} />
                    Repository Contents
                  </h3>
                  <div className="space-y-3">
                    {sqlProjects.map((project, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(165, 147, 133, 0.1)" }}>
                        <div className="flex-shrink-0 mt-1">
                          {project.type === "Dataset" ? (
                            <FileText className="w-4 h-4 text-blue-400" />
                          ) : (
                            <Code className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{project.name}</p>
                          <p className="text-xs mt-1" style={{ color: "#A59385" }}>{project.description}</p>
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                              project.type === "Data Cleaning" ? "bg-blue-600/20 text-blue-400"
                              : project.type === "Data Exploration" ? "bg-green-600/20 text-green-400"
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
                         <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Showcasing My SQL Skills</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I put together this collection of SQL scripts to show my hands-on skills in data cleaning and exploratory data analysis (EDA). Each script is a practical example of how I use SQL to take raw, messy data and turn it into something clean and useful for finding insights.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Process: Cleaning and Exploring Data</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  In these projects, I worked with a couple of different datasets, like the Netflix content library and a video game sales database. My process was always the same:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                    <li>
                      <strong className="text-white">Data Cleaning:</strong> First, I use SQL to clean everything up. This means finding and removing duplicates, handling null values, and making sure all the data formats are standardized and consistent.
                    </li>
                    <li>
                      <strong className="text-white">Data Exploration:</strong> Once the data is clean, I use SQL to start exploring. I write more complex queries using JOINs, subqueries, and CTEs to analyze the data, identify trends, and recognize patterns that can answer business questions.
                    </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Featured Scripts</h3>
                <div className="space-y-6">
                  <div className="p-6 rounded-lg border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                    <h4 className="text-lg font-bold mb-2 text-white">Netflix Data Analysis</h4>
                    <p className="text-gray-300 mb-3">
                      A project focused on data cleaning and EDA for the Netflix content dataset.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full">Data Cleaning</span>
                      <span className="px-3 py-1 text-xs bg-green-600/20 text-green-400 rounded-full">EDA</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                    <h4 className="text-lg font-bold mb-2 text-white">Video Game Sales Analysis</h4>
                    <p className="text-gray-300 mb-3">
                      An in-depth analysis of video game sales, exploring market trends and platform performance.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 text-xs bg-green-600/20 text-green-400 rounded-full">Data Exploration</span>
                      <span className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full">Market Analysis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/sql-scripts-display.png"
                    alt="SQL Scripts GitHub Repository"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

              {/* Back to Portfolio */}
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
    </>
  )
}