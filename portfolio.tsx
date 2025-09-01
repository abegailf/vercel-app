"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [techToolsIndex, setTechToolsIndex] = useState(0)
  const [certificationsIndex, setCertificationsIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState("*")
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    const techToolsInterval = setInterval(() => {
      setTechToolsIndex((prev) => {
        const nextIndex = prev + 1
        return nextIndex >= techTools.length ? 0 : nextIndex
      })
    }, 5000)

    const certificationsInterval = setInterval(() => {
      setCertificationsIndex((prev) => {
        const nextIndex = prev + 1
        return nextIndex >= certifications.length ? 0 : nextIndex
      })
    }, 5000)

    return () => {
      clearInterval(techToolsInterval)
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
    setTechToolsIndex((prev) => {
      const nextIndex = prev + 1
      return nextIndex >= techTools.length ? 0 : nextIndex
    })
  }

  const prevTechTool = () => {
    setTechToolsIndex((prev) => {
      const prevIndex = prev - 1
      return prevIndex < 0 ? techTools.length - 1 : prevIndex
    })
  }

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
    setIsMenuOpen(false)
  }

  const projects = [
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
  ]

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

  const filteredProjects =
    activeFilter === "*" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

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
      title: "CATEGORY ANALYST, GINGERSNAPS",
      location: "Pasay City, PH",
      period: "Aug 2022 - Present",
      responsibilities: [
        "Analyzed sales data using Excel to identify trends and support stock allocation decisions.",
        "Developed forecasting models incorporating historical data, demand patterns, and seasonality to improve inventory management.",
        "Created replenishment and store pullout templates, enhancing efficiency in inventory processes",
      ],
    },
    {
      title: "MATHEMATICS DIGITAL CONTENT WRITER, MATHSPACE",
      location: "Remote",
      period: "Mar 2018 - Oct 2024",
      responsibilities: [
        "Developed and optimized 4,000+ dynamic, interactive problem templates using MathyonS scripting, achieving a Top 2 ranking in the department for content innovation, next only to QA lead",
        "Authored and refined math lessons and worksheets with XML-based content editing, ensuring alignment with educational standards and improving student comprehension",
        "Co-authored and structured first editions of Mathspace AU Books 7-10, collaborating with education specialists to align content with nationa curriculum standards",
        "Recognized as a Clickup Power User, streamlining team collaboration and content workflows",
      ],
    },
    {
      title: "CUSTOMER ADVISOR, SECURITY BANK",
      location: "Alabang, PH",
      period: "Jun 2013 - Jan 2018",
      responsibilities: [
        "Provided personalized financial solutions that increased client portfolios, strengthening long-term customer relationships and contributing to a 10% increase in customer retention.",
        "Achieved 100% of the sales quota, driving growth in deposits, insurance policies, and loan approvals.",
        "Delivered financial data analysis using Excel, assisting clients in investment planning, loan structuring, and cash flow projections, leading to improvement in customer investment returns.",
      ],
    },
    {
      title: "HIGH SCHOOL MATHEMATICS TEACHER, THE MASTER'S ACADEMY",
      location: "Parañaque City, PH",
      period: "Jun 2011 - Apr 2012",
      responsibilities: [
        "Delivered mathematics instruction designed to strengthen analytical and problem-solving skills, using technology and data-driven approaches to enhance student engagement and understanding.",
      ],
    },
    {
      title: "HIGH SCHOOL MATHEMATICS TEACHER, INTERNATIONAL CHRISTIAN ACADEMY",
      location: "Parañaque City, PH",
      period: "June 2009 - Apr 2010",
      responsibilities: [
        "Engaged curriculum in real diverse student needs, integrating technology and real-world examples to enhance engagement and comprehension.",
      ],
    },
  ]

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
      <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "#111024" }}>
        <div className="flex items-center justify-between p-6 max-w-7xl mx-auto relative">
          <div className="text-xl font-bold">AbegailF.</div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-gray-800"
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
                  onClick={() => scrollToSection("#experience")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  Work Experience
                </button>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-colors hover:bg-gray-800"
                  style={{ color: "#A59385" }}
                >
                  About Me
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span style={{ color: "#FB5530" }}>Abegail</span>
          </h1>
          <p className="text-xl mb-8" style={{ color: "#A59385" }}>
            Data Analyst passionate about transforming data into actionable insights
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
        </section>

        {/* Recent Work */}
        <section id="projects" className="py-16 max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Recent Work</h2>
            <Link href="/portfolio" className="text-gray-400 hover:text-orange-600 transition-colors">
              View all my projects
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeFilter === filter.key ? "bg-orange-600 text-white" : "text-gray-400 hover:text-orange-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProjects.map((project) => (
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
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              >
                View All
              </Button>
            </Link>
          </div>
        </section>

        {/* Personal Projects */}
        <section id="personal-projects" className="py-16 max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Personal Projects</h2>
            <Link href="/portfolio" className="text-gray-400 hover:text-orange-600 transition-colors">
              View all my personal projects
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeFilter === filter.key ? "bg-orange-600 text-white" : "text-gray-400 hover:text-orange-600"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProjects.map((project) => (
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
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              >
                View All
              </Button>
            </Link>
          </div>
        </section>

        {/* Tech Tools */}
        <section id="tech-tools" className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Tech Tools</h2>
          <div className="relative max-w-6xl mx-auto">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-600 ease-in-out"
                style={{ transform: `translateX(-${techToolsIndex * (100 / 6)}%)` }}
              >
                {[...techTools, ...techTools].map((tool, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 sm:px-3 md:px-4 lg:px-6"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative">
                        <Image
                          src={tool.logo || "/placeholder.svg"}
                          alt={tool.name}
                          fill
                          className="object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                      <span className="text-xs md:text-sm text-[#A59385] text-center">{tool.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {techTools.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTechToolsIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    techToolsIndex === index ? "bg-[#FB5530] scale-125" : "bg-[#A59385] hover:bg-[#D35240]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Certifications</h2>
          <div className="relative max-w-4xl mx-auto">
            <div
              className="overflow-hidden"
              onTouchStart={handleCertificationsTouchStart}
              onTouchMove={handleCertificationsTouchMove}
              onTouchEnd={handleCertificationsTouchEnd}
            >
              <div
                className="flex transition-transform duration-600 ease-in-out"
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    certificationsIndex === index ? "bg-[#FB5530] scale-125" : "bg-[#A59385] hover:bg-[#D35240]"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-16 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {workExperience.map((job, index) => (
              <div key={index} className="mb-12 relative">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < workExperience.length - 1 && <div className="w-px h-8 bg-gray-700 ml-6 mt-4"></div>}
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg mb-6" style={{ color: "#A59385" }}>
                I'm a data analyst with a passion for uncovering insights that drive business decisions. With expertise
                in SQL, Excel, Tableau, and Google Analytics, I transform complex datasets into clear, actionable
                recommendations.
              </p>
              <p className="text-lg mb-6" style={{ color: "#A59385" }}>
                My approach combines technical skills with business acumen to deliver solutions that matter. I believe
                in the power of data to tell stories and guide strategic thinking.
              </p>
              <div className="flex items-center gap-4 text-sm" style={{ color: "#A59385" }}>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Philippines
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Available for projects
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <Image
                  src="/images/about-pic.jpg"
                  alt="Abegail Fontanilla"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <p className="mb-4">© Copyright 2024. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ using React + Tailwind</p>
        </footer>
      </main>
    </div>
  )
}
