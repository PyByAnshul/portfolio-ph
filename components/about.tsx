export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a passionate Software Engineer with a proven record of delivering scalable backend solutions and
              streamlining operations. My expertise lies in building reliable APIs and automation tools that
              significantly reduce manual effort and improve accuracy across systems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I excel at leading cross-functional collaboration and thrive in Agile environments, consistently driving
              timely delivery while enhancing system performance. My approach combines technical excellence with
              strategic thinking to solve complex problems and deliver value to both teams and clients.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">LeetCode Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
