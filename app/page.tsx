"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Menu, X, ChevronLeft, ChevronRight, Linkedin, Github } from "lucide-react"

// Custom Tableau Icon Component
const TableauIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M2 13.41h5.79v5.79H2zM9.1 2h5.8v11.41H9.1zM16.21 2h5.79v5.79h-5.79zM9.1 15.62h5.8v5.8H9.1zM2 2h5.79v9.25H2z" />
  </svg>)

export default function Portfolio() {
  {/* const [isMenuOpen, setIsMenuOpen] = useState(false) */}
  const [techToolsPage, setTechToolsPage] = useState(0)
  const [certificationsIndex, setCertificationsIndex] = useState(0)
  const [recentWorkFilter, setRecentWorkFilter] = useState("*");
  const [personalProjectsFilter, setPersonalProjectsFilter] = useState("*");
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

    useEffect(() => {
    // We removed the techToolsInterval completely

    const certificationsInterval = setInterval(() => {
      setCertificationsIndex((prev) => {
        const nextIndex = prev + 1
        return nextIndex >= certifications.length ? 0 : nextIndex
      })
    }, 5000)

    return () => {
      // We also removed the techToolsInterval from the cleanup
      clearInterval(certificationsInterval)
    }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextTechTool()
    }
    if (isRightSwipe) {
      prevTechTool()
    }
  }

  const nextTechTool = () => {
    setTechToolsPage(1); // Go to the second page (index 1)
  };

  const prevTechTool = () => {
    setTechToolsPage(0); // Go back to the first page (index 0)
  };
  const nextCertification = () => {
    setCertificationsIndex((prev) => {
      const nextIndex = prev + 1
      return nextIndex >= certifications.length ? 0 : nextIndex
    })
  }

  const prevCertification = () => {
    setCertificationsIndex((prev) => {
      const prevIndex = prev - 1
      return prevIndex < 0 ? certifications.length - 1 : prevIndex
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
{/*}   setIsMenuOpen(false) */}
  }

    const recentWorkProjects = [
       {
      id: 13, // <-- New ID
      title: "AI QA Agent for New Content",
      description: "AI Agent Design, Quality Assurance Automation",
      image: "/images/Pt creator AI.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category
      link: "/projects/ai-qa-agent-requests", // <-- New link
    },
        {
      id: 12, // <-- New ID
      title: "AI QA Agent for Content Alignment",
      description: "AI Agent Design, Quality Assurance, Prompt Engineering",
      image: "/images/qa ws-pt alignment.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category
      link: "/projects/ai-qa-agent", // <-- New link
    },
       {
      id: 10, // <-- New ID
      title: "AI Agent for Content Alignment",
      description: "Prompt Engineering, AI Agent Design, Automation",
      image: "/images/ws-pt alignment creation.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category, can create an 'ai' one later
      link: "/projects/ai-orchestrator-alignment", // <-- New link
    },
      {
      id: 11, // <-- New ID
      title: "AI Agent for Content Creation",
      description: "Prompt Engineering, System Architecture, Code Generation",
      image: "/images/pt request creation.png", // Using a relevant placeholder
      categories: ["ga4"], // Placeholder category
      link: "/projects/ai-orchestrator-creation", // <-- New link
    },
      {
      id: 9, // <-- New ID
      title: "Problem Template Creator AI",
      description: "Google AI Studio, Prompt Engineering, Automation",
      image: "/images/Pt creator AI.png", // <-- New image
      categories: ["ga4"], // Using a placeholder category for now, you can create a new one like 'ai' later
      link: "/projects/pt-creator-ai", // <-- New link
    },
       {
      id: 8, // <-- New ID
      title: "Store Pullout Automation (VBA)",
      description: "Excel, VBA, Process Automation",
      image: "/images/inventory-replenishment.png", // Using placeholder image for now
      categories: ["excel"],
      link: "/projects/store-pullout-automation", // <-- New link
    },
      {
      id: 7, // <-- New ID
      title: "Inventory Replenishment Template",
      description: "Excel, Process Automation",
      image: "/images/inventory-replenishment.png", // <-- New image
      categories: ["excel"],
      link: "/projects/inventory-replenishment", // <-- New link
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
  ];

  const personalProjects = [
    {
      id: 1,
      title: "Google Merch Shop Case Study",
      description: "Google Analytics (GA4)",
      image: "/images/google-merch-display-new.png",
      categories: ["ga4"],
      link: "/projects/google-merch",
    },
    {
      id: 2,
      title: "Gaming Industry Case Study",
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
      title: "Data Vizzes with Tableau",
      description: "Tableau, Data Visualization",
      image: "/images/tableau-display.png",
      categories: ["tableau", "dataviz"],
      link: "/projects/tableau-vizzes",
    },
  ];
  const filters = [
    { key: "*", label: "All" },
    { key: "sql", label: "SQL" },
    { key: "excel", label: "Excel" },
    { key: "tableau", label: "Tableau" },
    { key: "openrefine", label: "OpenRefine" },
    { key: "ga4", label: "Google Analytics (GA4)" },
    { key: "dataviz", label: "Data Visualization" },
    { key: "datacleaning", label: "Data Cleaning" },
    { key: "dataexp", label: "Data Exploration" },
  ]

  const filteredRecentWork =
  recentWorkFilter === "*"
    ? recentWorkProjects
    : recentWorkProjects.filter((project) => project.categories.includes(recentWorkFilter));

  const filteredPersonalProjects =
  personalProjectsFilter === "*"
    ? personalProjects
    : personalProjects.filter((project) => project.categories.includes(personalProjectsFilter));

  const techTools = [
    { logo: "/images/mysql-logo.png", name: "MySQL" },
    { logo: "/images/tableau-logo.png", name: "Tableau" },
    { logo: "/images/ga4-logo.png", name: "Google Analytics (GA4)" },
    { logo: "/images/google-sheets-logo.png", name: "Google Sheets" },
    { logo: "/images/git-logo.png", name: "Git" },
    { logo: "/images/excel-logo.png", name: "Excel" },
  ]

  const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Google",
      date: "2022",
      icon: "G",
      iconBg: "bg-yellow-500",
      description:
        "An entry-level data analyst professional certificate program that teaches practical skills in data cleaning, analysis, and visualization using tools like spreadsheets, SQL, R, and Tableau. The program covers the entire data analysis process, from asking the right questions to presenting findings and making data-driven recommendations. Upon completion, graduates gain job-ready skills for entry-level positions in data analytics and business analytics roles.",
    },
    {
      title: "Google Analytics (GA4)",
      issuer: "Google",
      date: "2023",
      icon: "GA",
      iconBg: "bg-blue-500",
      description:
        "An official Google Analytics certification that validates expertise in using Google Analytics 4 (GA4) to measure and analyze website and app performance. The certification covers advanced GA4 features including event tracking, conversion tracking, audience segmentation, and reporting. Certified professionals can effectively set up GA4 properties, configure goals and conversions, and generate actionable insights from web analytics data to drive business growth and optimize digital marketing strategies.",
    },
  ]

  const workExperience = [
    {
      title: "MATHEMATICS DIGITAL CONTENT WRITER, MATHSPACE",
      location: "Remote",
      period: "Apr 2025 - Present",
      responsibilities: [
        "Rejoined the team in a dynamic environment that encourages AI exploration, allowing for the development of new automation tools.",
        "Successfully developed and implemented a Python script to automate the collation of spreadsheet data, streamlining a critical content workflow.",
        "Spearheaded the R&D of a Python solution for automated worksheet answer-checking, rigorously testing various LLMs (OpenAI, Gemini) and collaborating with the team to analyze model accuracy and limitations.",
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
    {
      title: "HIGH SCHOOL MATHEMATICS TEACHER, THE MASTER'S ACADEMY",
      location: "Parañaque City, PH",
      period: "Jun 2011 - Apr 2012",
      responsibilities: [
        "Delivered mathematics instruction designed to strengthen analytical and problem-solving skills.",
      ],
    },
    {
      title: "HIGH SCHOOL MATHEMATICS TEACHER, INTERNATIONAL CHRISTIAN ACADEMY",
      location: "Parañaque City, PH",
      period: "June 2009 - Apr 2010",
      responsibilities: [
        "Adapted curriculum to meet diverse student needs, integrating real-world examples to enhance comprehension.",
      ],
    },
  ];

  const handleCertificationsTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleCertificationsTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleCertificationsTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextCertification()
    }
    if (isRightSwipe) {
      prevCertification()
    }
  }

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: "#111024", color: "white" }}>
      {/* Header */}
    {/*  <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "#111024" }}>
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto relative">
          <div className="text-xl font-bold">AbegailF.</div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white rounded-md p-2 hover:bg-[#A59385]/20 focus-visible:ring-2 focus-visible:ring-orange-600 transition-colors"
              >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {isMenuOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-lg z-50"
              style={{ backgroundColor: "#111024", border: "1px solid #A59385" }}
            >
              <div className="p-4">
                <button
                  onClick={() => scrollToSection("#home")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("#experience")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => scrollToSection("#projects")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Recent Work
                </button>
                <button
                  onClick={() => scrollToSection("#personal-projects")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Personal Projects
                </button>
                <button
                  onClick={() => scrollToSection("#tech-tools")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Tech Tools
                </button>
                <button
                  onClick={() => scrollToSection("#certifications")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Certifications
                </button>
                 <button
                  onClick={() => scrollToSection("#contact")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </header>*/}

      {/* Main Content */}
      <main className="pt-20">
        {/* ================================================================== */}
        {/* SECTION 1: HERO (STAYS AT TOP) */}
        {/* ================================================================== */}
       <section
  id="home"
  className="relative h-screen -mt-20" // <-- THE FIX IS HERE: ADDED -mt-20
