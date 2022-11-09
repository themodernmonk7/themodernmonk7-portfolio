import React from "react"
import { Link } from "react-router-dom"
import { links } from "../data"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { useEffect } from "react"
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // const [theme, setTheme] = useState("light")

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.add("dark")
  //   }
  // }, [theme])

  // const toggleDarkMode = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <>
      <nav className=" container mx-auto  z-30 fixed inset-x-0 top-0 text-gray-600 py-4 md:px-20 px-5 ">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center ">
          <Link to="/">
            <h4 className=" font-black text-3xl md:text-4xl text-black dark:text-white tracking-widest ">
              TMM7
            </h4>
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
            <HiOutlineMenuAlt3 className="w-8 h-8 text-black dark:text-white " />
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
