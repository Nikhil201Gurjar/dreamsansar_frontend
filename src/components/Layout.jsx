import React, { useEffect, useState } from 'react'

//Components Stuff
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {

 
  return (
    <>
       {/* Header section to show our navbar  */}
       <Navbar />

       {children}

       {/* Footer section to show our footer  */}
       <Footer />
    </>
  )
}

export default Layout