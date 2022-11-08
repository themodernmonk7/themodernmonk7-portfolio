import { Link } from "react-router-dom"
import { Person } from "../data"

const Home = () => {
  return (
    <>
      <section className=" container mx-auto flex flex-col-reverse xl:flex-row md:justify-between justify-evenly items-center h-screen   relative md:my-32 md:px-20 mt-10 ">
        {/* justify-around md:justify-between items-center */}
        {/* Left text  */}
        <div className=" flex flex-col justify-start w-full xl:w-1/2 px-5 md:px-0  ">
          <div className="  space-y-6 ">
            <h1 className=" text-[30px] text-ellipsis text-left  md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold lowercase ">
              {Person.tagline_text}
            </h1>
            <h2 className=" md:text-lg text-gray-400 ">{Person.short_bio}</h2>
          </div>

          <div className="flex flex-col items-start space-y-10  ">
            <Link
              to="/works"
              className="ease-[cubic-bezier(.77, 0, 0.175, 1)] relative mt-12  flex  w-[210px] transform cursor-pointer  items-center space-x-2 py-1 text-lg font-semibold transition-all duration-500 hover:translate-x-4 md:mt-32 md:w-[230px] md:font-bold"
            >
              <span className=" before:ease-[cubic-bezier(.77, 0, 0.175, 1)] py-2 before:absolute before:-left-5 before:bottom-[6px] before:-z-10 before:block before:h-10 before:w-10 before:rounded-full before:bg-gray-200 before:transition-all before:duration-500 before:hover:w-full md:before:-left-6 md:before:top-0 md:before:h-14 md:before:w-14   ">
                view all works
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
            </Link>
          </div>
        </div>
        {/* Right image */}
        <div className=" relative flex justify-center items-center ">
          <img
            src={Person.image[1]}
            alt=""
            className=" w-44 w h-44 md:w-80 md:h-80 object-cover rounded-full "
          />
          <div className="w-52 h-52 md:w-full md:h-full rounded-full animate-pulse bg-blue-700 absolute blur-3xl -z-10 "></div>

          {/* small size cross for mobile cross */}
          <span className="absolute md:-left-3 md:bottom-3 md:w-96 md:h-96 -z-10 md:hidden  px-5 py-5 ">
            <svg
              width="200"
              height="230"
              viewBox="0 0 122 137"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="122" height="137" fill="none" />
              <rect
                x="106.06"
                width="17"
                height="165"
                transform="rotate(40 106.06 0)"
                fill="black"
              />
              <rect
                x="3"
                y="10.2847"
                width="17"
                height="165"
                transform="rotate(-40 3 10.2847)"
                fill="black"
              />
            </svg>
          </span>

          {/* Medium size for large screen cross */}
          <span className=" absolute  -z-10 hidden xl:grid  ">
            {/* absolute -left-3 bottom-3 w-96 h-96 */}
            <svg
              width="450"
              height="450"
              viewBox="0 0 122 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="122" height="137" fill="none" />
              <rect
                x="106.06"
                width="14"
                height="165"
                transform="rotate(40 106.06 0)"
                fill="black"
              />
              <rect
                x="3"
                y="10.2847"
                width="14"
                height="165"
                transform="rotate(-40 3 10.2847)"
                fill="black"
              />
            </svg>
          </span>
        </div>

        {/* Social icons */}
        {/* <div className="flex hidden flex-col space-y-12 absolute -left-10  bottom-1/3 ">
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
        </div> */}
      </section>
    </>
  )
}

export default Home
