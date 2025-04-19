'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const TextAnimate = () => {
    const line = "To make your React component library feel cutting edge, let's pull inspiration from Awwwards winning websites. Here are some trendy components you might want to include."
    const words = line.split(" ")

    const [animationKey, setAnimationKey] = useState(0)

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.3, ease: "easeOut" } 
        },
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen gap-6'>
            <motion.div 
                key={animationKey}
                className='w-[50%] h-fit flex flex-wrap gap-x-1' 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {words.map((text, index) => (
                    <motion.span 
                        key={index}
                        variants={wordVariants}
                        className='relative h-fit w-fit font-sans font-semibold text-xl text-white'
                    >
                        {text + " "}
                    </motion.span>
                ))}
            </motion.div>
            <button 
                onClick={() => setAnimationKey(prev => prev + 1)}
                className='px-6 py-2 bg-white text-black font-semibold rounded-md shadow-lg hover:scale-105 transition-transform'
            >
                Animate Text
            </button>
        </div>
    )
}

export default TextAnimate
