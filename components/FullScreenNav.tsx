"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {  Twitter, Github, Mail } from "lucide-react"
import SearchBar from "./SearchBar"

const FullScreenNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    // Navigation links with their paths
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Components", path: "/components" },
        { name: "Buttons", path: "/buttons" },
        { name: "Pricing", path: "/pricing" },
        { name: "Showcase", path: "/showcase" },
    ]

    // Social media links
    const socialLinks = [
        { name: "Twitter", icon: <Twitter size={20} />, url: "https://twitter.com" },
        { name: "Github", icon: <Github size={20} />, url: "https://github.com/lakshaydewan/hypeUI" },
        { name: "Email", icon: <Mail size={20} />, url: "mailto:hello@example.com" },
    ]

    // Animation variants
    const menuVariants = {
        exit: {
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }
        },
        closed: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        open: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }

    const containerVariants = {
        hidden: { opacity: 0, Scale: 0, filter: 'blur(10px)' },
        show: {
            filter: 'blur(0px)',
            opacity: 1,
            Scale: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: -50, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
            },
        },
    }

    const socialVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
            },
        },
    }

    const socialItemVariants = {
        hidden: { scale: 0, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
            },
        },
    }

    return (
        <>
            {/* Hamburger Menu Button */}
            <button
                onClick={toggleMenu}
                className="z-50 flex flex-col mr-5 md:mr-7 gap-0 items-center justify-center w-7 h-7 dark:bg-transparent rounded-full cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -3 }}
                    className="w-4 h-0.5 bg-gray-800 dark:bg-white absolute"
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 4 }}
                    className="w-4 h-0.5 bg-gray-800 dark:bg-white absolute"
                    transition={{ duration: 0.3 }}
                />
            </button>

            {/* Full Screen Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="exit"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 flex items-center justify-center bg-opacity-90 backdrop-blur-sm bg-white dark:bg-black/95 origin-center"
                    >
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col items-center justify-center h-screen">
                                {/* Main Navigation Links */}
                                <motion.nav variants={containerVariants} initial="hidden" animate="show" className="text-center mb-12">
                                    <ul className="space-y-6">
                                        {navLinks.map((link, index) => (
                                            <motion.li key={index} variants={itemVariants}>
                                                <Link
                                                    href={link.path}
                                                    className="dark:text-white text-neutral-800 text-4xl sm:text-5xl font-bold tracking-tight hover:text-neutral-800 dark:hover:text-gray-300 transition-colors duration-300"
                                                    onClick={toggleMenu}
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.nav>
                               <div className="-mt-3 mb-6">
                                <SearchBar />
                               </div>
                                {/* Social Links */}
                                <motion.div variants={socialVariants} initial="hidden" animate="show" className="flex space-x-6">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variants={socialItemVariants}
                                            className="text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
                                            aria-label={link.name}
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default FullScreenNav
