import React from "react"
import { socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center space-y-6 ">
      <div className=" flex space-x-10 justify-center items-center  ">
        {socialLinks.slice(0, 3).map((item) => {
          const { id, url, icon } = item
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              className=" hover:bg-gray-200 hover:text-black rounded-full px-2 py-2 text-center transition-all ease-out duration-300 delay-100 "
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
      <div className=" md:flex justify-between py-1 text-xs text-gray-300/40 container mx-auto hidden ">
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
