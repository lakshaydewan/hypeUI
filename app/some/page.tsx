'use client'
import React from 'react'
import { motion } from 'framer-motion'

const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
]

const LiquidHover = ({ src }: { src: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-2xl shadow-lg w-[400px] h-[300px]"
        >
            <motion.img
                src={src}
                alt="Liquid Hover"
                className="w-full h-full object-cover"
                initial={{ filter: "blur(8px) grayscale(50%)" }}
                whileHover={{ filter: "blur(0px) grayscale(0%)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
        </motion.div>
    )
}

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-10 bg-black p-10">
            <h1 className="text-4xl font-bold text-white">Liquid Hover Effect</h1>
            <div className="flex gap-8">
                {images.map((src, index) => (
                    <LiquidHover key={index} src={src} />
                ))}
            </div>
        </div>
    )
}

export default Page
