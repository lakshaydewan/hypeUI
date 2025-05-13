"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

let x = 3
export default function ExampleList() {
    const [items, setItems] = useState([1, 2, 3])

    function addItem() {
        x++
        setItems((items) => [...items, x])
    }

    function removeItem(item: number) {
        setItems((items) => items.filter((i) => i !== item))
    }

    return (
        <div className="p-4 sm:p-8 md:p-12 lg:p-96 mx-28 bg-white text-neutral-900 min-h-screen">
            <div className="">
                <button
                    onClick={addItem}
                    className="border rounded px-4 py-2 text-sm sm:text-base transition-colors"
                >
                    Add
                </button>
            </div>
            <ul className="mt-4 border rounded p-4 sm:p-8 overflow-hidden b">
                {
                    items.length === 0 && (
                        <div className="text-center text-sm sm:text-base">
                            No items to display
                        </div>
                    )
                }
                {/* Just add these component wrappers for list animations */}
                <AnimateContainer>
                    {items.map((item) => (
                        <AnimateItem key={item} mode={'blur'}>
                            <div className="flex items-center justify-between py-2 border-b">
                                <span className="text-sm sm:text-base">Item {item}</span>
                                <button onClick={() => removeItem(item)} className="border rounded w-6 h-6 sm:w-8 sm:h-8 text-xl flex items-center justify-center transition-colors">&times;</button>
                            </div>
                        </AnimateItem>
                    ))}
                </AnimateContainer>
            </ul>
        </div>
    )
}

const AnimateContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence initial={false}>
            {children}
        </AnimatePresence>
    )
}

const AnimateItem = ({ children, mode = 'default' }: { children: React.ReactNode; mode?: "default" | "spring" | "blur" }) => {
    if (mode === "default") {
        return (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
            >
                {children}
            </motion.div>
        )
    }
    if (mode === "spring") {
        return (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, transition: { type: 'tween', ease: 'easeOut'} }}
                transition={{ type: "spring" }}
            >
                {children}
            </motion.div>
        )
    }
    if (mode === "blur") {
        return (
            <motion.div
                initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)", height: "auto" }}
                exit={{ opacity: 0,filter: "blur(10px)", height: 0 }}
            >
                {children}
            </motion.div>
        )
    }
}
