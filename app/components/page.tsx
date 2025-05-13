import ComponentSideBar from '@/components/ComponentSideBar';
import ComponentCard from '@/components/ComponentCard';
import React from 'react'
import GradientBtn from '@/components/buttons/Gradient';

const ComponentsPage = () => {
    return (
        <div className='flex w-full bg-white dark:bg-neutral-950 max-h-screen dark:border-neutral-800'>
            <ComponentSideBar />
            <div className='bg-white dark:bg-neutral-950 w-full flex flex-col justify-center items-center lg:items-start pt-32 gap-4 overflow-y-scroll'>
                <div className='w-[90%] flex justify-start items-start'>
                    <GradientBtn />
                </div>
                <div className='w-[90%] rounded-lg pb-3 h-full overflow-y-scroll md:grid md:grid-cols-2 flex flex-col gap-8'>
                    <ComponentCard href={'/components/button'} title='Component 1' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/components/component-2'} title='Component 2' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/components/component-3'} title='Component 3' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/components/component-4'} title='Component 4' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/'} title='Component 5' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/'} title='Component 6' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/'} title='Component 7' description='This is a component card' image='https://picsum.photos/300/300' />
                    <ComponentCard href={'/'} title='Component 8' description='This is a component card' image='https://picsum.photos/300/300' />
                </div>
            </div>
        </div>
    )
}

export default ComponentsPage;