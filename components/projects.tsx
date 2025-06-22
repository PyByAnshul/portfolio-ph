import { ExternalLink, Github, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import projectsData from "../data/projects.json"

const iconMap = {
  Code,
  Database,
}

export function Projects() {
  const projects = projectsData.map((project) => ({
    ...project,
    icon: iconMap[project.icon as keyof typeof iconMap] || Code,
  }))

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
                  {project.technologies.map((tech: string, techIndex: number) => (
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
