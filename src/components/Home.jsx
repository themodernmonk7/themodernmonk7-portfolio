import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2"
import SauravImage from "../assets/SauravBW.jpg"
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

const Home = () => {
  return (
    <>
      <section className=" container mx-auto flex flex-col-reverse md:flex-row justify-evenly md:justify-between lg:px-44 items-center  h-screen relative px-8 ">
        {/* Left  */}
        <div className=" flex flex-col justify-start max-w-xl ">
          <div className="  space-y-6 ">
            <h1 className=" text-3xl  md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold lowercase ">
              Creative designer & a developer.
            </h1>
            <h2 className=" md:text-lg text-gray-400 font-medium ">
              Hi I'm SAurav, a passionate Front-end Developer & UI/UX Designer
              based in the India.{" "}
            </h2>
          </div>

          <div className="flex flex-col items-start space-y-10 mt-10 md:mt-20  ">
            <div className="space-x-2 relative hover:bg-blue-600  rounded-full py-1 flex  items-center">
              <a href="#" className="uppercase font-medium ">
                See my works
              </a>
              <div className="md:w-12 md:h-12 h-8 w-8 bg-blue-600 rounded-full absolute -left-6 -z-10 "></div>
              <span>
                {" "}
                <HiArrowLongRight className="w-10 h-10" />{" "}
              </span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className=" relative flex justify-center items-center ">
          <img
            src={SauravImage}
            alt=""
            className=" w-44 h-44 md:w-80 md:h-80 object-cover rounded-full "
          />
          <div className="w-44 h-44 md:w-full md:h-full rounded-full animate-pulse bg-blue-600 absolute blur-3xl -z-10 "></div>

          {/* small size cross for mobile cross */}
          <span className="absolute md:-left-3 md:bottom-3 md:w-96 md:h-96 -z-10 md:hidden  ">
            <svg
              width="180"
              height="450"
              viewBox="0 0 122 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="122" height="137" fill="noe" />
              <rect
                x="106.06"
                width="14"
                height="165"
                transform="rotate(40 106.06 0)"
                fill="white"
              />
              <rect
                x="3"
                y="10.2847"
                width="14"
                height="165"
                transform="rotate(-40 3 10.2847)"
                fill="white"
              />
            </svg>
          </span>

          {/* Medium size for large screen cross */}
          <span className="absolute -left-3 bottom-3 w-96 h-96 -z-10 md:hidden hidden  ">
            <svg
              width="350"
              height="450"
              viewBox="0 0 122 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="122" height="137" fill="noe" />
              <rect
                x="106.06"
                width="14"
                height="165"
                transform="rotate(40 106.06 0)"
                fill="white"
              />
              <rect
                x="3"
                y="10.2847"
                width="14"
                height="165"
                transform="rotate(-40 3 10.2847)"
                fill="white"
              />
            </svg>
          </span>
        </div>

        {/* Social icons */}
        <div className="flex hidden flex-col space-y-12 absolute -left-10  bottom-1/3 ">
          <span className="hover:bg-gray-500 grid place-items-center px-2 py-2 rounded-full ">
            {" "}
            <AiOutlineTwitter className="w-6 h-6 " />{" "}
          </span>
          <span className="hover:bg-gray-500 grid place-items-center px-2 py-2 rounded-full ">
            {" "}
            <AiOutlineGithub className="w-6 h-6" />{" "}
          </span>
          <span className="hover:bg-gray-500 grid place-items-center px-2 py-2 rounded-full ">
            {" "}
            <FaLinkedinIn className="w-6 h-6 " />{" "}
          </span>
        </div>
      </section>
    </>
  )
}

export default Home