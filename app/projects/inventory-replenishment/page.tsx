// File: app/projects/inventory-replenishment/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function InventoryReplenishmentTemplate() {
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
            <span>Inventory Replenishment Template</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Inventory Replenishment Template</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: A Manual Process</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  For a children's clothing company, determining how to restock the online store was a time-consuming, manual task. After forecasting demand, my colleague had to manually check inventory levels across the webstore, a local warehouse, and various physical stores to figure out replenishment needs.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The process involved a lot of filtering and manual calculations. For example, if a dress needed 8 more units, she would have to check if the warehouse had enough. If not, she'd have to calculate the remaining need and then manually check stock at physical stores. I saw an opportunity to automate this entire decision-making process.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An Automated Template</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I developed a smart Excel template that transforms this multi-step process into a simple copy-and-paste task. By leveraging a series of nested IF and IFS formulas, the template automates the entire replenishment logic.
                </p>
                <p className="text-gray-300 leading-relaxed font-bold mb-4">The new workflow is simple:</p>
                <ul className="list-decimal list-inside space-y-2 text-gray-300 ml-4 mb-8">
                  <li>Paste in the latest inventory data: design code, forecast, and current stock levels for the webstore, warehouse, and physical stores.</li>
                  <li>The template instantly calculates everything else.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">How It Works: The Automated Logic</h3>
                <ul className="list-disc list-inside space-y-4 text-gray-300 ml-4">
                    <li>
                      <strong className="text-white">Calculates Replenishment Need:</strong> Automatically determines if an item is below its forecasted demand and calculates the exact quantity needed.
                    </li>
                    <li>
                      <strong className="text-white">Prioritizes Sourcing:</strong> The formula first checks the local warehouse to fulfill the need. It automatically caps the quantity to what's available.
                    </li>
                    <li>
                      <strong className="text-white">Cascades to Secondary Sources:</strong> If the warehouse can't meet the full demand, the template automatically calculates the remaining shortfall and determines if it can be fulfilled by pulling stock from physical stores.
                    </li>
                    <li>
                      <strong className="text-white">Provides a Clear Report:</strong> The final output is a clean, actionable report showing exactly how many units to pull from each location for every single design.
                    </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/inventory-replenishment.png"
                    alt="Inventory Replenishment Template Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

                <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Live Demo: Interactive Template</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Below is a live, embedded version of the template populated with sample data. You can see how the formulas automatically calculate the replenishment needs.
                </p>
                <div className="relative w-full rounded-lg overflow-hidden border border-gray-700" style={{ paddingBottom: "86.07%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://1drv.ms/x/c/adb428e6be66d22a/IQQq0ma-5ii0IICtdgAAAAAAAVNlzyqTCYEGUjIB5M0pWQs?em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True"
                    frameBorder="0"
                    scrolling="no"
                    title="Interactive Inventory Replenishment Template"
                  />
                </div>
              </div>

              {/* Back to Portfolio */}
              <div className="pt-8 border-t border-gray-700">
                <Link href="/work-project">
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to work projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Info Sidebar */}
          <div className="lg:col-span-1 lg:order-2">
            <Card className="border sticky top-28" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Process Automation, Inventory Management, Advanced Excel Formulas
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Microsoft Excel, IFS Function, VLOOKUP
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
                        window.open("YOUR_EXCEL_ONLINE_LINK_HERE", "_blank") // <-- IMPORTANT: REPLACE THIS LINK
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