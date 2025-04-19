"use client"
import GlassCard from "@/components/Glass"
import { useState } from "react"

export default function GlassCardDemo() {
    const [variant, setVariant] = useState<"light" | "dark">("dark")
    const showBackground = useState(true)

    const cards = [
        {
            title: "Immersive Experience",
            description:
                "Discover a world of possibilities with our cutting-edge technology that transforms how you interact with digital content.",
            imageUrl: "https://picsum.photos/700/700",
            ctaText: "Learn more",
            glowColor: "#8b5cf6",
        },
        {
            title: "Smart Solutions",
            description: "Our AI-powered platform adapts to your needs, providing personalized recommendations and insights.",
            imageUrl: "https://picsum.photos/800/800",
            ctaText: "Explore features",
            glowColor: "#ec4899",
        },
        {
            title: "Global Connectivity",
            description: "Connect with partners worldwide through our secure and reliable network infrastructure.",
            imageUrl: "https://picsum.photos/900/900",
            ctaText: "Join network",
            glowColor: "#3b82f6",
        },
    ]

    return (
        <div
            className={`min-h-screen w-full flex flex-col items-center justify-center p-8 transition-colors duration-500 ${showBackground ? (variant === "dark" ? "bg-gradient-to-br from-gray-900 to-black" : "bg-gradient-to-br from-gray-400 to-white") : "bg-white"}`}
        >
            <div className="w-full max-w-6xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className={`text-3xl font-bold ${variant === "dark" ? "text-white" : "text-gray-800"}`}>
                        Glass Card Showcase
                    </h1>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center space-x-2">
                        </div>

                        <button
                            onClick={() => setVariant(variant === "dark" ? "light" : "dark")}
                            className={`${variant === "dark" ? "text-white" : "text-neutral-900"} px-4 py-2 rounded-lg shadow-md`}
                        >
                            {variant === "dark" ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <GlassCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            ctaText={card.ctaText}
                            onClick={() => alert(`Clicked on: ${card.title}`)}
                            glowColor={card.glowColor}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

