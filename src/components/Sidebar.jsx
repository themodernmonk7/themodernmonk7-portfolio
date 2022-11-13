import React from "react"
import { Link } from "react-router-dom"
import { links, Person } from "../data"
import { HiOutlineX } from "react-icons/hi"
const Sidebar = ({ closeSidebar }) => {
  return (
    <>
      <aside className="bg-black w-full min-h-screen z-50 fixed top-0 bottom-0 md:hidden    ">
        <div className="flex px-5 py-4  ">
          <Link to="/" onClick={closeSidebar}>
            <img
              src={Person.image[2]}
              alt={Person.name}
              className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full "
            />
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
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <Link
                onClick={closeSidebar}
                key={id}
                className=" tracking-widest text-white/40 hover:text-white transition-all duration-300 ease-in-out relative "
                to={url}
              >
                <span className=" absolute text-4xl left-0 right-0 scale-150 opacity-0 hover:opacity-30 font-bold ">
                  0{id}
                </span>
                {text}
              </Link>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
