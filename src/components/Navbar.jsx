/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion'; // Import framer motion

const Navbar = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowNavbar, setShouldShowNavbar] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos; // Check if scrolling up

      setShouldShowNavbar(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);

  useEffect(() => {
    controls.start({ opacity: shouldShowNavbar ? 1 : 0, y: shouldShowNavbar ? 0 : -100 });
  }, [shouldShowNavbar, controls]);

  return (
    <motion.div
      className='fixed z-50 w-full py-6 px-20 text-white font-[Gerald] flex items-center justify-between text-lg'
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className=''>
        <h1 className='font-semibold text-2xl'>
          <Link to="/">Designing hawks</Link>
        </h1>
      </div>
      <div className="links flex items-center gap-6">
        {[{ text: 'Our Work', href: '/ourWork' },
          { text: 'About Us', href: '/about' },
          { text: 'Services', href: '/services' },
          { text: 'Insight', href: '/insight' },
          { text: 'Contact', href: '/contact' }].map((items, index) => (
            <Link key={index} to={items.href} className={`${index === 4 && "ml-36"}`}>{items.text}</Link>
          ))}
      </div>
    </motion.div>
  );
}

export default Navbar;



// /* eslint-disable no-unused-vars */
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='fixed z-50 w-full py-6 px-20  text-white font-[Gerald] flex items-center justify-between text-lg'>
//         <div className=' '><h1 className='font-semibold text-2xl' > <Link to="/">Designing hawks</Link>   </h1></div>
//         <div className="links flex items-center gap-6">
//             {[{ text: 'Our Work', href: '/ourWork' },
//     { text: 'About Us', href: '/about' },
//     { text: 'Services', href: '/services' },
//     { text: 'Insight', href: '/insight' },
//     { text: 'Contact', href: '/contact' }].map((items , index)=>(
//                     <Link key={index} to={items.href} className={ ` ${index===4 && "ml-36"}`}>{items.text}</Link>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Navbar
