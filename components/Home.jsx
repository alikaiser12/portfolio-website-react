import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/*Container */}
      <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-blue-600'> Hi, My Name is</p>
        <h1 className='text-4xl sm:text-7xl text-[#4b50b4]'> Ali Kaiser</h1>
        <h2 className='text-[#60c487]'>I'm a full stack developer</h2>
       
        <p className='text-[#8892b0] py-4 max-w-[720px]'>Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum Loream Ipsum</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4b50b4] hover:border-pink-600'>View Work 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/>
          </span>
          
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home