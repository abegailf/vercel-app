// File: app/projects/inventory-forecast/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function InventoryForecastModel() {
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
            <span>Inventory Forecasting Model</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Inventory Forecasting Model</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Forecasting Next Month's Inventory</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This project was for a children's clothing company. The main goal was to create an inventory forecast for **January 2025** by using the sales history from all of 2024. I used a fictional dataset for this public version since the real data is confidential.
                </p>
                <p className="text-gray-300 leading-relaxed font-bold mb-4">My objectives for this task were:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-8">
                  <li>To analyze the 2024 data to find out which dresses were the fast-moving, moderate-moving, and slow-moving items.</li>
                  <li>To use that analysis to build a weighted average model that could accurately forecast the inventory needed for January 2025.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Process: How I Built the Model</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I built the entire forecasting model in Excel. Here are the steps I took to get the final forecast:
                </p>
                <ul className="list-disc list-inside space-y-4 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">First, I used a pivot table</strong> to filter the data down to exactly what I needed: only dresses from the "Mini Miss" department sold in the webstore at a discounted price.
                  </li>
                  <li>
                    <strong className="text-white">Then, I analyzed the sales history for 2024</strong> to find the average sales for different seasons, which I called lenient, moderate, and peak months.
                  </li>
                  <li>
                    <strong className="text-white">I computed a weighted average</strong> for each dress. I gave more weight to the lenient months (60%) and less to the peak months (10%) because I wanted a more conservative and accurate forecast for January, which is a lenient month.
                  </li>
                  <li>
                    <strong className="text-white">Next, I classified each dress</strong> as fast, moderate, or slow-moving based on its weighted average score.
                  </li>
                  <li>
                    <strong className="text-white">Finally, I applied a simple multiplier</strong> to the weighted average. Fast-movers got a small boost (x1.2), while slow-movers were reduced (x0.8), to get the final forecast number for each dress.
                  </li>
                </ul>
              </div>
            </div>

              {/* Interactive Forecasting Template Embed */}
              <div className="mb-8">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-700"
                    src="https://onedrive.live.com/embed?resid=ADB428E6BE66D22A%21117&authkey=%21AMoG_MLw1CFtOyY&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
                    frameBorder="0"
                    scrolling="no"
                    title="Inventory Forecasting Template"
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
                    Back to portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Info Sidebar */}
          <div className="lg:col-span-1 lg:order-2">
            <Card className="border sticky top-28" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-300">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Data computation, Forecasting, Replenishment Planning
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Excel, Pivot Tables, Advanced Formulas
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
                        window.open("https://1drv.ms/x/s!AirSZr7mKLStdf1lRCI5WRX_w9I?e=VgA5XU", "_blank")
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
    </>
  )
}