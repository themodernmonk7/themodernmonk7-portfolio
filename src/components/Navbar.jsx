import React from "react"
import { Link } from "react-router-dom"
import { links, Person } from "../data"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { useState } from "react"
import Sidebar from "./Sidebar"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <>
      <nav className=" container mx-auto  z-30 fixed inset-x-0 top-0 text-gray-600 py-4 xl:mt4 px-5 xl:px-0 border-b bg-white/90 ">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center ">
          <Link to="/">
            {/* <h4 className=" font-black text-3xl md:text-4xl text-black dark:text-white tracking-widest ">
              TMM7
            </h4> */}
            <img
              src={Person.image[2]}
              alt={Person.name}
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full "
            />
          </Link>
          <ul className="md:flex space-x-10 hidden ">
            {links.slice(1, 4).map((link) => {
              const { id, text, url } = link
              return (
                <li
                  key={id}
                  className=" tracking-widest  uppercase text-black dark:text-white"
                >
                  <Link to={url}>{text}</Link>
                </li>
              )
            })}
          </ul>
          <button
            onClick={openSidebar}
            className="block   ml-auto md:hidden z-50  "
          >
            {" "}
            <HiOutlineMenuAlt3 className="w-8 h-8 text-black dark:text-white  " />
          </button>
          {/* <button onClick={toggleDarkMode} className="">
            dark mode
          </button> */}
        </div>
      </nav>
      {isSidebarOpen ? <Sidebar closeSidebar={closeSidebar} /> : null}
    </>
  )
}

export default Navbar
