// File: app/page.tsx
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, ChevronLeft, ChevronRight, Linkedin, Github } from "lucide-react"

// --- DATA ARRAYS (MOVED TO TOP) ---
const techTools = [
  { logo: "/images/SQL logo.png", name: "MySQL" },
  { logo: "/images/tableau logo.png", name: "Tableau" },
  { logo: "/images/GA4 logo.png", name: "Google Analytics (GA4)" },
  { logo: "/images/google sheets logo.png", name: "Google Sheets" },
  { logo: "/images/git logo.png", name: "Git" },
  { logo: "/images/excel logo.png", name: "Excel" },
  { logo: "/images/g AI studio logo.png", name: "Google AI Studio" },
  { logo: "/images/python logo.png", name: "Python" },
  { logo: "/images/v0 logo.png", name: "V0" },
  { logo: "/images/vscode logo.png", name: "Visual Studio Code" },
];

const certifications = [
  { title: "Google Data Analytics", issuer: "Google", date: "2022", icon: "G", iconBg: "bg-yellow-500", description: "An entry-level professional certificate teaching practical skills in data cleaning, analysis, and visualization using tools like spreadsheets, SQL, R, and Tableau." },
  { title: "Google Analytics (GA4)", issuer: "Google", date: "2023", icon: "GA", iconBg: "bg-blue-500", description: "An official certification validating expertise in using Google Analytics 4 (GA4) to measure and analyze website and app performance, including event tracking and reporting." },
];

 const workExperience = [
    {
      title: "MATHEMATICS DIGITAL CONTENT WRITER, MATHSPACE",
      location: "Remote",
      period: "Apr 2025 - Present",
      responsibilities: [
        "Rejoined the team in a dynamic environment that encourages AI exploration, allowing for the development of new automation tools.",
        "Successfully developed and implemented a Python script to automate the collation of spreadsheet data, streamlining a critical content workflow.",
        "Conducted the R&D of a Python solution for automated worksheet answer-checking, rigorously testing various LLMs (OpenAI, Gemini) and collaborating with the team to analyze model accuracy and limitations.",
        "Leveraging Google AI Studio to co-author Python scripts for generating statistical visualizations, such as histograms, for educational content.",
        "Developing a web application using Google AI Studio ('Problem Template Creator') to accelerate the creation of educational materials.",
        "Authoring and refining CLI-based AI prompts to auto-generate TSV code blocks, significantly improving the efficiency of content development.",
        "Actively contributing to the team's AI adoption by troubleshooting complex prompts and sharing novel solutions, such as a workflow for AI-driven SVG image generation."
      ],
    },
    {
      title: "CATEGORY ANALYST, GINGERSNAPS",
      location: "Pasay City, PH",
      period: "Jan 2025 - Feb 2025",
      responsibilities: [
        "In a high-impact, one-month contract, developed and implemented multiple data solutions for e-commerce analytics using Excel and VBA.",
        "Designed and built dynamic sales dashboards and inventory forecasting models to improve stock management.",
        "Engineered custom VBA solutions to automate key inventory processes, including replenishment and store inventory pullouts."
      ],
    },
    {
      title: "MATHEMATICS DIGITAL CONTENT WRITER, MATHSPACE",
      location: "Remote",
      period: "Mar 2018 - Oct 2024",
      responsibilities: [
        "Conducted data-driven analysis of problem template effectiveness using Metabase, translating insights from student attempt data into targeted content improvements.",
        "Co-authored and refined math lessons and worksheets with XML-based content editing, ensuring alignment with educational standards and improving student comprehension",
        "Developed and optimized over 3,000 dynamic, interactive problem templates using MathyonS scripting",
        "Co-authored the first editions of Mathspace AU Books 7-10, ensuring rigorous curriculum alignment.",
        "Recognized as a ClickUp Power User for streamlining team collaboration and improving content development workflows."
      ],
    },
    {
      title: "CUSTOMER ADVISOR, SECURITY BANK",
      location: "Alabang, PH",
      period: "Jun 2013 - Jan 2018",
      responsibilities: [
        "Conducted financial data analysis using Excel to assist clients in investment planning and cash flow projections.",
        "Achieved 100% of sales quota through data-informed advisory and strong client relationship management."
      ],
    },
  ];


