import React from 'react'

const Test = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-neutral-950 h-screen w-screen'>
                <svg width="554" height="543" viewBox="0 0 554 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="fade-out-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="white" stop-opacity="0"></stop>
                            <stop offset="30%" stop-color="white" stop-opacity="0.5"></stop>
                            <stop offset="100%" stop-color="white" stop-opacity="1"></stop>
                        </linearGradient>
                        <mask id="fade-out-mask">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-out-gradient)" />
                        </mask>
                    </defs>
                    <path d="M39 543C39 377.918 243 364.44 243 173.01V1.50026M77 543C77 377.918 344 364.44 344 173.01V1.50026M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026M153 543C153 392 553 410 553 178.898V1.50026M0.5 543C0.5 377.5 140 394 140 173.01V1.5"
                        stroke="#989191" stroke-width="1" mask="url(#fade-out-mask)"></path>
                </svg>
            </div>
            <div className='h-screen w-screen flex flex-col justify-center items-center'>
                <svg width="316" height="321" viewBox="0 0 316 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="fade-out-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="white" stop-opacity="0"></stop>
                            <stop offset="30%" stop-color="white" stop-opacity="0.5"></stop>
                            <stop offset="100%" stop-color="white" stop-opacity="1"></stop>
                        </linearGradient>
                        <mask id="fade-out-mask">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-out-gradient)" />
                        </mask>
                    </defs>
                    <path
                        d="M127.208 321C127.208 236.786 79.3099 185.45 79.3099 87.7948V0.301532M156.099 321C156.099 236.786 156.099 185.45 156.099 87.7948V0.301532M184.99 321C184.99 236.786 237.07 185.45 237.07 87.7948C237.07 -9.85997 237.07 0.301532 237.07 0.301532M213.881 321C213.881 243.969 315 208.692 315 90.7985V0.301532M97.937 321C97.937 236.573 1 200.529 1 87.7947V0.301398"
                        stroke="#989191" stroke-width="1" mask="url(#fade-out-mask)">
                    </path>
                </svg>
            </div>
        </>
    )
}

export default Test