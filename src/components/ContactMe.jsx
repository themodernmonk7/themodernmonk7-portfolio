import React from "react"
import SauravImage from "../assets/Saurav2.png"
const ContactMe = () => {
  return (
    <>
      <section className=" grid place-items-center bg-red-100 h-screen container mx-auto ">
        <div className="flex w-full h-full bg-blue-100 justify-between">
          {/* Left */}
          <div className=" flex flex-col justify-between ">
            <div className=" space-y-4 ">
              <p className="text-xl">Kumar Avishek (Saurav) </p>
              <h2 className="font-arimo uppercase text-[79px] w-[400px] text-left   leading-[79px]">
                Work with me
              </h2>
            </div>
            <div className=" text-2xl space-y-4 ">
              <h4>123 Anywhere St., Any City, ST 12345</h4>
              <h4>123-456-7890</h4>
              <h4>themodernmonk7@gmail.com</h4>
            </div>
          </div>
          {/* right */}
          <img
            src={SauravImage}
            alt=""
            className="w-[336px] h-[449px] object-cover border bg-gray-300 shadow-xl rotate-12 "
          />
        </div>
      </section>
    </>
  )
}

export default ContactMe
