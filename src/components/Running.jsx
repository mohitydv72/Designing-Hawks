/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion"

const Running = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className="runBAr w-full py-20 bg-[#0c4ecf] rounded-tl-3xl rounded-tr-3xl">
        <div className="text flex border-white border-y-[1px] whitespace-nowrap overflow-hidden ">
          <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear' , repeat:Infinity , duration:15}}  className='pr-10 uppercase text-[15vw] leading-none  -tracking-[0.75vw] font-bold font-[Founders Grotesque X-Cond]'>
          {/* We craft stunning visuals */}
          the designing hawks
          </motion.h1>
          <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear' , repeat:Infinity , duration:15}}  className='uppercase text-[15vw] leading-none  -tracking-[0.75vw] font-bold font-[Founders Grotesque X-Cond]'>
          the designing hawks
          </motion.h1>
          
        </div>
    </div>
  )
}

export default Running