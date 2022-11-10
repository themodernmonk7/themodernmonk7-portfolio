import React from "react"
import { socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col justify-center pt-8 items-center space-y-6 ">
      <div className=" flex space-x-6 justify-center items-center  ">
        {socialLinks.map((item) => {
          const { id, url, icon } = item
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              className=" hover:bg-gray-200 hover:text-black text-center rounded-full px-4 py-4 hover:scale-90 transition-all duration-200  ease-in "
            >
              {icon}
            </a>
          )
        })}
      </div>
      <span className=" pt-8 tracking-widest text-xs ">
        {" "}
        &copy; 2022 themodernmonk7{" "}
      </span>
      <div className=" md:flex justify-between py-1 text-xs text-gray-300/40 container mx-auto hidden md:px-20 xl:px-44 ">
        <span>
          Code - <a href="https://twitter.com/themodernmonk7">themodernmonk7</a>{" "}
        </span>
        <span>
          Design -{" "}
          <a href="https://www.behance.net/gallery/63574251/Personal-Portfolio-Website-Design">
            Behance
          </a>{" "}
        </span>
      </div>
    </footer>
  )
}

export default Footer
