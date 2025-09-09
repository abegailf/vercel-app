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
          <h1 className="text-4xl md:text-5xl font-bold">PT Creation QA Specialist Agent CLI-based</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Making Peer QA Consistent</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Mathspace, when a set of new Problem Templates (PTs) is created, it goes through a Peer QA process. My task is to be the quality checker for the PTs my colleague builds. This means I have to check for dozens of things, from math accuracy and correct XML syntax to making sure the language is right for our students in Australia or the US.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Doing all these checks manually is a lot of work and can be inconsistent. Sometimes I might focus more on one area than another. I wanted to build a system to help me standardize my own QA workflow and make sure I never miss a single detail.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Agent for My QA Workflow</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I built the 'QA Workflow Agent,' a tool I use as a command line to help me review a set of PTs. It acts as my personal QA assistant, managing the whole process from start to finish. I still have to check the output the AI gives to make the final call, of course, but this agent does the heavy lifting and has reduced a lot of time in the process.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The most important part is the "Master Feedback Log," which is a JSON file that keeps track of all the feedback for every PT I'm checking. The agent uses a series of commands to run checks, and it automatically organizes all the findings into the log. In the end, it generates a final, clean report for me that I can share.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/qa pt request.png"
                    alt="AI QA Agent Concept Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

               <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">How I Built It: A "Megaprompt" Design</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The way I made the agent smart was by creating a single, really big "megaprompt." This main prompt contains everything—its personality as a QA specialist, how it remembers things with the JSON log, and all the rules it has to follow.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Inside this megaprompt, I also built a library of smaller, specialized prompts. So when I give the agent a command like `/run check Math_Accuracy`, it knows to use the specific sub-prompt for that QA task. This is how it can do different, complex jobs like checking for localization or analyzing hint structures.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Commands I Built for My Workflow</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The agent is built around a command system that lets me control every step of the QA process, from initial setup to the final report.
                </p>
                <div className="text-left text-sm text-gray-300 space-y-6">
                  {/* Phase 1 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 1: Task Initialization</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/start</strong> - Initializes the QA task and asks for all context files.</p>
                      <p><strong className="text-white">/run html</strong> - Formats the request document into a clean HTML view.</p>
                      <p><strong className="text-white">/run progression_map</strong> - Organizes the PTs and creates the Master Feedback Log.</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 2: Automated QA Checks</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/run alignment</strong> - Checks if PTs align with the original request document.</p>
                      <p><strong className="text-white">/run comprehensive</strong> - Runs a full, holistic review against our entire creation handbook.</p>
                      <p><strong className="text-white">/run skill_check</strong> - Verifies that each PT is testing the correct curriculum skills.</p>
                      <div>
                        <p><strong className="text-white">/run check [check_name]</strong> - Runs a specific, targeted check. `[check_name]` can be:</p>
                        <ul className="list-disc list-inside pl-4 text-xs mt-2 space-y-1">
                          <li>Hint_Structure</li>
                          <li>Forbidden_Words</li>
                          <li>Randomization_Logic</li>
                          <li>Language_Tone</li>
                          <li>Localization</li>
                          <li>Grade_Level</li>
                          <li>Math_Accuracy</li>
                          <li>Solution_Paths</li>
                          <li>Realistic_Randomization</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 3: Feedback & Reporting</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30 font-mono">
                      <p><strong className="text-white">/add_my_feedback [PT_ID]</strong> - Lets me add my own manual notes to the log for a specific PT.</p>
                      <p><strong className="text-white">/add_general_feedback</strong> - Allows me to add high-level notes for the whole project.</p>
                      <p><strong className="text-white">/show_feedback_table</strong> - Displays the full feedback log as a clean TSV table.</p>
                      <p><strong className="text-white">/generate_report</strong> - Takes all the feedback from the log and creates the final, synthesized report for my coworker.</p>
                      <p><strong className="text-white">/help</strong> - Shows the full list of commands.</p>
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