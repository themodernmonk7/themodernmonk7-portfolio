import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className="container mx-auto grid place-items-center h-screen  ">
      <div className=" space-y-20  text-center ">
        <div className=" space-y-4 text-gray-400">
          <h4 className="text-8xl font-black  ">404</h4>
          <p className="text-2xl">Page not found.</p>
        </div>
        <button className="border border-black bg-black text-white  px-6 py-3 uppercase font-semibold hover:bg-white hover:text-black  transition-all duration-300 ease-in ">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </section>
  )
}

export default ErrorPage
