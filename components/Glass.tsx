"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface GlassCardProps {
  title: string
  description: string
  imageUrl?: string
  ctaText?: string
  onClick?: () => void
  glowColor?: string
  variant?: "light" | "dark"
}

const GlassCard: React.FC<GlassCardProps> = ({
  title,
  description,
  imageUrl,
  ctaText,
  onClick,
  glowColor = "#ffffff",
  variant = "dark",
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Determine color scheme based on variant
  const bgColor = variant === "dark" ? "bg-black/10" : "bg-white/20"
  const borderColor = variant === "dark" ? "border-white/10" : "border-black/5"
  const textPrimaryColor = variant === "dark" ? "text-white" : "text-gray-800"
  const textSecondaryColor = variant === "dark" ? "text-gray-300" : "text-gray-600"
  const hoverBgColor = variant === "dark" ? "hover:bg-white/5" : "hover:bg-black/5"
  const hoverBorderColor = variant === "dark" ? "hover:border-white/20" : "hover:border-black/10"

  return (
    <motion.div
      className={`relative max-w-sm p-6 group rounded-3xl ${bgColor} backdrop-blur-2xl 
              border ${borderColor} transition-all duration-500 
              ${hoverBgColor} ${hoverBorderColor} overflow-hidden group
              shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.1 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background:
          variant === "dark"
            ? "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))"
            : "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2))",
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          transform: isHovered ? "scale(1.2)" : "scale(0.8)",
        }}
      />

      {/* Glass highlight effect */}
      <div className="absolute -top-[150%] -right-[150%] w-[300%] h-[300%] bg-white/10 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-md" />

      {/* Subtle animated gradient background */}
      <div
        className="absolute inset-0 -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, ${glowColor}40, transparent)`,
          backgroundSize: "200% 200%",
          animation: "gradientMove 8s ease infinite",
        }}
      />

      {/* Image with enhanced hover effect */}
      {imageUrl && (
        <div className="overflow-hidden rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-500">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full group-hover:scale-110 duration-500 transition-all h-48 object-cover"
          />
        </div>
      )}

      {/* Content with staggered animation */}
      <motion.div>
        <h3 className={`text-2xl font-semibold ${textPrimaryColor} tracking-wide`}>{title}</h3>
        <p className={`${textSecondaryColor} mt-3 leading-relaxed`}>{description}</p>

        {/* Optional CTA button */}
        {ctaText && (
          <motion.button
            onClick={onClick}
            className={`mt-4 flex cursor-pointer items-center gap-1 ${textPrimaryColor} font-medium 
                      group-hover:underline transition-all duration-300`}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <motion.span animate={{ x: isHovered ? 3 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        )}
      </motion.div>

      {/* Enhanced edge highlight */}
      <div className="absolute inset-0 rounded-3xl border-t border-l border-white/20 dark:border-white/10 group-hover:border-white/40 dark:group-hover:border-white/20 transition-colors duration-500" />

      {/* Improved glass reflection effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-500 rounded-t-3xl" />

      {/* Frost effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-b-3xl" />

      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </motion.div>
  )
}

export default GlassCard

