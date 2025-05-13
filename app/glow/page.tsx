import HackerEffect from '@/main/Hacker_Effect'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-neutral-950'>
        <HackerEffect text={"Hello World"} className='text-xl font-mono font-bold text-white' />
    </div>
  )
}

export default page