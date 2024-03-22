/* eslint-disable no-unused-vars */
import React from "react";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1" className="p-20 rounded-3xl  w-full bg-lime-500 text-black">
      <h1 className='text-[4vw] leading-[4vw] font-["NeueMontreal-Regular"] tracking-tight pb-16'>
        {/* In today competitive landscape, a strong brand identity is essential. */}
        At Designing Hawks, we are a team of passionate designers dedicated to
        helping businesses like yours soar above the competition.
      </h1>

      <div className="pt-6 flex border-t-[1px] border-zinc-700 pb-20  text-md">
        <div className="w-1/2">
          <h1>What you can expect:</h1>
        </div>
        <div className="w-1/4 flex flex-col gap-10">
          {[
            "Our keen eye for detail and strategic approach ensure that your brand messaging resonates with your target audience. We specialize in logo design, branding, and website creation, crafting unique visual experiences that leave a lasting impression",
            "Our passionate team of designers specializes in creating impactful hawk visuals that leave a lasting impression. We understand the power and symbolism of the hawk, and use it to effectively convey your brand message. Whether you need a logo, website graphics, or marketing materials, we have the expertise to bring your vision to life.",
          ].map((items, index) => (
            <h1 key={index}>{items}</h1>
          ))}
        </div>
        <div className="w-1/4 pl-32 flex flex-col  gap-2 ">
          <h1 className="pb-6 ">Our handles :</h1>
          {["Instagram", "Facebook", "Twitter", "YouTube", "Linkedin"].map(
            (items, index) => (
              <a key={index} className=" cursor-pointer  underline">
                {items}
              </a>
            )
          )}
        </div>
      </div>

      <div className=" border-t-[1px] border-gray-500 pt-4 flex">
            <div className="w-1/2">
                <h1 className="text-7xl">Our approach :</h1>
                <button className="bg-black px-6 py-4 mt-6 text-white rounded-full flex items-center gap-8 hover:bg-gray-800 ">
                    <h1>Read More</h1>
                    <GoDotFill />
                </button>
            </div>
            <div className=" h-[70vh] rounded-lg w-1/2 overflow-hidden ">
                    <img  className="w-full h-full" src="https://th.bing.com/th/id/OIG3.PupzkagNf5asAGasnd9N?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div></div>
      </div>
    </div>
  );
};

export default About;
