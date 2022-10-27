import React from 'react'
import projects from '../data'
const MyWork = () => {
  return (
    <>
    <section className=" container mx-auto grid place-items-center h-screen">
        <div className="px-28">
            <h4 className=' text-center uppercase text-[79px] '>My Work</h4>
            <div className="grid grid-cols-3 gap-5 mt-28">
                {projects.map((project) => {
                    const {id, name, description, image, link} = project
                    return (
                        <article key={id} className="">
                            <img src={image} alt={name} className='w-[335px] h-[247px] object-cover shadow-xl ' />
                            <div className="flex flex-col justify-center items-start mt-5 space-y-2">
                                <h4 className=' text-xl '>{name}</h4>
                                <p className='uppercase font-light ' > {description} </p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default MyWork