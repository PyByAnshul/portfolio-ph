'use client'

import { FadeIn } from './animations/fade-in'
import { AnimatedText } from './animations/animated-text'
import { ContactButton } from './buttons/contact-button'
import Image from 'next/image'

export function About() {
  const decorativeImages = [
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
      position: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]',
      size: 'w-[120px] sm:w-[160px] md:w-[210px]',
      delay: 0.1
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
      position: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]',
      size: 'w-[120px] sm:w-[160px] md:w-[210px]',
      delay: 0.15
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
      position: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]',
      size: 'w-[100px] sm:w-[140px] md:w-[180px]',
      delay: 0.25
    },
    {
      src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
      position: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]',
      size: 'w-[130px] sm:w-[170px] md:w-[220px]',
      delay: 0.3
    }
  ]

  return (
    <section className="min-h-screen bg-[#0C0C0C] flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      {decorativeImages.map((img, idx) => (
        <FadeIn key={idx} delay={img.delay} x={img.position.includes('left') ? -80 : 80} duration={0.9}>
          <div className={`absolute ${img.position} ${img.size} pointer-events-none`}>
            <Image
              src={img.src}
              alt="Decorative element"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </FadeIn>
      ))}

      {/* Content */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <div>
          <ContactButton />
        </div>
      </div>
    </section>
  )
}
