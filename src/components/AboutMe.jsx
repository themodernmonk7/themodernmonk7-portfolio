import React from "react"
import { Person } from "../data"

const AboutMe = () => {
  const { image, about_myself, long_bio, stacks, tags } = Person
  return (
    <>
      <section className="container mx-auto px-5 md:px-20 xl:px-20 my-40 ">
        <div className="flex flex-col-reverse xl:flex-row-reverse justify-between md:gap-10 xl:gap-0  ">
          {/* Text content */}
          <div className=" mt-10 md:mt-0 xl:w-2/3 ">
            <h4 className="md:text-4xl text-xl leading-[40px] md:leading-[70px] ">
              {long_bio}
            </h4>
            <div className=" mt-5 flex flex-wrap gap-5 ">
              {tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className=" bg-gray-200/60 shadow-sm px-[6px] py-2 cursor-default border border-[#f1f1f1] rounded-md hover:bg-gray-50 dark:bg-slate-700 dark:border-black dark:hover:bg-slate-600 dark:text-white/50  "
                  >
                    {" "}
                    {tag}{" "}
                  </div>
                )
              })}
            </div>
          </div>
          {/* flex  justify-center items-center */}
          {/* Image */}
          <div className=" flex  justify-center xl:justify-start items-center  relative  ">
            <div className=" relative ">
              <img
                src={image[0]}
                alt=""
                className=" grayscale w-60 h-60 md:w-72 md:h-72 object-cover rounded-full  "
              />
              <span className="absolute right-14 bottom-0 bg-yellow-200 border-2 w-8 h-8 text-center flex justify-center items-center rounded-full  cursor-default ">
                {" "}
                🔍{" "}
              </span>
            </div>
          </div>
        </div>

        {about_myself.map((item) => {
          const { id, sidebar_title, title, description } = item
          return (
            <div
              key={id}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mt-28 xl:mt-40"
            >
              <div className=" uppercase space-x-8 text-xs tracking-widest">
                <span>/0{id}</span>
                <span className="text-gray-500"> {sidebar_title} </span>
              </div>
              <div className="md:w-2/3 space-y-10">
                <h4 className="text-2xl font-medium capitalize ">{title}</h4>
                <p className="flex flex-col space-y-8 md:space-y-12 leading-10 md:text-lg md:leading-10 dark:text-gray-400  ">
                  {description}
                </p>
              </div>
            </div>
          )
        })}
        <div className="flex flex-col md:flex-row justify-end">
          <div className="grid  md:grid-cols-2 gap-10 md:w-2/3 ">
            {stacks.map((stack, index) => {
              const { stack_title, stack_items } = stack
              return (
                <div key={index}>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-400 underline capitalize ">
                    {stack_title}
                  </h4>
                  <div className=" space-y-4 mt-3 ">
                    {stack_items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className=" flex justify-start items-center space-x-6 "
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-5 h-5 rounded-md "
                          />
                          <p className=" capitalize text-gray-600 dark:text-gray-500 text-sm ">
                            {item.title}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Social */}
      </section>
    </>
  )
}

export default AboutMe
