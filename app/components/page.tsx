import ComponentSideBar from '@/components/ComponentSideBar';
import ComponentCard from '@/components/ComponentCard';
import React from 'react'

const ComponentsPage = () => {
    return (
        <div className='flex w-full bg-white dark:bg-neutral-950 border-b dark:border-neutral-800 pb-10'>
            <ComponentSideBar />
            <div className='bg-white dark:bg-neutral-950 w-full flex flex-col justify-center items-center pt-32 gap-4 overflow-y-scroll'>
                <div className='w-[90%] flex justify-start items-center'>
                    <button className='bg-neutral-800 border border-neutral-900 text-primary hover:text-white text-sm font-sans font-normal transition-all duration-300 ease-out py-1 px-4 rounded-full'>Request Demo</button>
                </div>
                <div className='w-[90%] md:h-[80vh] overflow-y-scroll md:grid md:grid-cols-2 flex flex-col items-center justify-center gap-8'>
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