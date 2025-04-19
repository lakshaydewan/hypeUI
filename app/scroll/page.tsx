'use client'
import React from 'react'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'

const Page = () => {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const displayLine = "Scroll to see motion Animations in action"

  const scrollXTransform = useTransform(scrollYProgress, [0, 1], [200, -255])
  const scrollYTransform = useTransform(scrollYProgress, [0.5, 1], [0, 120])

  const animatedY = useMotionTemplate`${scrollYTransform}%`
  const animatedX = useMotionTemplate`${scrollXTransform}%`

  return (
    <div>
      <div className='w-screen h-screen'></div>
      <motion.div
        ref={ref}
        style={{ y: animatedY }}
        className='w-full overflow-x-auto h-[120px] md:h-[300px] bg-transparent'
      >
        <motion.div
          style={{ x: animatedX }}
          className='flex items-center whitespace-nowrap px-6 md:px-10 h-full'
        >
          {displayLine.split(" ").map((word, index) => (
            <motion.span
              key={`word-${index}`}
              className='font-bold mx-4 text-white text-[clamp(3rem,12vw,10rem)] md:text-[200px] font-sans mr-6 md:mr-10'
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <div className='w-screen h-screen'></div>
    </div>
  )
}

export default Page
