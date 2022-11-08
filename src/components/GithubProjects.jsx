import React from "react"

const GithubProjects = () => {
  return (
    <section className=" container mx-auto xl:px-20 md:px-20 px-5  mb-28 space-y-12 ">
      <div className="space-y-8 lg:w-2/3 ">
        <h4 className="text-2xl md:text-4xl font-semibold">GitHub Projects.</h4>
        <p className="text-gray-600 text-base md:text-xl  ">
          Here are some of my projects that I created during my spare time. I
          constantly keep on improving my skills by making these fun projects.
          These projects are available on my github repository
        </p>
      </div>

      <div className=" space-y-12 lg:w-2/3 ">
        <div className="md:space-x-8 space-x-2 ">
          <span className="text-gray-400 text-xs "> / 01</span>
          <a href="" className="underline md:pl-4 ">
            {" "}
            src{" "}
          </a>
          <a
            href="#"
            className="md:text-2xl font-medium underline hover:no-underline"
          >
            random quote generator
          </a>
        </div>
        <div className="md:space-x-8 space-x-2 ">
          <span className="text-gray-400 text-xs "> / 01</span>
          <a href="" className="underline md:pl-4 ">
            {" "}
            src{" "}
          </a>
          <a
            href="#"
            className="md:text-2xl font-medium underline hover:no-underline"
          >
            random quote generator
          </a>
        </div>
        <div className="md:space-x-8 space-x-2 ">
          <span className="text-gray-400 text-xs "> / 01</span>
          <a href="" className="underline md:pl-4 ">
            {" "}
            src{" "}
          </a>
          <a
            href="#"
            className="md:text-2xl font-medium underline hover:no-underline"
          >
            random quote generator
          </a>
        </div>
      </div>
    </section>
  )
}

export default GithubProjects
