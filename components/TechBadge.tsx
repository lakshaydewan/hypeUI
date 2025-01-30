import React from 'react'
import { IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconBrandFramerMotion } from '@tabler/icons-react'

interface TechBadgeProps {
  name: string
  isactive?: boolean
}

const TechBadge = ({ name, isactive }: TechBadgeProps) => {

  if (name === 'Next.js') {
    return (
      <div className={`bg-neutral-950 group ${isactive && "border-white"} hover:border-[white] transition-all duration-500 ease-out text-sm font-light cursor-pointer gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center`}>
        <div className={`group-hover:text-white ${isactive && "text-white rotate-[360deg] delay-100"} text-neutral-500 group-hover:rotate-[360deg] transition-all duration-300 ease-out`}>{<IconBrandNextjs stroke={1} className='size-6' />}</div>
        <div className=''>{name}</div> 
      </div>
    )
  }

  if (name === 'React') {
    return (
      <div className={`bg-neutral-950 group border ${isactive && "border border-blue-300 delay-100"} hover:border-[#60dbfb] ease-out transition-all duration-500 cursor-pointer text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center`}>
        <div className={`group-hover:text-[#60dbfb] group-hover:animate-spin transition-all duration-300 ease-out ${isactive && "delay-100 text-[#60dbfb] rotate-[360deg] transition-all duration-1000 ease-out"}`}>{<IconBrandReact stroke={1} className='size-6' />}</div>
        <div className=''>{name}</div>
      </div>
    )
  }

  if (name === 'TailwindCSS') {
    return (
      <div className={`bg-neutral-950 ${isactive && "border-blue-300 delay-300"} hover:border-[#36b6f1] transition-all duration-500 ease-out cursor-pointer group text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center`}>
        <div className={`group-hover:text-[#36b6f1] ${isactive && "fill-[#36b6f1] delay-300 text-[#36b6f1]"} group-hover:fill-[#36b6f1] transition-all duration-500 ease-out `}>{<IconBrandTailwind stroke={1} fill='' className='size-6 group-hover:fill-[group-hover:text-[#36b6f1]] transition-all duration-300 ease-out' />}</div>
        <div className=''>{name}</div>
      </div>
    )
  }

  if (name === 'FramerMotion') {
    return (
      <div className={`bg-neutral-950 ${isactive && "border-pink-500 delay-200"} group hover:border-[#b64891] transition-all duration-500 ease-out cursor-pointer text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center`}>
        <div className={`group-hover:text-[#b64891] ${isactive && "text-[#b64891] delay-200"} transition-all ease-out duration-500`}>{<IconBrandFramerMotion stroke={1} className={`size-6 group-hover:fill-[#b64891] ${isactive && "fill-[#b64891]"} transition-all duration-300 ease-out`} />}</div>
        <div className=''>{name}</div> 
      </div>
    )
  }

  if (name === 'TypeScript') {
    return (
      <div className={`bg-neutral-950 ${isactive && "border-blue-500 delay-500"} hover:border-blue-400 transition-all duration-500 ease-out cursor-pointer group text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center`}>
        <div className={`group-hover:text-blue-400 ${isactive && "text-blue-400 delay-500"} transition-all duration-500 ease-out`}>{<IconBrandTypescript stroke={1} className='size-6' />}</div>
        <div className=''>{name}</div> 
      </div>
    )
  }

  return (
    <div className='bg-neutral-950 text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center'>
      <div className='border'>{name}</div> 
    </div>
  )
}

export default TechBadge