import Link from 'next/link'
import React from 'react'
import Icon from './Icon'

const Logo = () => {

  return (
    <div className='flex justify-center ml-8 items-center gap-1'>
        <div className='size-8 flex justify-center items-center'>
          <Icon size={30} />
        </div>
        <Link href='/' className='text-neutral-950 dark:text-white font-sans font-bold text-2xl'>hypeUI</Link>
    </div> 
  )
}

export default Logo