import React from "react"
import { useParams } from "react-router-dom"
import VodutvImage2 from "../assets/Vodutv.png"
import { projects } from "../data"

const SingleProject = () => {
  const { projectID } = useParams()
  const item = projects.find((project) => project.project_name_id === projectID)
  const {
    image,
    name,
    stack_category,
    about,
    platform,
    category,
    developer,
    stack,
    githubLink,
    liveLink,
  } = item

  const backgroundImageStyle = {
    backgroundImage: `URL(${image}) `,
    backgroundSize: "cover",
    backgroundPosition: "center ",
    height: "100vh",
    width: "",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  }
  return (
    <>
      <div className="relative " style={backgroundImageStyle}>
        <div className="md:space-y-10 space-y-5 xl:w-1/2 md:h-1/3 h-[350px] w-full text-center xl:pl-80 absolute bottom-0 flex flex-col justify-center transform bg-gradient-to-b from-transparent via-black/80 to-black ">
          <h2
            className="  text-2xl md:text-3xl xl:text-5xl md:font-black text-white tracking-wider "
            style={{ WebkitTextStroke: "1px white" }}
          >
            {name}
          </h2>
          <span className="uppercase inline-block text-white ">
            {" "}
            {stack_category}{" "}
          </span>
        </div>
        <span className="w-[1px] h-24 md:h-12 bg-white  absolute inset-x-0 bottom-0 animate-bounce xl:hidden  m-auto "></span>
      </div>

      <section className="container mx-auto md:px-20 px-5 md:my-28 my-10 xl:px-44  ">
        {/* About Project */}

        <div className=" space-y-16 ">
          <h4 className=" text-2xl md:text-5xl font-semibold ">
            About the project.
          </h4>
          <p className="text-gray-600 dark:text-gray-400 md:text-xl md:w-3/4 leading-[30px] ">
            {about}
          </p>

          <div className="flex md:flex-row flex-col gap-10">
            <div className=" space-y-2">
              <h4 className=" font-semibold text-gray-600">Platform</h4>
              <p className=" text-gray-400 "> {platform} </p>
            </div>

            <div className=" space-y-2">
              <h4 className="font-semibold text-gray-600">Category</h4>
              <p className=" text-gray-400 "> {category} </p>
            </div>

            <div className=" space-y-2">
              <h4 className="font-semibold text-gray-600">Developer</h4>
              <p className=" text-gray-400 "> {developer} </p>
            </div>
          </div>

          <div className=" space-y-2">
            <h4 className="font-semibold text-gray-600">Technologies Used</h4>
            <div className=" space-x-8">
              {stack.map((item, index) => {
                return (
                  <span key={index} className=" text-gray-400">
                    {" "}
                    {item}{" "}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 mt-10 px-5 md:px-0">
          <a
            href={liveLink}
            target="_blank"
            className="ease-[cubic-bezier(.77, 0, 0.175, 1)] relative mt-12  flex  w-[170px] transform cursor-pointer  items-center space-x-2 py-1 font-semibold transition-all duration-500 hover:translate-x-4 md:mt-32 md:w-[180px] md:font-bold"
          >
            <span className=" before:ease-[cubic-bezier(.77, 0, 0.175, 1)] py-2 before:absolute before:-left-5 before:bottom-[5px] before:-z-10 before:block before:h-10 before:w-10 before:rounded-full before:bg-gray-200 dark:before:bg-circle_for_primary before:transition-all before:duration-500 before:hover:w-full md:before:-left-6 md:before:-bottom-[3px] md:before:h-14 md:before:w-14   ">
              launch app
              <span className="absolute bottom-2 ml-2">
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
          </a>

          <a
            href={githubLink}
            target="_blank"
            className="ease-[cubic-bezier(.77, 0, 0.175, 1)] relative mt-12  flex  w-[170px] transform cursor-pointer  items-center space-x-2 py-1 font-semibold transition-all duration-500 hover:translate-x-4 md:mt-32 md:w-[180px] md:font-bold"
          >
            <span className=" before:ease-[cubic-bezier(.77, 0, 0.175, 1)] py-2 before:absolute before:-left-5 before:bottom-[5px] before:-z-10 before:block before:h-10 before:w-10 before:rounded-full before:bg-gray-200 dark:before:bg-circle_for_primary before:transition-all before:duration-500 before:hover:w-full md:before:-left-6 md:before:-bottom-[3px] md:before:h-14 md:before:w-14   ">
              source code
              <span className="absolute bottom-2 ml-2">
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
          </a>
        </div>
      </section>

      {/* image */}
      {/* <section className=" bg-blue-200 my-20  md:py-20 flex flex-col gap-10 ">
        <div className="container mx-auto p-[10%] md:p-0  md:px-20 xl:px-44 flex justify-center items-center bg-yellow-200 ">
          <img
            src={VodutvImage2}
            alt=""
            className=" w-full h-full object-cover "
          />
        </div>
        <div className="container mx-auto p-[10%] md:p-0  md:px-20 xl:px-44 flex justify-center items-center ">
          <img
            src={VodutvImage2}
            alt=""
            className=" w-full h-full object-cover "
          />
        </div>
      </section> */}

      <section className=" bg-blue-200 flex flex-col ">
        <div className="  bg-black ">
          <div className=" container mx-auto p-[10%] md:p-0  md:px-20 xl:px-44 flex justify-center items-center  md:py-28 ">
            <img
              src={VodutvImage2}
              alt=""
              className=" w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProject
