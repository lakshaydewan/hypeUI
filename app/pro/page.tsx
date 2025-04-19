'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react'
import React from 'react'

const Page = () => {

    const [activeLink, setActiveLink] = React.useState(1)
    const [prev, setPrev] = React.useState(activeLink)
    const direction = (activeLink > prev) ? "right" : "left";

    const divs = [
        { name: 'Home', href: '/', color: 'bg-blue-500' },
        { name: 'About', href: '/about', color: 'bg-red-500' },
        { name: 'Contact', href: '/contact', color: 'bg-green-500' },
        { name: 'Services', href: '/services', color: 'bg-yellow-500' },
        { name: 'Blog', href: '/blog', color: 'bg-purple-500' },
    ]

    const variants = {
        enter: ((direction: string) => ({
            x: direction === 'right' ? '100%' : '-100%',
        })),
        center: {
            x: 0,
        },
        exit: ((direction: string) => ({
            x: direction === 'right' ? '-100%' : '100%',
        })),
    }

    return (
        <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
            <div className='overflow-hidden relative w-3/4 border-gray-700 rounded-lg border md:w-1/2 h-1/2 flex items-center justify-center'>
               <AnimatePresence custom={direction}>
                {
                   divs[activeLink] && <motion.div
                   variants={variants}
                   custom={direction}
                   initial="enter"
                   animate="center"
                   exit="exit"
                   key={divs[activeLink].name}
                   transition={{ duration: 0.7, type: 'spring' }}
                   className={`w-full h-full select-none absolute flex items-center justify-center rounded-xl ${divs[activeLink].color}`}>
                    {divs[activeLink].name + " " + activeLink}
                    </motion.div>
                }
                </AnimatePresence> 
            </div>  
            <div className='flex justify-center gap-4 rounded-full items-center'>
                <IconChevronLeft onClick={() => {
                    if (activeLink === 0) return
                    setActiveLink(activeLink - 1)
                    setPrev(activeLink)
                    }} className='text-4xl text-blue-500' />
                <IconChevronRight 
                onClick={()=> {
                    if (activeLink === divs.length - 1) return
                    setActiveLink(activeLink + 1)
                    setPrev(activeLink)
                }}
                className='text-4xl text-blue-500' />
            </div>
        </div>
    )
}

export default Page