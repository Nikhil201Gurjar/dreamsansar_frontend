import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  HStack,
  VStack,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box w="100%" minH="100vh" bg="white">
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py={6}
        px={{ base: 4, md: 12 }}
      >
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold">
          Jado
          <Text as="span" color="orange.400">
            o
          </Text>
        </Text>

        {/* Desktop Menu */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          fontSize="md"
          fontWeight="500"
          color="gray.700"
        >
          <Button variant="ghost">Destinations</Button>
          <Button variant="ghost">Hotels</Button>
          <Button variant="ghost">Flights</Button>
          <Button variant="ghost">Bookings</Button>
        </HStack>

        {/* Right Actions (Desktop) */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button variant="ghost">Login</Button>
          <Button colorScheme="orange">Sign up</Button>
          <Button variant="ghost">EN</Button>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
        />
      </Flex>

      {/* Mobile Menu Collapse */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          spacing={4}
          p={4}
          align="start"
          bg="white"
          display={{ md: "none" }}
        >
          <Button variant="ghost" w="full">
            Destinations
          </Button>
          <Button variant="ghost" w="full">
            Hotels
          </Button>
          <Button variant="ghost" w="full">
            Flights
          </Button>
          <Button variant="ghost" w="full">
            Bookings
          </Button>
          <Button variant="ghost" w="full">
            Login
          </Button>
          <Button colorScheme="orange" w="full">
            Sign up
          </Button>
          <Button variant="ghost" w="full">
            EN
          </Button>
        </VStack>
      </Collapse>

      {/* Hero Section */}
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 4, md: 12 }}
        py={16}
        direction={{ base: "column", md: "row" }}
        position="relative"
      >
        {/* Left Content */}
        <VStack align="flex-start" spacing={6} maxW="lg" zIndex={2}>
          <Text color="orange.500" fontWeight="bold" fontSize="sm">
            BEST DESTINATIONS AROUND THE WORLD
          </Text>
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            lineHeight="short"
          >
            Travel, <Text as="span" color="orange.500">enjoy</Text>
            <br /> and live a new <br /> and full life
          </Text>
          <Text color="gray.500" fontSize="md">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to
            sportsmen it engrossed listening. Park gate sell they west hard for the.
          </Text>

          <HStack spacing={6}>
            <Button colorScheme="orange" size="lg" rounded="full">
              Find out more
            </Button>
            <HStack spacing={2}>
              <Button
                size="lg"
                colorScheme="red"
                rounded="full"
                variant="ghost"
              >
                ▶
              </Button>
              <Text fontWeight="500">Play Demo</Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Right Image with Background */}
        <Box
          position="relative"
          mt={{ base: 12, md: 0 }}
          w={{ base: "100%", md: "50%" }}
        >
          {/* Background Blob */}
          <Box
            position="absolute"
            top="0"
            right="0"
            w="100%"
            h="100%"
            bg="orange.100"
            borderRadius="50% 0 0 50%"
            zIndex={0}
          />
          {/* Traveller Image */}
          <Image
            src="https://i.ibb.co/kQvW3nP/traveller.png"
            alt="Traveller"
            maxW="sm"
            mx="auto"
            position="relative"
            zIndex={2}
          />
        </Box>
      </Flex>
    </Box>
  );
}
