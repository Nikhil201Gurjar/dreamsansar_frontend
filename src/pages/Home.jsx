import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import BookingForm from '../components/Home/BookingForm'
import Services_Home_CP from '../components/Home/Services_Home_CP'
import FAQs_Home_CP from "../components/Home/FAQs_Home_CP";
import Testimonials from '../components/Home/Testimonial'
import { useSelector } from 'react-redux'
import Header2 from '../components/Home/Header2'



const Home = () => {
  const user = useSelector( state => state.user);
  console.log('user',user)
  return (
    <>
     <section id="Home">
    {/* <Header /> */}
    <Header2 />

 <Services_Home_CP />

 <Testimonials />
 <BookingForm />

 <FAQs_Home_CP />

  </section>   
    </>
  )
}

export default Home
