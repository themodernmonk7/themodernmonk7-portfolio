import React from "react"
import { Link } from "react-router-dom"
import { links } from "../data"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import { useState } from "react"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <nav className=" container mx-auto  z-10 fixed inset-x-0 top-0 text-gray-600 py-4 px-20 ">
      <div className="flex ">
        <Link onClick={closeSidebar} to="/">
          <h4 className=" font-black text-3xl text-black tracking-widest md:hidden ">
            TMM7
          </h4>
        </Link>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="block   ml-auto md:hidden z-50  "
        >
          {" "}
          {isSidebarOpen ? (
            <HiOutlineX className="w-8 h-8 text-black " />
          ) : (
            <HiOutlineMenuAlt3 className="w-8 h-8 text-black " />
          )}
        </button>
      </div>
      {/* Desktop Navbar */}
      <div className="md:flex justify-between items-center hidden ">
        <Link to="/">
          <h4 className=" font-black text-4xl text-black tracking-widest ">
            TMM7
          </h4>
        </Link>
        <ul className="flex space-x-10 ">
          {links.slice(1, 4).map((link) => {
            const { id, text, url } = link
            return (
              <li key={id} className=" tracking-widest  uppercase">
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* Mobile Navbar */}

      {isSidebarOpen && (
        <div className="bg-black  md:hidden w-full h-screen flex flex-col justify-center items-center bg-fixed ">
          <ul
            onClick={closeSidebar}
            className=" lowercase text-3xl font-medium space-y-14 text-center  "
          >
            {links.slice(1, 4).map((link) => {
              const { id, text, url } = link
              return (
                <li
                  key={id}
                  className=" tracking-widest text-white/40 hover:line-through hover:text-white "
                >
                  <Link to={url}>{text}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
