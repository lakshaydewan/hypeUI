import ComponentSideBar from '@/components/ComponentSideBar';
import ComponentCard from '@/components/ComponentCard';
import React from 'react'
import GradientBtn from '@/components/buttons/Gradient';
import { components_data } from '@/lib/data';

const ComponentsPage = () => {
    return (
        <div className='flex w-full bg-white dark:bg-neutral-950 max-h-screen dark:border-neutral-800'>
            <ComponentSideBar />
            <div className='bg-white dark:bg-neutral-950 w-full flex flex-col justify-center items-center lg:items-start pt-32 gap-4 overflow-y-scroll'>
                <div className='w-[90%] flex justify-start items-start'>
                    <GradientBtn />
                </div>
                <div className='w-[90%] rounded-lg pb-3 h-full overflow-y-scroll md:grid md:grid-cols-2 flex flex-col gap-8'>
                    {
                        components_data.map((comp, index)=> (
                            <ComponentCard key={index} href={`/components/${index}`} title={comp.name} description={comp.description} image='https://picsum.photos/300/300' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ComponentsPage;