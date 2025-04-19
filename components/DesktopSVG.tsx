'use client'
import React, { useState } from 'react'
import TechBadge from './TechBadge'
import HeroBadge from './HeroBadge';
import { motion } from 'motion/react';

const DesktopSVG = () => {
    const [isactive, setIsactive] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ duration: 2, ease: "backOut", delay: 0.5 }}
            className='hidden lg:block w-fit h-fit relative'>
            {/* Tech Badges */}
            <div className='absolute top-14 left-20 w-fit h-fit'>
                <TechBadge isactive={isactive} name='Next.js' />
            </div>
            <div className='absolute top-[120px] left-[180px] w-fit h-fit'>
                <TechBadge isactive={isactive} name='React' />
            </div>
            <div className='absolute top-[190px] left-[250px] w-fit h-fit'>
                <TechBadge isactive={isactive} name='FramerMotion' />
            </div>
            <div className='absolute top-[260px] left-[320px] w-fit h-fit'>
                <TechBadge isactive={isactive} name='TailwindCSS' />
            </div>
            <div className='absolute top-[330px] left-[390px] w-fit h-fit'>
                <TechBadge isactive={isactive} name='TypeScript' />
            </div>

            {/* Hero Badge (Triggers Gradient Effect) */}
            <div
                onMouseEnter={() => setIsactive(true)}
                onMouseLeave={() => setIsactive(false)}
                className='absolute cursor-pointer bottom-[-24px] left-[-36px] w-fit h-fit'
            >
                <HeroBadge />
            </div>

            {/* SVG with Dynamic Gradient Stroke */}
            <motion.svg width="554" height="543" viewBox="0 0 554 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Fade Gradient */}
                    <linearGradient id="fade-gradient-top-bottom" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0"></stop>
                        <stop offset="10%" stopColor="white" stopOpacity="1"></stop>
                        <stop offset="90%" stopColor="white" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>

                    {/* Active Gradient (Blue-Purple) */}
                    <linearGradient id="active-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00CFFF" />
                        <stop offset="100%" stopColor="#8A2BE2" />
                    </linearGradient>

                    {/* Mask for Fade Effect */}
                    <mask id="fade-mask-top-bottom">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-gradient-top-bottom)" />
                    </mask>
                </defs>

                {/* SVG Path with Conditional Stroke */}
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 6,
                        type: 'spring',
                    }}
                    stroke={isactive ? "url(#active-gradient)" : "#989191"}
                    strokeWidth="1"
                    fill="none"
                    mask="url(#fade-mask-top-bottom)"
                    d="M39 543C39 377.918 243 364.44 243 173.01V1.50026M77 543C77 377.918 344 364.44 344 173.01V1.50026M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026M153 543C153 392 553 410 553 178.898V1.50026M0.5 543C0.5 377.5 140 394 140 173.01V1.5"
                />
            </motion.svg>
        </motion.div>
    )
}

export default DesktopSVG;
