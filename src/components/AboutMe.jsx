import React from 'react'
import SauravImage1 from '../assets/SauravBW.jpg'
const AboutMe = () => {
  return (
    <>
    <section className=" container mx-auto grid place-items-center h-screen">
        <div className="">

        <div className="flex px-28 ">
            <h2 className='font-arimo uppercase text-[79px] w-1/2 leading-[79px]  '> 
            A little about me
             </h2>
            
            <img src={SauravImage1} alt="themodernmonk7 image" className=' w-96 h-64 object-cover shadow-xl ' />
        </div>
        <div className=" flex justify-around px-28  mt-20">
            <p className='font-light w-[362px] h-[193px] text-2xl leading-[33px] '>I am a digital nomad currently based in India. I've been working in web development for the past two years. It was only in the past three that I decided to focus full-time on illustrating. </p>
            <img src={SauravImage1} alt="" className='w-[178px] h-[246px] object-cover -rotate-12 shadow-xl ' />
        </div>
        </div>

    </section>
    </>
  )
}

export default AboutMe