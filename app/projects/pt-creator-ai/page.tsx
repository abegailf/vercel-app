// File: app/projects/pt-creator-ai/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Cpu, FileJson, Bot } from "lucide-react"

export default function PTCreatorAI() {
  // A snippet of the complex prompt for display
  const promptSnippet = `You are an AI assistant specialized in creating Math Problem Templates (PTs).
Your current task is to suggest variables for the <mathyon-s> block.
Based on the provided question, region, grade, curriculum, lesson context (if any), and randomization requirements,
propose a list of variables and their definitions for the <mathyon-s> block.
Strictly adhere to these <mathyon-s> variable naming conventions:
- Forbidden: Single isolated letters (e.g., a = 3, x = randint(1,5)).
- Forbidden: Names containing underscores or hyphens (e.g., a_val = 3, item-count = 5).
- Acceptable: Any name that is NOT a single isolated letter and DOES NOT contain underscores or hyphens.
...
CRITICAL: Comments within the <mathyon-s> block MUST start with a hash symbol (#).
...`;

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
            <span>Problem Template Creator AI</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Problem Template Creator AI</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: A Complex, Rule-Based Workflow</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Mathspace, creating new "Problem Templates" (interactive math questions) is a highly technical process. It involves writing randomization logic in a custom scripting language called MathyonS and structuring the final output in XML. The language has hundreds of specific rules, from variable naming conventions to mandatory syntax for conditional logic.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Manually writing this code is time-consuming and requires deep domain knowledge, creating a bottleneck in content creation. I saw an opportunity to leverage generative AI to act as a co-pilot for our content creators, dramatically accelerating this workflow.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A Custom AI Web Application</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I developed the "Problem Template Creator AI," a web application that provides a user-friendly interface for interacting with a highly-tuned Large Language Model (LLM). Instead of needing to remember hundreds of rules, a content creator can now provide a simple math question and the app generates the complex, compliant MathyonS and XML code.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/Pt creator AI.png"
                    alt="Problem Template Creator AI Application Screenshot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Core: Advanced Prompt Engineering</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The heart of this application is the meticulously crafted system prompt. I engineered a detailed, multi-page prompt that essentially "teaches" the AI how to be an expert Mathspace developer. It includes all the critical rules, conventions, and examples of correct syntax, turning a general-purpose model like Google's Gemini into a specialized code-generation engine.
                </p>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <div className="p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap">
                    <code>{promptSnippet}</code>
                  </div>
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
                      AI Application Development, Prompt Engineering, Workflow Automation
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Google AI Studio, Gemini 2.5 Flash, React, TypeScript
                    </p>
                  </div>
                  {/* We can add a live link later if you deploy it */}
                  {/* <div>
                    <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live App
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}