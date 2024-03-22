/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="footer flex bg-zinc-900 pb-3 px-10 pt-20 w-full h-screen">
      <div className="w-1/2  flex flex-col justify-between h-full">
        <div className="text-[7vw]  ">
          <h1 className="leading-[7vw] tracking-tighter font-semibold ">
            EYE-
          </h1>
          <h1 className="leading-[7vw] tracking-[-0.11em] font-semibold ">
            OPENING
          </h1>
        </div>
        <div>
          <h1 className="text-[3vw] leading-[7vw] tracking-tighter font-semibold ">
            DESIGNING HAWKS
          </h1>
        </div>
      </div>
      <div className="relative w-1/2">
        <div className="w-1/2 text-[7vw]  ">
          <h1 className="leading-[7vw] tracking-[-0.07em] font-semibold ">
            PRESENTATIONS
          </h1>
        </div>
        <div className=" flex flex-col  gap-2 pl-2 py-10">
          <h1 className="pb-6 ">Our handles :</h1>
          {["Instagram", "Facebook", "Twitter", "YouTube", "Linkedin"].map(
            (items, index) => (
              <a key={index} className=" cursor-pointer  underline">
                {items}
              </a>
            )
          )}
        </div>
        <div className="absolute bottom-10 flex justify-between w-full text-gray-600">
            <h1>© Designing Hawks 2024. Legal Terms</h1>
            <h1>Website by Designing Hawks</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
