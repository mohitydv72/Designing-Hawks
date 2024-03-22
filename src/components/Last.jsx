/* eslint-disable no-unused-vars */
import React from "react";

const Last = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.1"  className="w-full h-screen  px-10  flex gap-5  items-center ">
    
        <div className="relative container w-1/2 bg-[#004d43] h-[60vh] rounded-xl flex items-center justify-center">
            <h1 className="font-[Gerald] text-6xl text-yellow-400 text-center  ">Designing Hawks</h1>
            <button className="absolute bottom-10 left-8 border-2 border-white py-2.5 px-4 rounded-full text-yellow-500">&copy;2023-2024</button>
        </div>
        <div className="container w-1/2  h-[60vh] rounded-xl flex gap-5  ">
            <div className="relative card w-1/2 bg-zinc-500 h-[60vh] rounded-xl flex items-center justify-center">
            <h1 className="font-[Gerald] text-4xl text-white text-center  ">Cluch</h1>
            <button className="absolute bottom-10 left-8 border-2 border-white py-2.5 px-4 rounded-full text-yellow-500 uppercase">Rating 5.0 On Cluch</button>
            </div>
            <div className="relative card w-1/2 bg-green-800 h-[60vh] rounded-xl flex items-center justify-center">
            <h1 className="font-[Gerald] text-4xl text-white text-center  ">Designing Hawks</h1>
            <button className="absolute bottom-10 left-8 border-2 border-white py-2.5 px-4 rounded-full text-yellow-500">&copy;2023-2024</button>
            </div>
        </div>
 
    </div>
  );
};

export default Last;
