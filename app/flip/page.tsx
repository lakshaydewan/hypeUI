'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FlipFade() {
    const arr = ["better", "cleaner", "cooler", "louder"];
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => {
                if (prev === arr.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 2400);

        return () => clearInterval(interval);
    });

    return (
            <AnimatePresence mode="popLayout">
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
                    className="text-neutral-950 dark:text-white origin-top-left"
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {arr[active]}
                </motion.div>
            </AnimatePresence>
    );
}
