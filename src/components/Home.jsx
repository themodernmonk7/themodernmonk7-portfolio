import { Link } from "react-router-dom"
import { Person, socialLinks } from "../data"
import Statue from "../assets/statue.png"
const Home = () => {
  const backgroundStatue = {
    backgroundImage: `URL(${Statue}) `,
    backgroundSize: "cover",
    backgroundPosition: "center ",
    height: "550px",
    width: "300px",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  }

  return (
    <>
      <section className=" container mx-auto flex justify-between items-center h-screen   relative xl:my10 md:px-20 xl:px-44 mt-20 ">
        <header className="flex flex-col-reverse md:flex-row justify-evenly md:justify-between h-screen md:h-min  ">
          {/* Left text  */}
          <div className=" flex flex-col justify-start w-full md:w-3/5 xl:w-1/2 px-5 md:px-0  ">
            <div className="  space-y-6 ">
              <h1 className=" text-[30px] md:text-4xl lg:text-5xl xl:text-6xl md:leading-[50px] lg:leading-[70px] xl:leading-[80px] font-bold lowercase ">
                {Person.tagline_text}
              </h1>
              <h2 className=" md:text-lg text-gray-400 ">{Person.short_bio}</h2>
            </div>

            <div className="flex flex-col items-start space-y-10  ">
              <Link
                to="/works"
                className="ease-[cubic-bezier(.77, 0, 0.175, 1)] relative mt-12  flex  w-[210px] transform cursor-pointer  items-center space-x-2 py-1 text-lg font-semibold transition-all duration-500 hover:translate-x-4 xl:mt-32 md:w-[210px] md:font-bold"
              >
                <span className=" before:ease-[cubic-bezier(.77, 0, 0.175, 1)] py-2 before:absolute before:-left-5 before:bottom-[6px] before:-z-10 before:block before:h-10 before:w-10 before:rounded-full before:bg-gray-200 dark:before:bg-circle before:transition-all before:duration-500 before:hover:w-full md:before:-left-6 md:before:-top-[3px] md:before:h-14 md:before:w-14   ">
                  view all works
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
          </div>
          {/* Right image */}
          <div>
            <div className=" flex justify-center relative ">
              <img
                src={Person.image[1]}
                alt={Person.name}
                className=" w-44 w h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-80 xl:h-80 object-cover rounded-full xl:hidden animate-float "
              />
              <div
                className=" w-40 h-40 animate-float hidden xl:block "
                style={backgroundStatue}
              ></div>
              {/* <div className="w-56 h-56 md:w-60 md:h-60 rounded-full  bg-blue-700 drop-shadow-xl dark:bg-white absolute -top-6 md:-top-4 blur3xl -z-10 animatepulse  "></div> */}

              {/* small size cross for mobile cross */}
              <span className="absolute -top-8 xl:hidden -z-10 lg:top-0 lg:scale-125  ">
                <svg
                  width="320"
                  height="260"
                  viewBox="0 0 122 137"
                  className="  overflow-visible "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="122" height="137" fill="none" />
                  <rect
                    x="110.06"
                    width="20"
                    height="165"
                    transform="rotate(45 110.06 0)"
                    className=" dark:fill-white/60 "
                    fill="black"
                  />
                  <rect
                    x="0.1"
                    y="10.2847"
                    width="20"
                    height="165"
                    transform="rotate(-42 1 10.2847)"
                    className=" dark:fill-white/60 "
                    fill="black"
                  />
                </svg>
              </span>

              {/* Medium size for large screen cross */}
              <span className=" absolute   -z-10 hidden xl:block  ">
                {/* -top-12 */}
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 122 137"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="122" height="137" fill="none" />
                  <rect
                    x="110.06"
                    width="14"
                    height="155"
                    transform="rotate(45 106.06 0)"
                    className=" dark:fill-white/60 "
                    fill="black"
                  />
                  <rect
                    x="0.1"
                    y="10.2847"
                    width="14"
                    height="160"
                    transform="rotate(-45 3 10.2847)"
                    className=" dark:fill-white/60 "
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
        </header>

        {/* Social icons */}
        {/* <div className="flex-col space-y-12 absolute pb-20 xl:-left-16 -left-5  hidden lg:flex ">
          {socialLinks.map((item) => {
            return (
              <a
                href={item.url}
                key={item.id}
                className="hover:bg-gray-200 hover:text-black grid place-items-center px-4 py-4 rounded-full hover:scale-90 transition-all duration-200  ease-in "
              >
                {" "}
                {item.icon}
              </a>
            )
          })}
        </div> */}
      </section>
    </>
  )
}

export default Home
