'use client'
import React, { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'

const HoldButton = () => {
  const timer = useMotionValue(0)
  const [isHolding, setIsHolding] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const template = useMotionTemplate`${timer}%`

  useEffect(() => {
    const unsubscribe = timer.onChange((value) => {
      console.log(value)
      if (value >= 100) {
        setSuccess(true)
        setIsHolding(false)
      }
    })

    return unsubscribe
  }, [timer])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    if (success) return

    setIsHolding(true)

    animate(timer, 100, {
      duration: 2,
      ease: "linear"
    })
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()

    if (success) {
      setSuccess(false)
      timer.set(0)
      return
    }

    if (isHolding) {
      animate(timer, 0, {
        duration: 0.3,
        ease: "easeOut"
      })

      setIsHolding(false)
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleMouseDown(e as any)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleMouseUp(e as any)
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className='w-full z-0 relative h-full flex justify-center items-center bg-[#052f2e] text-[#2fc7b4] font-sans tracking-wider cursor-pointer select-none'
    >
      {/* Animated Progress Bar */}
      <motion.div
        style={{ width: template }}
        className='absolute z-10 inset-0 top-0 left-0 h-full bg-[#2fc7b4]/30'
      />

      {/* Success Indicator */}
      {success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='absolute z-20 inset-0 bg-[#2fc7b4]/20 flex items-center justify-center'
        >
          <span className='text-lg font-bold'>Deleted!</span>
        </motion.div>
      )}

      {/* Button Text */}
      <span className='z-20 relative'>
        {success ? '' : isHolding ? 'Permanent Action.' : 'Hold to delete'}
      </span>
    </div>
  )
}

export default HoldButton