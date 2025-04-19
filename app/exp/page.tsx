"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconSearch } from "@tabler/icons-react"

const Page = () => {
  const arr = ["Soups", "Butter Chicken", "Paneer Tikka", "Manchurian"]
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState<string>("")

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length)
    }, 2500)

    return () => clearInterval(interval)
  })

  return (
    <div className="min-h-screen gap-4 w-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800 flex flex-col justify-center items-center p-4">
      <div className="relative rounded-xl shadow-lg border border-amber-100 dark:border-neutral-700 bg-white dark:bg-neutral-800 backdrop-blur-sm w-full max-w-md">
        <div className="relative flex items-center w-full h-full rounded-xl">
          <IconSearch className="absolute w-5 h-5 left-3 pointer-events-none text-amber-600 dark:text-amber-400" />
          <AnimatePresence mode="wait">
            {input === "" && (
              <motion.div
                key={arr[index]}
                initial={{ y: 10, opacity: 0, filter: "blur(0px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -4, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.5 }}
                className="absolute left-10 text-amber-600 dark:text-amber-400 text-xl font-sans font-medium tracking-wide pointer-events-none"
              >
                {arr[index] + ".."}
              </motion.div>
            )}
          </AnimatePresence>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-full h-full pl-10 outline-none bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 p-4 text-lg font-sans font-normal text-neutral-800 dark:text-neutral-100 transition-all duration-200"
            type="text"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
