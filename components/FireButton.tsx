'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from "@/lib/utils"

interface ButtonFireProps {
    text: string
    onClick?: () => void
    className?: string
    size?: "sm" | "md" | "lg" | "xl"
    gradientFrom?: string
    gradientTo?: string
    animationDuration?: number
}

const ButtonFire = ({
    text,
    onClick,
    className,
    size = "md",
    gradientFrom = "from-indigo-600",
    gradientTo = "to-fuchsia-600",
    animationDuration = 0.8,
}: ButtonFireProps) => {

    const [hover, setHover] = React.useState(false)

    const sizeClasses = {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-base px-14 py-3.5",
        xl: "text-xl px-14 py-5",
    }

    return (
        <div
            onClick={onClick}
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            className={cn(
                "rounded-lg bg-[#f2f3f5] dark:bg-neutral-800 cursor-pointer relative overflow-hidden flex justify-center items-center",
                "shadow-lg hover:shadow-xl transition-shadow duration-300",
                className,
            )}
        >
            <AnimatePresence>
                {hover && (
                    <motion.div
                        initial={{ x: "100%", y: "100%", rotate: 45 }}
                        animate={{ x: "-50%", y: 0 }}
                        exit={{
                            x: "100%", y: "100%", transition: {
                                duration: animationDuration,
                            }
                        }}
                        transition={{
                            duration: animationDuration,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={cn(
                            "bg-gradient-to-tr origin-bottom z-10 absolute",
                            gradientFrom,
                            gradientTo,
                            "w-[150%] h-[600%] rounded-lg",
                        )}
                    />
                )}
            </AnimatePresence>
            <div
                className={cn(
                    "z-50 m-[1px] font-sans rounded-lg bg-white dark:bg-neutral-950 flex justify-center items-center font-semibold",
                    "transition-all duration-300",
                    sizeClasses[size],
                )}
            >
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 10,
                            filter: "blur(10px)",
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.9 + index * 0.03,
                        }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

export default ButtonFire