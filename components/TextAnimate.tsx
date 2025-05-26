'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Core } from './AnimatedText';

interface TextAnimateProps {
    text: string;
    delay: number;
    type?: 'box' | 'fade';
}

const TextAnimate = ({text = "Drop in our animation wrappers to add layout transitions and entrance animations to any dynamic list — with just 4 lines.", delay = 0.5, type = 'box'} : TextAnimateProps) => {
    const line = text;
    const words = line.split(" ")

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        }
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.3, ease: "easeOut" }, 
        },
    }

    if (type === 'box') {
        return (
            <div className='max-w-lg mt-1 h-fit flex flex-wrap gap-[4px] items-center lg:justify-start justify-center text-center lg:pr-4 pt-2'>
                {
                    text.split(" ").map((word, index) => (
                        <Core key={index} delay={delay + (index * 0.05)} text={word}></Core>
                    ))
                }
            </div>
        )
    }

    return (
            <motion.div 
                className='w-full h-fit flex flex-wrap items-center lg:justify-start justify-center gap-x-1 px-auto text-center lg:pr-2 pt-2' 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: delay}}
            >
                {words.map((text, index) => (
                    <motion.span 
                        key={index}
                        variants={wordVariants}
                        className='relative h-fit w-fit font-sans font-light text-lg text-neutral-800 dark:text-primary'
                    >
                        {text + " "}
                    </motion.span>
                ))}
            </motion.div>
    )
}

export default TextAnimate
