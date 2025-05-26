'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipFadeProps {
    textArray?: string[];
    className?: string;
}

export default function FlipFade({textArray = ["better", "cleaner", "cooler", "louder"], className}: FlipFadeProps) {
    const arr = textArray;
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => {
                if (prev === arr.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1500);

        return () => clearInterval(interval);
    })

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={arr[active]}
                initial={{ rotateX: 0, opacity: 0, filter: 'blur(10px)', y: 50 }}
                animate={{ rotateX: 0, opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{
                    rotateX: 0, opacity: 0, scale: 1.5, filter: 'blur(10px)', y: -50, transition: {
                        type: 'keyframes',
                    }
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 350 }}
                className={cn("text-neutral-950 dark:text-white origin-top-left", className)}
                style={{
                    transformStyle: 'preserve-3d',
                }}
            >
                {arr[active]}
            </motion.div>
        </AnimatePresence>
    );
}
