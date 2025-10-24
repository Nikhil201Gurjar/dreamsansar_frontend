import React, { useState, useEffect } from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import header1 from '../../assets/header/header1.jpg'
import header2 from '../../assets/header/header2.jpg'
import header3 from '../../assets/header/header3.jpg'


const slides = [
  {
    id: 1,
    title: "Build Your Career With Confidence",
    desc: "Join thousands of professionals shaping the future with our platform.",
    image: header1,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Empowering Growth & Innovation",
    desc: "Explore new opportunities to learn, grow, and make an impact.",
    image: header2,
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Your Success Story Begins Here",
    desc: "Turn your vision into reality with expert guidance and support.",
    image: header3,
    buttonText: "Join Now",
  },
];

const MotionBox = motion(Box);

const Header2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <Box position="relative" w="100%" h="100vh" overflow="hidden">
      <AnimatePresence>
        <MotionBox
          key={currentSlide.id}
          backgroundImage={`url(${currentSlide.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            w: "100%",
            h: "100%",
            bg: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          spacing={[3,6]}
          textAlign="center"
          color="white"
          zIndex="2"
          px={3}
        >
          <Text fontSize={["2xl", "3xl", "5xl"]} fontWeight="bold">
            {currentSlide.title}
          </Text>
          <Text maxW="2xl" fontSize={["md", "lg"]}>
            {currentSlide.desc}
          </Text>
          <a href="#BookingForm">
          <Button
            colorScheme="orange"
            size="lg"
            rounded="full"
            
          >
           
            {currentSlide.buttonText}
          </Button>
           </a>
        </VStack>
      </AnimatePresence>
    </Box>
  );
};

export default Header2;
