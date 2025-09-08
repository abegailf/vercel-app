// File: app/projects/ai-orchestrator-alignment/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Bot, GitBranch, FileJson, Github } from "lucide-react"

export default function AiOrchestratorAlignment() {
  const promptSnippet = `You are also the 'WS-PT Creation Orchestrator v1.0,' an expert AI assistant and meticulous state manager. Your sole purpose is to guide a human PT Creator/QA Specialist through the complete workflow of worksheet-to-PT gap analysis and subsequent PT creation. You will manage everything from the initial alignment to generating final XML for the missing PTs.

Your most critical function is to create, maintain, and update a persistent "Master Alignment Log" throughout our session. This single log will track both the alignment status and the creation status for every worksheet question.

You will operate based on a strict command system. I will give you a command, and you will execute it precisely as instructed.
...
[PROMPT: INITIAL_ALIGNMENT]
- Purpose: To match the worksheet against the existing PT set and initialize the log.
- Content: "You are a strict Problem Template Matcher..."
...
[PROMPT: IDENTIFY_PROTOTYPES]
- Purpose: To analyze unmatched worksheet questions and plan for PT creation.
- Content: "Your task is to analyze the provided list of unmatched worksheet questions and plan the most efficient way to create PTs for them..."
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
            <span>AI Orchestrator for Content Alignment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">AI Agent for Content Alignment</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Ensuring Curriculum Coverage</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Mathspace, a key challenge is ensuring that our library of interactive "Problem Templates" (PTs) perfectly covers all the questions in a traditional educational worksheet. Manually comparing a worksheet to hundreds of existing PTs to find content gaps is slow, subjective, and prone to error.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Once a gap is found, creating a new, compliant PT requires a developer to follow hundreds of strict syntax and pedagogical rules. This entire process was a significant bottleneck. I decided to design an AI-powered system to automate it from end to end.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Orchestrator Agent</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I engineered the 'WS-PT Creation Orchestrator,' a sophisticated AI agent that manages the entire workflow through a command-line interface. It's not just a single prompt; it's a stateful system with an internal library of specialized sub-prompts, a persistent JSON log to track progress, and a strict command protocol to guide the user.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/ws-pt alignment creation.png"
                    alt="AI Orchestrator Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">System Architecture & Prompt Engineering</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The orchestrator's intelligence comes from a meticulously crafted master prompt that defines its entire operational logic, including its state management, command system, and a library of task-specific prompts for each phase of the workflow:
                </p>
                <ul className="list-disc list-inside space-y-4 text-gray-300 ml-4">
                  <li>
                    <strong className="text-white">Initial Alignment:</strong> A sub-prompt analyzes the worksheet and existing XML files to perform a gap analysis, logging every match and mismatch.
                  </li>
                  <li>
                    <strong className="text-white">Prototype Planning:</strong> The system then identifies structurally unique problems among the gaps and creates a plan to build "prototype" templates first.
                  </li>
                  <li>
                    <strong className="text-white">Automated Generation:</strong> Finally, the orchestrator uses the generated prototypes as a template to automatically create all remaining PTs, ensuring consistency and adherence to all rules.
                  </li>
                </ul>
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
                      Prompt Engineering, AI Agent Design, Workflow Automation, Gap Analysis
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
                      className="mt-2 w-full bg-transparent flex items-center justify-center" // Use w-full to make the button take the full width
                      style={{ borderColor: "#FB5530", color: "#FB5530" }}
                      onClick={() => window.open("https://github.com/abegailf/CLI-PT-creation-workflow-WS-PT-alignment", "_blank")}
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