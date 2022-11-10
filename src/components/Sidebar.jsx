import React from "react"
import { Link } from "react-router-dom"
import { links } from "../data"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import { useState } from "react"
const Sidebar = ({ closeSidebar }) => {
  return (
    <>
      {/* Mobile Navbar */}
      {/* {isSidebarOpen && (
        <div className="bg-black  md:hidden w-full h-screen flex flex-col justify-center items-center fixed top-0 bottom-0  z-10 ">
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
      )} */}
      <aside className="bg-black w-full min-h-screen z-50 fixed top-0 bottom-0 md:hidden    ">
        <div className="flex px-5 py-4  ">
          <Link to="/" onClick={closeSidebar}>
            <h4 className=" font-black text-3xl text-white tracking-widest md:hidden ">
              TMM7
            </h4>
          </Link>
          <button
            onClick={closeSidebar}
            className="block   ml-auto md:hidden z-50    "
          >
            {" "}
            <HiOutlineX className="w-8 h-8 text-white  " />
          </button>
        </div>
        <ul className=" lowercase text-3xl font-medium space-y-14 text-center flex flex-col justify-center items-center h-screen  ">
          {links.slice(1, 4).map((link) => {
            const { id, text, url } = link
            return (
              <li
                onClick={closeSidebar}
                key={id}
                className=" tracking-widest text-white/40 hover:line-through hover:text-white transition-all duration-300 ease-in-out "
              >
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
