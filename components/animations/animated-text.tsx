'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  })

  return (
    <p ref={ref} className={className}>
      {text.split('').map((char, index) => (
        <AnimatedCharacter
          key={index}
          char={char}
          progress={scrollYProgress}
          index={index}
          total={text.length}
        />
      ))}
    </p>
  )
}

interface AnimatedCharacterProps {
  char: string
  progress: any
  index: number
  total: number
}

function AnimatedCharacter({
  char,
  progress,
  index,
  total
}: AnimatedCharacterProps) {
  const opacity = useTransform(
    progress,
    [
      (index - 1) / total,
      index / total,
      (index + 1) / total
    ],
    [0.2, 1, 1]
  )

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  )
}
