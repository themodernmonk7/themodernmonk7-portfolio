import { IoMdSend } from "react-icons/io"

const ContactForm = () => {
  return (
    <>
      <section className="container mx-auto my-40 px-5 md:px-20 ">
        <form className=" md:space-y-20 space-y-12">
          <h4 className="md:text-6xl text-4xl font-semibold">Get in touch.</h4>
          <p className="text-lg">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>
          <div className="flex flex-col space-y-6 ">
            <input
              type="text"
              className="border-b-2 border-gray-300 py-4 outline-none placeholder:text-gray-500 placeholder:font-medium focus:border-black resize-none transition-all duration-500 ease-in-out delay-75 "
              placeholder="Your Name"
            />

            <input
              type="email"
              className="border-b-2 border-gray-300 py-4 outline-none placeholder:text-gray-500 placeholder:font-medium focus:border-black resize-none transition-all duration-500 ease-in-out delay-75"
              placeholder="Your email"
            />

            <input
              type="text"
              className="border-b-2 border-gray-300 py-4 outline-none placeholder:text-gray-500 placeholder:font-medium focus:border-black resize-none transition-all duration-500 ease-in-out delay-75 "
              placeholder="Subject"
            />

            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Message"
              className="border-b-2 border-gray-300 py-4 outline-none placeholder:text-gray-500 placeholder:font-medium focus:border-black resize-none transition-all duration-500 ease-in-out delay-75 "
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="border border-black bg-black text-white  px-6 py-3 uppercase font-semibold hover:bg-white hover:text-black flex justify-between items-center  transition-all duration-500 ease-in   ">
              Send message
              <span>
                {" "}
                <IoMdSend className="w-5 h-5 ml-2 " />{" "}
              </span>
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ContactForm
