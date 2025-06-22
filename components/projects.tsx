import { ExternalLink, Github, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "PyMind – AI-Powered Assistant",
      description:
        "AI chat app using Chainlit + Gemini for real-time Python code help. Features file upload, chat history with TinyDB, and command-based UI.",
      technologies: ["Python", "Chainlit", "Gemini AI", "TinyDB"],
      icon: Code,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "pyide-egsd – Online Python IDE",
      description:
        "Online Python IDE similar to online-python.com. CodeMirror frontend + Docker backend with I/O via subprocess for real-time code execution.",
      technologies: ["Python", "Docker", "CodeMirror", "Subprocess"],
      icon: Database,
      color: "bg-green-100 text-green-600",
      liveUrl: "https://pyide-egsd.onrender.com",
    },
    {
      title: "VidFlow – Video Processing API",
      description:
        "FastAPI backend to handle video upload and metadata extraction. Uses Celery, MongoDB, and FFmpeg; containerized with Docker for scalable video processing.",
      technologies: ["FastAPI", "Celery", "MongoDB", "FFmpeg", "Docker"],
      icon: Code,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Sample-Set – Social Media Automation",
      description:
        "Flask dashboard that scrapes Instagram, stores data, and posts summaries to Twitter using Gemini. MongoDB, Redis, and Docker-based architecture.",
      technologies: ["Flask", "MongoDB", "Redis", "Docker", "Gemini AI"],
      icon: Database,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "TrainTransit",
      description:
        "Train info app using Flask and MongoDB that shows routes and schedules. Clean UI with Bootstrap and deployed online for easy access.",
      technologies: ["Flask", "MongoDB", "Bootstrap", "Python"],
      icon: Code,
      color: "bg-indigo-100 text-indigo-600",
      githubUrl: "https://github.com/anshul-kumar",
    },
    {
      title: "Face Recognition Attendance App",
      description:
        "Flask + OpenCV app that marks attendance via face recognition. Features real-time camera feed and CSV logging for attendance tracking.",
      technologies: ["Flask", "OpenCV", "Python", "CSV"],
      icon: Database,
      color: "bg-red-100 text-red-600",
      githubUrl: "https://github.com/anshul-kumar",
    },
    {
      title: "Banking Web App",
      description:
        "Full-stack app for simulating banking operations. Built with Flask + SQLite featuring user authentication and transaction handling.",
      technologies: ["Flask", "SQLite", "Python", "Authentication"],
      icon: Code,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Chainlit-Llama-Docker App",
      description:
        "Chainlit app using LLaMA models with Docker + docker-compose. Terminal + chatbot interface with API-based model loading.",
      technologies: ["Chainlit", "LLaMA", "Docker", "Docker Compose"],
      icon: Database,
      color: "bg-teal-100 text-teal-600",
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
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-6 h-6" />
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    asChild={!!project.githubUrl}
                  >
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    ) : (
                      <>
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
