'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Image from 'next/image'

const images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
]

const images2 = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

function MarqueeRow({ images, direction = 'right' }: { images: string[]; direction?: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useViewportScroll()
  const [sectionTop, setSectionTop] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    const top = ref.current.getBoundingClientRect().top + window.scrollY
    setSectionTop(top)
  }, [])

  const offset = useTransform(scrollY, (y) => {
    const adjustedY = Math.max(0, y - sectionTop + window.innerHeight)
    const scrollValue = adjustedY * 0.3
    return direction === 'right' ? scrollValue - 200 : -(scrollValue - 200)
  })

  return (
    <motion.div
      ref={ref}
      className="flex gap-3 willChange-transform"
      style={{ x: offset, willChange: 'transform' }}
    >
      {[...images, ...images, ...images].map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden"
        >
          <Image
            src={img}
            alt={`Portfolio showcase ${idx}`}
            width={420}
            height={270}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </motion.div>
  )
}

export function Marquee() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        <MarqueeRow images={images} direction="right" />
        <MarqueeRow images={images2} direction="left" />
      </div>
    </section>
  )
}
