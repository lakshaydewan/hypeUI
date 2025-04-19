import ButtonFire from './FireButton';
import React from 'react'

const HeroBadge = () => {

  return (
    <div className='translate-x-[15px]'>
      <ButtonFire text={"Get Started"} gradientFrom='from-blue-700 dark:from-blue-500' size='lg' gradientTo='to-purple-800 dark:to-neutral-700' animationDuration={1.7} className='flex flex-row justify-center items-center'>
      </ButtonFire>
    </div>
  )
}

export default HeroBadge;