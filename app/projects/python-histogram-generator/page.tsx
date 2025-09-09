// File: app/projects/python-histogram-generator/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function PythonDataVisualization() {
  const codeSnippet = `import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import norm

# Set a random seed for reproducibility
np.random.seed(42)

# Create a figure with 4 subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
fig.suptitle("Symmetric Bell-Shaped Histograms for Problem Templates", fontsize=16)

# Common settings for all histograms
num_samples = 1000
bin_count = 15
alpha = 0.7  # Transparency for histograms

# Custom colors from hex codes
colors = ['#838EF0', '#60B2DE', '#19C9D6', '#03A28D']

# --- Version 1: Measurement Errors ---
mu1, sigma1 = 0, 1  # Mean and standard deviation
data1 = np.random.normal(mu1, sigma1, num_samples)
axes[0, 0].hist(data1, bins=bin_count, alpha=alpha, color=colors[0], edgecolor='black')
axes[0, 0].set_title("Measurement Errors (mm)")
axes[0, 0].set_xlabel("Error (mm)")
axes[0, 0].set_ylabel("Frequency")

# --- Version 2: Heights of Adults ---
mu2, sigma2 = 170, 8  # Mean and standard deviation
data2 = np.random.normal(mu2, sigma2, num_samples)
axes[0, 1].hist(data2, bins=bin_count, alpha=alpha, color=colors[1], edgecolor='black')
axes[0, 1].set_title("Heights of Adults (cm)")
axes[0, 1].set_xlabel("Height (cm)")
axes[0, 1].set_ylabel("Frequency")

# --- Version 3: Weights of Manufactured Products ---
mu3, sigma3 = 500, 20  # Mean and standard deviation
data3 = np.random.normal(mu3, sigma3, num_samples)
axes[1, 0].hist(data3, bins=bin_count, alpha=alpha, color=colors[2], edgecolor='black')
axes[1, 0].set_title("Weights of Products (g)")
axes[1, 0].set_xlabel("Weight (g)")
axes[1, 0].set_ylabel("Frequency")

# --- Version 4: Test Scores ---
mu4, sigma4 = 75, 10  # Mean and standard deviation
data4 = np.random.normal(mu4, sigma4, num_samples)
axes[1, 1].hist(data4, bins=bin_count, alpha=alpha, color=colors[3], edgecolor='black')
axes[1, 1].set_title("Test Scores (out of 100)")
axes[1, 1].set_xlabel("Score")
axes[1, 1].set_ylabel("Frequency")

# Adjust layout and save the figure
plt.tight_layout()
plt.savefig("bell_shaped_histograms.png", dpi=300, bbox_inches='tight')
plt.show()
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
          <h1 className="text-4xl md:text-5xl font-bold">Data Visualization Scripting</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
                       <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Goal: Creating Images for a Statistics Questions</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  While I was working on some new statistics problems at Mathspace, I needed a bunch of specific images. The topic was about identifying the smooth curve that models a distribution, so I needed different kinds of histograms, like bimodal and skewed and different kinds of curves for the multiple choice images.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Making these by hand in a graphics tool would take way too long, and it would be hard to make them mathematically accurate. I knew this was a perfect task to automate, so I decided to use AI to help me write a Python script for it.
                </p>
              </div>

              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/histogram curve.png"
                    alt="Bimodal Histograms with Correct Smooth Curves"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Process: Vibe Coding with AI</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I used Google AI Studio for this task. I started by giving it a sample Python script that already had the basic style I wanted. Then, I simply prompted it to revise that script to generate the specific histograms I needed for the questions.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  It was really a "vibe coding" session. I guided the AI with the high-level requirements, and it was smart enough to handle the technical details, like using libraries such as Matplotlib and SciPy. In the end, we co-authored a reusable script that can quickly generate all the accurate statistical images I need for the problem templates.
                </p>
                <p>Below is a sample python script output:</p>
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