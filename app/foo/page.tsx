'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import {  IconArrowBadgeRight } from '@tabler/icons-react'

const Page = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['center end', 'start start']
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
    const opacityForHeading = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1])
    const height = useTransform(scrollYProgress, [0, 1], [0, 340])
    const scrollBottom = useTransform(scrollYProgress, [0, 1], [0, 190])

    return (
        <div className='bg-white dark:bg-[#15161b]'>
            <div className='h-screen w-full '></div>
            <div className='h-screen w-full relative'>
            <motion.div 
            style={{ opacity: opacityForHeading }}
            className='w-full bg-none absolute z-0 top-28 md:top-20 font-sans h-fit flex justify-center items-center'>
                    <h1 className='text-[#d3d8e1] font-bold text-4xl lg:text-8xl md:text-7xl'>DON&apos;T BELIEVE ME</h1>
                </motion.div>
                <motion.div
                    ref={ref}
                    style={{ y: scrollBottom }}
                    className='w-full z-10 bg-white dark:bg-[#15161b] text-[#d3d8e1] text-5xl md:text-8xl flex font-black font-sans gap-28 items-center justify-center h-fit'
                >
                    <motion.div
                    style={{ opacity }}
                    className='w-full hidden lg:visible font-sans text-white font-semibold text-sm h-full lg:flex justify-end items-center'>
                        <span className='cursor-pointer group w-[90px] overflow-hidden flex justify-center items-center'>
                            <span className='group-hover:translate-x-[-18px] transition-all duration-300 ease-out'>
                                <IconArrowBadgeRight size={14} className='text-white fill-current' />
                            </span>
                            <span className='group-hover:translate-x-[-10px] transition-all duration-300 ease-out'>EXPLORE</span>
                            <span className='group-hover:translate-x-[-7px] transition-all duration-300 ease-out translate-x-[10px] bg-white w-[6px] h-[6px] rounded-full'>
                            </span>
                        </span>
                     </motion.div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className='translate-y-[0px]  md:translate-y-[10px]'>SEE</h1>
                        <motion.div
                            style={{ height }}
                            className='w-[300px]  relative overflow-hidden md:w-[440px] origin-bottom'
                        >
                            <motion.div
                                className='absolute bottom-0 w-[320px] md:w-[440px] h-[340px] flex flex-col justify-center items-center'>
                                <Image
                                    className='w-full h-full object-cover object-center'
                                    width={1000}
                                    height={1000}
                                    src='https://picsum.photos/1000/1000'
                                    alt='foo'
                                />
                            </motion.div>
                        </motion.div>
                        <h1 className='translate-y-[-6px] md:-translate-y-[12px]'>YOURSELF</h1>
                    </div>
                    <motion.div
                    style={{ opacity }}
                    className='w-full hidden lg:visible font-sans text-white font-semibold text-sm h-full lg:flex justify-start items-center'>
                        <span className='cursor-pointer group w-[90px] overflow-hidden flex justify-center items-center'>
                            <span className='group-hover:translate-x-[-18px] transition-all duration-300 ease-out'>
                                <IconArrowBadgeRight size={14} className='text-white fill-current' />
                            </span>
                            <span className='group-hover:translate-x-[-10px] transition-all duration-300 ease-out'>EXPLORE</span>
                            <span className=' group-hover:translate-x-[-7px] transition-all duration-300 ease-out translate-x-[10px] bg-white w-[6px] h-[6px] rounded-full'>
                            </span>
                        </span>
                     </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Page
