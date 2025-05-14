'use client'
import React, { useEffect } from 'react'
import { motion, useAnimate } from 'motion/react'

export const Core = ({ delay, text }: { delay: number, text: string }) => {

    const [scope, animate] = useAnimate();

    const animation = () => {
        animate("span", { backgroundColor: '#989898', opacity: [1, 1, 1, 0] }, { duration: 0.5, delay: delay })
        animate("h1", { opacity: [0, 1], y: [5, 0] }, { duration: 0.3, delay: 0.4 + delay })
    }

    useEffect(() => {
        animation()
    }, [text])

    return (
        <div ref={scope} className='w-fit h-fit'>
            <motion.div
                className='flex relative justify-center items-center w-fit h-fit'>
                <motion.span className='w-full h-full rounded-lg absolute top-0 left-0'></motion.span>
                <motion.h1 className='text-lg opacity-0 text-neutral-800 dark:text-primary font-sans font-light py-0.5 px-0.5'>{text}</motion.h1>
            </motion.div>
        </div>
    )
}