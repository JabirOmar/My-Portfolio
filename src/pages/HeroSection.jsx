import React from "react";
import "../assets/css/animations.css";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className=" relative h-screen pt-[68px] flex sm:flex-col-reverse md:flex-row ">
      <div className=" sm:w-full md:w-[50%] sm:h-[60%] md:h-full flex flex-col justify-center sm:px-[5%] md:pl-[4%]">
        <p className=" hello_text text-gray-400 text-xl">Hello, I am</p>
        <p className=" text-4xl mt-3 my_name">Jabir Omar</p>
        <p className=" mt-5 little_intro">
          A software developer with a passion for creating innovative solutions.
          Specialed in web development, and I love turning complex problems into
          elegant, user-friendly software.
        </p>

        <div className=" mt-5 ">
          <button className=" contact_button px-5 py-2 rounded-md bg-[#ffd700] text-black  ">
            Contact with me
          </button>
        </div>
      </div>

      <div className=" sm:w-full md:w-[50%] sm:h-[40%] md:h-full flex justify-center items-center">
        <div className=" labtop sm:w-[90%] sm:h-[90%] md:w-[80%] md:h-[80%] max-h-[350px] rounded-md"></div>
      </div>

      <div className=" absolute sm:bottom-[15px] md:bottom-[10%] w-full flex justify-center ">
        <BsChevronDoubleDown className=" relative indicator text-xl cursor-pointer box-content p-3" />
      </div>
    </section>
  );
}
