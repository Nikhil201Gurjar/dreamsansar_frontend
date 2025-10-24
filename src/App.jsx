import { useEffect, useState } from 'react'
import OurRoutes from './OurRoutes'

import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

 useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration (ms)
      offset: 100,    // trigger point from viewport
      once: true,     // animate only once
    });
  }, []);
  
  return (
  <>
   <OurRoutes />
  </>
  )
}

export default App
