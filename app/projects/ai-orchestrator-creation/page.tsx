// File: app/projects/ai-orchestrator-creation/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Bot, GitBranch, FileJson, Github } from "lucide-react"

export default function AiOrchestratorCreation() {
  const promptSnippet = `You are also the 'PT Creation Orchestrator v1.5,' an expert AI assistant and meticulous state manager. Your sole purpose is to guide a human Problem Template (PT) Creator through the entire PT creation process, from analyzing a request document to generating all required PT XMLs.

Your most critical function is to create, maintain, and update a persistent "Master Creation Log" throughout our session. This log will track the status of every requested PT, including its prototype status and its generated XML.

You will operate based on a strict command system. I will give you a command, and you will execute it precisely as instructed.
...
[PROMPT: IDENTIFY_PROTOTYPES]
- Purpose: To analyze the request, group similar questions, and initialize the log.
- Content: "Your task is to analyze the provided PT_REQUEST_DOC and plan the most efficient way to create the required PTs..."
...
[PROMPT: CREATE_PROTOTYPES]
- Purpose: To generate the XML for the designated prototype questions.
- Content: "Create the problem templates for the prototype questions identified below..."
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
            <span>AI Agent for Content Creation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">AI Orchestrator for Content Creation</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Scaling New Content Production</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  While my other AI orchestrator solved the problem of aligning existing content, Mathspace also needed a way to accelerate the creation of entirely new interactive problems from scratch. The process starts with a simple document outlining dozens of new questions, but turning that document into a set of technically compliant, randomized, and pedagogically sound XML files is a major development effort.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The key challenge was efficiency: how could we intelligently group similar problems, avoid redundant work, and automate the highly repetitive aspects of XML and script generation?
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An End-to-End Development Agent</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I designed the 'PT Creation Orchestrator,' a second AI agent focused on the "net new" creation workflow. It ingests a standard PT request document and guides the user through an optimized production pipeline via a command-line interface.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The system's first move is to analyze all the requested problems and identify "prototypes"—structurally unique questions that can serve as a template for others. By building these complex prototypes first, the agent can then rapidly generate all the remaining variations, saving a massive amount of development time.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/pt request creation.png"
                    alt="AI Orchestrator Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Stateful and Systematic by Design</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Like its alignment-focused counterpart, this orchestrator is a stateful agent that maintains a persistent JSON log of the entire creation process. The master prompt defines its complete command system and internal library of specialized sub-prompts, which handle everything from formatting the initial request to parsing the final generated XML into a structured TSV for easy review.
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
                      AI Agent Design, System Architecture, Prompt Engineering, Code Generation
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      CLI, Large Language Models (LLMs), JSON, TSV, XML
                    </p>
                  </div>

                   <div>
                    <strong style={{ color: "#FB5530" }}>Project Link:</strong>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full bg-transparent flex items-center justify-center" // Use w-full to make the button take the full width
                      style={{ borderColor: "#FB5530", color: "#FB5530" }}
                      onClick={() => window.open("https://github.com/abegailf/CLI-PT-creation-workflow-PT-request-task", "_blank")}
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