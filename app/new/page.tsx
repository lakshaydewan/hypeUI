'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Page = () => {

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ]

  const [activeLink, setActiveLink] = React.useState(0)

  const handleLinkClick = (index: number) => {
    setActiveLink(index)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className="flex justify-center rounded-full items-center">
        {
          links.map((_, index) => (
            <div onClick={()=> {
              handleLinkClick(index)
            }} key={index} className={`w-20 h-10 relative rounded-full flex items-center justify-center cursor-pointer`}>
                <span className="mix-blend-exclusion z-10">{_.name}</span>
              {
                index == activeLink && (
                  <motion.div transition={{duration: 0.7, type: 'spring'}} layoutId={"const"} className="w-full inset-0 absolute h-full bg-gradient-to-r bg-white rounded-full"></motion.div>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page