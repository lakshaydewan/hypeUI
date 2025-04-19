import React from 'react'
import Image from 'next/image'

const Scale_Card = () => {
  return (
    <div className="bg-white w-screen h-screen flex justify-center items-center">
        <div className="border border-white overflow-hidden relative group">
          <Image
            className="group-hover:scale-110 transition-all duration-700 ease-out group-hover:opacity-70"
            src="https://images.unsplash.com/photo-1726053468131-01f99f61715d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={400}
            alt="unsplash-img"
          >
          </Image>
          <div className="font-extralight font-sans text-md z-0 px-4 opacity-0 group-hover:opacity-100 w-44 h-12 flex justify-center items-center bg-white text-black border border-gray-900 absolute top-[45%] left-[20%] transition-all duration-700 ease-out cursor-pointer">
            <div className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-700 transition-all ease-out">
              SEE ALL WORK
            </div>
          </div>
        </div>
      </div>
  )
}

export default Scale_Card