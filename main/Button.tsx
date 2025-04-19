import React from 'react'

const Button = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center bg-white'>
            <div className='group relative w-40 h-10 rounded-lg bg-white cursor-pointer'>
                <div className="group-hover:-translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-300 ease-Out absolute z-10 rounded-lg w-full flex justify-center items-center h-full text-center top-0 font-sans text-black left-0 bg-white border border-neutral-950">
                    Hover Me
                </div>
                <div className="absolute bg-neutral-950 top-0 left-0 rounded-lg w-full h-full">
                </div>
            </div>
        </div>
    )
}

export default Button