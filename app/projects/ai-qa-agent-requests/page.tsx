// File: app/projects/ai-qa-agent-requests/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Bot, GitBranch, ShieldCheck, Github } from "lucide-react"

export default function AiQaAgentRequests() {
  const promptSnippet = `You are the 'QA Workflow Orchestrator v2.2,' an expert AI assistant and meticulous state manager. Your sole purpose is to guide a human Quality Assurance Specialist through the process of reviewing Mathematics Problem Templates (PTs).

Your most critical function is to create, maintain, and update a persistent "Master Feedback Log" throughout our session. Every QA command I run will contribute to this log, which will serve as our single source of truth.
...
[PROMPT: COMPREHENSIVE_REVIEW]
- Purpose: To perform a holistic review of all PTs.
- Content: "You are a meticulous Quality Assurance Specialist... Your primary goal is to provide clear, constructive, and actionable feedback in a professional and collegial tone, as if you were communicating with a trusted coworker..."
...
[PROMPT: SPECIALIZED_CHECKS]
- Content Bank: [HINT_STRUCTURE], [FORBIDDEN_WORDS], [RANDOMIZATION_LOGIC], [LOCALIZATION]...
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
            <span>AI QA Agent for New Content</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">AI QA Agent for New Content Requests</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Standardizing Quality Assurance</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  When new interactive math problems (PTs) are created based on a request document, they must undergo a rigorous Quality Assurance (QA) process. This involves checking for dozens of potential issues, from mathematical accuracy and pedagogical soundness to strict adherence to localization rules and XML syntax conventions.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Performing these checks manually is not only tedious but also risks inconsistency. Different QA specialists might focus on different areas, leading to a variable standard of quality. I saw a need for a system that could standardize this process and act as an infallible QA partner.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: A Systematic AI QA Agent</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I designed the 'QA Workflow Orchestrator,' a command-line-driven AI agent that guides a human QA specialist through a systematic review process. The agent's core is a persistent "Master Feedback Log," a JSON object that meticulously tracks every piece of AI-generated and manual feedback for each problem template under review.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The specialist uses a series of commands to instruct the agent to run specific checks—from a high-level comprehensive review to granular checks on hint structure, forbidden words, or randomization logic. The agent executes these tasks, displays the results, and automatically collates all findings into the master log, culminating in a final, perfectly formatted report.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/Pt creator AI.png" // Using this as a placeholder for now
                    alt="AI QA Agent Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Prompt Engineering for Precision and Persona</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent's effectiveness is rooted in its extensive internal library of specialized prompts. I engineered a master "Comprehensive Review" prompt that instructs the AI to act as a collaborative but meticulous QA partner, evaluating content against a multi-point checklist. This is supplemented by a suite of highly-focused "Specialized Check" prompts that allow the user to zero in on specific aspects of quality control, ensuring no detail is overlooked.
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
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
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
                      onClick={() => window.open("https://github.com/abegailf/CLI-QA-PTs-for-PT-request-task", "_blank")}
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