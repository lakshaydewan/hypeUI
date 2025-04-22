'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon3dCubeSphere } from '@tabler/icons-react'
import { useState } from 'react'

import React from 'react'

const Showcase = () => {

    const [translateX, setTranslateX] = useState(-800);
    const [pointer, setPointer] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, width } = e.currentTarget.getBoundingClientRect()
        setPointer({ x: e.clientX, y: e.clientY });
        const xPos = e.clientX - left; // Get mouse X position relative to container
        const percentage = xPos / width; // Normalize (0 to 1)
        const maxTranslate = e.currentTarget.scrollWidth - width; // Adjust this value for more/less movement
        setTranslateX(-percentage * maxTranslate); // Move left when pointer moves right
    };

    return (
        <>
            <div className='w-screen h-screen dark:bg-neutral-950 bg-white flex flex-col justify-center items-center'>
                <h1 className='text-center bg-clip-text  text-transparent bg-gradient-to-b dark:from-white dark:to-neutral-300 from-neutral-950 to-neutral-600 tracking-tight text-3xl sm:text-4xl md:text-6xl font-bold mt-10 mb-5'>
                    Experience the Motion
                </h1>
                <div
                    className="w-[90%] h-[55vh] rounded-lg px-6 py-6 overflow-x-hidden mx-auto relative"
                    onMouseMove={handleMouseMove}
                >
                    <motion.div
                        onMouseEnter={() => {
                            console.log("mouseEnter");
                            setIsHovered(true)
                            console.log(isHovered);
                        }}
                        onMouseLeave={() => {
                            console.log("mouseLeave");
                            setIsHovered(false)
                            console.log(isHovered);
                        }}
                        className="flex h-full hover:cursor-pointer flex-nowrap space-x-4 w-max"
                        animate={{ x: translateX }} // Apply horizontal translation
                        transition={{ type: "spring", stiffness: 100, damping: 50 }}
                    >
                        {["red", "blue", "green", "yellow", "purple", "green", "yellow"].map((_, index) => (
                            <div
                                key={index}
                                className={`w-[65vw] flex justify-center items-center border shadow-lg sm:w-[60vw] lg:w-[35vw] h-full bg-white flex-shrink-0 rounded-lg`}
                            >
                                {index}
                            </div>
                        ))}
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isHovered && ( // Conditionally render the motion.div
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ ease: 'backOut' }}
                            style={{
                                x: pointer.x - 80,
                                y: pointer.y - 34,
                            }}
                            className="bg-neutral-950 transition-all duration-300 ease-out origin-bottom-left z-50 pointer-events-none w-fit border fixed top-0 left-0 text-white rounded-full py-3 px-7 font-sans font-semibold flex gap-1 justify-center items-center"
                        >
                            <div className='p-0 h-fit w-fit'>View Code</div>
                            <Icon3dCubeSphere stroke={1} className='size-6 animate-spin duration-1000 text-white group-hover:animate-spin' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Showcase