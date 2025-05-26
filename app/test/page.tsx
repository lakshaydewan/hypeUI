'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react';

const Page = () => {

  const [coords, setCoords] = useState({ x: 700, y: 40, x2: 700 });

  // const handleMouseMove = () => {
  //   if (!containerRef.current) return;

  //   const rect = containerRef.current.getBoundingClientRect();
  //   console.log(rect);
  //   const relativeX = e.clientX - rect.left;
  //   const relativeY = e.clientY - rect.top;

  //   // Clamp values to stay within bounds if needed
  //   const clampedX = Math.max(0, Math.min(relativeX, 700));
  //   const clampedY = Math.max(0, Math.min(relativeY, 160));

  //   setCoords({ x: clampedX, y: clampedY });
  // };

  return (
    <div className="h-screen bg-white dark:bg-[#161616] flex justify-center items-center">
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          
          const relativeX = e.clientX - rect.left;
          const relativeY = e.clientY - rect.top;

          const clampedX = Math.max(0, Math.min(relativeX, 700));
          const clampedY = Math.max(0, Math.min(relativeY, 160));
          const clampedX2 = 700 - clampedX;

          setCoords({ x: clampedX, y: clampedY, x2: clampedX2 });
        }}
        className='relative w-fit py-10 px-6 rounded-lg bg-neutral-100 dark:bg-[#1c1c1c] border dark:border-[#282828] flex justify-center items-center h-fit'
      >
        {/* <div className='absolute bottom-0 rounded-lg w-full dark:bg-[#1c1c1c] h-[45%] bg-white'></div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 160"
          className="w-[700px] h-auto"
        >
          <defs>
            <motion.linearGradient
              initial={{ x1: 700, y1: 400, x2: 700 }}
              animate={{ x1: coords.x, y1: coords.y, x2: coords.x2 }}
              transition={{duration: 0.6, ease: 'easeOut'}}
              id="paint0_linear_1446_1136"
              y2="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#000000" />
              <stop offset="1" stopColor="white" stopOpacity="0.8" />
            </motion.linearGradient>
          </defs>
          <path
            className='dark:stroke-[#444444] stroke-neutral-400'
            fill="url(#paint0_linear_1446_1136)"
            d="M390.076 109.945C381.212 120.603 366.99 126.93 350.852 126.93C323.925 126.93 302.177 109.437 302.177 83.2479C302.177 70.1328 307.019 59.2175 315.209 51.5797C323.401 43.9404 334.957 39.5655 348.406 39.5655C361.867 39.5655 373.423 43.9405 381.612 51.5767C389.798 59.2114 394.635 70.1206 394.635 83.2235C394.635 86.1099 394.334 88.8588 393.823 91.5159H325.484H325.122L325.25 91.8543C328.988 101.732 339.051 107.88 350.852 107.88C359.276 107.88 366.796 104.766 371.791 99.4042L390.076 109.945ZM325.05 74.6306L324.948 74.9555H325.288H371.523H371.863L371.762 74.6311C368.693 64.7787 360.222 58.591 348.406 58.591C336.613 58.591 328.143 64.7789 325.05 74.6306ZM252.166 85.8138L294.463 12.7179H319.326L251.974 129.122L184.596 12.7179H209.436L251.733 85.8138L251.949 86.1877L252.166 85.8138ZM653.491 109.945C644.627 120.603 630.405 126.93 614.267 126.93C587.364 126.93 565.591 109.437 565.591 83.2479C565.591 70.1328 570.434 59.2175 578.624 51.5797C586.815 43.9404 598.372 39.5655 611.821 39.5655C625.282 39.5655 636.838 43.9405 645.027 51.5767C653.213 59.2114 658.05 70.1206 658.05 83.2235C658.05 86.1099 657.749 88.8588 657.238 91.5159H588.899H588.537L588.665 91.8543C592.403 101.732 602.466 107.88 614.267 107.88C622.691 107.88 630.211 104.766 635.206 99.4042L653.491 109.945ZM588.465 74.6306L588.363 74.9555H588.703H634.938H635.278L635.177 74.6311C632.108 64.7787 623.637 58.591 611.821 58.591C600.004 58.591 591.558 64.779 588.465 74.6306ZM431.579 64.2105H431.829C431.829 58.1159 435.382 52.5709 441.18 48.5391C446.922 44.5458 454.847 42.0533 463.62 42.0068V65.0753C461.251 64.4122 458.739 63.9605 456.042 63.9605C448.877 63.9605 442.696 66.4221 438.305 70.7442C433.914 75.0669 431.329 81.235 431.329 88.6174V124.49H409.813V42.0062H431.329V64.2105H431.579ZM90.6418 0.763617L180.598 156.219H0.685459L90.6418 0.763617ZM492.975 83.2479C492.975 90.6255 495.392 96.7943 499.702 101.119C504.012 105.445 510.195 107.905 517.688 107.905C527.745 107.905 535.343 103.392 539.315 95.9924L557.656 106.548C549.897 119.267 535.469 126.93 517.688 126.93C504.227 126.93 492.671 122.555 484.482 114.916C476.295 107.278 471.459 96.363 471.459 83.2479C471.459 70.1328 476.301 59.2175 484.491 51.5797C492.683 43.9404 504.239 39.5655 517.688 39.5655C535.468 39.5655 549.873 47.2288 557.656 59.9479L539.315 70.5033C535.343 63.1041 527.745 58.591 517.688 58.591C510.208 58.591 504.025 61.0512 499.711 65.3763C495.398 69.7013 492.975 75.8701 492.975 83.2479ZM694.744 12.7179V124.49H673.228V12.7179H694.744Z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Page