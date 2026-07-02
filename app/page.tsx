import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="bg-[#0C0C0C]">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
    </main>
  )
}
