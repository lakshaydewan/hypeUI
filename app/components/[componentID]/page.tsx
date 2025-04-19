import React from 'react'
import ComponentSideBar from '@/components/ComponentSideBar'
import MainInfo from '@/components/MainInfo'
import Footer from '@/components/Footer';
import Explanation from '@/components/Explanation';
import { components_data } from '@/lib/data';
import { PageProps } from '@/.next/types/app/page';

const ComponentPage = async ({params} : PageProps) => {

  const { componentID } = await params
  console.log(componentID);
  if (componentID === undefined) {
    return <div>
      INVALID URL
    </div>
  }

  const component = components_data[componentID[0]];

  console.log(component);

  return (
    <>
      <div className='flex dark:bg-neutral-950 bg-white w-full border-b  dark:border-neutral-800 pb-10'>
        <ComponentSideBar />
        <div className='bg-white dark:bg-neutral-950 w-full flex flex-col justify-center items-center pt-24 gap-4 overflow-y-scroll'>
          <div className='w-[95%] md:h-[88vh] overflow-y-scroll flex flex-col items-center justify-center'>
            <MainInfo tags={component.tags} componentName={component.name} componentDescription={component.description} component={<component.Component />} code={component.code} />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start gap-0 py-24 items-center w-full h-fit bg-white dark:bg-neutral-950'>
        <div className='w-[80%] flex justify-start mb-2'>
          <h1 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 text-center'>Props</h1>
        </div>
        <Explanation content={component.props} />
        <div className='w-[80%] flex justify-start mt-14 mb-2'>
          <h1 className='text-2xl font-bold text-neutral-900 dark:text-neutral-100 text-center'>Inspiration</h1>
        </div>
        <div className='w-[80%] flex justify-start'>
          <p className='text-lg font-sans font-normal text-neutral-900 dark:text-neutral-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae corporis a dolor, totam quam inventore, dignissimos accusamus minus aspernatur excepturi atque incidunt nemo esse aliquam maxime iure sapiente eos, rem quis ab? Ad, consequatur doloremque?</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ComponentPage;