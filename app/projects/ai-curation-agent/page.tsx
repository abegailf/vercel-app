// File: app/projects/ai-curation-agent/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Bot, GitBranch, ShieldCheck, Github } from "lucide-react"

export default function AiCurationAgent() {
  const promptSnippet = `You are also the 'PT Curator v1.0,' an expert AI assistant and meticulous state manager. Your sole purpose is to guide a human Problem Template (PT) Curator through the process of analyzing a worksheet, identifying gaps in an existing PT set, evaluating potential new PTs to fill those gaps, and generating a final, curated list of PTs...

Your most critical function is to create, maintain, and update a persistent "Master Alignment Log" throughout our session. This log will serve as our single source of truth for the entire task.

You will operate based on a strict command system.
...
[PROMPT: GAP_ANALYSIS]
- Purpose: To perform an initial analysis of the worksheet against the existing PT set, identify gaps, and initialize the log.
...
[PROMPT: PT_EVALUATION]
- Purpose: To evaluate a new batch of candidate PTs against the identified skill gaps.
- Content: "You are a pragmatic PT Curator. Your task is to evaluate a set of candidate PTs to see if they fill the uncovered skills gap..."
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
            <span>AI Curation Agent</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">PT Curation Agent for Worksheet-PT alignment</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Finding the Right Problems</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  One of our big tasks is to create a set of interactive problems (PTs) that perfectly match a worksheet for a specific topic. It's a really challenging curation job. First, you have to check the worksheet against the PTs in the set to see what's a good match.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  For any question that doesn't have a match, you have to search our entire bank to find new ones that can fill the gap. It takes a lot of time, and it's easy to miss things or pick problems that are too similar. So, I thought, maybe I can make a system to make this easier for me.
                </p>
              </div>

             <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Agent for Curation</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I built the 'PT Curator,' which is an AI agent that I use through a command-line interface. It helps me manage the entire curation process from start to finish. I designed it to be very systematic.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  It starts with a "gap analysis" to automatically compare the worksheet to our existing content and tells me exactly which skills are missing. Then, I can give it a new set of "candidate" PTs, and the agent evaluates them, finds duplicates, and gives me a clear recommendation on which ones I should select.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Of course, I still QA the AI's output to make the final decision, but the agent does the heavy lifting and has significantly reduced the time it takes to complete this task. Everything is tracked in a "Master Alignment Log" so I can see the whole process.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/pt curation.png"
                    alt="AI Curation Agent Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Commands I Created</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent works using a few simple commands that I designed for the workflow:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
                    <li><strong className="text-white">/start:</strong> This one just starts the process and loads all the files I need.</li>
                    <li><strong className="text-white">/run gap_analysis:</strong> This is the main check. It does the comparison and tells me what skills are missing.</li>
                    <li><strong className="text-white">/evaluate:</strong> I use this to give the agent a bunch of new PTs, and it gives me a report on which ones are the best fit.</li>
                    <li><strong className="text-white">/organize_and_report:</strong> Once I've chosen the PTs, this command organizes them all and gives me the final, clean list.</li>
                </ul>
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
                      AI Agent Design, Content Curation, Prompt Engineering, Gap Analysis
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      CLI, Large Language Models (LLMs), JSON, TSV
                    </p>
                  </div>
                   <div>
                    <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full bg-transparent"
                      style={{ borderColor: "#FB5530", color: "#FB5530" }}
                      onClick={() => window.open("https://github.com/abegailf/WS-AK-checking-practice", "_blank")}
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