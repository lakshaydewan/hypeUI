'use client'
import React, { useEffect, useRef, } from 'react'
import HeroBackground from '../components/HeroBackground';
import DesktopSVG from '@/components/DesktopSVG';
import Link from 'next/link';
import { motion } from 'motion/react';
import Showcase from '@/components/Showcase';
import Footer from '@/components/Footer';
import FlipFade from '@/components/FlipText';
import GifReveal from '@/components/GifReveal';
import TextAnimate from '@/components/TextAnimate';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {

  const [toggle, setToggle] = React.useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const iD = setInterval(() => { setToggle(!toggle) }, 1500);

    return () => {
      clearInterval(iD);
    }
  })

  return (
    <>

      <div className='bg-neutral-950 h-screen w-screen flex flex-col justify-center items-center'>
        <HeroBackground />
        <div className='z-0 w-full h-full flex md:flex-row flex-col gap-4 md:gap-0 justify-center items-center'>
          <div className='flex flex-col lg:mt-6 lg:mr-[0px] px-4 lg:px-0 text-neutral-950 dark:text-white justify-center tracking-wide w-full lg:w-[40%] items-center lg:items-start rounded-xl'>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
              className='text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-600 dark:from-white dark:to-neutral-300 md:text-6xl font-sans font-[900]'>Build faster,</motion.div>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className='text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-600 dark:from-white dark:to-neutral-300 md:text-6xl font-sans flex justify-center items-center gap-2 font-[900]'>Create <FlipFade /></motion.div>
            <TextAnimate type='box' delay={0.5} text={"Empower your development process with a collection of easy-to-use, customizable components that bring your vision to life quickly and beautifully."}></TextAnimate>
            <Link href={"/components"} className='flex gap-4 md:gap-0 justify-center items-center'>
              <motion.button
                initial={{ filter: 'blur(12px)', opacity: 0, y: 20, scale: 0.98 }}
                animate={{ filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-sm mt-10 border hover:shadow-lg bg-white text-neutral-950 font-sans font-bold py-5 px-7 rounded-xl transition-all duration-300 ease-out"
              >
                Browse Components
              </motion.button>
            </Link>
          </div>
          <DesktopSVG />
        </div>
      </div>

      {/* Hero Section Image */}
      <div ref={containerRef} className='h-fit lg:mt-20 relative text-white bg-white w-screen dark:bg-neutral-950 flex flex-col justify-center items-center'>
        <div className='w-screen h-fit md:pb-16 flex flex-col justify-start items-center'>
          <div className='w-[90vw] overflow-hidden border dark:border-neutral-800 relative shadow-2xl rounded-3xl h-[50vh] md:h-[90vh] flex flex-col justify-center items-center'>
            <div className='absolute bottom-[-65px] md:bottom-[-80px] rounded-2xl right-[-50px] md:w-[90%] w-[95%] h-[90%] border dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-600 flex flex-col justify-center items-center'>
            </div>
            <div className='text-center absolute top-6 left-6 md:top-12 md:left-12 text-2xl md:text-4xl font-sans font-bold'>
              <h1 className='dark:text-white text-neutral-950 font-sans font-bold'>Just as simple as</h1>
              <span className='text-primary'>CTRL + </span>
              {
                toggle ?
                  <motion.span
                    key={"V"}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className='dark:text-white text-neutral-950'>V</motion.span>
                  :
                  <motion.span
                    key={"C"}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className='dark:text-white text-neutral-950'>C</motion.span>
              }
            </div>
          </div>
        </div>
      </div>
      <Showcase />
      <GifReveal />
      <Testimonials />
      <Footer />
    </>
  )
}

export default HomePage