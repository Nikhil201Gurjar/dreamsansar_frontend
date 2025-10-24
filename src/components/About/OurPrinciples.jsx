import React from "react";
import { Box, Text, VStack, Icon, SimpleGrid } from "@chakra-ui/react";
import {
  FaHandshake,
  FaThumbsUp,
  FaClock,
  FaCheck,
  FaPuzzlePiece,
} from "react-icons/fa";

const principles = [
  { icon: FaHandshake, title: "Trust", desc: "We build strong relationships through integrity and transparency." },
  { icon: FaThumbsUp, title: "Honesty", desc: "Every interaction is guided by truth and ethical responsibility." },
  { icon: FaClock, title: "Open", desc: "We maintain open communication with clients and our team." },
  { icon: FaCheck, title: "Clarity", desc: "We keep our goals clear and focused to achieve results." },
  { icon: FaPuzzlePiece, title: "Creative", desc: "Innovation drives our solutions to every challenge." },
];

const OurPrinciples = () => {
  return (
    <Box py={20} px={[6, 16]} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={10}>
        Our Principles
      </Text>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
        {principles.map((p, i) => (
          <Box
            key={i}
            className="flip-card"
            h="250px"
            w="100%"
            perspective="1000px"
          >
            <Box
              className="flip-inner"
              position="relative"
              w="100%"
              h="100%"
              transition="transform 0.6s"
              transformStyle="preserve-3d"
              _hover={{ transform: "rotateY(180deg)" }}
            >
              {/* Front Side */}
              <Box
                position="absolute"
                w="100%"
                h="100%"
                bg="white"
                borderRadius="xl"
                shadow="lg"
                backfaceVisibility="hidden"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                p={6}
              >
                <Box
                  bg="orange.400"
                  color="white"
                  p={5}
                  borderRadius="full"
                  fontSize="2xl"
                  mb={4}
                >
                  <Icon as={p.icon} />
                </Box>
                <Text fontWeight="bold">{p.title}</Text>
              </Box>

              {/* Back Side */}
              <Box
                position="absolute"
                w="100%"
                h="100%"
                bg="orange.400"
                color="white"
                borderRadius="xl"
                shadow="lg"
                transform="rotateY(180deg)"
                backfaceVisibility="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={6}
              >
                <Text fontSize="md">{p.desc}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OurPrinciples;
