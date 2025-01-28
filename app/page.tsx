import React from 'react'
import HeroBackground from '../components/HeroBackground';
import DesktopSVG from '@/components/DesktopSVG';
import Link from 'next/link';

const HomePage = () => {
  
  return (
    <div className='bg-neutral-950 h-screen w-screen flex flex-col justify-center items-center'>
      <HeroBackground />
      <div className='z-0 w-full h-full flex md:flex-row flex-col gap-4 md:gap-0 justify-center items-center'>
        <div className='flex flex-col text-white justify-center tracking-wide w-full md:w-[40%] items-center lg:items-start rounded-xl'>
          <div className='text-4xl md:text-5xl font-sans font-bold'>HypeUI:</div>
          <div className='text-4xl md:text-5xl font-sans font-bold'>Build faster,</div>
          <div className='text-4xl md:text-5xl font-sans font-bold'>Create better</div>
          <div className='mt-6 text-primary md:p-0 px-4 lg:mr-28 font-sans text-center lg:text-start font-light text-lg'>
            Empower your development process with a collection of easy-to-use, customizable components that bring your vision to life quickly and beautifully.
          </div>
          <Link href={"/components"} className='flex gap-4 md:gap-0 justify-center items-center'>
            <button className='text-sm hover:shadow-sm hover:shadow-black mt-10 bg-white text-neutral-950 font-sans font-bold py-5 px-7 rounded-xl'>Browse Components</button>
          </Link>
        </div>
        <DesktopSVG />
      </div>
    </div>
  )
}

export default HomePage