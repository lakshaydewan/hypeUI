"use client"
import React from 'react'

const Staggered = () => {

    return (
    <div className='bg-white w-full h-screen justify-center items-center flex flex-col'>
        <div className='group border-t-[4px] border-b-[4px] border-black bg-white w-fit h-12 overflow-hidden text-black font-sans font-bold text-4xl cursor-pointer'>
            <div className='flex flex-row items-center justify-center'>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out'><span>A</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[25ms]'><span>L</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[50ms]'><span>L</span></div>
                <div className='w-2 h-2'><span></span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[75ms]'><span>S</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[100ms]'><span>T</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[125ms]'><span>I</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[150ms]'><span>L</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[175ms]'><span>L</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-200 ease-out delay-[200ms]'><span>S</span></div>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out'><span>A</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[25ms]'><span>L</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[50ms]'><span>L</span></div>
                <div className='w-2 h-2 border border-black'><span></span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[75ms]'><span>S</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[100ms]'><span>T</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[125ms]'><span>I</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[150ms]'><span>L</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[175ms]'><span>L</span></div>
                <div className='group-hover:-translate-y-10 transition-all duration-[200ms] ease-out delay-[200ms]'><span>S</span></div>
            </div>
        </div>
    </div>
  )
}

export default Staggered