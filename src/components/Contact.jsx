import React from "react";
import jimChiggins from "../assets/jimChiggins.jpg";

const Contact = () => {
  return (
    <>
      <div name="contact" className="w-full h-screen scroll-smooth pt-5">
        <div className="w-screen md:h-screen sm:w-full flex items-center justify-start">
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-1">
            <div className="col-span-2">
              <img src={jimChiggins} alt="Jim Chiggins Owner" />
              <p>Owner: Jim Chiggins</p>
            </div>
            <div className="max-w-[1240px] w-full flex justify-center items-center">
              <p className="pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quia laudantium perspiciatis, dolores delectus
                molestiae aliquid vitae eligendi tempore quas quis itaque aut
                reiciendis enim vero repellat maiores, ex exercitationem.
              </p>
            </div>
          </div>
        </div>
        <div
          name="contact"
          className="w-full h-screen flex justify-center items-center p-4 bg-green-800 pt-10"
        >
          <form
            method="POST"
            action="https://getform.io/f/45a03aee-398d-4319-bd12-edcbef236059"
            className="flex flex-col max-w-[600px] w-full
        "
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-white">
                Contact
              </p>
              <p className="text-white py-4">
                // Submit the Form to get in touch
              </p>
            </div>
            <input
              className="p-2"
              type="text"
              placeholder="Name..."
              name="name"
              aria-required
            />
            <input
              className="my-4 p-2 "
              type="text"
              placeholder="email..."
              name="email"
              required
            />
            <textarea
              name="message"
              rows="10"
              className=" p-2"
              placeholder="message..."
              required
            ></textarea>
            <button className="text-white border-2 hover:bg-yellow-500 hover:border-yellow-500 ease-in-out duration-300 px-4 py-3 my-8 mx-auto flex items-center">
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
