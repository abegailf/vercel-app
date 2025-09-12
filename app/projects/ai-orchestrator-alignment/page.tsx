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
          <h1 className="text-4xl md:text-5xl font-bold">Worksheet-PT Alignment Agent</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Filling in the Gaps</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  For any given subtopic, my task is to check our worksheets and make sure we have an interactive Problem Template (PT) for every single question. This is our "worksheet-pt alignment" process. I have to check the existing PTs in the subtopic to see which questions they match.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  For all the unmatched questions, we need to create new PTs from scratch to fill in the gaps. This whole process, from finding the gaps to creating the new PTs, involves a lot of steps and can be very slow. I wanted to build a tool to make this entire workflow easier and faster for me to manage.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Agent to Manage the Workflow</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I created the 'WS-PT Creation Agent,' an AI assistant that I use as a command line to guide me through the whole task. It's a stateful system that keeps track of everything in a "Master Alignment Log," so I always know the status of each question.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I still have to check the output the AI gives, of course, but the agent does the heavy lifting and significantly reduces the time it takes to do this task. It helps me find the gaps, plan the creation of new PTs by identifying "prototypes" first, and then it helps generate the final XML code.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/ws-pt alignment creation.png"
                    alt="AI Agent for Content Alignment Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
                             <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">How I Built It: A "Megaprompt" Design</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The way I made the agent smart was by creating a single, really big "megaprompt." This main prompt contains everything, its personality, how it remembers things with the JSON log, and all the rules it has to follow.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Inside this megaprompt, I also built a library of smaller, specialized prompts. So when I give the agent a command like `/run initial_alignment`, it knows to use the specific sub-prompt for that task. This is how it can do different, complex jobs like gap analysis or creating XML code.
                </p>
              </div>

                            <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Command System I Designed</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent follows a strict command system that I designed to manage each phase of the process, from analysis to final creation.
                </p>
                <div className="text-left text-sm text-gray-300 space-y-6">
                  {/* Phase 1 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 1: Alignment & Gap Identification</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/start</strong> - Begins the process and prompts me for the project files.</p>
                      <p><strong className="text-white">/run initial_alignment</strong> - The agent compares the worksheet to existing PTs to find the first gaps.</p>
                      <p><strong className="text-white">/run validate_with_clickup</strong> - Compares the AI's findings with our notes in ClickUp.</p>
                      <p><strong className="text-white">/add my_assessment</strong> - After reviewing, I provide my final list of what's unmatched.</p>
                      <p><strong className="text-white">/run format_unmatched</strong> - Displays the unmatched questions in a clean HTML format.</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 2: PT Creation for Gaps</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/run identify_prototypes</strong> - Analyzes the unmatched questions and suggests a smart plan for building them by grouping similar problems.</p>
                      <p><strong className="text-white">/run create_prototypes</strong> - Generates the XML code for the main "prototype" PTs.</p>
                      <p><strong className="text-white">/add pt_ids</strong> - Lets me input the final ID numbers for the new PTs once they are in the system.</p>
                      <p><strong className="text-white">/run create_remaining_pts</strong> - Automatically creates the XML for all the other similar PTs based on the prototypes.</p>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 3: Utility & Finalization</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/update_xml [ID]</strong> - Lets me completely replace the XML for a specific PT.</p>
                      <p><strong className="text-white">/revise [ID]</strong> - Lets me give the agent instructions to make smaller edits to a specific XML.</p>
                      <p><strong className="text-white">/get_xml [ID]</strong> - Shows me the raw XML code for any PT in the log.</p>
                      <p><strong className="text-white">/show_log</strong> - Displays a simple summary of the project's status.</p>
                      <p><strong className="text-white">/help</strong> - Shows this full list of commands.</p>
                    </div>
                  </div>
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
                      onClick={() => window.open("https://github.com/abegailf/Worksheet-PT-Alignment-Agent-CLI", "_blank")}
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