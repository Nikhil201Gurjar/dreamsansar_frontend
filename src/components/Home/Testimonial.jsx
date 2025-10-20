import React from 'react';
import { Box, VStack, HStack, Text, SimpleGrid } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

// Sample testimonial data
const testimonials = [
  {
    name: "Emily Johnson",
    role: "Graphic Designer",
    message:
      "Absolutely thrilled with the quality and variety of Webflow templates offered by 128 Digital! Highly recommend it for anyone looking to elevate their web design game.",
    rating: 5,
  },
  {
    name: "Andrew Carter",
    role: "Freelance Developer",
    message:
      "I can't say enough good things about 128 Digital. Their templates have helped me create a professional online presence for my business.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "UX/UI Designer",
    message:
      "As a musician, I appreciate the variety of templates available on 128 Digital. They've helped me create stunning promotional materials for my music. Thank you!",
    rating: 5,
  },
  {
    name: "Jennifer White",
    role: "Consultant",
    message:
      "The templates from 128 Digital are a lifesaver for busy professionals like me. They're easy to customize and helped me launch my website quickly without compromising on quality.",
    rating: 5,
  },
  {
    name: "Samantha Miller",
    role: "Web Designer",
    message:
      "I've been using templates from 128 Digital to showcase my photography portfolio, and I've received nothing but compliments. Great work!",
    rating: 5,
  },
  // Add more testimonials here...
];

const TestimonialCard = ({ testimonial }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    p={6}
    shadow="md"
    bg="white"
    textAlign="center"
  >
    <HStack justify="center" mb={3}>
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i}  style={{color:'#ffff8e'}} />
      ))}
    </HStack>
    <Text fontStyle="italic" mb={4}>
      "{testimonial.message}"
    </Text>
    <VStack spacing={0}>
      <Text fontWeight="bold">{testimonial.name}</Text>
      <Text color="gray.500" fontSize="sm">
        {testimonial.role}
      </Text>
    </VStack>
  </Box>
);

const Testimonials = () => (
  <VStack spacing={10} p={10} bg="gray.50">
    <Text fontSize="3xl" fontWeight="bold">
      What Others Say About Us
    </Text>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </SimpleGrid>
  </VStack>
);

export default Testimonials;
