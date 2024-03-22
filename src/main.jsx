/* eslint-disable no-unused-vars */
import React , {useEffect} from 'react'
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Running from "./components/Running";
import About from "./components/About";
import EyesSec from "./components/EyesSec";
import Featured from "./components/Featured";
import Last from "./components/Last";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";


import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const locomotiveScroll = new LocomotiveScroll();

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import ScrollTop from './components/ScrollTop.jsx';
// import Navbar from './components/Navbar.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App /> 
    ),
  },
  {
    path: "/about",
    element: (
      
      <div className="w-full  min-h-screen text-white bg-zinc-900 "> 
      <Navbar />
      <About />
      <Last />
      <Footer /> 
      </div>
      ),
  },
  {
    path: "/contact",
    element: (
      
      <div className="w-full  min-h-screen text-white bg-zinc-900 "> 
      <Navbar />
      
      <Footer /> 
      </div>
      ),
  },
  {
    path: "/services",
    element: (
      
      <div className="w-full  min-h-screen text-white bg-zinc-900 "> 
     <Navbar />
      <Featured />
   
      
      <EyesSec />
    
      <Footer />
      </div>
      ),
  },
  {
    path: "/insight",
    element: (
      
      <div className="w-full  min-h-screen text-white bg-zinc-900 "> 
      <Navbar />
      <About />
      <EyesSec />
      <Featured />
      <Last />
      <Footer /> 
      </div>
      ),
  },
  {
    path: "/ourWork",
    element: (
      
      <div className="w-full  min-h-screen text-white bg-zinc-900 "> 
      <Navbar />
      <Featured />
      <Running />
      
      <EyesSec />
    
      <Footer />
      </div>
      ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* <ScrollTop/>  */}
  </React.StrictMode>,
)
