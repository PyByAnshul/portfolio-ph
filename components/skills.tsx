export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript"],
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Frameworks",
      skills: ["Flask", "Django", "FastAPI"],
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Tools & Technologies",
      skills: ["Docker", "Redis", "RabbitMQ", "Git", "AWS", "GitHub Projects"],
      color: "bg-orange-100 text-orange-800",
    },
    {
      title: "Practices",
      skills: ["REST API Design", "Unit Testing", "Agile", "CI/CD"],
      color: "bg-indigo-100 text-indigo-800",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
