import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { MdWork, MdVolunteerActivism } from "react-icons/md";
import { FaGraduationCap, FaHandsHelping, FaLanguage } from "react-icons/fa";

import BookingForm from "../components/Home/BookingForm";
import { Helmet } from "react-helmet-async";

import german_language_a1_b2 from '../assets/services/german-language-a1-b2.avif'
import fsj_in_germany from '../assets/services/fsj-in-germany.avif'
import au_pair_in_europe from '../assets/services/au-pair-in-europe.avif'
import study_in_europe_uk from '../assets/services/study-in-europe-uk.avif'
import ausbuildung_in_germany from '../assets/services/ausbuildung-in-germany.avif'


// Service content
const servicesContent = [
  {
    path: "/services/ausbildung-in-germany",
    title: "Ausbildung in Germany",
    tagline: "Earn, Learn, and Build a Career in Germany",
    image:ausbuildung_in_germany,
    icon: MdWork,
    description: `
      Ausbildung is Germany’s dual education system combining classroom learning with hands-on training. 
      It's your path to a skilled career while earning a salary. We guide you through program selection, 
      documentation, visa support, and language preparation (A1–B2).
    `,
    steps: [
      "Free counselling and profile assessment",
      "German language training (A1–B2)",
      "Program & company selection",
      "Visa and documentation support",
      "Travel & post-arrival assistance",
    ],
  },
  {
    path: "/services/study-in-europe-uk",
    title: "Study in Europe & UK",
    tagline: "Pursue World-Class Education in Leading Universities",
    image: study_in_europe_uk,
    icon: FaGraduationCap,
    description: `
      Study abroad in the UK or Europe to experience top-notch education, diverse cultures, 
      and unmatched career growth. We assist with university shortlisting, scholarships, 
      admission processes, and visa documentation.
    `,
    steps: [
      "University & course selection",
      "Application & SOP guidance",
      "Visa process support",
      "Pre-departure briefing",
    ],
  },
  {
    path: "/services/au-pair-in-europe",
    title: "Au Pair in Europe",
    tagline: "Experience Cultural Exchange While Living Abroad",
    image: au_pair_in_europe,
    icon: FaHandsHelping,
    description: `
      Become an Au Pair in Europe (Germany, Austria, Switzerland, Netherlands) and 
      immerse yourself in new cultures while living with a host family. 
      We handle matching, visa guidance, and pre-departure orientation.
    `,
    steps: [
      "Profile creation & matching",
      "Language and cultural training",
      "Visa & travel guidance",
    ],
  },
  {
    path: "/services/fsj-in-germany",
    title: "FSJ in Germany",
    tagline: "Volunteer in Germany and Make a Meaningful Impact",
    image: fsj_in_germany,
    icon: MdVolunteerActivism,
    description: `
      The Freiwilliges Soziales Jahr (FSJ) is a voluntary social year in Germany. 
      Participants gain real experience in hospitals, NGOs, and community programs. 
      We assist with applications, placement, and language courses.
    `,
    steps: [
      "Program selection & matching",
      "German language training (A1–B2)",
      "Visa application assistance",
      "Pre-departure guidance",
    ],
  },
  {
    path: "/services/german-language-a1-b2",
    title: "German Language A1–B2",
    tagline: "Learn German the Smart Way – from A1 to B2 Levels",
    image:german_language_a1_b2,
    icon: FaLanguage,
    description: `
      Learn German from certified trainers through interactive A1–B2 programs. 
      We prepare you for Goethe exams, build your confidence, and help you communicate effectively.
    `,
    steps: [
      "Interactive online/offline classes",
      "Certified trainers",
      "Mock tests & exam prep",
      "Flexible schedules",
    ],
  },
];

const ServicePage = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectedService =
    servicesContent.find((s) => s.path === location.pathname) ||
    servicesContent[0];

  return (
    <>
      <Helmet>
        <title>Services | DreamSansar Consultancy</title>
        <meta
          name="description"
          content="DreamSansar Consultancy helps Nepali students with Ausbildung in Germany, Study in Europe & UK, FSJ, Au Pair, and German Language courses. "
        />
        <meta
          name="keywords"
          content="Ausbildung in Germany, Study in Germany, Nepali students, German language courses, visa support, DreamSansar Consultancy,services"
        />
        <meta
          property="og:title"
          content="Services | DreamSansar Consultancy"
        />
        <meta
          property="og:description"
          content="Start your Ausbildung journey in Germany with DreamSansar Consultancy. Get expert visa help, placement, and training."
        />
        <meta
          property="og:image"
          content="https://dreamsansar.com/images/og-ausbildung.jpg"
        />
        <meta property="og:url" content="https://dreamsansar.com/services/*" />
      </Helmet>

      <Box>
        {/* Hero Section */}
        <Box
          position="relative"
          h={{ base: "50vh", md: "60vh" }}
          backgroundImage={`url(${selectedService.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "rgba(0,0,0,0.5)",
          }}
        >
          <Flex
            position="relative"
            direction="column"
            justify="center"
            align="flex-start"
            h="100%"
            p={{ base: 6, md: 16 }}
            color="white"
          >
            <Text color="orange.300" fontWeight="bold" fontSize="sm">
              YOUR GATEWAY TO GLOBAL CAREERS
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              maxW="2xl"
              mb={3}
            >
              {selectedService.title}
            </Heading>
            <Text fontSize="lg" maxW="2xl" opacity={0.9}>
              {selectedService.tagline}
            </Text>
          </Flex>
        </Box>

        {/* Content Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="flex-start"
          justify="space-between"
          px={{ base: 6, md: 16 }}
          py={10}
          gap={10}
        >
          <VStack align="flex-start" spacing={5} flex="1">
            <Text color="gray.600" fontSize="md" lineHeight="tall">
              {selectedService.description}
            </Text>

            <Box>
              <Heading as="h3" size="md" mb={3} color="orange.500">
                Our Process
              </Heading>
              <VStack align="flex-start" spacing={2}>
                {selectedService.steps.map((step, index) => (
                  <Text key={index} color="gray.700">
                    • {step}
                  </Text>
                ))}
              </VStack>
            </Box>

            <Button
              colorScheme="green"
              size="lg"
              rounded="full"
              mt={6}
              onClick={onOpen}
            >
              Book a Slot
            </Button>
          </VStack>

          <Box
            flex="1"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            maxH={{ md: "400px" }}
          >
            <Image
              src={selectedService.image}
              alt={selectedService.title}
              w="100%"
              h="100%"
              objectFit="cover"
              display={["none", "none", "block"]}
            />
          </Box>
        </Flex>

        {/* Booking Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Book Your Slot</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <BookingForm
                propmessage={`I've intertested to book the slot for the ${selectedService.title}`} onClose={onClose}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default ServicePage;
