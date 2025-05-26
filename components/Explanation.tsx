import React from 'react'
import { Separator } from './ui/separator'

interface PropsProps {
    propName: string
    type: string
    default: string
    description: string
}

const Explanation = ({ content } : { content : PropsProps[]}) => {
    
  return (
    <div className='flex dark:border-zinc-800 border-zinc-200 border max-h-[600px] flex-col w-[80%] overflow-scroll'>
        <div className='w-full flex justify-between items-center'>
            <div className='w-full font-sans font-bold md:text-lg h-full flex justify-center items-center py-3'>Prop</div>
            <div className='w-full font-sans font-bold md:text-lg h-full flex justify-center items-center py-3'>Type</div>
            <div className='w-full font-sans font-bold md:text-lg h-full flex justify-center items-center py-3'>Default</div>
            <div className='w-full font-sans font-bold md:text-lg h-full flex justify-center items-center py-3'>Description</div>
        </div>
        <Separator orientation='horizontal' className='w-full h-[1px]' />
        {
            content.map((prop, index) => {
                return (
                    <div key={index} className='w-full h-full border-b dark:border-b-zinc-800 border-b-zinc-200 flex justify-between items-center'>
                        <div className='w-full border-r dark:border-r-zinc-800 border-r-zinc-200 font-sans font-light h-full flex text-center justify-center items-center py-3'>{prop.propName}</div>
                        <div className='w-full border-r dark:border-r-zinc-800 border-r-zinc-200 font-sans font-light h-full flex text-center justify-center items-center py-3'>{prop.type}</div>
                        <div className='w-full border-r dark:border-r-zinc-800 border-r-zinc-200 font-sans font-light h-full flex text-center justify-center items-center py-3'>{prop.default}</div>
                        <div className='w-full border-r dark:border-r-zinc-800 border-r-zinc-200 font-sans font-light h-full flex text-center justify-center items-center py-3'>{prop.description}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Explanation