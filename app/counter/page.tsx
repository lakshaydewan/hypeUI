'use client'
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, animate, AnimatePresence } from 'framer-motion'

const CounterPage = () => {
    const offsetY = useMotionValue(0)
    const secondOffsetY = useMotionValue(0)
    const thirdOffsetY = useMotionValue(0)
    const prevSecondDigit = useRef<number | null>(null)
    const prevThirdDigit = useRef<number | null>(null)
    const [showSecondDigit, setShowSecondDigit] = useState(false)
    const [showThirdDigit, setShowThirdDigit] = useState(false)
    const [isNegative, setIsNegative] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        if (!isNaN(value)) {
            setIsNegative(value < 0)

            const absValue = Math.abs(value)
            const lastDigit = absValue % 10
            animate(offsetY, lastDigit * -40, {
                type: 'spring',
                duration: 0.8,
            })

            const secondLastDigit = Math.floor(absValue / 10) % 10
            const thirdLastDigit = Math.floor(absValue / 100) % 10

            setShowSecondDigit(absValue > 9)
            setShowThirdDigit(absValue > 99)

            if (prevSecondDigit.current !== secondLastDigit) {
                prevSecondDigit.current = secondLastDigit
                animate(secondOffsetY, secondLastDigit * -40, {
                    type: 'spring',
                    duration: 0.8,
                })
            }

            if (prevThirdDigit.current !== thirdLastDigit) {
                prevThirdDigit.current = thirdLastDigit
                animate(thirdOffsetY, thirdLastDigit * -40, {
                    type: 'spring',
                    duration: 0.8,
                })
            }
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col gap-4 bg-gray-100">
            <input
                type="number"
                onChange={handleChange}
                className="border px-2 py-1 focus:outline-none ring-0 text-neutral-900 bg-transparent rounded text-center"
                placeholder="Enter a number"
            />
            <div className="flex justify-center items-center gap-0.5">
                <AnimatePresence mode='popLayout'>
                {isNegative && (
                    <motion.div 
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className="text-blue-500 text-xl font-mono">-</motion.div>
                )}
                </AnimatePresence>
                <AnimatePresence mode='popLayout'>
                {showThirdDigit && (
                    <motion.div
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className="w-7 h-[40px] overflow-hidden border relative bg-white rounded">
                        <motion.div
                            style={{ y: thirdOffsetY }}
                            className="absolute top-0 left-0 w-full"
                        >
                            {Array(10)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-[40px] flex justify-center items-center bg-blue-500 text-white font-mono"
                                    >
                                        {index}
                                    </div>
                                ))}
                        </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>
                <AnimatePresence mode='popLayout'>
                {showSecondDigit && (
                    <motion.div
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className="w-7 h-[40px] overflow-hidden border relative bg-white rounded">
                        <motion.div
                            style={{ y: secondOffsetY }}
                            className="absolute top-0 left-0 w-full"
                        >
                            {Array(10)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-[40px] flex justify-center items-center bg-blue-500 text-white font-mono"
                                    >
                                        {index}
                                    </div>
                                ))}
                        </motion.div>
                    </motion.div>
                )}
                </AnimatePresence>
                <div className="w-7 h-[40px] overflow-hidden border relative bg-white rounded">
                    <motion.div
                        style={{ y: offsetY }}
                        className="absolute top-0 left-0 w-full"
                    >
                        {Array(10)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="w-full h-[40px] flex justify-center items-center bg-blue-500 text-white font-mono"
                                >
                                    {index}
                                </div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CounterPage
