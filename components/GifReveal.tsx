'use client'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Core } from './AnimatedText'

const text = "Drop in our animation wrappers to add layout transitions and entrance animations to any dynamic list — with just 4 lines."

const GifReveal = () => {
    const ref = useRef(null)

    const [animateText, setAnimateText] = useState(false)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    })

    const height = useTransform(scrollYProgress, [0, 1], [0, 340])
    const scrollBottom = useTransform(scrollYProgress, [0, 1], [0, 150])
    const scrollBottomForText = useTransform(scrollYProgress, [0, 1], [0, 120])

    return (
        <div className='bg-white h-[120vh] dark:bg-neutral-950 overflow-hidden flex lg:flex-row flex-col justify-center items-center'>
            <div className='w-full h-fit lg:h-full flex flex-col justify-center items-center'>
                <motion.div
                    style={{ y: scrollBottomForText }}
                    className='w-full py-12 lg:py-14 px-4 lg:pl-24 h-fit md:pb-0 md:px-8 text-center lg:text-left'>
                    <motion.h1 
                    onViewportEnter={() => setAnimateText(true)}
                    className='font-sans font-extrabold bg-clip-text text-transparent bg-gradient-to-b dark:from-white dark:to-neutral-300 from-neutral-950 to-neutral-600 text-3xl md:text-5xl py-2 pb-3'>Motion, the Smart Way.</motion.h1>
                    {
                        animateText && <div className='flex flex-wrap w-full h-fit text-center lg:text-left'>
                            {text.split(' ').map((item, index) => (
                                <div key={index} className='flex justify-center items-center'>
                                    <Core delay={index * 0.05} text={item} />
                                </div>
                            ))}
                        </div>
                    }
                    <motion.button
                        initial={{ filter: 'blur(12px)', opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-sm lg:flex justify-center items-center hidden border mt-5 hover:shadow-lg bg-white text-neutral-950 font-sans font-bold py-5 px-7 rounded-xl transition-all duration-300 ease-out"
                    >
                        Check Out Components
                    </motion.button>
                </motion.div>
            </div>
            <div className='h-full w-full flex justify-center items-start lg:pr-10 lg:mb-20 lg:items-center md:pt-0'>
                <motion.div
                    ref={ref}
                    style={{ y: scrollBottom }}
                    className='w-full z-10 bg-white dark:bg-neutral-950 text-[#d3d8e1] text-5xl md:text-8xl flex font-black font-sans gap-28 items-center justify-center h-fit'
                >
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='translate-y-[0px] dark:text-white text-neutral-950 md:translate-y-[10px]'>SEE</h1>
                        <motion.div
                            style={{ height }}
                            className='w-[320px] dark:border-neutral-800 bg-gradient-to-br from-neutral-600 to-neutral-800 dark:from-neutral-800 dark:to-neutral-900 bg-neutral-200 dark:bg-neutral-600 rounded-xl relative overflow-hidden md:w-[460px] origin-bottom'
                        >
                            <motion.div
                                className='absolute bottom-0 w-[320px] md:w-[460px] h-[340px] flex flex-col justify-center items-center'>
                                <div className='w-[95%] h-[90%] overflow-hidden rounded-xl flex flex-col justify-center items-center'>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        className='w-full h-full object-cover object-center rounded-xl'
                                        src='/gifs/show.mp4'
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                        <h1 className='translate-y-[-6px] dark:text-white text-neutral-950 md:-translate-y-[12px]'>YOURSELF</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default GifReveal
