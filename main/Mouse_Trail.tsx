'use client'
import { useState, useLayoutEffect } from "react";
import { motion } from 'framer-motion';

function MouseTrail(props : {size : Boolean}) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const arr = new Array(10).fill(0);
    const offset = props.size ? 14 : 8
    useLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {
                arr.map((_, idx) => {
                    return (
                        <motion.div
                        initial={{ scale: 1 - idx * 0.1 }}
                        animate={{ translateX: pos.x - offset, translateY: pos.y - offset }}
                        transition={{ delay: idx * 0.0003, type: 'spring', stiffness: 800, damping: 20, duration: 0.0001 }}
                            key={idx}
                            className={`rounded-full ${props.size ? "size-10" : "size-4"} transition-all duration-700 ease-out bg-white absolute z-[1000] pointer-events-none`}
                        >
                        </motion.div>
                    );
                })
            }
        </>
    );
}

export default MouseTrail;

