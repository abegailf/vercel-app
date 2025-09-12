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
          <h1 className="text-4xl md:text-5xl font-bold">Worksheet PT-Alignment QA Specialist Agent</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: A Complex Peer QA Process</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Mathspace, we have a "Peer QA" process. For a subtopic, my colleague will do the worksheet-to-PT alignment, which means they check which worksheet questions are matched by the existing PTs in that subtopic. For any gaps, they create new PTs from scratch.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My task is then to QA my colleague's work. I have to check if their alignment is correct and if the new PTs they created are high quality. This involves a lot of back-and-forth checking between the worksheet, the old PTs, the new PTs, and our notes in ClickUp. It's a very detailed process, and I wanted to build a tool to help me manage it all systematically.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Agent for My QA Workflow</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I created the 'Worksheet-PT Alignment Agent,' an AI assistant I use as a command line to guide me through the whole Peer QA task. It's a stateful system that keeps track of everything in a "Master Alignment Log," so I have a single source of truth for the entire review.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Of course, I still have to check the output the AI gives and make the final call, but the agent does the heavy lifting of organizing everything and running the initial checks. It has really helped reduce the time it takes to do this task thoroughly.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/qa ws-pt alignment.png"
                    alt="AI QA Agent for Content Alignment Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">How I Built It: A "Megaprompt" Design</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The way I made the agent smart was by creating a single, really big "megaprompt." This main prompt contains everything, its personality as a QA specialist, how it remembers things with the JSON log, and all the rules it has to follow.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Inside this megaprompt, I also built a library of smaller, specialized prompts. So when I give the agent a command like `/run qa comprehensive`, it knows to use the specific sub-prompt for that QA task. This is how it can do different, complex jobs like the initial alignment or quality checks on the new PTs.
                </p>
              </div>

                           <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Command System I Designed</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent is built around a command system that lets me control every step of the Peer QA process, from the initial analysis to the final report.
                </p>
                <div className="text-left text-sm text-gray-300 space-y-6">
                  {/* Phase 1 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 1: Alignment & Validation</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/start</strong> - Begins the process and asks me for all the project files and context.</p>
                      <p><strong className="text-white">/run initial_alignment</strong> - The agent does the first pass of comparing the worksheet to the existing PTs.</p>
                      <p><strong className="text-white">/run validate_with_clickup</strong> - Compares the AI's alignment with our notes in ClickUp.</p>
                      <p><strong className="text-white">/add my_assessment</strong> - I provide my final review of the alignment.</p>
                      <p><strong className="text-white">/add coworker_assessment</strong> - I also add my coworker's assessment to the log for comparison.</p>
                      <p><strong className="text-white">/add newly_created_pts</strong> - I log the new PTs that my colleague created for the gaps.</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 2: New PT Quality Assurance</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/run qa [process_name]</strong> - This is the main QA command. I can tell it to run a `comprehensive` review, or specific checks like:</p>
                      <ul className="list-disc list-inside pl-4 text-xs mt-2 space-y-1">
                        <li>skill_measurement</li>
                        <li>hint_structure</li>
                        <li>math_accuracy</li>
                        <li>localization</li>
                        <li>and many more...</li>
                      </ul>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 3: Final Reporting</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/add_my_feedback [ID]</strong> - Lets me add my own manual comments to the log for a specific PT.</p>
                      <p><strong className="text-white">/show_feedback_table</strong> - This displays the entire log as a clean TSV table so I can see the status of everything.</p>
                      <p><strong className="text-white">/generate_report</strong> - After all my checks are done, this command takes all the notes from the log and creates the final, synthesized report to send to my coworker.</p>
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
                      onClick={() => window.open("https://github.com/abegailf/Worksheet-PT-Alignment-QA-Specialist-Agent-CLI", "_blank")}
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