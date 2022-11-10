import { Link } from "react-router-dom"
import { projects } from "../data"

const TopThreeProjects = () => {
  return (
    <>
      {projects.slice(0, 3).map((item) => {
        const { id, name, category, description, image, project_name_id } = item
        return (
          <article
            key={id}
            className=" mb-10 flex flex-col justify-between md:gap-20 md:mb-40 md:flex-row md:odd:flex-row-reverse group "
          >
            {/* hover:grayscale-0 */}
            {/* image */}
            <div className=" relative flex h-80 w-full  bg-red-100 md:h-[460px] md:w-[300px]  lg:w-2/5   ">
              <img
                src={image}
                alt=""
                className=" h-full w-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.02] transition duration-300 ease-in-out dark:grayscale-0  "
              />
              {/* transition duration-300 ease-in-out hover:scale-105 */}

              <span
                className="absolute right-0 -bottom-9 w-1/4 text-[3rem] font-bold tracking-widest text-white drop-shadow-lg md:bottom-0 md:-left-16 md:text-[6rem] "
                style={{ textShadow: "0 5px 10px rgb(0 0 0 / 30%)" }}
              >
                0{id}
              </span>
            </div>

            {/* Text content */}
            <div className=" mt-6 flex flex-col justify-between md:mt-0 px-5 md:w-1/2 md:px-0 ">
              <div className=" md:space-y-10 ">
                <h2
                  className=" text-2xl lowercase tracking-wider md:text-4xl md:font-black  md:text-white  lg:text-5xl group-hover:text-black dark:text-white dark:group-hover:text-white   transition duration-300 delay-100 ease-in-out "
                  style={{ WebkitTextStroke: "1px black" }}
                >
                  {/* hover:text-black */}
                  {name}
                </h2>
                <span className="inline-block pt-2 text-sm uppercase text-gray-400 md:pt-0 md:text-base ">
                  {category}
                </span>
                <p className="mt-5 hidden md:mt-0 md:grid md:text-lg dark:text-gray-400 ">
                  {" "}
                  {description}
                </p>
              </div>

              <Link
                to={`/projects/${project_name_id}`}
                className="ease-[cubic-bezier(.77, 0, 0.175, 1)] relative mt-12  flex  w-[190px] transform cursor-pointer  items-center space-x-2 py-1 text-lg font-semibold transition-all duration-500 hover:translate-x-4 md:mt-32 md:w-[200px] md:font-bold"
              >
                <span className=" before:ease-[cubic-bezier(.77, 0, 0.175, 1)] py-2 before:absolute before:-left-5 before:bottom-[6px] before:-z-10 before:block before:h-10 before:w-10 before:rounded-full before:bg-gray-200 dark:before:bg-circle before:transition-all before:duration-500 before:hover:w-full md:before:-left-6 md:before:-top-[3px] md:before:h-14 md:before:w-14   ">
                  view project
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
          </article>
        )
      })}
    </>
  )
}

export default TopThreeProjects
