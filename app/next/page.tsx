'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Page = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isSlow, setIsSlow] = React.useState(false)
    const handleClick = () => setIsOpen(!isOpen)

    return (
        <div className="h-screen bg-neutral-50 flex justify-center items-center overflow-hidden">
            {/* Gooey Filter */}
            <svg className="absolute w-0 h-0">
                <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 20 -10"
                        result="goo"
                    />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </svg>
            {/* Wrapper: relative container for button + popup */}
            <div className="relative" onMouseLeave={handleClick} onMouseEnter={handleClick} style={{ filter: 'url(#gooey)' }}>
                <div className="z-10 size-11 rounded-full bg-black cursor-pointer flex items-center justify-center relative">
                </div>

                {/* Gooey Popup */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ scale: 0, y: 40, x: 8 }}
                            animate={{ scale: 1, y: 0, x: 0 }}
                            exit={{ scale: 0, y: 40, x: 8, borderRadius: "19%", transition: { delay: 0.4, duration: 0.4 } }}
                            transition={{ duration: isSlow ? 3 : 0.7, ease: 'backOut' }}
                            className="absolute left-0 -translate-x-1/2 w-[220px] h-[140px] border border-neutral-800 rounded-2xl bg-black"
                            style={{
                                top: '-157px', // button height (40px) + 15px offset + blob height
                                transformOrigin: 'bottom left',
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', delay: 0.2, duration: 0.4 }}
                                exit={{ opacity: 0, y: 0, transition: { delay: 0.2 } }}
                                className="text-white p-4">Gooey Tooltip 👻</motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div onClick={()=> {
                setIsSlow(!isSlow)
            }} className={`text-center px-4 py-1 cursor-pointer rounded-md border ${isSlow ? "border-neutral-700" : "border-neutral-300"}  ml-3 text-black`}>
                   watch in slow motion
            </div>            
        </div>
    )
}

export default Page
