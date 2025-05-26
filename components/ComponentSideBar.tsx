import React from 'react'
import ButtonSleek from './ButtonSleek'
import { components_data } from '@/lib/data'

const ComponentSideBar = () => {
    return (
        <div className='lg:flex justify-center items-center hidden w-[27vw] h-screen bg-white dark:bg-neutral-950 pt-40'>
            <div className='flex w-[70%] relative flex-col items-start gap-1.5 overflow-y-scroll h-full pb-2'>
                <div className='dark:text-white text-black py-1 z-10 bg-white dark:bg-neutral-950 sticky top-0 left-0 text-start text-[15px] font-sans font-bold mb-1'>All Components</div>
                {
                    components_data.map((component, index) => (
                        <ButtonSleek key={index} text={component.name as string} link={`/components/${index}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default ComponentSideBar;