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
    window.open('/files/Google merch shop case study.pdf', '_blank');
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
          <h1 className="text-4xl md:text-5xl font-bold">Driving E-commerce Insights with GA4</h1>
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
                          <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Showcasing My GA4 Skills</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I created this case study to really show what I can do with Google Analytics 4 (GA4). I used the demo data from the Google Merch Shop, so it had some limitations on what I could access.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To make the project more realistic, I imagined what a real sales or executive team would want to know. I created my own "hypothetical objectives" to give my analysis a clear purpose. This way, I could show how I can find valuable insights from GA4 data that can help a real e-commerce business.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Analysis: Answering Business Questions</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I structured my analysis to answer key business questions from two different perspectives:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">For the Sales Team:</strong> I focused on immediate sales performance, like identifying the top-selling products and analyzing the purchase funnel to see where customers might be dropping off.
                  </li>
                  <li>
                    <strong className="text-white">For the Executive Team:</strong> I looked at the bigger picture, analyzing long-term trends in website traffic, conversion rates, and overall revenue for the last 12 months to support strategic planning.
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Outcome: Data-Driven Recommendations</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Based on my findings from the GA4 data, I was able to provide a full report with data-driven recommendations for the Google Merch team. You can download the full PDF to see the charts and my conclusions.
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