"use client"
import { Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

function scrollToSection(id: string) {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              AK
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Anshul Kumar</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">Software Engineer</p>

          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Software Engineer with a proven record of delivering scalable backend solutions and streamlining operations.
            Skilled at leading cross-functional collaboration to build reliable APIs and automation tools that reduce
            manual effort and improve accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => scrollToSection("#contact") }>
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50" onClick={() => scrollToSection("#projects") }>
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/anshul-kumar-at-work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pybyanshul@proton.me" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://pybyanshul.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
