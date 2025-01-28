import React from 'react'
import ComponentSideBar from '@/components/ComponentSideBar'
import MainInfo from '@/components/MainInfo'

const code =  `const DummyComponent = () => {
  const [count, setCount] = React.useState(0);
 
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
 
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
      <p className="mb-2">Fight Club Fights Count: {count}</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
};
`;

const ComponentPage = async ({ params }: { params: { componentID: string } }) => {

    const { componentID } = await params;

    return (
        <div className='flex w-full border-b border-neutral-800 pb-10'>
            <ComponentSideBar />
            <div className='bg-neutral-950 w-full flex flex-col justify-center items-center pt-24 gap-4 overflow-y-scroll'>
                <div className='w-[95%] md:h-[88vh] overflow-y-scroll flex flex-col items-center justify-center'>
                    <MainInfo tags={['button','sleek','modern']} componentName='Code Block' componentDescription='A configurable code block component built on top of react-syntax-highlighter.' component={<button className='bg-neutral-800 border border-neutral-900 text-primary hover:text-white text-sm font-sans font-normal transition-all duration-300 ease-out py-1 px-4 rounded-full'>Button</button>} code={code} />
                </div>
            </div>
        </div>
    )
}

export default ComponentPage;