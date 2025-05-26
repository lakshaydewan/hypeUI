"use client"
import { IconMenu, IconX } from "@tabler/icons-react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useAnimation, type Variants } from "framer-motion"
import Link from "next/link"

const FullScreenNav = () => {
    const [open, setOpen] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
        }
    }, [cursorPosition])

    return (
        <>
            {open && (
                <div
                    ref={cursorRef}
                    className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white mix-blend-difference pointer-events-none z-50"
                    style={{
                        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                        marginLeft: "-16px",
                        marginTop: "-16px",
                    }}
                />
            )}
            <AnimatePresence>{open && <AnimatedNavigation onClose={() => setOpen(false)} />}</AnimatePresence>
            <motion.div
                className={"fixed md:top-14 md:right-12 top-6 right-6 z-50 p-1 rounded-lg border cursor-pointer"}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <IconX className="text-white dark:text-nenutral-950 text-2xl transition-all duration-300 ease-in-out" />
                ) : (
                    <IconMenu className="text-2xl text-neutral-900 dark:text-neutral-100 transition-all duration-300 ease-in-out" />
                )}
            </motion.div>
        </>
    )
}

const navLinks = [
    { name: "Home", path: "/", description: "Back to homepage" },
    { name: "Work", path: "/work", description: "Our portfolio" },
    { name: "About", path: "/about", description: "Who we are" },
    { name: "Services", path: "/services", description: "What we offer" },
    { name: "Contact", path: "/contact", description: "Get in touch" }
]

const AnimatedNavigation = ({ onClose }: { onClose: () => void }) => {

    const controls = useAnimation()

    useEffect(() => {
        controls.start("visible")
    }, [controls])

    return (
        <>
            <AnimatedPageBackground />
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-40 pt-20"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    exit: { opacity: 0 },
                }}
            >
                <div className="w-full max-w-7xl mx-auto">
                    <nav className="flex flex-col items-start">
                        {navLinks.map((link, index) => (
                            <NavItem key={link.name} link={link} index={index} onClose={onClose} />
                        ))}
                    </nav>

                    <motion.div
                        className="mt-20 hidden absolute bottom-8 right-8 text-white/70 w-fit md:flex flex-col md:flex-row gap-16 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="max-w-xs">
                            <h3 className="text-white text-lg font-medium mb-1">Studio</h3>
                            <p>123 Design Street</p>
                            <p>New York, NY 10001</p>
                        </div>

                        <div>
                            <h3 className="text-white text-lg font-medium mb-1">Connect</h3>
                            <p>hello@studio.com</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

const navItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1 + 0.8,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
    exit: (i) => ({
        opacity: 0,
        x: -50,
        transition: {
            delay: i * 0.05,
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
    hover: {
        x: 20,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const NavItem = ({
    link,
    index,
    onClose,
}: { link: { name: string; path: string; description: string }; index: number; onClose: () => void }) => {
    // const [, setIsHovered] = useState(false)

    return (
        <motion.div
            className="overflow-hidden w-full"
            custom={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navItemVariants}
        >
            <Link href={link.path} onClick={onClose}>
                <motion.div
                    className="group flex items-baseline"
                    whileHover="hover"
                    // onHoverStart={() => setIsHovered(true)}
                    // onHoverEnd={() => setIsHovered(false)}
                >
                    <motion.span className="inline-block mr-4 text-white/40 font-mono text-sm mt-4">
                        {(index + 1).toString().padStart(2, "0")}
                    </motion.span>

                    <div className="flex flex-col">
                        <motion.h2
                            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
                            variants={{
                                hover: {
                                    x: 10,
                                    transition: { duration: 0.3 },
                                },
                            }}
                        >
                            {link.name}
                        </motion.h2>

                        <motion.div
                            className="h-0.5 bg-white origin-left mt-2"
                            initial={{ scaleX: 0 }}
                            variants={{
                                hover: {
                                    scaleX: 1,
                                    transition: { duration: 0.4 },
                                },
                            }}
                        />

                        <motion.p
                            className="text-white/70 mt-2"
                            initial={{ opacity: 0 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    transition: { duration: 0.3, delay: 0.1 },
                                },
                            }}
                        >
                            {link.description}
                        </motion.p>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

const AnimatedPageBackground = () => {
    const [sampleArr, setSampleArr] = useState<number[]>(Array(100).fill(1))

    useEffect(() => {
        const remaining = [...Array(100).keys()] // [0,1,...99]

        const interval = setInterval(() => {
            if (remaining.length === 0) {
                clearInterval(interval)
                return
            }

            const randomIndex = Math.floor(Math.random() * remaining.length)
            const tileToRemove = remaining[randomIndex]
            remaining.splice(randomIndex, 1)

            setSampleArr((prev) => {
                const newArr = [...prev]
                newArr[tileToRemove] = 0
                return newArr
            })
        }, 7)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            className="w-full fixed top-0 left-0 inset-0 h-screen bg-neutral-800 grid md:grid-cols-10 grid-cols-4 grid-rows-12 md:grid-rows-10 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {sampleArr.map((visible, index) => (
                <div
                    key={index}
                    className={`transition-all duration-500 ease-in-out ${visible ? "dark:bg-neutral-950 bg-white" : "opacity-0 pointer-events-none"
                        } w-full h-full`}
                />
            ))}
        </motion.div>
    )
}

export default FullScreenNav;
