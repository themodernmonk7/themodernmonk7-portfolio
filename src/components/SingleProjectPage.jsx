import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import VodutvImage from "../assets/Project1.png"
import VodutvImage2 from "../assets/Vodutv.png"

const SingleProjectPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `URL(${VodutvImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center 0px fixed ",
    height: "880px",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <div className="relative " style={backgroundImageStyle}>
        <div className=" md:space-y-10 bg-black w-2/3 h-1/4 pl-80 absolute bottom-0 flex flex-col justify-center bg-fixed ">
          <h2
            className=" text-2xl md:text-5xl font-black outline-8 text-black tracking-wider "
            style={{ WebkitTextStroke: "1px white" }}
          >
            landypix photo app
          </h2>
          <span className="uppercase inline-block text-gray-500 ">
            React app
          </span>
        </div>
      </div>
      <section className="container mx-auto lg:px-44 my-28">
        {/* About Project */}

        <div className=" space-y-8 ">
          <h4 className="text-4xl font-bold ">About the project.</h4>
          <p className="text-gray-400 w-2/3">
            Social Gen is a simple social media site inspired by
            facebook/instagram. It is a re-branding of an old project called
            'Foodie'. It has the basic functionality of a social media site such
            as authentication, private messaging, notification, profile
            customization and many more.
          </p>

          <div className="flex gap-10">
            <div className=" space-y-4">
              <h4 className="text-xl">Platform</h4>
              <p className=" text-gray-400 ">Web/Mobile</p>
            </div>

            <div className=" space-y-4">
              <h4 className="text-xl">Category</h4>
              <p className=" text-gray-400 ">Entertainment</p>
            </div>

            <div className=" space-y-4">
              <h4 className="text-xl">Developer</h4>
              <p className=" text-gray-400 ">Kumar Avishek (Saurav)</p>
            </div>
          </div>

          <div className=" space-y-4">
            <h4>Technologies Used</h4>
            <div className=" space-x-8">
              <span className=" text-gray-400">HTML</span>
              <span className=" text-gray-400">CSS</span>
              <span className=" text-gray-400">JAVASCRIPT</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-10">
          <div className="space-x-2 mt-10 relative w-1/2 cursor-pointer rounded-full py-1 flex  items-center transform hover:translate-x-6  transition ease-in-out duration-500 hover:bg-blue-600 ">
            <a href="#" className="lowercase font-medium  ">
              launch app
            </a>
            <div className="md:w-12 md:h-12 h-8 w-8 bg-blue-600 rounded-full absolute -left-6 -z-10 "></div>
            <span>
              {" "}
              <HiArrowLongRight className="w-10 h-10" />{" "}
            </span>
          </div>

          <div className="space-x-2 mt-10 relative w-1/2 cursor-pointer rounded-full py-1 flex  items-center transform hover:translate-x-6  transition ease-in-out duration-500 hover:bg-blue-600 ">
            <a href="#" className="lowercase font-medium  ">
              source code
            </a>
            <div className="md:w-12 md:h-12 h-8 w-8 bg-blue-600 rounded-full absolute -left-6 -z-10 "></div>
            <span>
              {" "}
              <HiArrowLongRight className="w-10 h-10" />{" "}
            </span>
          </div>
        </div>
      </section>

      {/* image */}
      <div className=" bg-white">
        {/* image 1 */}
        <div className=" container mx-auto px-44 py-28 ">
          <img
            src={VodutvImage2}
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default SingleProjectPage
