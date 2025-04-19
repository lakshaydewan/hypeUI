import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col dark:bg-neutral-950 bg-neutral-50 items-center justify-center w-full h-screen'>
        <div className='flex justify-start w-[90%]'>
            <h1 className='text-center mt-[75px] text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-800 to bg-neutral-800 dark:from-neutral-50 dark:to-neutral-300 bg-clip-text text-transparent'>
                Buttons
            </h1>
        </div>
        <div className='w-[90%] h-full overflow-y-scroll p-1 pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='aspect-video border border-neutral-300 dark:border-neutral-800 shadow-md rounded-lg'>
            </div>
        </div>
    </div>
  )
}

export default page