"use client"
import { AnimatePresence, motion } from "framer-motion"
import { Icon3dCubeSphere } from "@tabler/icons-react"
import { useRef, useState } from "react"
import type React from "react"
import Slider from "./Slider"

const Showcase = () => {

    const [translateX, setTranslateX] = useState(-800)
    const [pointer, setPointer] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    
    const linksForGifs = [
        "/gifs/one.mp4",
        "/gifs/two.mp4",
        "/gifs/three.mp4",
        "/gifs/four.mp4",
        "/gifs/five.mp4",
        "/gifs/six.mp4",
        "/gifs/seven.mp4",
    ]

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, width } = e.currentTarget.getBoundingClientRect()
        setPointer({ x: e.clientX, y: e.clientY })
        const xPos = e.clientX - left // Get mouse X position relative to container
        const percentage = xPos / width // Normalize (0 to 1)
        const maxTranslate = e.currentTarget.scrollWidth - width // This value explains how much the slider can move
        setTranslateX(-Math.round(percentage * maxTranslate)) // Move left when pointer moves right
    }

    return (
        <>
            <div className="w-screen h-screen dark:bg-neutral-950 bg-white flex flex-col justify-center items-center">
                <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-white dark:to-neutral-300 from-neutral-950 to-neutral-600 tracking-tight text-3xl sm:text-4xl md:text-6xl font-bold mt-10 mb-5">
                    Experience the Motion
                </h1>
                <div
                    ref={ref}
                    className="w-[90%] h-[55vh] rounded-lg px-6 py-6 overflow-x-hidden mx-auto relative"
                    onMouseMove={handleMouseMove}
                >
                    <motion.div
                        onMouseEnter={() => {
                            console.log("mouseEnter")
                            setIsHovered(true)
                            console.log(isHovered)
                        }}
                        onMouseLeave={() => {
                            console.log("mouseLeave")
                            setIsHovered(false)
                            console.log(isHovered)
                        }}
                        className="flex h-full hover:cursor-pointer flex-nowrap space-x-4 w-max"
                        animate={{ x: translateX }}
                        transition={{ type: "spring", stiffness: 100, damping: 50 }}
                    >
                        {linksForGifs.map((src, index) => (
                            <div
                                key={index}
                                className={`w-[65vw] relative flex justify-center z-10 overflow-hidden items-center border rounded-xl dark:border-neutral-700 border-neutral-300 shadow-lg shadow-neutral-400/10 sm:w-[60vw] lg:w-[35vw] h-full bg-gradient-to-br from-neutral-600 to-neutral-800 dark:from-neutral-800 dark:to-neutral-900 flex-shrink-0`}
                            >
                                <div className="w-[93%] h-[90%] mt-2 flex justify-center items-center">
                                    <video
                                        style={{ transform: "translateZ(0)", imageRendering: "pixelated" }}
                                        preload="auto"
                                        autoPlay
                                        loop
                                        muted
                                        className="object-cover -z-10 overflow-hidden object-center w-full h-full rounded-xl"
                                        src={src}
                                    />
                                </div>
                                <span className="absolute top-1.5 left-2 flex gap-1">
                                    <span className="size-3 bg-neutral-400 rounded-full"></span>
                                    <span className="size-3 bg-neutral-500 rounded-full"></span>
                                    <span className="size-3 bg-neutral-600 rounded-full"></span>
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ ease: "backOut" }}
                            style={{
                                x: pointer.x - 80,
                                y: pointer.y - 34,
                            }}
                            className="bg-gradient-to-r hidden from-neutral-800 to-neutral-900 transition-all duration-300 ease-out origin-bottom-left z-50 pointer-events-none w-fit border border-neutral-700 fixed top-0 left-0 text-neutral-100 rounded-full py-3 px-7 font-sans font-semibold md:flex gap-1 justify-center items-center"
                        >
                            <div className="p-0 h-fit w-fit">View Code</div>
                            <Icon3dCubeSphere
                                stroke={1}
                                className="size-6 animate-spin duration-1000 text-neutral-300 group-hover:animate-spin"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* SLIDER FOR MOBILE */}
                <div className="w-full md:hidden mt-12 h-fit flex justify-center items-center">
                    <div className="h-[2px] w-[50%]">
                        <Slider hideNumber={false} onChange={(value) => {
                            const int = parseInt(value)
                            const percentage = int / 100
                            if (ref === null) return
                            if (ref.current === null) return
                            const maxTranslate = ref?.current?.scrollWidth - ref.current.getBoundingClientRect().width;
                            setTranslateX(-Math.round(percentage * maxTranslate))
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase
