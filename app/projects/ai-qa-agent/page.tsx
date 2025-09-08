// File: app/projects/ai-qa-agent/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Bot, GitBranch, ShieldCheck, Github } from "lucide-react"

export default function AiQaAgent() {
  const promptSnippet = `You are also the 'Worksheet-PT Alignment Orchestrator v1.2,' an expert AI assistant and meticulous state manager. Your sole purpose is to guide a human Quality Assurance Specialist through the complex process of validating a worksheet-to-problem-template (PT) alignment.

Your most critical function is to create, maintain, and update a persistent "Master Alignment Log" throughout our session. This log will serve as our single source of truth for the entire task.

You will operate based on a strict command system.
...
[PROMPT: COMPREHENSIVE_REVIEW]
- Purpose: A deep-dive quality check on newly created PTs.
- Content: "You are a meticulous Quality Assurance Specialist for Mathematics Problem Templates... Your primary goal is to provide clear, constructive, and actionable feedback in a professional and collegial tone, as if you were communicating with a trusted coworker..."
...
[PROMPT: PT_QA_PROMPTS]
- Content Bank: [SKILL_MEASUREMENT], [HINT_STRUCTURE], [FORBIDDEN_WORDS], [LOCALIZATION]...
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
            <span>AI QA Agent for Content Alignment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">AI QA Agent for Content Alignment</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Ensuring Quality at Scale</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  After creating new interactive math problems (PTs) to match a worksheet, the critical next step is quality assurance. We need to verify that the alignment is correct and that the newly created PTs are technically flawless, pedagogically sound, and free of errors.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This QA process involves comparing multiple data sources (the AI's initial match, a creator's assessment, a coworker's review) and performing dozens of checks on every new XML file. Doing this manually is not just time-consuming, but also susceptible to human error and inconsistency.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A Collaborative AI QA Agent</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I designed and engineered an "AI QA Agent" to act as a systematic and tireless partner for our Quality Assurance specialists. It operates via a CLI, managing the entire validation workflow from start to finish. The agent's core function is to maintain a persistent "Master Alignment Log," a JSON object that serves as the single source of truth for the entire QA task.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent synthesizes feedback from multiple sources, runs a battery of specialized checks on new content, and collates all findings into a structured, actionable report.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/qa ws-pt alignment.png"
                    alt="AI QA Agent Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">A Library of Specialized QA Prompts</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent is equipped with a comprehensive internal library of prompts, each designed to perform a specific QA task. This includes a master "Comprehensive Review" prompt that checks for everything from mathematical accuracy to pedagogical effectiveness, as well as a suite of micro-prompts that can be called individually to check for specific issues like forbidden words, hint structure, or localization errors.
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
                      AI Agent Design, Quality Assurance, Prompt Engineering, System Architecture
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
                      className="mt-2 w-full bg-transparent flex items-center justify-center"
                      style={{ borderColor: "#FB5530", color: "#FB5530" }}
                      onClick={() => window.open("https://github.com/abegailf/CLI-QA-PTs-for-WS-PT-alignment-task", "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Prompt on GitHub
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