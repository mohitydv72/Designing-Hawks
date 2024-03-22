/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Running from "./components/Running";
import About from "./components/About";
import EyesSec from "./components/EyesSec";
import Featured from "./components/Featured";
import Last from "./components/Last";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full  min-h-screen text-white bg-zinc-900 ">
      <Navbar />
      <Landing />
      <Running />
      <About />
      <EyesSec />
      <Featured />
      <Last />
      <Footer />
    </div>
  );
}

export default App;
