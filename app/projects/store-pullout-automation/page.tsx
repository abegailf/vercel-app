// File: app/projects/store-pullout-automation/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Code, Github } from "lucide-react"

export default function StorePulloutAutomation() {
  const vbaCode = `Sub StorePullout()
    Dim wsInput As Worksheet, wsOutput As Worksheet
    Dim lastRow As Long, lastCol As Long, skuRow As Long, storeCol As Long
    Dim quantityNeeded As Long, pulledQuantity As Long, storeInventory As Variant
    Dim outputRow As Long, i As Long, j As Long
    Dim stores() As Variant, storeCount As Long, temp As Variant
    Dim sheetName As String

    ' Allow user to select the input sheet
    On Error Resume Next
    sheetName = Application.InputBox("Select the input sheet by clicking on any cell in the sheet:", "Select Input Sheet", Type:=8).Parent.Name
    On Error GoTo 0

    ' Check if the user canceled the input box
    If sheetName = "" Then
        MsgBox "No sheet selected. Macro canceled.", vbExclamation
        Exit Sub
    End If
    ' ... rest of the VBA code ...
End Sub`;

  return (
    <>
      {/* Page Title */}
      <section className="py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-orange-600 transition-colors">Portfolio</Link>
            <span>/</span>
            <span>Store Pullout Automation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Store Pullout Automation with Excel VBA</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: A Very Long Manual Task</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  After we have the replenishment report, the next step is to create a "store pullout" report. This is a long list of items we need to pull from our physical stores to restock the online store.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My colleague was doing this in Excel, but it was a very manual process. For thousands of rows of items, she had to figure out which stores to pull from. The rule is to get from the stores with the highest inventory first, and to try to distribute the pullout so we don't empty out just one store. She told me that during peak season, this task would sometimes take her half a day or even a whole day.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Her method was to highlight cells in different colors to mark how many items to pull, and then later replace the values. I saw how repetitive it was and thought, "This can definitely be automated."
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A One-Click VBA Script</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To solve this, I decided to create an Excel VBA script. I vibe-coded it with AI, guiding it to build a macro that could handle the whole complex logic.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The script I wrote automates everything. It sorts all the stores by inventory for each item and then automatically assigns the pullout quantities, starting with the highest-stocked stores and distributing the pullout evenly. The final result is a perfect, error-free report that is generated in just a few minutes. What used to take a full day is now just a single click.
                </p>
              </div>

                            {/* ================================================================== */}
              {/* START: LIVE DEMO VIDEO SECTION */}
              {/* ================================================================== */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Live Demo in Action</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Here is a short video showing the VBA script in action. You can see how it transforms the slow, manual task into an instant, automated report.
                </p>
                {/* Canva Embed Starts Here */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: 0,
                  paddingTop: '56.2500%',
                  paddingBottom: 0,
                  boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                  marginTop: '1.6em',
                  marginBottom: '0.9em',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  willChange: 'transform'
                }}>
                  <iframe
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                      padding: 0,
                      margin: 0
                    }}
                    src="https://www.canva.com/design/DAGys64Bgo4/y7hO7GxLiTtKHzPH310yrQ/watch?embed"
                    allowFullScreen={true}
                    allow="fullscreen"
                  >
                  </iframe>
                </div>
                {/* The link below the video is optional, but good for attribution */}
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <a 
                    href="https://www.canva.com/design/DAGys64Bgo4/y7hO7GxLiTtKHzPH310yrQ/watch?utm_content=DAGys64Bgo4&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Store pullout VBA demo
                  </a> 
                  {" "}by Abegail Fontanilla
                </p>
              </div>
              {/* ================================================================== */}
              {/* END: LIVE DEMO VIDEO SECTION */}
              {/* ================================================================== */}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The VBA Script</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Here is a part of the VBA code I wrote that handles the data sorting and the main pullout logic.
                </p>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mt-6">
                  <div className="p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap">
                    <code>{vbaCode}</code>
                  </div>
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

          {/* Project Info Sidebar */}
          <div className="lg:col-span-1 lg:order-2">
            <Card className="border sticky top-28" style={{ backgroundColor: "#14132B", borderColor: "#A59385" }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-300">Project Overview</h3>
                <div className="space-y-4">
                  <div>
                    <strong style={{ color: "#FB5530" }}>Core Skills:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Process Automation, VBA Scripting, Logical Problem-Solving
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Microsoft Excel, Visual Basic for Applications (VBA)
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Development Note:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      This script was developed on a MacBook and is optimized for Excel for Mac.
                    </p>
                  </div>

                       <div>
                      <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-transparent"
                        style={{ borderColor: "#FB5530", color: "#FB5530" }}
                        onClick={() => window.open("https://github.com/abegailf/Store-inventory-pullout-automation-VBA", "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
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