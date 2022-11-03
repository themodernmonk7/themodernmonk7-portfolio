import React from "react"
// import { BsArrowRight } from "react-icons/bs"
// import { HiArrowLongRight } from "react-icons/hi"
import LandypixImage from "../assets/Project1.png"
import VodutvImage from "../assets/Project1.png"
import HackerNewsImage from "../assets/Project1.png"
import { Link } from "react-router-dom"
import { projects } from "../data"

const MyProjects = () => {
  return (
    <>
      <section className="container mx-auto lg:px-44 mb-40 ">
        <div className="  space-y-8 px-8 md:px-0 py-10 mb-40 ">
          <h4 className="text-3xl md:text-5xl font-semibold">
            Crafted with love.
          </h4>
          <p className="text-gray-700 font-medium md:text-lg">
            These are a selection of my recent works.
          </p>
        </div>

        {projects.map((item) => {
          const { id, name, category, description, image } = item
          return (
            <article
              key={id}
              className="flex flex-col md:flex-row md:mb-40 mt-20  justify-between "
            >
              <div className=" md:w-[28rem] md:h-[28rem] h-[20rem] relative grayscale  hover:grayscale-0  ">
                <img
                  src={image}
                  alt=""
                  className=" h-full w-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 "
                />
                <span
                  className="absolute text-[6rem] text-white font-bold tracking-widest bottom-0 -left-16 drop-shadow-lg "
                  style={{ textShadow: "0 5px 10px rgb(0 0 0 / 30%)" }}
                >
                  0{id}
                </span>
              </div>

              <div className=" flex flex-col justify-between mt-5 md:mt-0 px-8 md:px-0 md:w-1/2 ">
                <div className=" md:space-y-10">
                  <h2
                    className=" text-2xl md:text-5xl font-medium md:font-black md:text-white tracking-wider hover:text-black drop-shadow-lg "
                    style={{ WebkitTextStroke: "1px black " }}
                  >
                    {name}
                  </h2>
                  <span className="uppercase inline-block text-gray-400 pt-2 md:pt-0 ">
                    {category}
                  </span>
                  <p className="md:text-lg mt-5 md:mt-0 hidden md:grid ">
                    {" "}
                    {description}
                  </p>
                </div>

                <Link
                  to="/works/landypix"
                  className="space-x-2 mt-5 md:mt-10 relative cursor-pointer py-1  flex  items-center transform hover:translate-x-4  transition-all duration-500 ease-[cubic-bezier(.77, 0, 0.175, 1)] font-bold lowercase w-1/3 "
                >
                  <span className=" before:block before:absolute before:-left-6 before:top-0 before:bg-gray-200   before:rounded-full before:w-12 before:h-12 before:-z-10 before:transition-all before:duration-500 before:ease-[cubic-bezier(.77, 0, 0.175, 1)] before:hover:w-full py-2 ">
                    view project
                    <span className="absolute bottom-2 ml-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H1" />
</svg>
</span>
                  </span>
                
                 
                </Link>
              </div>
            </article>
          )
        })}

        {/* Project 1 */}
        {/* <article className="flex flex-col md:flex-row md:mt-40 mt-20  justify-between ">
          <div className=" md:w-[28rem] md:h-[28rem] h-[20rem] relative grayscale[80%]  hover:grayscale-0  ">
            <img
              src={LandypixImage}
              alt=""
              className=" h-full w-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 "
            />
            <span className="absolute text-[6rem] font-bold tracking-widest bottom-0 -left-16 ">
              01
            </span>
          </div>

          <div className=" flex flex-col justify-between mt-5 md:mt-0 px-8 md:px-0 ">
            <div className=" md:space-y-10">
              <h2
                className=" text-2xl md:text-5xl font-medium md:font-black md:text-white tracking-wider "
                style={{ WebkitTextStroke: "1px black " }}
              >
                landypix photo app
              </h2>
              <span className="uppercase inline-block text-gray-400 pt-2 md:pt-0 ">
                React app
              </span>
              <p className="md:text-lg mt-5 md:mt-0 ">
                {" "}
                A photo Sharing app site inspired by Pexels.com{" "}
              </p>
            </div>

            <div className="space-x-2 mt-5 md:mt-10 relative w-1/2 cursor-pointer rounded-full py-1 flex  items-center transform hover:translate-x-6  transition ease-in-out duration-500 hover:bg-blue-600 ">
              <Link to="/works/landypix" className="lowercase font-medium  ">
                view project
              </Link>
              <div className="md:w-12 md:h-12 h-8 w-8 bg-blue-600 rounded-full absolute -left-6 -z-10 "></div>
              <span>
                {" "}
                <HiArrowLongRight className="w-10 h-10" />{" "}
              </span>
            </div>
          </div>
        </article> */}

        {/* Project 2 */}
        {/* <article className="flex md:flex-row-reverse flex-col md:mt-40 mt-20   justify-between">
          <div className=" md:w-[28rem] md:h-[28rem] h-[20rem] relative grayscale[80%]  hover:grayscale-0  ">
            <img
              src={LandypixImage}
              alt=""
              className=" h-full w-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 "
            />
            <span className="absolute text-[6rem] font-bold tracking-widest bottom-0 -left-16 ">
              01
            </span>
          </div>

          <div className=" flex flex-col justify-between mt-5 md:mt-0 px-8 md:px-0 ">
            <div className=" md:space-y-10">
              <h2
                className=" text-2xl md:text-5xl font-medium md:font-black md:text-white tracking-wider "
                style={{ WebkitTextStroke: "1px black " }}
              >
                landypix photo app
              </h2>
              <span className="uppercase inline-block text-gray-400 pt-2 md:pt-0 ">
                React app
              </span>
              <p className="md:text-lg mt-5 md:mt-0 ">
                {" "}
                A photo Sharing app site inspired by Pexels.com{" "}
              </p>
            </div>

            <div className="space-x-2 mt-5 md:mt-10 relative w-1/2 cursor-pointer rounded-full py-1 flex  items-center transform hover:translate-x-6  transition ease-in-out duration-500 hover:bg-blue-600 ">
              <a href="#" className="lowercase font-medium  ">
                view project
              </a>
              <div className="md:w-12 md:h-12 h-8 w-8 bg-blue-600 rounded-full absolute -left-6 -z-10 "></div>
              <span>
                {" "}
                <HiArrowLongRight className="w-10 h-10" />{" "}
              </span>
            </div>
          </div>
        </article> */}

        {/* Project 3 */}
        {/* <article className="flex flex-col md:flex-row md:mt-40 mt-20  justify-between ">
          <div className=" md:w-[28rem] md:h-[28rem] h-[20rem] relative grayscale[80%]  hover:grayscale-0  ">
            <img
              src={LandypixImage}
              alt=""
              className=" h-full w-full object-cover object-top transition duration-300 ease-in-out hover:scale-105 "
            />
            <span className="absolute text-[6rem] font-bold tracking-widest bottom-0 -left-16 ">
              01
            </span>
          </div>
          <div className=" flex flex-col justify-between mt-5 md:mt-0 px-8 md:px-0 ">
            <div className=" md:space-y-10">
              <h2
                className=" text-2xl md:text-5xl font-medium md:font-black md:text-white tracking-wider "
                style={{ WebkitTextStroke: "1px black " }}
              >
                landypix photo app
              </h2>
              <span className="uppercase inline-block text-gray-400 pt-2 md:pt-0 ">
                React app
              </span>
              <p className="md:text-lg mt-5 md:mt-0 ">
                {" "}
                A photo Sharing app site inspired by Pexels.com{" "}
              </p>
            </div>

            <div className="space-x-2 mt-5 md:mt-10 relative w-1/2 cursor-pointer rounded-full py-1 flex  items-center transform hover:translate-x-6  transition ease-in-out duration-500 hover:bg-blue-600 ">
              <a href="#" className="lowercase font-medium  ">
                view project
              </a>
              <div className="md:w-12 md:h-12 h-8 w-8 bg-blue-600 rounded-full absolute -left-6 -z-10 "></div>
              <span>
                {" "}
                <HiArrowLongRight className="w-10 h-10" />{" "}
              </span>
            </div>
          </div>
        </article> */}

        <div className=" px-8 md:px-0   ">
          <p className="text-gray-400 uppercase tracking-widest text-sm md:text-base font-medium md:pb-8 ">
            There's more
          </p>
          <Link to="/works" className="inline-block py-2  ">
            <h2 className=" lowercase md:text-4xl text-3xl font-bold transform hover:translate-x-6 py-4 transition ease-in-out duration-500 ">
              View all projects{" "}
              {/* <span>
                {" "}
                <HiArrowLongRight className="w-5 h-5 inline-block " />{" "}
              </span>{" "} */}
            </h2>
          </Link>
        </div>
      </section>
    </>
  )
}

export default MyProjects
