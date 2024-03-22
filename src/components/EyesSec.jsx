/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

const EyesSec = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;
      // console.log(x,y);
      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;
      let angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setRotate(angle - 180);
      // console.log(rotate);
    });
  });

  return (
    <div  className="eyes h-screen w-full overflow-hidden ">
      <div data-scroll  data-scroll-speed="-0.7" className='w-full h-full bg-blend-multiply bg-center bg-cover bg-[url("https://th.bing.com/th/id/OIG2.Fr7epYyw8rOjqzD88mHE?pid=ImgGn")] '>
        <div className=" bg-black bg-opacity-30 w-full h-full relative">
          <div className="absolute flex gap-10   top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]">
            <div className="relative h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex justify-center items-center ">
              <div className="absolute top-1/2 left-1/2  -translate-x-[50%] text-zinc-200 z-10 text-center pb-2 ">
                Watch
              </div>
              <div className="relative h-2/3 w-2/3  bg-zinc-900 rounded-full flex justify-center items-center ">
                <div
                  style={{
                    transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10   "
                >
                  <div className="h-8 w-8 ml-1  bg-zinc-100 rounded-full "></div>
                </div>
              </div>
            </div>

            <div className="relative h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex justify-center items-center ">
            <div className="absolute top-1/2 left-1/2  -translate-x-[50%] text-zinc-200 z-10 text-center pb-2 ">
                Watch
              </div>
              <div className=" relative h-2/3 w-2/3  bg-zinc-900 rounded-full flex justify-center items-center ">
                <div
                  style={{
                    transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10   "
                >
                  <div className="h-8 w-8 ml-1  bg-zinc-100 rounded-full "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesSec;
