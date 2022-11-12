import React from "react"
import { Link } from "react-router-dom"
import { projects } from "../data"
import TopThreeProjects from "./TopThreeProjects"

const MyProjects = () => {
  return (
    <>
      <section className="container mx-auto md:px-20 ">
        <div className="  space-y-8 px-5 md:px-0 mb-20 md:mb-40 ">
          {/* py-10 mb-12 md:mb-40 px-5 md:px-20 lg:px-0 */}
          <h4 className="text-3xl md:text-5xl font-semibold">
            Crafted with love.
          </h4>
          <p className="text-gray-700 font-medium md:text-lg dark:text-gray-300">
            These are a selection of my recent works.
          </p>
        </div>
        <TopThreeProjects />

        <div className=" px-5 md:px-0 md:my-28 my-20   ">
          <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium md:pb-8 ">
            There's more
          </p>
          <Link to="/works" className="inline-block py-2  ">
            <h2 className=" lowercase md:text-4xl text-2xl font-bold transform hover:translate-x-6 py-4 transition ease-in-out duration-500 ">
              View all projects{" "}
              <span className=" absolute ml-2 md:top-[21px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H01"
                  />
                </svg>
              </span>
            </h2>
          </Link>
        </div>
      </section>
    </>
  )
}

export default MyProjects
