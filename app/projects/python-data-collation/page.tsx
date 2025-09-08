// File: app/projects/python-data-collation/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function PythonDataCollation() {
  const codeSnippet = `import pandas as pd
import os
import collections

def group_and_combine_tsvs(folder_path, output_filename):
    """
    Groups TSV files by a 4-digit prefix and type ('outcomes'/'questions'),
    combines the data for each group, and saves each group to a separate
    sheet in a single Excel file.
    """
    all_tsv_files = [f for f in os.listdir(folder_path) if f.endswith('.tsv')]
    
    grouped_files = collections.defaultdict(list)
    for filename in all_tsv_files:
        prefix = filename[:4]
        if 'outcomes' in filename:
            sheet_name = f"{prefix}-outcomes"
        elif 'questions' in filename:
            sheet_name = f"{prefix}-questions"
        else:
            continue
        
        full_path = os.path.join(folder_path, filename)
        grouped_files[sheet_name].append(full_path)

    with pd.ExcelWriter(output_filename, engine='openpyxl') as writer:
        for sheet_name in sorted(grouped_files.keys()):
            list_of_dfs = [pd.read_csv(f, sep='\\t') for f in grouped_files[sheet_name]]
            combined_df = pd.concat(list_of_dfs, ignore_index=True)
            combined_df.to_excel(writer, sheet_name=sheet_name, index=False)
...
`;

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
            <span>Automated Data Collation Script</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Automated Data Collation Script in Python</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Disorganized Data Files</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A common workflow at Mathspace involved dealing with numerous TSV (Tab-Separated Values) files that were exported from our systems. These files were all in a single folder but needed to be grouped and analyzed based on their naming convention—specifically, a 4-digit prefix and a type ('outcomes' or 'questions').
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Manually opening, copying, and pasting this data into a master Excel workbook was not only slow and tedious but also highly susceptible to human error. I saw a clear need for a simple, reusable script to automate this entire collation process.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A Smart Python Script</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I wrote a Python script using the Pandas and OS libraries to solve this problem. The script intelligently scans a folder, reads the filenames, and automatically groups them. It then combines all the data from the files in each group and writes the consolidated data to a separate, neatly named sheet in a single master Excel workbook.
                </p>
                 <p className="text-gray-300 leading-relaxed mb-6">
                  What was once a manual 15-30 minute task of data wrangling is now an instant, error-free process that anyone on the team can run.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Python Script</h3>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mt-6">
                  <div className="p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap">
                    <code>{codeSnippet}</code>
                  </div>
                </div>
              </div>

              {/* Back to Portfolio */}
              <div className="pt-8 border-t border-gray-700">
                <Link href="/portfolio">
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent">
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
                      Data Aggregation, Process Automation, Python Scripting, File Handling
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Python, Pandas, Openpyxl
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