'use client'
import React from 'react'
import { motion } from 'motion/react'

const SvgHighlight = () => {

    return (
        <div>
            <svg width="232" className='dark:stroke-white stroke-neutral-950' height="25" viewBox="0 0 232 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{ duration: 0.4, ease: 'linear' }}
                d="M18 8L214 17H1L201 1L23 24L231 8" />
            </svg>
        </div>
    )
}

export default SvgHighlight