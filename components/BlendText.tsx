'use client'
import React from 'react'
import { AnimatePresence, motion, useMotionValue } from 'motion/react'

const BlendText = () => {
    const [visible, setVisible] = React.useState(false)
    const size = useMotionValue(16)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    return (
        <motion.div
            onMouseLeave={() => {
                setVisible(false)
            }}
            onMouseEnter={() => setVisible(true)}
            onMouseMoveCapture={(e) => {
                x.set(e.clientX - size.get() / 2)
                y.set(e.clientY - size.get() / 2)
            }}
            className='w-full h-full cursor-none flex items-center justify-center relative'>
            <AnimatePresence>
                {visible && <motion.span
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        width: size,
                        height: size,
                        x,
                        y,
                    }}
                    className='border transition-all duration-300 ease-out bg-slate-100 rounded-full pointer-events-none'
                />}
            </AnimatePresence>
            <p
                onMouseEnter={() => size.set(64)}
                onMouseLeave={() => size.set(16)}
                className='text-base text-white mix-blend-exclusion font-sans z-40 font-semibold text-center p-1'
            >
                Say what again. I dare you, I double dare you motherf*er, say what one more goddamn time!
            </p>
        </motion.div>
    )
}

export default BlendText
