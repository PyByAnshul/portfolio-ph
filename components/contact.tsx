"use client"

import { Mail, Phone, Linkedin, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    alert("Resume download functionality - Please provide the PDF file")
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a
                      href="mailto:pybyanshul@proton.me"
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      pybyanshul@proton.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Phone</p>
                    <a href="tel:+919456954582" className="text-gray-900 hover:text-blue-600 transition-colors">
                      +91 94569 54582
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/anshul-kumar-at-work"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/anshul-kumar-at-work
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ExternalLink className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Portfolio</p>
                    <a
                      href="https://pybyanshul.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      pybyanshul.netlify.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Let's Connect</h3>

              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether you're looking for a dedicated software engineer, want to collaborate on a project, or just
                  want to connect, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <a href="mailto:pybyanshul@proton.me">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    onClick={handleDownloadResume}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600">© 2025 Anshul Kumar. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </section>
  )
}
