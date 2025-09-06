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
          <h1 className="text-4xl md:text-5xl font-bold">Data Visualizations with Tableau</h1>
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
            </div>
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
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">Featured Visualizations:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tableauVizzes.map((viz, index) => (
                    <div key={index} className="p-6 rounded-lg border" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
                      <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                        {viz.title}
                      </h4>
                      <p className="text-gray-300 mb-4 text-sm">{viz.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1"><Eye className="w-4 h-4" /><span>{viz.views}</span></div>
                        <div className="flex items-center gap-1"><Heart className="w-4 h-4" /><span>{viz.likes}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================================================================== */}
              {/* START: RESTORED SKILLS AND CATEGORIES SECTIONS */}
              {/* ================================================================== */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Visualization Skills Demonstrated:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Interactive Dashboards:</strong> Creating engaging, user-friendly visualizations.</li>
                  <li><strong className="text-white">Data Storytelling:</strong> Transforming complex data into clear narratives.</li>
                  <li><strong className="text-white">Geographic Mapping:</strong> Spatial data visualization and analysis.</li>
                  <li><strong className="text-white">Time Series Analysis:</strong> Trend visualization over time periods.</li>
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
              {/* ================================================================== */}
              {/* END: RESTORED SECTIONS */}
              {/* ================================================================== */}

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