const allProjects = [
  {
      id: 17, 
      title: "Data Collation Python Script",
      description: "Excel, Python, Process Automation, Visual Studio Code, AI",
      image: "/images/python-data-collation.png", 
      categories: ["ai", "python","vscode", "processauto", "excel"], 
      link: "/projects/python-data-collation", 
    },
      {
      id: 16, 
      title: "Automated Worksheet-Answer Checker",
      description: "Python, LLM Evaluation, Process Automation, Visual Studio Code, AI",
      image: "/images/ws-answer checking.png", 
      categories: ["ai", "python","vscode", "processauto"],
      link: "/projects/ai-answer-checker",
    },
     {
      id: 14, 
      title: "Data Visualization Scripting",  
      description: "Python, Prompt Engineering, AI", 
      image: "/images/histogram curve.png", 
       categories: ["ai", "python", "promptengineering"],
      link: "/projects/python-histogram-generator",
    },
        {
      id: 12,
      title: "Worksheet-PT Alignment QA Specialist Agent CLI",
      description: "AI Agent Design, QA Automation, Prompt Engineering",
      image: "/images/qa ws-pt alignment.png", 
      categories: ["ai","aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-qa-agent", 
    },
       {
      id: 10, 
      title: "Worksheet-PT Alignment Agent CLI",
      description: "Prompt Engineering, AI Agent Design, Automation",
      image: "/images/ws-pt alignment creation.png", 
      categories: ["ai","aiagent", "processauto", "promptengineering"],
      link: "/projects/ai-orchestrator-alignment", 
    },
       {
      id: 8, 
      title: "Store Pullout Automation (VBA)",
      description: "Excel, VBA, Process Automation",
      image: "/images/inventory-replenishment.png", 
      categories: ["excel", "vba", "processauto"],
      link: "/projects/store-pullout-automation", 
    },
      {
      id: 7, 
      title: "Inventory Replenishment Template",
      description: "Excel, Process Automation",
      image: "/images/inventory-replenishment.png", 
      categories: ["excel", "processauto"],
      link: "/projects/inventory-replenishment", 
    },
    {
      id: 3,
      title: "Inventory Forecasting Model",
      description: "Excel",
      image: "/images/inventory-forecast.png",
      categories: ["excel"],
      link: "/projects/inventory-forecast",
    },
    {
      id: 4,
      title: "Excel Sales Dashboard",
      description: "Excel, Data Visualization",
      image: "/images/kiddie-vogue-dashboard.png",
      categories: ["excel", "dataviz"],
      link: "/projects/excel-sales-dashboard",
    },
    {
      id: 2,
      title: "Uncovering Market Trends in the Gaming Industry",
      description: "SQL, OpenRefine, Tableau, Data Cleaning, Data Exploration, Data Visualization",
      image: "/images/game-console.png",
      categories: ["sql", "openrefine", "tableau", "datacleaning", "dataexp", "dataviz"],
      link: "/projects/gaming-industry",
    },
    {
      id: 5,
      title: "SQL Scripts",
      description: "SQL, Data Cleaning, Data Exploration",
      image: "/images/sql-scripts-display.png",
      categories: ["sql", "datacleaning", "dataexp"],
      link: "/projects/sql-scripts",
    },
    {
      id: 6,
      title: "Interactive Dashboards with Tableau",
      description: "Tableau, Data Visualization",
      image: "/images/tableau-display.png",
      categories: ["tableau", "dataviz"],
      link: "/projects/tableau-vizzes",
    },
  ]

  const filters = [
    { key: "*", label: "All" },
    { key: "sql", label: "SQL" },
    { key: "vba", label: "VBA" },
    { key: "excel", label: "Excel" },
    { key: "tableau", label: "Tableau" },
    { key: "openrefine", label: "OpenRefine" },
    { key: "ai", label: "AI" },
    { key: "aiagent", label: "AI Agent" },
    { key: "python", label: "Python" },
    { key: "processauto", label: "Process Automation" },
    { key: "vscode", label: "Visual Studio Code" },
    { key: "promptengineering", label: "Prompt Engineering" },
    { key: "dataviz", label: "Data Visualization" },
    { key: "datacleaning", label: "Data Cleaning" },
    { key: "dataexp", label: "Data Exploration" },

  ]



// Custom Tableau Icon Component
const TableauIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2 13.41h5.79v5.79H2zM9.1 2h5.8v11.41H9.1zM16.21 2h5.79v5.79h-5.79zM9.1 15.62h5.8v5.8H9.1zM2 2h5.79v9.25H2z" />
  </svg>
);

