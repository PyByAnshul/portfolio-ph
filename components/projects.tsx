import { ExternalLink, Github, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "PyMind – AI-Powered Assistant",
      description:
        "Built with Chainlit + Gemini for real-time Python code assistance. Supports file uploads and persistent chat via TinyDB. Features command-based UI and session logging.",
      technologies: ["Python", "Chainlit", "Gemini AI", "TinyDB"],
      icon: <Code className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "pyide-egsd.onrender.com",
      description:
        "Hosted code editor like online-python.com. Docker-based backend with real-time code execution capabilities for seamless development experience.",
      technologies: ["Python", "Docker", "Web Development", "Real-time Execution"],
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      liveUrl: "https://pyide-egsd.onrender.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-6`}>
                {project.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
