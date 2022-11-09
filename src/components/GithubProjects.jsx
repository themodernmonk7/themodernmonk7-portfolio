import React from "react"
import { gitHubProjects } from "../data"

const GithubProjects = () => {
  return (
    <section className=" container mx-auto xl:px-20 md:px-20 px-5  mb-28 space-y-12 ">
      <div className="space-y-12 lg:w-2/3 ">
        <h4 className="text-2xl md:text-4xl font-semibold">GitHub Projects.</h4>
        <p className="text-gray-600 text-base md:text-xl  ">
          Here are some of my projects that I created during my spare time. I
          constantly keep on improving my skills by making these fun projects.
          These projects are available on my github repository
        </p>
      </div>
      {gitHubProjects.map((item) => {
        const { id, projectName, githubLink, liveLink } = item
        return (
          <div key={id} className=" space-y-12 lg:w-2/3 ">
            <div className="md:space-x-8 space-x-2 ">
              <span className="text-gray-400 text-xs "> / 0{id}</span>
              <a href={githubLink} className=" md:pl-4 font-mono ">
                src
              </a>
              <a
                href={liveLink}
                className="md:text-xl font-medium underline hover:no-underline lowercase "
              >
                {projectName}
              </a>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default GithubProjects
