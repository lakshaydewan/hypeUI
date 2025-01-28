import React from 'react'
import Link from 'next/link'

const NavbarButton = ({ link, index} : { link: {
  name: string
  href: string
  isNew?: boolean
}, index: number }) => {

  if (link.isNew) {
    return (
      <Link href={link.href} className='text-primary gap-1 flex justify-center items-center hover:text-white transition-all duration-200 ease-out font-sans font-medium text-sm'>
        <div>{link.name}</div>
        <div className='w-fit flex justify-center items-center h-fit border text-green-500 border-green-500 text-xs rounded-md pb-[1.5px] px-[3px]'>new</div>
      </Link>
    )
  }

  return (
    <Link href={link.href} className='text-primary hover:text-white transition-all duration-200 ease-out font-sans font-medium text-sm'>{link.name}</Link>
  )
}

export default NavbarButton