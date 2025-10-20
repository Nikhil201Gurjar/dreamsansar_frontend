import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
  return (
    <Box bg="black" color="white" py={10}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          {/* Logo + About + Social */}
          <Stack spacing={4}>
            <Flex align="center" gap={2}>
              <Text fontSize="2xl" fontWeight="bold">
                ⚡ DreamSansar
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.300">
              Licensed, insured, and trusted since 2025.
            </Text>
            <Flex gap={4} mt={2}>
              <Link href="#">
                <Icon as={FaFacebook} boxSize={5} />
              </Link>
              <Link href="#">
                <Icon as={FaInstagram} boxSize={5} />
              </Link>
              <Link href="#">
                <Icon as={FaTiktok} boxSize={5} />
              </Link>
              <Link href="#">
                <Icon as={FaLinkedinIn} boxSize={5} />
              </Link>
            </Flex>
          </Stack>

          {/* Services */}
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Our Services
            </Text>
           






            <Link href="#"> Ausbildung in Germany</Link>
            <Link href="#">Study in Germany</Link>
            <Link href="#">Study in UK & Europe</Link>
            <Link href="#">Work Visa – Nursing (Germany)</Link>
            <Link href="#">Au Pair (DE / AT / CH / NL)</Link>
            <Link href="#">FSJ in Germany (Only)</Link>
            <Link href="#">German Language A1–B2</Link>

          </Stack>

          {/* Quick Links */}
          <Stack spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>
            <Link href="#" color="orange.400">
              Home
            </Link>
            <Link href="#">Services</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Book a slot</Link>
          </Stack>

          {/* Contact Us */}
          <Stack spacing={4}>
            <Text fontWeight="bold" fontSize="lg">
              Contact Us
            </Text>

            <Flex align="center" gap={3}>
              <Box
                bg="orange.500"
                p={2}
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FiPhone} boxSize={5} />
              </Box>
              <Box>
                <Text fontWeight="600">Call us</Text>
                <Text fontSize="sm">(555) 123-4567</Text>
              </Box>
            </Flex>

            <Flex align="center" gap={3}>
              <Box
                bg="orange.500"
                p={2}
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FiMail} boxSize={5} />
              </Box>
              <Box>
                <Text fontWeight="600">Send Email</Text>
                <Text fontSize="sm">info@spa.com</Text>
              </Box>
            </Flex>

            <Flex align="center" gap={3}>
              <Box
                bg="orange.500"
                p={2}
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FiMapPin} boxSize={5} />
              </Box>
              <Box>
                <Text fontWeight="600">Address</Text>
                <Text fontSize="sm">
                  45 Main Street, Suite 200
                  <br />
                  Dallas, TX 75201
                </Text>
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Flex
          justify="space-between"
          align="center"
          borderTop="1px solid"
          borderColor="gray.700"
          pt={6}
          mt={10}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Text fontSize="sm" color="gray.400">
            © 2025 DreamSansar. All rights reserved.
          </Text>
         
        </Flex>
      </Container>
    </Box>
  );
}
