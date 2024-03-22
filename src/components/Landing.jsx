/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.9" 
    className="bg-zinc-900 pt-40 h-screen w-full">
      <div className="textcontent  px-20 ">
        {[
          "soar above",
          "the competition",
          "with captivating",
          "hawk imagery",
        ].map((items, index) => (
          <div key={index} className="masking ">
            <div className="flex  w-fit overflow-hidden  ">
              {index === 0 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1] , duration:1} } className="annime w-[9vw] relative top-[1vw] mr-[1vw] rounded-md   bg-red-700 h-[5vw] "></motion.div>
              )}
              <h1 className='font-["BEBASNEUE  REGULAR"] text-[7vw]   leading-[6vw] tracking-tighter font-medium uppercase   '>
                {items}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="bordertext border-t-[1px] border-zinc-600 mt-24 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p
            key={index}
            className="text-md tracking-tight font-light leading-none"
          >
            {items}
          </p>
        ))}
        <div className="startbtn flex items-center gap-2 ">
          <div className="btn">
            <button className="border-[1px] border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-">
              Get started
            </button>
          </div>
          <div className="arrow w-8 h-8 rounded-full border-white border-[1px] flex justify-center items-center  hover:bg-white hover:text-black">
            <FaArrowRight className="-rotate-45  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
