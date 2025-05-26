'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const Notification = () => {

    const [open, setOpen] = useState(false);

    const notifications = [
        {
            title: 'New message',
            description: 'You have a new message',
            icon: <span className='text-green-500'>📧</span>
        },
        {
            title: 'New message',
            description: 'You have a new message',
            icon: <span className='text-green-500'>📧</span>
        },
        {
            title: 'Your order is ready',
            description: 'Order #1234 is ready',
            icon: <span className='text-blue-500'>📦</span>
        }]

    return (
        <div className='w-full h-full flex flex-col relative'>
            <AnimatePresence>
                {
                    open && <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', y: 10 }}
                        exit={{ opacity: 0, height: 0 }}
                        className='px-3 w-full h-fit flex justify-between items-center'>
                        <span className='mt-3'>Notifications</span>
                        <span onClick={() => {
                            setOpen(false)
                        }} className='text-xs dark:border-none border rounded-full dark:bg-neutral-700 mt-3 py-1 px-2 cursor-pointer'>Collapse</span>
                    </motion.div>
                }
            </AnimatePresence>
            <div className='w-full h-full flex flex-col gap-1 justify-center items-center'>
                <motion.div
                    onClick={() => setOpen(!open)}
                    initial={{ y: 0 }}
                    animate={{ y: open ? 0 : -10 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className='w-[95%] h-fit flex z-[3] bg-white dark:bg-neutral-800 cursor-pointer border rounded justify-between items-center border-b dark:border-neutral-700 border-neutral-200 py-2 px-4'>
                    <div className='flex'>
                        {notifications[0].icon}
                    </div>
                    <span className='text-xs dark:text-neutral-300 text-end text-neutral-700'>{notifications[0].description}</span>
                </motion.div>
                <motion.div
                    initial={{ y: -60, width: '90%' }}
                    animate={{ y: open ? 0 : -60, width: open ? '95%' : '90%' }}
                    transition={{ duration: 0.7, type: 'spring' }}
                    className='w-[95%] h-fit flex z-[2] bg-white dark:bg-neutral-800 border rounded justify-between items-center border-b dark:border-neutral-700 border-neutral-200 py-2 px-4'>
                    <div className='flex'>
                        {notifications[0].icon}
                    </div>
                    <span className='text-xs dark:text-neutral-300 text-end text-neutral-700'>{notifications[0].description}</span>
                </motion.div>
                <motion.div
                    initial={{ y: -110, width: '85%' }}
                    animate={{ y: open ? 0 : -110, width: open ? '95%' : '85%' }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className='w-[95%] h-fit flex border z-[1] bg-white dark:bg-neutral-800 rounded justify-between items-center border-b dark:border-neutral-700 border-neutral-200 py-2 px-4'>
                    <div className='flex'>
                        {notifications[2].icon}
                    </div>
                    <span className='text-xs dark:text-neutral-300 text-end text-neutral-700'>{notifications[2].description}</span>
                </motion.div>
            </div>
            <AnimatePresence>
                {
                    !open && <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto', y: -10 }}
                    exit={{ opacity: 0, height: 0 }}
                    className='w-full h-fit flex justify-center gap-0.5 items-center absolute bottom-1'>
                            <div className='w-full h-[1px] bg-gradient-to-l from-neutral-900 dark:from-neutral-500 to-transparent rounded-full'></div>
                            <div className='w-full text-xs text-center'>new messages</div>
                            <div className='w-full h-[1px] bg-gradient-to-r from-neutral-900 dark:from-neutral-500 to-transparent rounded-full'></div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Notification