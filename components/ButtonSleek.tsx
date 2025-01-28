import React from 'react'
import Link from 'next/link'

const ButtonSleek = ({ text, link }: { text: string, link: string }) => {

    return (
        <Link href={link}>
            <div className='w-fit text-start h-fit text-[15px] font-sans cursor-pointer hover:translate-x-1.5 text-primary hover:text-green-500 transition-all duration-200 ease-out'>
                {text}
            </div>
        </Link>
    )
}

export default ButtonSleek