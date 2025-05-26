'use client'
import React from 'react'
import { useState } from 'react';
import { CodeBlock } from './ui/code-block';
import { IconReload } from '@tabler/icons-react';

interface MainInfoProps {
    componentName: string;
    componentDescription: string;
    component: React.ReactNode;
    code: string;
    tags: string[];
}

const MainInfo = ({ componentName, componentDescription, component, code, tags }: MainInfoProps) => {

    const [activeTab, setActiveTab] = useState('preview')
    const [key, setKey] = useState(0)

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-black dark:text-white w-full text-4xl font-sans font-bold mt-0'>{componentName}</h1>
            <p className='dark:text-primary text-neutral-700 w-full text-lg font-sans font-light'>{componentDescription}</p>
            <div className='w-full mt-2 flex justify-start gap-2 items-center flex-wrap'>
            {
                tags.map((tag, index) => {
                    return (
                        <div key={index} className='border border-neutral-800 text-black dark:text-neutral-200 text-xs font-sans font-normal py-0.5 px-2 rounded-lg'>{tag}</div>
                    )
                })
            }
            </div>
            <div className='w-full mt-4 flex justify-start gap-1 items-center mb-3'>
                <button className={`${activeTab === 'preview' && "dark:bg-neutral-800 bg-neutral-200 text-black shadow-md dark:text-white"} py-2 px-6 border-neutral-900 text-neutral-700 dark:text-primary hover:text-neutral-950 dark:hover:text-white text-sm font-sans font-normal transition-all duration-500 ease-out rounded-lg`}
                    onClick={() => setActiveTab('preview')}>Preview</button>
                <button className={`${activeTab === 'code' && "dark:bg-neutral-800 bg-neutral-200 text-black shadow-xl dark:text-white"} py-2 px-6 border-neutral-900 text-neutral-700 dark:text-primary hover:text-neutral-950 dark:hover:text-white text-sm font-sans font-normal transition-all duration-500 ease-out rounded-lg`}
                    onClick={() => setActiveTab('code')}>Code</button>
            </div>
            <div className='border border-zinc-300 dark:border-neutral-800 overflow-hidden rounded-xl w-full h-[80vh] flex flex-col justify-center items-center'>
                {
                    activeTab === 'preview' && <div key={key} className='w-full relative rounded-xl shadow-xl h-full flex justify-center items-center'>
                        <span onClick={()=> {
                            setKey(key + 1)
                        }} className='p-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-md cursor-pointer group absolute top-6 right-6'><IconReload size={16} stroke={2} className='text-neutral-500 group-hover:-rotate-45 transition-all duration-300 ease-out dark:text-neutral-400' /></span>
                        {component}
                    </div>
                }{
                    activeTab === 'code' && <div className='w-full shadow-xl h-full overflow-y-scroll text-white flex flex-col justify-center items-center'>
                        <CodeBlock
                            language="jsx"
                            filename={`${componentName}.jsx`}
                            highlightLines={[9, 13, 14, 18]}
                            code={code}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default MainInfo