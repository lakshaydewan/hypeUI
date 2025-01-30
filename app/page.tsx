'use client'
import React, { useEffect } from 'react'
import HeroBackground from '../components/HeroBackground';
import DesktopSVG from '@/components/DesktopSVG';
import Link from 'next/link';
import { motion}  from 'motion/react';

const HomePage = () => {

  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    const iD = setInterval(() => {setToggle(!toggle)}, 2000);

    return () => {
      clearInterval(iD);
    }
  })

  return (
    <>
      <div className='bg-neutral-950 h-screen w-screen flex flex-col justify-center items-center'>
        <HeroBackground />
        <div className='z-0 w-full h-full flex md:flex-row flex-col gap-4 md:gap-0 justify-center items-center'>
          <div className='flex flex-col md:mr-[-60px] text-white justify-center tracking-wide w-full md:w-[40%] items-center lg:items-start rounded-xl'>
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
            className='mt-6 text-primary md:p-0 px-4 lg:mr-28 font-sans text-center lg:text-start font-light text-lg'>
              Empower your development process with a collection of easy-to-use, customizable components that bring your vision to life quickly and beautifully.
            </motion.div>
            <Link href={"/components"} className='flex gap-4 md:gap-0 justify-center items-center'>
              <button className='text-sm hover:shadow-sm hover:shadow-black mt-10 bg-white text-neutral-950 font-sans font-bold py-5 px-7 rounded-xl'>Browse Components</button>
            </Link>
          </div>
          <DesktopSVG />
        </div>
      </div>
      <div className='h-[300vh] relative text-white w-screen bg-neutral-100 flex flex-col justify-start items-center'>
        <div className='w-screen sticky top-0 left-0 h-screen flex flex-col justify-center items-center'>
          <div className='w-[90vw] shadow-2xl rounded-3xl h-[90vh] flex flex-col justify-center items-center'>
            <div className='text-center text-4xl font-sans font-bold'>
              <h1 className='text-neutral-950 font-sans font-bold'>Just as simple as</h1>
              <span className='text-primary'>CTRL + </span>
              {
                toggle ?
                  <motion.span
                  key={"V"}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className='text-neutral-950'>V</motion.span>
                  :
                  <motion.span
                  key={"C"}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className='text-neutral-950'>C</motion.span>
              }
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen h-screen bg-neutral-950 flex flex-col justify-center items-center'>
          <div className="text-center text-white text-4xl font-sans font-bold">
              Start building your next project today!
          </div>
      </div>  
    </>
  )
}

export default HomePage