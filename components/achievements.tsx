import { Trophy, Target, TrendingUp } from "lucide-react"
import achievementsData from "../data/achievements.json"

const iconMap = {
  Trophy: <Trophy className="w-8 h-8" />,
  Target: <Target className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
}

export function Achievements() {
  const achievements = achievementsData.map((achievement) => ({
    ...achievement,
    icon: iconMap[achievement.icon as keyof typeof iconMap] || iconMap.Trophy,
  }))

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
