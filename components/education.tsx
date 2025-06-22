import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      Bachelor of Technology, Computer Science
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      S.D. College of Engineering and Technology, AKTU
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">Apr 2020 – Aug 2024</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                  <p className="text-gray-700">Data Structures & Algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
