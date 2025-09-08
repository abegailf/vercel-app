// File: app/projects/store-pullout-automation/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Code } from "lucide-react"

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
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: A Full Day of Manual Work</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At a children's clothing company, the final step after inventory forecasting was creating a "pullout" report to source stock from 12+ physical stores. This was a painstaking manual process that, during peak seasons, could take a single employee a full day to complete.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The logic was complex: for thousands of products, my colleague had to manually identify which stores had the highest inventory, pull from them one by one until the required quantity was met, and keep track of it all by highlighting cells. I knew there had to be a better way.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: Automation with VBA</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Recognizing the opportunity to save hundreds of hours of manual labor, I developed an Excel VBA script to automate the entire process. Working in collaboration with AI as a development partner, I engineered a macro that transforms the full-day task into a single click.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The script intelligently sorts all physical stores by their inventory levels for each product, then automatically pulls the required quantities in a round-robin fashion from the highest-stocked stores first until the demand is met. The final output is a perfectly formatted, error-free pullout report, generated in less than 10 minutes.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The VBA Script</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Below is a snippet of the VBA code that powers the automation. It handles sheet selection, data sorting, and the core pullout logic.
                </p>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <div className="p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap">
                    <code>{vbaCode}</code>
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
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}