import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

const SayHello = () => {
  return (
    <>
      <section className=" bg-black text-white ">
        <div className="md:space-y-16 space-y-8 flex flex-col justify-center items-center py-16 md:pt-28 ">
          <h1 className="md:text-6xl text-3xl font-bold ">
            Let's work together
          </h1>
          <p className="text-gray-400 md:text-lg">
            I'm available for freelance work.
          </p>
          <Link
            to="/contact"
            className="ease-[cubic-bezier(.77, 0, 0.175, 1)] relative mt-12  flex  w-[160px] transform cursor-pointer  items-center space-x-2 py-1 font-semibold transition-all duration-500 hover:translate-x-4 md:mt-32 md:w-[180px] md:font-bold"
          >
            <span className=" before:ease-[cubic-bezier(.77, 0, 0.175, 1)] py-2 before:absolute before:-left-5 before:bottom-[6px] before:-z-10 before:block before:h-10 before:w-10 before:rounded-full before:bg-circle dark:before:bg-circle_for_primary before:transition-all before:duration-500 before:hover:w-full md:before:-left-6 md:before:-top-[6px] md:before:h-14 md:before:w-14   ">
              SAY HELLO
              <span className="absolute bottom-[10px] ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="h-8 w-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H1"
                  />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default SayHello
