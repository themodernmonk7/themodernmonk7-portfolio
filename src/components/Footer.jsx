import React from "react"
import { socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10 flex flex-col items-center space-y-6 ">
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
        &copy; themodernmonk7{" "}
      </span>
    </footer>
  )
}

export default Footer
