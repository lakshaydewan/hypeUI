import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ComponentCard = ({ title, description, image, href }: { title: string, description: string, image: string, href: string }) => {
    
    return (
        <Link href={href} className='flex flex-col w-full cursor-pointer justify-center items-start group'>
            <div className='w-full aspect-[16/9] rounded-xl border border-neutral-800 overflow-hidden object-cover object-center'>
                <Image
                    height={1024}
                    width={1024}
                    src={image}
                    alt='component-card'
                    className='w-full group-hover:scale-105 transition-all duration-300 ease-out h-full object-cover object-center'
                />
            </div>
            <h1 className='text-white text-center text-2xl font-sans font-bold mt-3'>
                {title}
            </h1>
            <p className='text-primary text-start text-base font-sans font-light'>
                {description}
            </p>
        </Link>
    )
}

export default ComponentCard;