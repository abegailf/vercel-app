// File: app/projects/ai-answer-checker/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function AiAnswerChecker() {
  const pythonSnippet = `import openai
from bs4 import BeautifulSoup
import re

# --- PROMPT TEMPLATE ---
CHECK_ANSWER_PROMPT_TEMPLATE = """
You are a meticulous and expert mathematics teacher...
Your task is to analyze a single question... and compare your answer to the provided answer.
...
**INSTRUCTIONS (Follow this order precisely):**
1.  **Analyze and Solve:** ...
2.  **Normalize Your Answer:** ...
3.  **Final Conclusion:** ...
...
**JSON Response Format:**
{{
  "is_correct": boolean,
  "calculated_answer": "...",
  "confidence_score": integer (0, 1, or 2),
  "reasoning": "..."
}}
"""

def parse_worksheet(file_path):
    # ... (function to parse JSX/XML worksheet files) ...
    pass

def check_problem_with_ai(problem, client):
    # ... (function to call the LLM with the prompt and problem data) ...
    pass

if __name__ == "__main__":
    # ... (main script to orchestrate parsing, AI checking, and report generation) ...
    pass
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
            <span>AI-Powered Answer Checker (R&D)</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">AI-Powered Answer Checker (R&D)</h1>
        </div>
      </section>

      {/* Portfolio Details */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">The Challenge: Automating Quality Assurance</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Manually checking every answer in a mathematics worksheet for accuracy is a critical but incredibly time-consuming part of the quality assurance process. My colleague initiated a discussion on our AI-sharing Slack channel to explore whether we could automate this. The goal was to build a tool that could parse a worksheet, solve each question, and compare its result to the provided answer.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">My Contribution: Prototyping a Python Solution</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I joined the effort and took on the task of building a proof-of-concept. I developed a Python script that served as the backbone of this R&D project. The script was designed to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-8">
                    <li>Parse complex worksheet files (JSX/XML) to extract individual questions and their provided answers.</li>
                    <li>Normalize the extracted data into a clean, consistent format.</li>
                    <li>Construct a detailed prompt template to instruct an LLM to act as an expert math teacher.</li>
                    <li>Systematically send each problem to various LLM APIs (including OpenAI and Gemini) for analysis.</li>
                    <li>Parse the structured JSON response from the AI and compile all findings into a final CSV report.</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-700">
                  <Image
                    src="/images/ws-answer checking.png" // You'll need to add a screenshot of the Slack thread here
                    alt="Slack collaboration for the AI Answer Checker project"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Outcome: A Data-Driven Decision</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Through rigorous testing and collaboration with the team, we analyzed the AI's performance. While the script worked perfectly, we discovered that the current generation of LLMs produced too many false positives to be reliable for production use. This was a valuable finding in itself. The project was a successful R&D effort that provided critical insights into the limitations of current AI models for this specific task, saving the company from investing further in a currently unviable solution.
                </p>
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mt-6">
                  <div className="p-4 text-xs font-mono text-gray-300 whitespace-pre-wrap">
                    <code>{pythonSnippet}</code>
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
                      R&D, Prototyping, Python Scripting, LLM Evaluation, Collaborative Problem-Solving
                    </p>
                  </div>
                  <div>
                    <strong style={{ color: "#FB5530" }}>Tools & Technologies:</strong>
                    <p className="text-sm mt-1" style={{ color: "#A59385" }}>
                      Python, OpenAI API, Gemini API, BeautifulSoup
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