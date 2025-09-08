// File: app/projects/google-merch/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
// We are removing generateGoogleMerchPDF for now to simplify. We can add it back later if needed.
// import { generateGoogleMerchPDF } from "@/lib/pdf-generator"

export default function GoogleMerchCaseStudy() {

  const handleDownloadPDF = () => {
    // For now, let's link directly to a PDF file in your /public folder.
    // Replace 'your-pdf-filename.pdf' with the actual name of your file.
    window.open('/pdfs/Google-Merch-Shop-Case-Study.pdf', '_blank');
  }

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
            <span>Google Merch Shop Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Google Merch Shop Case Study</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border sticky top-28" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-300">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Google Analytics, Web analytics, Insight Generation
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Google Analytics (GA4)
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Project Background:</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I designed this case study to showcase my Google Analytics 4 (GA4) skills. I used a demo version of
                  the Google Merch Shop's data, which comes with some limitations in terms of access and features. To
                  make the project more meaningful, I created hypothetical objectives that a sales and executive team
                  might have for an e-commerce business like this. This provided a solid framework for my analysis and
                  helped demonstrate my ability to extract valuable insights from GA4.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Objectives for the Sales Team:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Identify the top-selling products that generate the highest revenue in the past 28 days.</li>
                  <li>Analyze the purchase funnel to detect bottlenecks or drop-off points.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Objectives for the Executive Team:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Analyze key performance indicators (KPIs) such as website traffic, conversion rates, and revenue
                    over the last 12 months.
                  </li>
                  <li>
                    Identify trends and patterns in website traffic and sales data to support business strategy.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Key Areas of Analysis:</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                  <li><strong className="text-white">Top Sellers:</strong> Which products are bringing in the most revenue?</li>
                  <li><strong className="text-white">Purchase Funnel:</strong> Where are users dropping off before completing their orders?</li>
                  <li><strong className="text-white">Year-over-Year Trends:</strong> How is the shop performing compared to last year?</li>
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Based on my GA4 analysis, I also provided data-driven recommendations for the Google Merch team!
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
                    src="/images/google-merch-display-new.png"
                    alt="Google Merch Shop Product Performance Analysis"
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