>
  {/* This inner div is positioned absolutely within the section */}
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6"
  >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span style={{ color: "#FB5530" }}>Abegail</span>
      </h1>
      <p className="text-xl mb-8" style={{ color: "#A59385" }}>
        Solving complex problems at the intersection of Mathematics, Data Analytics, and AI.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => scrollToSection("#about")}
          className="text-white border-2 hover:bg-gray-800"
          style={{ backgroundColor: "#FB5530", borderColor: "#FB5530" }}
        >
          About
        </Button>
        <Button
          onClick={() => scrollToSection("#projects")}
          variant="outline"
          className="border-2 hover:bg-gray-800"
          style={{ borderColor: "#A59385", color: "#A59385" }}
        >
          Work
        </Button>
      </div>
    </div>
  </div>
</section>

        {/* ================================================================== */}
        {/* SECTION 2: ABOUT ME (MOVED UP) */}
        {/* ================================================================== */}
              {/* About Section */}
        <section id="about" className="py-16 max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Smaller Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-2 border-orange-600/50">
              <Image
                src="/images/about-pic.jpg"
                alt="Abegail Fontanilla"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-6" style={{ color: "#A59385" }}>
                My journey into data began with a deep appreciation for the structure and elegance of Mathematics. This foundation gives me a unique, first-principles approach to problem-solving. I've applied this mindset in fast-paced business environments, transforming complex e-commerce challenges into efficient, automated solutions using tools like Excel and VBA to build everything from dynamic sales dashboards to inventory forecasting models.
              </p>
              <p className="text-lg mb-8" style={{ color: "#A59385" }}>
                What truly excites me is building the next generation of data tools. I thrive in environments that encourage innovation, where I've conducted R&D projects for AI-driven automation, engineered Python scripts with OpenAI and Gemini, and developed web applications using Google AI Studio. My goal is to combine my practical business analysis skills with my passion for building, creating intelligent data solutions that are not only insightful but also scalable and efficient.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "#A59385" }}>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Philippines
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Available for projects
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 3: WORK EXPERIENCE (MOVED UP) */}
        {/* ================================================================== */}
                {/* Work Experience */}
        <section id="experience" className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8"> {/* Using space-y for consistent gaps */}
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[#A59385]/30" // Card-like container
                style={{ backgroundColor: "#14132B" }}
              >
                {/* Job Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="font-bold text-lg text-white">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1 sm:mt-0 flex-shrink-0">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Responsibilities List */}
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
        {/* ================================================================== */}
        {/* SECTION 4: RECENT WORK */}
        {/* ================================================================== */}
        <section id="projects" className="py-16 max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Recent Work</h2>
             <Link href="/work-project" className="border-orange-600 text-orange-600 hover:text-white bg-transparent">
              View all my work projects
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setRecentWorkFilter(filter.key)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  recentWorkFilter === filter.key ? "bg-orange-600 text-white" : "text-gray-400 hover:text-orange-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredRecentWork.map((project) => (
              <Link key={project.id} href={project.link}>
                <Card
                  className="overflow-hidden cursor-pointer transition-transform hover:scale-105 border border-[#A59385]"
                  style={{ backgroundColor: "#14132B" }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
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
            <Link href="/work-project">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              >
                View All
              </Button>
            </Link>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 5: PERSONAL PROJECTS */}
        {/* ================================================================== */}
        <section id="personal-projects" className="py-16 max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Personal Projects</h2>
            <Link href="/personal-project" className="border-orange-600 text-orange-600 hover:text-white bg-transparent">
              View all my personal projects
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setPersonalProjectsFilter(filter.key)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  personalProjectsFilter === filter.key ? "bg-orange-600 text-white" : "text-gray-400 hover:text-orange-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
           {filteredPersonalProjects.map((project) => (
              <Link key={project.id} href={project.link}>
                <Card
                  className="overflow-hidden cursor-pointer transition-transform hover:scale-105 border border-[#A59385]"
                  style={{ backgroundColor: "#14132B" }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
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
            <Link href="/personal-project">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              >
                View All
              </Button>
            </Link>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 6: TECH TOOLS */}
        {/* ================================================================== */}
        <section id="tech-tools" className="py-16 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Tech Tools</h2>
          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTechTool}
              aria-label="Previous tech tools page"
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTechTool}
              aria-label="Next tech tools page"
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${techToolsPage * 100}%)` }}
              >
                {/* Page 1 */}
                <div className="flex-shrink-0 w-full grid grid-cols-3 gap-4 px-4">
                  {techTools.slice(0, 3).map((tool, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
                        <Image src={tool.logo} alt={tool.name} fill className="object-contain" />
                      </div>
                      <span className="text-xs md:text-sm text-[#A59385] text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
                {/* Page 2 */}
                <div className="flex-shrink-0 w-full grid grid-cols-3 gap-4 px-4">
                  {techTools.slice(3, 6).map((tool, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative">
                        <Image src={tool.logo} alt={tool.name} fill className="object-contain" />
                      </div>
                      <span className="text-xs md:text-sm text-[#A59385] text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1].map((pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setTechToolsPage(pageIndex)}
                  aria-label={`Go to tech tools page ${pageIndex + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    techToolsPage === pageIndex ? "bg-[#FB5530] scale-125" : "bg-[#A59385] hover:bg-[#D35240]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* SECTION 7: CERTIFICATIONS */}
        {/* ================================================================== */}
        <section id="certifications" className="py-16 max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Certifications</h2>
          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevCertification}
              aria-label="Previous certification"
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextCertification}
              aria-label="Next certification"
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-gray-800/80 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            <div
              className="overflow-hidden"
              onTouchStart={handleCertificationsTouchStart}
              onTouchMove={handleCertificationsTouchMove}
              onTouchEnd={handleCertificationsTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${certificationsIndex * 100}%)` }}
              >
                {certifications.map((cert, index) => (
                  <div key={index} className="flex-shrink-0 w-full px-4">
                    <Card
                      className="border border-[#A59385] hover:border-[#FB5530] transition-all duration-300"
                      style={{ backgroundColor: "#14132B" }}
                    >
                      <CardContent className="p-8 text-center">
                        <div
                          className={`w-20 h-20 mx-auto mb-6 ${cert.iconBg} rounded-lg flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-2xl font-bold text-white">{cert.icon}</span>
                        </div>
                        <h3 className="font-bold mb-2 text-white text-xl">{cert.title}</h3>
                        <p className="text-[#A59385] mb-2 font-medium">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="text-sm text-[#A59385] leading-relaxed">{cert.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCertificationsIndex(index)}
                  aria-label={`Go to certification ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    certificationsIndex === index ? "bg-[#FB5530] scale-125" : "bg-[#A59385] hover:bg-[#D35240]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

         {/* ================================================================== */}
        {/* SECTION 8: GET IN TOUCH (NEW SECTION) */}
        {/* ================================================================== */}
        <section id="contact" className="py-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6" style={{ color: "#A59385" }}>
              Let's connect! I'm currently available for new projects and would love to hear from you.
            </p>
            <a
              href="mailto:abbeyfontanilla@gmail.com"
              className="text-xl font-bold text-orange-600 hover:text-orange-500 transition-colors"
            >
              abbeyfontanilla@gmail.com
            </a>
            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/abegailrf/" // <-- IMPORTANT: REPLACE THIS
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-400 hover:text-orange-600 hover:scale-110 transition-all"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/abegailf" // <-- IMPORTANT: REPLACE THIS IF WRONG
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-400 hover:text-orange-600 hover:scale-110 transition-all"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://public.tableau.com/app/profile/abegailf/vizzes" // <-- IMPORTANT: REPLACE THIS
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tableau Public Profile"
                className="text-gray-400 hover:text-orange-600 hover:scale-110 transition-all"
              >
                <TableauIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>


        {/* ================================================================== */}
        {/* FOOTER */}
        {/* ================================================================== */}
       {/*} <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p className="mb-4">© Copyright 2024. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ using React + Tailwind</p>
        </footer> */}
      </main>
    </div>
  )
}