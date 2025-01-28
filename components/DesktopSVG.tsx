import React from 'react'
import { IconBrandFramerMotion, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from '@tabler/icons-react'
import TechBadge from './TechBadge'

const DesktopSVG = () => {

    return (
        <div className='hidden lg:block w-fit h-fit relative'>
            <div className='absolute top-14 left-20 w-fit h-fit'>
                <TechBadge name='Next.js' iconLink={<IconBrandNextjs stroke={1} className='size-6' />} />
            </div>
            <div className='absolute top-[120px] left-[180px] w-fit h-fit'>
                <TechBadge name='React' iconLink={<IconBrandReact stroke={1} className='size-6' />} />
            </div>
            <div className='absolute top-[190px] left-[250px] w-fit h-fit'>
                <TechBadge name='TailwindCSS' iconLink={<IconBrandTailwind stroke={1} className='size-6' />} />
            </div>
            <div className='absolute top-[260px] left-[320px] w-fit h-fit'>
                <TechBadge name='FramerMotion' iconLink={<IconBrandFramerMotion stroke={1} className='size-6' />} />
            </div>
            <div className='absolute top-[330px] left-[390px] w-fit h-fit'>
                <TechBadge name='TypeScript' iconLink={<IconBrandTypescript stroke={1} className='size-6' />} />
            </div>
            <svg width="554" className='' height="543" viewBox="0 0 554 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="fade-gradient-top-bottom" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0"></stop>
                        <stop offset="10%" stopColor="white" stopOpacity="1"></stop>
                        <stop offset="90%" stopColor="white" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
                    </linearGradient>
                    <mask id="fade-mask-top-bottom">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-gradient-top-bottom)" />
                    </mask>
                </defs>
                <path d="M39 543C39 377.918 243 364.44 243 173.01V1.50026M77 543C77 377.918 344 364.44 344 173.01V1.50026M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026M153 543C153 392 553 410 553 178.898V1.50026M0.5 543C0.5 377.5 140 394 140 173.01V1.5"
                    stroke="#989191" strokeWidth="1" mask="url(#fade-mask-top-bottom)"></path>
            </svg>
        </div>
    )
}

export default DesktopSVG