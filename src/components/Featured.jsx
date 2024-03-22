/* eslint-disable no-unused-vars */
import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";
const Featured = () => {
  // const [isHover, setIsHover] = useState(false);
  const cards = [useAnimation(), useAnimation()];
  const HandleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const HandleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-section  className="w-full py-10 pb-20">
      <div className="px-10 ">
        <h1 className="text-6xl  pt-10">Fearured Projects</h1>
      </div>
      <div className="w-full h-[1px] bg-gray-500 my-10"></div>
      <div className="px-14">
        <div className="cards w-full  flex mt-4 gap-10 py-10">
          <motion.div
            onHoverStart={() => HandleHover(0)}
            onHoverEnd={() => HandleHoverEnd(0)}
            // onMouseEnter={() => setIsHover(true)}
            // onMouseLeave={() => setIsHover(false)}
            className="card w-1/2    "
          >
            <div className="flex gap-1 items-center ">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <h1 className="uppercase text-md font-semibold ">Pname</h1>
            </div>
            <div className="w-full h-full mt-4  relative  ">
              <h1 className="font-semibold overflow-hidden flex text-yellow-600 absolute z-10 text-6xl left-full  -translate-x-1/2 -translate-y-1/2 top-1/2  ">
                {"FYDE".split("").map((item, index) => {
                  return (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      // animate={isHover ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.04,
                      }}
                      key={index}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </h1>
              <div className="cardContainer w-full   rounded-xl h-full overflow-hidden ">
                <img
                  className="w-full h-full  bg-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => HandleHover(1)}
            onHoverEnd={() => HandleHoverEnd(1)}
            className="card w-1/2   "
          >
            <div className="flex gap-1 items-center ">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <h1 className="uppercase text-md font-semibold ">Pname</h1>
            </div>
            <div className="w-full h-full mt-4  relative  ">
              <h1 className="font-semibold flex overflow-hidden text-yellow-600 absolute z-10 text-6xl right-full  translate-x-1/2 -translate-y-1/2 top-1/2  ">
                {"VISE".split("").map((item, index) => {
                  return (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      // animate={isHover ? { y: "0" } : { y: "100%" }}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.04,
                      }}
                      key={index}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </h1>
              <div className="cardContainer w-full   rounded-xl h-full overflow-hidden border-[1px] border-zinc-500 ">
                <img
                  className="w-full h-full  bg-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
