'use client'
import { motion, AnimatePresence, useMotionValue } from 'motion/react'
import { useState } from 'react'

const CursorMotion = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [isHovering, setIsHovering] = useState(false)
    const [pointerVisible, setPointerVisible] = useState(false)

    return (
        <div
            onMouseEnter={() => setPointerVisible(true)}
            onMouseLeave={() => setPointerVisible(false)}
            onMouseMoveCapture={(e) => {
                x.set(e.clientX)
                y.set(e.clientY)
            }}
            className='relative w-full h-full flex justify-center items-center cursor-none'>
            <AnimatePresence>
                {pointerVisible && (
                    <motion.div
                        layoutId='cursor'
                        className='pointer-events-none fixed w-4 h-4 bg-slate-200 dark:bg-neutral-700 rounded-full'
                        style={{
                            left: x,
                            top: y,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 600,
                            damping: 40,
                            mass: 0.8,
                        }}
                    />
                )}
            </AnimatePresence>

            <div
                onMouseEnter={() => {
                    setPointerVisible(false)
                    setIsHovering(true)
                }}
                onMouseLeave={() => {
                    setPointerVisible(true)
                    setIsHovering(false)
                }}
                className='relative z-0 '
            >
                <p className='w-fit h-fit px-6 py-3 rounded-lg'>Cursor Motion &nbsp;</p>
                {isHovering && (
                    <motion.div
                        layoutId='cursor'
                        className='absolute z-[-1] top-0 left-0 w-full h-full rounded-lg dark:bg-neutral-700 bg-gray-300'
                        transition={{
                            type: 'spring',
                            duration: 0.4
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default CursorMotion
