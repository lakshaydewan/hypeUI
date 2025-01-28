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
            <h1 className='text-white w-full text-4xl font-sans font-bold mt-4'>{componentName}</h1>
            <p className='text-primary w-full text-lg mt-2 font-sans font-normal'>{componentDescription}</p>
            <div className='w-full mt-2 flex justify-start gap-2 items-center mb-3 flex-wrap'>
            {
                tags.map((tag, index) => {
                    return (
                        <div key={index} className='border border-neutral-800 text-neutral-200 text-xs font-sans font-normal py-0.5 px-2 rounded-lg'>{tag}</div>
                    )
                })
            }
            </div>
            <div className='w-full mt-6 flex justify-start gap-2 items-center mb-3'>
                <button className={`${activeTab === 'preview' && "bg-neutral-800 text-white"} py-2 px-6 border-neutral-900 text-primary hover:text-white text-sm font-sans font-semibold transition-all duration-300 ease-out rounded-lg`}
                    onClick={() => setActiveTab('preview')}>Preview</button>
                <button className={`${activeTab === 'code' && "bg-neutral-800 text-white"} py-2 px-6 border-neutral-900 text-primary hover:text-white text-sm font-sans font-normal transition-all duration-300 ease-out rounded-lg`}
                    onClick={() => setActiveTab('code')}>Code</button>
            </div>
            <div className='border border-neutral-800 overflow-hidden rounded-xl w-full h-[60vh] flex flex-col justify-center items-center'>
                {
                    activeTab === 'preview' && <div className='w-full h-full flex flex-col justify-center items-center'>
                        {component}
                    </div>
                }{
                    activeTab === 'code' && <div className='w-full h-full overflow-y-scroll text-white flex flex-col justify-center items-center'>
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