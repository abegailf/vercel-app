// File: app/projects/ai-curation-agent/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Bot, GitBranch, ShieldCheck } from "lucide-react"

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
          <h1 className="text-4xl md:text-5xl font-bold">AI Curation Agent for Curriculum Development</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Curating the Perfect Problem Set</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Building a set of interactive math problems for a specific curriculum topic is a complex curation task. It involves analyzing a target worksheet, identifying which concepts are already covered by our existing library of thousands of problems, and then finding the best *new* problems to fill any gaps.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This process requires not only a deep pedagogical understanding but also a systematic approach to avoid selecting redundant problems or missing key skills. I designed an AI agent to act as a co-pilot for our curriculum curators, bringing speed, consistency, and data-driven rigor to this workflow.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A Systematic Curation Agent</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I developed the 'PT Curator,' a command-line-driven AI agent that manages the entire curation lifecycle. The agent begins by performing a "gap analysis," comparing a worksheet to our existing content library and identifying uncovered skills.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Then, when presented with a batch of new "candidate" problems, the agent evaluates each one against the identified gaps, flags duplicates or variants, and provides a clear recommendation on which ones to select. The entire process is tracked in a persistent "Master Alignment Log," ensuring a transparent and well-documented curation process.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/pt curation.png" // Using a placeholder for now
                    alt="AI Curation Agent Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Engineering a Discerning AI Mindset</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent's ability to make intelligent recommendations comes from a master prompt that defines its persona as a "pragmatic PT Curator." I engineered its internal prompt library to handle distinct phases of the workflow, from the initial high-level gap analysis to the detailed evaluation of candidate problems. This transforms a general-purpose LLM into a specialized tool for making informed, consistent, and efficient content curation decisions.
                </p>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mt-6">
                  <div className="p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap">
                    <code>{promptSnippet}</code>
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
                      AI Agent Design, Content Curation, Prompt Engineering, Gap Analysis
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      CLI, Large Language Models (LLMs), JSON, TSV
                    </p>
                  </div>
                  {/* You can add the GitHub link for the prompt here if you have one */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}