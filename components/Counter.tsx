"use client"
import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion"
import type { MotionValue } from "framer-motion"

const Counter = ({ count }: { count: number }) => {
  const [digits, setDigits] = useState<number[]>([])
  const [isNegative, setIsNegative] = useState(false)
  const prevDigitsRef = useRef<number[]>([])
  const motionValues = useRef<Map<number, MotionValue>>(new Map())
  //Fix this later
  const digitMotionValues = [
    useMotionValue(0 * -40),
    useMotionValue(1 * -40),
    useMotionValue(2 * -40),
    useMotionValue(3 * -40),
    useMotionValue(4 * -40),
    useMotionValue(5 * -40),
    useMotionValue(6 * -40),
    useMotionValue(7 * -40),
    useMotionValue(8 * -40),
    useMotionValue(9 * -40),
  ] // TODO: use a single motion value for all digits

  const getOrCreateMotionValue = useCallback((position: number) => {
    if (!motionValues.current.has(position)) {
      motionValues.current.set(position, digitMotionValues[position])
    }
    return motionValues.current.get(position)!
  }, [digitMotionValues])

  useEffect(() => {
    const handleChange = (value: number) => {
      if (isNaN(value)) return

      setIsNegative(value < 0)
      const absValue = Math.abs(value)

      // Convert to array of digits
      const digitArray = absValue === 0 ? [0] : Array.from(absValue.toString(), Number)

      setDigits(digitArray)

      // Animate each digit
      digitArray.forEach((digit, index) => {
        const position = digitArray.length - 1 - index
        const motionValue = getOrCreateMotionValue(position)

        // Only animate if the digit changed
        if (prevDigitsRef.current[index] !== digit) {
          animate(motionValue, digit * -40, {
            type: "spring",
            duration: 0.8,
          })
        }
      })

      prevDigitsRef.current = digitArray
    }
    handleChange(count)
  }, [count, getOrCreateMotionValue])

  return (
    <div className="flex items-center gap-1">
      <AnimatePresence mode="popLayout">
        {isNegative && (
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="text-2xl font-bold text-rose-500 mr-1"
          >
            -
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-[2px]">
        {digits.map((_, index) => {
          const position = digits.length - 1 - index
          return (
            <AnimatePresence key={`digit-${position}`} mode="popLayout">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <DigitColumn offsetY={getOrCreateMotionValue(position)} />
              </motion.div>
            </AnimatePresence>
          )
        })}
      </div>
    </div>
  )
}

export const DigitColumn = ({ offsetY }: { offsetY: MotionValue }) => {
  return (
    <div className="w-7 h-[40px] overflow-hidden relative rounded-lg">
      <motion.div style={{ y: offsetY }} className="absolute top-0 left-0 w-full">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-full h-[40px] flex justify-center items-center bg-neutral-300 text-neutral-900 font-mono font-bold text-xl"
            >
              {index}
            </div>
          ))}
      </motion.div>
    </div>
  )
}

export default Counter
