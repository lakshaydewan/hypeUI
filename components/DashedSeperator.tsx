'use client'
import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

interface DashedSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical"
    dashSize?: number
    dashGap?: number
    thickness?: number
    className?: string
}

export function DashedSeparator({
    orientation = "horizontal",
    dashSize = 4,
    dashGap = 3,
    thickness = 1,
    className,
}: DashedSeparatorProps) {
    const isHorizontal = orientation === "horizontal"
    const dashLength = dashSize + dashGap
    // const { theme } = useTheme();

    return (
        <motion.div
        initial={{height: isHorizontal ? thickness : 0 }}
        animate={{height: isHorizontal ? thickness : 'auto' }}
        transition={{duration: 0.5, ease: "easeOut", delay: 0.3}}
            className={cn(
                "relative",
                isHorizontal ? `w-full h-[${thickness}px]` : `h-full w-[${thickness}px]`,
                className
            )}
        >
            {/* Dashed line */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: isHorizontal
                        ? `repeating-linear-gradient(to right, currentColor 0, currentColor ${dashSize}px, transparent ${dashSize}px, transparent ${dashLength}px)`
                        : `repeating-linear-gradient(to bottom, currentColor 0, currentColor ${dashSize}px, transparent ${dashSize}px, transparent ${dashLength}px)`,
                    backgroundRepeat: "repeat",
                    backgroundSize: isHorizontal ? `${dashLength}px 100%` : `100% ${dashLength}px`,
                    color:"rgb(120, 120, 120)",
                }}
            />

            {/* Left/Top fade */}
            <div
                className={cn(
                    "absolute pointer-events-none z-10",
                    isHorizontal ? "h-full w-[15%] left-0 top-0" : "w-full h-[15%] top-0 left-0",
                    isHorizontal
                        ? "bg-gradient-to-r dark:from-neutral-950 dark:to-transparent from-white to-transparent"
                        : "bg-gradient-to-b dark:from-neutral-950 dark:to-transparent from-white to-transparent"
                )}
            />

            {/* Right/Bottom fade */}
            <div
                className={cn(
                    "absolute pointer-events-none z-10",
                    isHorizontal ? "h-full w-[15%] right-0 top-0" : "w-full h-[15%] bottom-0 left-0",
                    isHorizontal
                        ? "bg-gradient-to-l dark:from-neutral-950 dark:to-transparent from-white to-transparent"
                        : "bg-gradient-to-t dark:from-neutral-950 dark:to-transparent from-white to-transparent"
                )}
            />
        </motion.div>
    )
}
