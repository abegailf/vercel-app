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
          <h1 className="text-4xl md:text-5xl font-bold">PT Creation Agent CLI-based</h1>
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
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Creating New Problem Templates is Tough</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At work, a department will send us a document with a request to create a whole new set of interactive math problems (PTs) for a subtopic. My task is to build all of them from scratch.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The main problem is that turning a simple document into many technically correct and randomized XML files is a huge effort. I found the real challenge was how to do it efficiently. I needed a way to group similar problems so I wouldn't have to do the same work over and over, and a way to automate the repetitive parts of writing the code.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Solution: An AI Agent to Help Me Build Faster</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To solve this, I designed the 'PT Creation Agent.' It's an AI tool I use in the command line that helps me manage the entire creation process. It takes the request document and helps me build all the PTs in a much more organized way.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The first thing the agent does is read the whole document and identify "prototypes." These are the unique questions that can be used as a template for the others. This is the key to working fast. Once I build the main prototypes with the agent's help, it can then generate all the other similar PTs very quickly. It saves me a lot of time.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/pt request creation.png"
                    alt="AI Agent for Content Creation Concept Image"
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
                  Inside this megaprompt, I also built a library of smaller, specialized prompts. So when I give the agent a command like `/run identify_prototypes`, it knows to use the specific sub-prompt for that task. This is how it can do different, complex jobs like analyzing the document or creating the XML code.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Commands I Use</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I built the agent to follow a command system that guides me through the entire workflow, from planning to final changes.
                </p>
                <div className="text-left text-sm text-gray-300 space-y-6">
                  {/* Phase 1 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 1: Planning & Prototype Creation</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30">
                      <p><strong className="text-white font-mono">/start</strong> - Initiates the workflow and asks for all the project files and context.</p>
                      <p><strong className="text-white font-mono">/run format_request</strong> - Renders the request document in clean HTML so it's easier to read.</p>
                      <p><strong className="text-white font-mono">/run identify_prototypes</strong> - Analyzes the request to find unique questions that can be used as templates and groups similar ones together.</p>
                      <p><strong className="text-white font-mono">/run create_prototypes</strong> - Generates the actual XML code for the main "prototype" problems.</p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Phase 2: Finalization & Iteration</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30">
                      <p><strong className="text-white font-mono">/run create_remaining_pts</strong> - After the prototypes are done, this automatically generates the XML for all the other similar problems.</p>
                      <p><strong className="text-white font-mono">/add pt_ids</strong> - Lets me input the final ID numbers for the new PTs once they are in the system.</p>
                      <p><strong className="text-white font-mono">/update_xml [QuestionID]</strong> - A command to completely replace the XML for a specific PT if I need to make a big change.</p>
                      <p><strong className="text-white font-mono">/revise [QuestionID]</strong> - Lets me give the agent instructions to make smaller edits to a specific PT.</p>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <h4 className="font-bold text-white mb-2">Utility & Status Commands</h4>
                    <div className="space-y-3 pl-4 border-l-2 border-orange-600/30">
                      <p><strong className="text-white font-mono">/get_xml [QuestionID]</strong> - Shows me the raw XML code for any PT in the log.</p>
                      <p><strong className="text-white font-mono">/show_log</strong> - Displays a summary of the whole project status in a TSV format.</p>
                      <p><strong className="text-white font-mono">/help</strong> - Shows this list of commands.</p>
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
                      onClick={() => window.open("https://github.com/abegailf/PT-Creation-Agent-CLI", "_blank")}
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