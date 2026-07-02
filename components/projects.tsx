'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from './animations/fade-in'
import { LiveProjectButton } from './buttons/live-project-button'
import Image from 'next/image'

interface ProjectImage {
  src: string
  type?: 'image' | 'video'
}

interface Project {
  number: string
  name: string
  category: string
  images: ProjectImage[]
}

const projects: Project[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    images: [
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85', type: 'image' },
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85', type: 'image' },
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85', type: 'image' }
    ]
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: [
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85', type: 'image' },
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85', type: 'image' },
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85', type: 'image' }
    ]
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    images: [
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85', type: 'image' },
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85', type: 'image' },
      { src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85', type: 'image' }
    ]
  }
]

function ProjectCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 1])

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center px-5 sm:px-8 md:px-10"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={ref}
        className="sticky top-24 md:top-32 w-full"
        style={{
          scale,
          opacity,
          zIndex: totalCards - index
        }}
      >
        <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8">
          {/* Top Section */}
          <div className="flex items-start justify-between mb-6 sm:mb-8 md:mb-10 flex-wrap gap-4">
            <div className="flex-1">
              <span className="text-[#D7E2EA] font-black text-[clamp(3rem,10vw,140px)] leading-none">
                {project.number}
              </span>
              <p className="text-[#D7E2EA] text-sm sm:text-base opacity-60 tracking-widest uppercase mt-2">
                {project.category}
              </p>
              <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl md:text-2xl mt-4">
                {project.name}
              </h3>
            </div>
            <LiveProjectButton />
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-[40%,60%] gap-4 sm:gap-6 md:gap-8">
            {/* Left Column - 2 Stacked Images */}
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              <MediaElement
                media={project.images[0]}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden h-[clamp(130px,16vw,230px)]"
              />
              <MediaElement
                media={project.images[1]}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden h-[clamp(160px,22vw,340px)]"
              />
            </div>

            {/* Right Column - 1 Tall Image */}
            <div>
              <MediaElement
                media={project.images[2]}
                className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden w-full h-[clamp(300px,45vw,580px)]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function MediaElement({ media, className }: { media: ProjectImage; className: string }) {
  const isVideo = media.src.endsWith('.mp4') || media.src.endsWith('.webm') || media.type === 'video'

  if (isVideo) {
    return (
      <video
        autoPlay
        muted
        loop
        className={`${className} object-cover`}
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <div className={className}>
      <Image
        src={media.src}
        alt="Project media"
        fill
        className="object-cover"
      />
    </div>
  )
}

export function Projects() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 md:pt-32 pb-20">
      <FadeIn delay={0} y={40} className="px-5 sm:px-8 md:px-10 mb-20">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>
      </FadeIn>

      <div>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            index={idx}
            totalCards={projects.length}
          />
        ))}
      </div>

      {/* Spacer at the end */}
      <div className="h-96" />
    </section>
  )
}
