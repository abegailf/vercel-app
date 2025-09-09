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
                        <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Writing Problem Templates is Hard</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Mathspace, creating new "Problem Templates" (or PTs) is a very technical job. You have to write code in our special scripting language, MathyonS, and then structure everything in XML. There are hundreds of very specific rules to remember, from how to name variables to the only way you're allowed to write if/else logic.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Writing this code by hand takes a lot of time and you really have to know the system inside and out. I saw this as a bottleneck for us, so I thought it would be a great chance to use generative AI to help make the process faster.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Web App Built in an Afternoon</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  During one of our "AI Lab Hour" sessions, I decided to explore on my own. It was my first time trying Google AI Studio to build a web app, and I created the "Problem Template Creator AI." It's a simple tool with a user-friendly interface that acts as a co-pilot for creating PTs.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Instead of trying to remember all the rules, a content creator can just input a simple math question, and the app uses a highly-tuned AI to generate all the complex MathyonS and XML code needed. After I built it, I shared it with the team on our AI Slack channel.
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Key Features I Built In</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The app's intelligence comes from a very detailed "megaprompt" that I engineered to teach the AI how to be a Mathspace developer. It also has some cool features I built in:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                    <li><strong className="text-white">File Differencing:</strong> It has a built-in "diff viewer" so you can easily see the changes between the AI's suggestion and your original code.</li>
                    <li><strong className="text-white">Localization Rules:</strong> It automatically applies our localization rules, so it knows to use "metres" for Australia and "meters" for the US, for example.</li>
                    <li><strong className="text-white">Copy Functionality:</strong> Simple one-click buttons to copy the generated MathyonS or XML code.</li>
                    <li><strong className="text-white">Theme Toggle:</strong> I even added a light/dark mode theme toggle.</li>
                </ul>
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