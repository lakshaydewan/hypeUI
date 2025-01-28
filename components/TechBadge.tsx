import React from 'react'

interface TechBadgeProps {
  name: string
  iconLink: React.ReactNode
}

const TechBadge = ({ name, iconLink }: TechBadgeProps) => {
  return (
    <div className='bg-neutral-950 text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center'>
       {iconLink}
       <div>{name}</div> 
    </div>
  )
}

export default TechBadge