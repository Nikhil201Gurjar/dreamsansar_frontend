import React, { useState, useEffect } from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Build Your Career With Confidence",
    desc: "Join thousands of professionals shaping the future with our platform.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Empowering Growth & Innovation",
    desc: "Explore new opportunities to learn, grow, and make an impact.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Your Success Story Begins Here",
    desc: "Turn your vision into reality with expert guidance and support.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
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
          spacing={6}
          textAlign="center"
          color="white"
          zIndex="2"
          px={6}
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
