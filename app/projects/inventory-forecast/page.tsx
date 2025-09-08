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
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Project Background:</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This project was created for a children's clothing company. However, since the actual data is
                  confidential, the dataset used here is fictional.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  After analyzing sales trends and identifying lenient, moderate, and peak months, the objectives of
                  this project were to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-8">
                  <li>
                    Determine the fast-moving, moderate-moving, and slow-moving dresses for 2024 accounting only the
                    discounted price tier and webstore store type.
                  </li>
                  <li>
                    Allocate an inventory forecast for each design using a weighted average metric for January 2025.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Methodology:</h3>
                <ul className="list-disc list-inside space-y-4 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Created a pivot table filtering for:</strong>
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li><strong className="text-white">Department:</strong> Mini Miss</li>
                      <li><strong className="text-white">Store Location:</strong> Webstore</li>
                      <li><strong className="text-white">Pricing Tier:</strong> Discounted</li>
                      <li><strong className="text-white">Subclass Name:</strong> Dresses</li>
                    </ul>
                    <span className="block mt-2">The pivot values were set to the sum of quantity sales.</span>
                  </li>
                  <li>Sorted the results in descending order to highlight the top-moving products.</li>
                  <li>
                    <strong className="text-white">Used the 2024 sales history to calculate averages for different periods:</strong>
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Lenient months: January to May</li>
                      <li>Moderate months: June to October</li>
                      <li>Peak months: November to December</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Computed the weighted average to forecast January sales using the formula:</strong>
                    <div className="bg-gray-800 p-4 rounded-lg mt-2 font-mono text-orange-400 text-sm">
                      Weighted Average = (0.6 × Avg Lenient) + (0.3 × Avg Moderate) + (0.1 × Avg Peak)
                    </div>
                    <span className="block mt-2">As shown, I reduced the weight of peak months to 10% for a more accurate forecast.</span>
                  </li>
                  <li>
                    <strong className="text-white">Classified each design based on its weighted average:</strong>
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Fast-moving: Weighted average &gt; 10</li>
                      <li>Slow-moving: Weighted average &lt; 4</li>
                      <li>Moderate-moving: Everything in between</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Applied a multiplier for the forecast:</strong>
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Fast-moving: ×1.2</li>
                      <li>Moderate-moving: ×1</li>
                      <li>Slow-moving: ×0.8</li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Final forecast formula:</strong>
                    <div className="bg-gray-800 p-4 rounded-lg mt-2 font-mono text-orange-400 text-sm">
                      Weighted Average × Multiplier
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Replenishment Planning Template:</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Beyond forecasting, I also created a comprehensive replenishment planning template that helps
                  determine:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
                    <li>Required inventory to achieve target sell-through rates</li>
                    <li>Current webstore inventory levels</li>
                    <li>Replenishment needs from local warehouses and fashion houses</li>
                    <li>Optimal allocation across different inventory sources</li>
                </ul>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/replenishment-display.png"
                    alt="Inventory Replenishment Planning Template"
                    fill
                    className="object-cover"
                  />
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