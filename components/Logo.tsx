import Link from 'next/link'
import React from 'react'

const Logo = () => {

  return (
    <div className='flex justify-center ml-8 items-center gap-1'>
        <div className='size-8 border bg-primary rounded-lg'></div>
        <Link href='/' className='text-neutral-950 dark:text-white font-sans font-bold text-2xl'>HypeUI</Link>
    </div> 
  )
}

export default Logo