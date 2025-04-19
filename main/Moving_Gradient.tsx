"use client"
import React, { useEffect } from 'react'

const Blob = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const blob = document.getElementById('blob');
          
          if (blob) {
            document.body.onpointermove = (event: PointerEvent) => {
              const {clientX, clientY} = event;
              blob.animate({
                        left: `${clientX}px`,
                        top: `${clientY}px`
              }, {duration: 3000, fill:"forwards"})
            };
          }
        }
      }, []);

  return (
    <div className='h-screen w-screen relative'>
        <div
            id='blob'
            className='w-[500px] h-[500px] absolute rounded-full custom-spin -z-10'
            style={{ backgroundImage: 'linear-gradient(to right, lightgreen, cyan)' }}>
        </div>
        <div className='absolute w-screen h-screen custom-blur'>
        </div>
    </div>
  )
}

export default Blob