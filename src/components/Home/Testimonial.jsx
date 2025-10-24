import React, { useState } from 'react';
import { Box, VStack, HStack, Text, SimpleGrid } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {toast} from 'react-hot-toast'
import { SERVER } from '../../GlobalFunctions';


const TestimonialCard = ({testimonial}) => {
  
    

  return (



  <Box
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    shadow="md"
    bg="white"
    textAlign="center"
     data-aos="zoom-in"
  >
    <HStack justify="center" mb={3}>
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i}  style={{color:'#ffff8e'}} />
      ))}
    </HStack>
    <Text fontStyle="italic" mb={4}>
      "{testimonial?.user_concern}"
    </Text>
    <VStack spacing={0}>
      <Text fontWeight="bold">{testimonial?.user_name}</Text>
    </VStack>
  </Box>
)}

const Testimonials = () => {  
  const [testimonails,setTestimonails] = useState([])

  const fetchTestimonails = async () => {
    try {
    const url = `${SERVER}/testimonial/allTestimonial`;
    const options = {
      headers: {
      "Access-Control-Allow-Origin": "*"} };

    const res = await fetch(url, options);
    const data = await res.json();

    console.log('data',data);

    if (data.success === true) {
      setTestimonails( data?.testimonials);
    } else toast.error(data?.msg);
  } catch (error) {
    toast.error(error);
  }

  }

  useEffect(()=>{
    fetchTestimonails();
  },[])

 
  return (

 
  <VStack spacing={10} p={10} bg="white">
    <Text fontSize="3xl" fontWeight="bold">
      What Others Say About Us
    </Text>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
      {testimonails?.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </SimpleGrid>
  </VStack>
 )
}

export default Testimonials;
