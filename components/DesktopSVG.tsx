'use client'
import React from 'react'
import { DashedSeparator } from './DashedSeperator'
import { motion } from 'motion/react'
import CounterDemo from './DemoForCounter'
import HoldButton from './HoldButton'
import ShimmerText from '@/main/ShimmerText'
import  CardDemo  from './Card'
import BlendText from './BlendText'
import Notification from './Notification'
import CursorMotion from './CursorMotion'

const DesktopSVG = () => {

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
    className='bg-transparent lg:flex hidden -mr-16 h-[100vh] w-[40vw] justify-center items-end'>
      <div className='flex h-[80%] w-full'>
        <div className='w-full h-full flex flex-col items-center gap-1'>
          <motion.div
          className='h-[180px] w-[94%] overflow-hidden border dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-neutral-100 rounded-xl'>
            <HoldButton />
          </motion.div>
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
            className='w-fit h-fit origin-left'>
              <DashedSeparator orientation='horizontal' thickness={1} className='w-[110%] translate-x-[-10%]' />
            </motion.div>
          <motion.div
          className='h-full overflow-hidden w-[94%] border dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-neutral-100 rounded-xl'>
            <CardDemo />
          </motion.div>
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
            className='w-fit h-fit origin-left'>
              <DashedSeparator orientation='horizontal' thickness={1} className='w-[110%] translate-x-[-10%]' />
            </motion.div>
          <motion.div
          className='h-full w-[94%] border dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-neutral-100 rounded-xl'>
            <CounterDemo />
          </motion.div>
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
            className='w-fit h-fit origin-left'>
              <DashedSeparator orientation='horizontal' thickness={1} className='w-[110%] translate-x-[-10%]' />
            </motion.div>
          <motion.div 
          className='h-[180px] w-[94%] border flex justify-center items-center dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-neutral-100 rounded-xl'>
            <ShimmerText text='Shimmer Text' />
          </motion.div>
        </div>
        <DashedSeparator orientation='vertical' dashGap={2} dashSize={6} />
        <div className='w-full h-full flex flex-col items-center gap-1'>
          <motion.div 
          className='h-full w-[94%] border dark:border-neutral-800 border-neutral-200 bg-neutral-900 overflow-hidden rounded-xl'>
          <BlendText />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.45 }}
            className='w-fit h-fit origin-left'>
              <DashedSeparator orientation='horizontal' thickness={1} className='w-[120%]' />
            </motion.div>
          <motion.div 
          className='h-full w-[94%] border dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-slate-100 rounded-xl'>
          <Notification />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.55 }}
            className='w-fit h-fit origin-left'>
              <DashedSeparator orientation='horizontal' thickness={1} className='w-[120%]' />
            </motion.div>
          <motion.div
          className='h-full w-[94%] border dark:border-neutral-800 border-neutral-200 dark:bg-neutral-900 bg-slate-100 rounded-xl'>
            <CursorMotion />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default DesktopSVG