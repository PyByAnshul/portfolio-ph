import { Trophy, Target, TrendingUp } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "100+ LeetCode Problems",
      description: "Solved over 100 coding problems on LeetCode, demonstrating strong problem-solving skills",
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "100-Day DSA Streak",
      description: "Completed a consistent 100-day streak of Data Structures and Algorithms practice",
      icon: <Target className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Advanced DSA Skills",
      description: "Strengthened expertise in recursion, dynamic programming, and graph algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center mx-auto mb-6`}
              >
                {achievement.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{achievement.title}</h3>

              <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
