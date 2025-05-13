'use client'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react'

const GradientBtn = () => {

    const [hover, setHover] = React.useState(false);

    return (
        <>
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='border relative dark:border-neutral-700 dark:bg-transparent bg-neutral-50 dark:text-neutral-200 font-semibold text-sm font-sans transition-all duration-300 ease-out py-2 px-6 rounded-full'>✨ Request Demo
                <AnimatePresence mode='wait'>
                    { hover && <motion.span
                            initial={{ width: 0, x: '0', opacity: 0 }}
                            animate={{ width: '100%', x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            exit={{ width: '40%', x: '90%', opacity: 0 }}
                            className='w-full h-[1.5px] [background:linear-gradient(-90deg,_transparent_0%,_transparent_10%,_#1c8d44_50%,_transparent_90%,_transparent_100%)] absolute -bottom-[1px] left-0 right-0 rounded-md'></motion.span>}
                </AnimatePresence>
            </button>
        </>
    )
}

export default GradientBtn