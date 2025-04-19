'use client'
import React from 'react'
import { motion } from 'motion/react'

const SvgHighlight = () => {

    return (
        <div>
            <svg width="232" height="25" viewBox="0 0 232 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{ duration: 1.4, ease: 'backOut' }}
                d="M18 8L214 17H1L201 1L23 24L231 8" stroke="black" />
            </svg>
            {/* <svg width="221" height="24" viewBox="0 0 221 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{ duration: 2 }}
                d="M9 1L189 16H9L174 1L20 9.90173M20 9.90173L1 11L189 1L40 23H165L20 9.90173ZM220 11L1 23" stroke="black" />
            </svg> */}
        </div>
    )
}

export default SvgHighlight