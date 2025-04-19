"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import type { HTMLMotionProps } from "motion/react"

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  magneticStrength?: number
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  disabled?: boolean
}


const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  variant = "default",
  size = "md",
  magneticStrength = 0.5,
  icon,
  iconPosition = "left",
  disabled = false,
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Memoize the handler functions to prevent unnecessary re-renders
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!buttonRef.current || disabled) return

      const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      // Calculate distance from cursor to center
      const x = (e.clientX - centerX) * magneticStrength
      const y = (e.clientY - centerY) * magneticStrength

      setPosition({ x, y })
    },
    [magneticStrength, disabled],
  )

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  // Define size classes
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  }

  // Define variant classes
  const variantClasses = {
    default: "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400",
    outline:
      "bg-black border-2 border-black text-white hover:bg-black hover:text-white focus:ring-2 focus:ring-black",
    ghost: "text-black hover:bg-gray-100 focus:ring-2 focus:ring-gray-200",
  }

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative font-medium rounded-full overflow-hidden transition-colors duration-200",
        "focus:outline-none focus:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      animate={{
        x: position.x,
        y: position.y,
        scale: disabled ? 1 : position.x !== 0 || position.y !== 0 ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.8,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
      </span>
    </motion.button>
  )
}

export default MagneticButton

