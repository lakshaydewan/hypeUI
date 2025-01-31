import { IconArrowRight } from '@tabler/icons-react';
import React from 'react'

const HeroBadge = () => {

  return (

    <div className="bg-neutral-950 group relative text-sm gap-1 hover:rounded-none transition-all duration-500 ease-out w-fit px-10 py-5 text-white border border-neutral-800 rounded-xl font-sans font-bold flex flex-row justify-between items-center">
        <div className='w-fit h-[20px] relative overflow-hidden'>
            <div className='group-hover:-translate-y-[100%] transition-all duration-700 ease-out'>LIKE THIS COMPONENT</div>
            <div className='absolute flex justify-center items-center gap-2 group-hover:-translate-y-[90%] text-white font-sans font-bold transition-all duration-700 ease-out'>GET STARTED <IconArrowRight className='text-white group-hover:translate-x-1 duration-300 delay-100 ease-out transition-all' stroke={1.5} /></div>
          </div>
        <div className='h-[1px] z-10 w-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:w-[100%] bg-gradient-to-r from-blue-400 to-neutral-950 absolute top-0 left-[0px]'></div>
        <div className='h-0 z-10 w-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:h-[100%] bg-gradient-to-b from-blue-400 to-neutral-950 absolute top-[0px] left-[0px]'></div>
        <div className='h-0 z-10 w-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:h-[100%] bg-gradient-to-b from-[#675ed1] to-neutral-950 absolute rotate-180 bottom-[0px] right-[0px]'></div>
        <div className='h-[1px] z-10 w-0 rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:w-[100%] bg-gradient-to-r from-[#675ed1] to-neutral-950 absolute bottom-0 left-0'></div>
    </div>
  )
}

export default HeroBadge;