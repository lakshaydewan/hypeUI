'use client'
import React, { useEffect, useRef, } from 'react'
import HeroBackground from '../components/HeroBackground';
import DesktopSVG from '@/components/DesktopSVG';
import Link from 'next/link';
import { motion } from 'motion/react';
import Showcase from '@/components/Showcase';
import Footer from '@/components/Footer';

const HomePage = () => {

  const [toggle, setToggle] = React.useState(false);
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef
  // });
  // const translateY1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [650, 0, 0, 0, 0, 0]);
  // const translateX1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -200, -200, -200, -200, -200]);
  // const translateY2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [650, 650, 0, 0, 0, 0]);
  // const translateX2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, -100, -100, -100, -100]);
  // const translateY3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [650, 650, 650, 0, 0, 0]);
  // const translateX3 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 0, -10, -10, -10]);
  // const translateY4 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [650, 650, 650, 650, 0, 0]);
  // const translateX4 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 0, 0, 100, 100]);



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
          <div className='flex flex-col md:mr-[-60px] text-neutral-950 dark:text-white justify-center tracking-wide w-full md:w-[40%] items-center lg:items-start rounded-xl'>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              className='text-4xl md:text-5xl font-sans font-bold'>HypeUI:</motion.div>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              className='text-4xl md:text-5xl font-sans font-bold'>Build faster,</motion.div>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
              className='text-4xl md:text-5xl font-sans font-bold'>Create better</motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "backOut", delay: 1.1 }}
              className='mt-6 text-neutral-700 dark:text-primary md:p-0 px-4 lg:mr-28 font-sans text-center lg:text-start font-light text-lg'>
              Empower your development process with a collection of easy-to-use, customizable components that bring your vision to life quickly and beautifully.
            </motion.div>
            <Link href={"/components"} className='flex gap-4 md:gap-0 justify-center items-center'>
              <button className='text-sm hover:shadow-md mt-10 border bg-white text-neutral-950 font-sans font-bold py-5 px-7 rounded-xl transition-all duration-300  ease-out'>Browse Components</button>
            </Link>
          </div>
          <DesktopSVG />
        </div>
      </div>
      <div ref={containerRef} className='h-[120vh] relative text-white bg-white w-screen dark:bg-neutral-950 flex flex-col justify-center items-center'>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <div className='w-[90vw] overflow-hidden border dark:border-neutral-800 relative shadow-2xl rounded-3xl h-[70vh] md:h-[90vh] flex flex-col justify-center items-center'>
            <div className='absolute bottom-[-80px] rounded-2xl right-[-50px] md:w-[90%] w-[95%] h-[90%] border dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-600 flex flex-col justify-center items-center'>

            </div>
            {/* <motion.div style={{
            y: translateY1,
            x: translateX1,
            rotate: 3,
          }} className='md:w-[35%] border absolute h-[65%] rounded-xl bg-white shadow-2xl flex flex-col justify-center items-center'>
                hi there
              </motion.div>
              <motion.div style={{
            y: translateY2,
            x: translateX2,
            rotate: 8,
          }} className='md:w-[35%] absolute h-[65%] rounded-xl bg-neutral-950 flex flex-col justify-center items-center'>
                hi there
              </motion.div>
              <motion.div style={{
            y: translateY3,
            x: translateX3,
            rotate: -4,
          }} className='md:w-[35%] absolute h-[65%] rounded-xl bg-neutral-950 flex flex-col justify-center items-center'>
                hi there
              </motion.div>
              <motion.div style={{
            y: translateY4,
            x: translateX4,
            rotate: 12,
          }} className='md:w-[35%] absolute h-[65%] rounded-xl bg-neutral-950 flex flex-col justify-center items-center'>
                hi there
              </motion.div> */}
            <div className='text-center absolute top-12 left-12 text-2xl md:text-4xl font-sans font-bold'>
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
      <Footer />
    </>
  )
}

export default HomePage