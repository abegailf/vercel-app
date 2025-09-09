// File: app/projects/tableau-vizzes/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, BarChart3, TrendingUp, Eye, Heart } from "lucide-react"

export default function TableauVizzes() {
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
            <span>Tableau Visualizations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Interactive Dashboards with Tableau</h1>
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
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
                          <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Telling Stories with Data</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This page is a collection of my data visualization projects that I created using Tableau. For me, the goal of these vizzes is to take raw data and turn it into something visual that is easy to understand and tells a clear story.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">My Tableau Vizzes</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Here are some of the dashboards I've built. Each one takes a different dataset—from Netflix content to video game sales—and presents the key insights in an interactive and compelling way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tableauVizzes.map((viz, index) => (
                    <div key={index} className="p-6 rounded-lg border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                      <h4 className="text-lg font-bold mb-2 text-white">{viz.title}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{viz.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{viz.views}</span></div>
                        <div className="flex items-center gap-1"><Heart className="w-4 h-4" /><span>{viz.likes}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Skills I Use in Tableau</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Interactive Dashboards:</strong> I like to create dashboards that are engaging and user-friendly.</li>
                  <li><strong className="text-white">Data Storytelling:</strong> My focus is always on transforming complex data into a clear and simple narrative.</li>
                  <li><strong className="text-white">Different Chart Types:</strong> I use a variety of charts, like geographic maps for spatial data and time series charts to show trends over time.</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/tableau-display.png"
                    alt="Tableau Public Profile"
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