import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import Image from 'next/image'

const Cover = () => {
    return (
        <div className=''>
            <motion.div
                initial={{ width: "0%", scale: 0.9 }}
                animate={{ width: "100%", scale: 0.93 }}
                transition={{ duration: 0.7, delay: 3.5, ease: easeInOut }}
                className='overflow-hidden h-screen w-screen z-10 absolute top-0 left-0'>
                <div className='absolute top-0 left-0 w-screen h-screen'>
                    <Image
                        src={"https://images.unsplash.com/photo-1514500656691-01c2918eb76e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt='nthing'
                        width={4000}
                        height={4000}
                        className='w-full h-full object-cover absolute top-0 left-0'
                    ></Image>
                </div>
            </motion.div>
            <motion.div
                initial={{ width: "0%", scale: 0.93 }}
                animate={{ width: "100%", scale: 0.97 }}
                transition={{ duration: 0.8, delay: 3.8 }}
                className='overflow-hidden h-screen w-screen z-20 absolute top-0 left-0'>
                <div className='absolute top-0 left-0 w-screen h-screen'>
                    <Image
                        src={"https://images.unsplash.com/photo-1618142628642-62a239cb9b5e?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt='nthing'
                        width={4000}
                        height={4000}
                        className='w-full h-full object-cover object-top absolute top-0 left-0'
                    ></Image>
                </div>
            </motion.div>
            <motion.div
                initial={{ width: "0%", scale: 0.97 }}
                animate={{ width: "100%", scale: 1 }}
                transition={{ duration: 0.5, delay: 4.2 }}
                className='overflow-hidden h-screen w-screen z-30 absolute top-0 left-0 bg-green-300'>
                <div className='absolute top-0 left-0 w-screen h-screen'>
                    <Image
                        src={"https://images.unsplash.com/photo-1510424363135-13631ed57db1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt='nthing'
                        width={4000}
                        height={4000}
                        className='w-full h-full object-cover object-center absolute top-0 left-0'
                    ></Image>
                </div>
            </motion.div>
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 4.5 }}
                className='overflow-hidden h-screen w-screen z-30 absolute top-0 left-0 bg-green-300'>
                <div className='absolute top-0 left-0 w-screen h-screen'>
                    <Image
                        src={"https://plus.unsplash.com/premium_photo-1664879730326-532400b140f3?q=80&w=2996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt='nthing'
                        width={4000}
                        height={4000}
                        className='w-full h-full object-cover object-center absolute top-0 left-0'
                    ></Image>
                </div>
            </motion.div>
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 4.7 }}
                className='overflow-hidden h-screen w-screen z-30 absolute top-0 left-0 bg-green-300'>
                <div className='absolute top-0 left-0 w-screen h-screen'>
                    <Image
                        src={"https://images.unsplash.com/photo-1585960622850-ed33c41d6418?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt='nthing'
                        width={4000}
                        height={4000}
                        className='w-full h-full object-cover object-top absolute top-0 left-0'
                    ></Image>
                </div>
            </motion.div>
            <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 4.9 }}
                className='overflow-hidden h-screen w-screen z-30 absolute top-0 left-0 bg-green-300'>
                <div className='font-new absolute top-0 left-0 w-screen h-screen bg-[url(https://images.unsplash.com/photo-1623251738730-c43469a8aefc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center'>
                    <section className='flex flex-col justify-between h-full gap-44 items-center'>
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5.3, duration: 1.5 }}
                            className='flex justify-around py-5 md:text-2xl text-xl w-full'>
                            <div>
                                [LOGO]
                            </div>
                            <div className='md:block hidden'>
                                [PHOTOGRAPHER, PHOTODIRECTOR & FILMMAKER]
                            </div>
                            <div>
                                [MENU]
                            </div>
                        </motion.nav>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5.3, duration: 1.5 }}
                            className='md:text-[160px] sm:text-9xl text-7xl'>
                            HOWARD
                        </motion.h1>
                        <motion.footer
                            className='flex justify-center items-center py-8 md:text-2xl text-xl'>
                            <div className='relative overflow-hidden h-[25px]'>
                                <motion.p
                                initial={{y: 25}}
                                animate={{y: -4}}  
                                transition={{duration: 0.8, delay: 5.8}} 
                                className=''>
                                &lt;&lt; MAKE AN IMPACT &gt;&gt;
                                </motion.p>
                            </div>
                        </motion.footer>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}

export default Cover

