import React from 'react'

const New_Button = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
    <div className="overflow-hidden h-12 group cursor-pointer font-sans font-extralight">
      <div className="w-full h-12 bg-white text-black border-gray-900 flex items-center px-8 group-hover:opacity-0 duration-1000 transition-all ease-in-out">
        NEXT:WORK
      </div>
      <div className="z-50 w-full h-12 bg-black text-white flex items-center px-8 group-hover:-translate-y-12 group-hover:-translate-x-0 -translate-x-10 transition-all duration-[400ms] rotate-[20deg] group-hover:rotate-0 opacity-0 group-hover:opacity-100">
        <div className="translate-y-6 delay-300 group-hover:translate-y-0 transition-all duration-700 ease-out">
          NEXT:WORK
        </div>
      </div>
    </div>
  </div>
  )
}

export default New_Button