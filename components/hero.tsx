'use client'

import { FadeIn } from './animations/fade-in'
import { Magnet } from './animations/magnet'
import { ContactButton } from './buttons/contact-button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="h-screen flex flex-col overflow-x-clip bg-[#0C0C0C] relative px-6 md:px-10">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center pt-6 md:pt-8 w-full">
          <div className="flex gap-8 md:gap-12 lg:gap-16">
            {['About', 'Price', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Hero Content */}
      <div className="flex-1 relative flex flex-col justify-between">
        {/* Hero Heading */}
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m jack
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="pb-7 sm:pb-8 md:pb-10 flex justify-between items-end gap-4">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-none sm:pointer-events-auto">
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <div className="relative w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-square rounded-3xl overflow-hidden">
            <Image
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack 3D Creator Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Magnet>
      </FadeIn>
    </section>
  )
}
