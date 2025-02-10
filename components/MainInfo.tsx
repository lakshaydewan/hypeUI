'use client'
import React from 'react'
import { useState } from 'react';
import { CodeBlock } from './ui/code-block';

interface MainInfoProps {
    componentName: string;
    componentDescription: string;
    component: React.ReactNode;
    code: string;
    tags: string[];
}

const MainInfo = ({ componentName, componentDescription, component, code, tags }: MainInfoProps) => {

    const [activeTab, setActiveTab] = useState('preview')

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='text-black dark:text-white w-full text-4xl font-sans font-bold mt-4'>{componentName}</h1>
            <p className='dark:text-primary text-neutral-700 w-full text-lg mt-2 font-sans font-light'>{componentDescription}</p>
            <div className='w-full mt-2 flex justify-start gap-2 items-center mb-3 flex-wrap'>
            {
                tags.map((tag, index) => {
                    return (
                        <div key={index} className='border border-neutral-800 text-black dark:text-neutral-200 text-xs font-sans font-normal py-0.5 px-2 rounded-lg'>{tag}</div>
                    )
                })
            }
            </div>
            <div className='w-full mt-6 flex justify-start gap-1 items-center mb-3'>
                <button className={`${activeTab === 'preview' && "dark:bg-neutral-800 bg-neutral-200 text-black shadow-md dark:text-white"} py-2 px-6 border-neutral-900 text-neutral-700 dark:text-primary hover:text-neutral-950 dark:hover:text-white text-sm font-sans font-normal transition-all duration-500 ease-out rounded-lg`}
                    onClick={() => setActiveTab('preview')}>Preview</button>
                <button className={`${activeTab === 'code' && "dark:bg-neutral-800 bg-neutral-200 text-black shadow-xl dark:text-white"} py-2 px-6 border-neutral-900 text-neutral-700 dark:text-primary hover:text-neutral-950 dark:hover:text-white text-sm font-sans font-normal transition-all duration-500 ease-out rounded-lg`}
                    onClick={() => setActiveTab('code')}>Code</button>
            </div>
            <div className='border shadow-xl border-neutral-800 overflow-hidden rounded-xl w-full h-[80vh] flex flex-col justify-center items-center'>
                {
                    activeTab === 'preview' && <div className='w-full shadow-xl h-full flex flex-col justify-center items-center'>
                        {component}
                    </div>
                }{
                    activeTab === 'code' && <div className='w-full shadow-xl h-full overflow-y-scroll text-white flex flex-col justify-center items-center'>
                        <CodeBlock
                            language="jsx"
                            filename="DummyComponent.jsx"
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