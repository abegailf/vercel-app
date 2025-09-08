// File: app/projects/python-histogram-generator/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function PythonDataVisualization() {
  const codeSnippet = `import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import norm

def create_bimodal_histogram(data1, data2, ...):
    """
    Generates a bimodal histogram and overlays a smooth curve
    representing the probability density function.
    """
    # Combine data
    combined_data = np.concatenate([data1, data2])
    
    # Create histogram
    plt.hist(combined_data, bins=20, density=True, ...)

    # Fit and plot smooth curve
    mu1, std1 = norm.fit(data1)
    mu2, std2 = norm.fit(data2)
    x = np.linspace(combined_data.min(), combined_data.max(), 100)
    pdf1 = norm.pdf(x, mu1, std1) * len(data1)
    pdf2 = norm.pdf(x, mu2, std2) * len(data2)
    plt.plot(x, (pdf1 + pdf2) / len(combined_data), 'k-')
    
    plt.show()

# Example Usage:
# class1_scores = np.random.normal(70, 5, 100)
# class2_scores = np.random.normal(88, 4, 150)
# create_bimodal_histogram(class1_scores, class2_scores, ...)
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
            <span>AI-Powered Data Visualization Scripting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">AI-Powered Data Visualization Scripting</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Illustrating Complex Statistical Concepts</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  While developing educational content for statistics at Mathspace, I encountered a specific need: to create a variety of histograms (like unimodal, bimodal, skewed) and overlay them with the correct smooth probability density curve. This is crucial for teaching students how to identify the distribution that models a dataset.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Manually creating these specific and mathematically accurate visualizations is not feasible. I recognized this as a perfect opportunity to use AI as a co-author to generate a reusable Python script.
                </p>
              </div>

              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/histogram curve.png" // <-- YOUR NEW IMAGE
                    alt="Bimodal Histograms with Correct Smooth Curves"
                    fill
                    className="object-contain" // Use object-contain to see the whole image
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Process: Iterative Prompting for a Technical Solution</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Using Google AI Studio, I guided the language model through an iterative development process. My prompts specified the required Python libraries (Matplotlib, NumPy, SciPy), the statistical concepts, and the precise visual requirements for the output. Through this collaborative "vibe coding" process, we co-authored a flexible Python script capable of generating a wide range of distributions and their corresponding curves.
                </p>
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
                      AI-Assisted Code Generation, Python, Data Visualization, Statistical Modeling
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Google AI Studio, Python, Matplotlib, SciPy
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full bg-transparent"
                      style={{ borderColor: "#FB5530", color: "#FB5530" }}
                      onClick={() => window.open("https://github.com/abegailf/histogram-for-PTs", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code on GitHub
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