export default function PortfolioPage() {
  const [certificationsIndex, setCertificationsIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("*");
  const [techToolsPage, setTechToolsPage] = useState(0);
  const [desktopTechToolsPage, setDesktopTechToolsPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const certificationsInterval = setInterval(() => {
      setCertificationsIndex((prev) => (prev + 1 >= certifications.length ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(certificationsInterval);
  }, []); // certifications.length is stable, so empty dependency array is fine.

  const handleCertificationsTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleCertificationsTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleCertificationsTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextCertification();
    if (distance < -50) prevCertification();
  };

  const nextCertification = () => {
    setCertificationsIndex((prev) => (prev + 1 >= certifications.length ? 0 : prev + 1));
  };

  const prevCertification = () => {
    setCertificationsIndex((prev) => (prev - 1 < 0 ? certifications.length - 1 : prev - 1));
  };

  const filteredProjects =
    activeFilter === "*"
      ? allProjects
      : allProjects.filter((project) => project.categories.includes(activeFilter));

  return (
    <>
      <section id="home"  className="relative h-screen md:-mt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span style={{ color: "#FB5530" }}>Abegail</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: "#A59385" }}>
              Solving complex problems at the intersection of Mathematics, Data Analytics, and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection("#about")} className="text-white border-2 hover:bg-gray-800" style={{ backgroundColor: "#FB5530", borderColor: "#FB5530" }}>
                About
              </Button>
               <Button
          onClick={() => scrollToSection("#projects")}
          variant="outline"
          className="border-2 hover:bg-gray-800"
          style={{ borderColor: "#A59385", color: "#A59385" }}
        >
          Projects
        </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-2 border-orange-600/50">
                <Image src="/images/about-pic.jpg" alt="Abegail Fontanilla" width={160} height={160} className="w-full h-full object-cover" />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-6" style={{ color: "#A59385" }}>My journey into data began with a deep appreciation for the structure and elegance of Mathematics. This foundation gives me a unique, first-principles approach to problem-solving. I've applied this mindset in fast-paced business environments, transforming complex e-commerce challenges into efficient, automated solutions using tools like Excel and VBA to build everything from dynamic sales dashboards to inventory forecasting models.</p>
                <p className="text-lg mb-8" style={{ color: "#A59385" }}>What truly excites me is building the next generation of data tools. I thrive in environments that encourage innovation, where I've conducted R&D projects for AI-driven automation, engineered Python scripts with OpenAI and Gemini, and developed web applications using Google AI Studio. My goal is to combine my practical business analysis skills with my passion for building, creating intelligent data solutions that are not only insightful but also scalable and efficient.</p>
            </div>
        </div>
      </section>

      <section id="experience" className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
                <div key={index} className="p-6 rounded-lg border border-[#A59385]/30" style={{ backgroundColor: "#14132B" }}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                        <h3 className="font-bold text-lg text-white">{job.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-1 sm:mt-0 flex-shrink-0">
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{job.period}</span>
                        </div>
                    </div>
                    <ul className="space-y-3 text-gray-300">
                        {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-sm">{responsibility}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      <section id="projects" className="py-16 max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
              <Link href="/portfolio" className="border-orange-600 text-orange-600 hover:text-white bg-transparent">
              View all my projects
            </Link>

          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
              {filters.map((filter) => (
                  <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className={`px-3 py-1 rounded-full transition-colors ${activeFilter === filter.key ? "bg-orange-600 text-white" : "text-gray-400 hover:text-orange-600"}`}>
                      {filter.label}
                  </button>
              ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredProjects.slice(0, 12).map((project) => (
                  <Link key={project.id} href={project.link}>
                      <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-105 border border-[#A59385]" style={{ backgroundColor: "#14132B" }}>
                          <CardContent className="p-0">
                              <div className="aspect-video relative">
                                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                              </div>
                              <div className="p-4">
                                  <h4 className="font-bold mb-2 text-[#FB5530]">{project.title}</h4>
                                  <p className="text-sm text-gray-400">{project.description}</p>
                              </div>
                          </CardContent>
                      </Card>
                  </Link>
              ))}
          </div>
          <div className="text-center">
              <Link href="/portfolio">
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent">View All</Button>
              </Link>
          </div>
      </section>

      <section id="tech-tools" className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Tech Tools</h2>
        <div className="relative max-w-4xl mx-auto">
            {/* MOBILE-ONLY CAROUSEL (2 tools per page, 5 dots) */}
            <div className="sm:hidden">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${techToolsPage * 100}%)` }}>
                        {Array.from({ length: 5 }).map((_, pageIndex) => (
                            <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-2 gap-4 px-4">
                                {techTools.slice(pageIndex * 2, (pageIndex + 1) * 2).map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2">
                                        <div className="w-20 h-20 relative"><Image src={tool.logo} alt={tool.name} fill className="object-contain" /></div>
                                        <span className="text-xs text-[#A59385] text-center">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: 5 }).map((_, pageIndex) => (
                        <button key={pageIndex} onClick={() => setTechToolsPage(pageIndex)} aria-label={`Go to page ${pageIndex + 1}`} className={`w-2 h-2 rounded-full transition-all ${techToolsPage === pageIndex ? "bg-[#FB5530] scale-125" : "bg-[#A59385]"}`} />
                    ))}
                </div>
            </div>

            {/* DESKTOP-ONLY CAROUSEL (5 tools per page, 2 dots) */}
            <div className="hidden sm:block">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${desktopTechToolsPage * 100}%)` }}>
                        {Array.from({ length: 2 }).map((_, pageIndex) => (
                            <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-5 gap-4 px-4">
                                {techTools.slice(pageIndex * 5, (pageIndex + 1) * 5).map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2">
                                        <div className="w-24 h-24 relative"><Image src={tool.logo} alt={tool.name} fill className="object-contain" /></div>
                                        <span className="text-sm text-[#A59385] text-center">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: 2 }).map((_, pageIndex) => (
                        <button key={pageIndex} onClick={() => setDesktopTechToolsPage(pageIndex)} aria-label={`Go to page ${pageIndex + 1}`} className={`w-2 h-2 rounded-full transition-all ${desktopTechToolsPage === pageIndex ? "bg-[#FB5530] scale-125" : "bg-[#A59385]"}`} />
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section id="certifications" className="py-16 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Certifications</h2>
          <div className="relative">
              <Button variant="ghost" size="icon" onClick={prevCertification} aria-label="Previous certification" className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 hidden md:flex"><ChevronLeft className="w-6 h-6" /></Button>
              <Button variant="ghost" size="icon" onClick={nextCertification} aria-label="Next certification" className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 hidden md:flex"><ChevronRight className="w-6 h-6" /></Button>
              <div className="overflow-hidden" onTouchStart={handleCertificationsTouchStart} onTouchMove={handleCertificationsTouchMove} onTouchEnd={handleCertificationsTouchEnd}>
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${certificationsIndex * 100}%)` }}>
                      {certifications.map((cert, index) => (
                          <div key={index} className="flex-shrink-0 w-full px-4">
                              <Card className="border border-[#A59385] hover:border-[#FB5530] transition-all duration-300" style={{ backgroundColor: "#14132B" }}>
                                  <CardContent className="p-8 text-center">
                                      <div className={`w-20 h-20 mx-auto mb-6 ${cert.iconBg} rounded-lg flex items-center justify-center shadow-lg`}><span className="text-2xl font-bold text-white">{cert.icon}</span></div>
                                      <h3 className="font-bold mb-2 text-white text-xl">{cert.title}</h3>
                                      <p className="text-[#A59385] mb-2 font-medium">{cert.issuer} • {cert.date}</p>
                                      <p className="text-sm text-[#A59385] leading-relaxed">{cert.description}</p>
                                  </CardContent>
                              </Card>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="flex justify-center gap-2 mt-8">
                  {certifications.map((_, index) => (
                      <button key={index} onClick={() => setCertificationsIndex(index)} aria-label={`Go to certification ${index + 1}`} className={`w-2 h-2 rounded-full transition-all duration-300 ${certificationsIndex === index ? "bg-[#FB5530] scale-125" : "bg-[#A59385] hover:bg-[#D35240]"}`} />
                  ))}
              </div>
          </div>
      </section>

      <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6" style={{ color: "#A59385" }}>Let's connect! I'm currently available for new projects and would love to hear from you.</p>
              <a href="mailto:abbeyfontanilla@gmail.com" className="text-xl font-bold text-orange-600 hover:text-orange-500 transition-colors">abbeyfontanilla@gmail.com</a>
              <div className="flex items-center gap-6 mt-8">
                  <a href="https://www.linkedin.com/in/abegailrf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-orange-600 hover:scale-110 transition-all"><Linkedin className="w-8 h-8" /></a>
                  <a href="https://github.com/theabbeyf" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-400 hover:text-orange-600 hover:scale-110 transition-all"><Github className="w-8 h-8" /></a>
                  <a href="https://public.tableau.com/app/profile/abegailf/vizzes" target="_blank" rel="noopener noreferrer" aria-label="Tableau Public Profile" className="text-gray-400 hover:text-orange-600 hover:scale-110 transition-all"><TableauIcon className="w-8 h-8" /></a>
              </div>
          </div>
      </section>
    </>
  )
}