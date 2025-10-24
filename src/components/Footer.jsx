import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  Icon,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";


export default function Footer() {
  const location = useLocation();

  return (
    <Box bg="black" color="white" py={10}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} dreamsansarcing={10}>
          {/* Logo + About + Social */}
          <Stack dreamsansarcing={4}>
            <Flex align="center" gap={2}>
              <Link to='/' className="hover" >
              <Text fontSize="2xl" fontWeight="bold" cursor={'pointer'}>
                ⚡ DreamSansar
              </Text>
              </Link>
            </Flex>
            <Text fontSize="sm" color="gray.300">
              Licensed, insured, and trusted since 2025.
            </Text>
            <Flex gap={4} mt={2}>
              <Link to="#">
                <Icon as={FaFacebook} boxSize={5} _hover={{color:"orange.400"}}/>
              </Link>
              <Link to="#">
                <Icon as={FaInstagram} boxSize={5} _hover={{color:"orange.400"}} />
              </Link>
              <Link to="#">
                <Icon as={FaTiktok} boxSize={5} _hover={{color:"orange.400"}}/>
              </Link>
              <Link to="#">
                <Icon as={FaLinkedinIn} boxSize={5} _hover={{color:"orange.400"}}/>
              </Link>
            </Flex>
          </Stack>

<Divider display={['block','block','none']}  my={'3'}/>
          {/* Services */}
          <Stack dreamsansarcing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Our Services
            </Text>           

            <Link to="/services/ausbildung-in-germany" className="hover" style={{color:`${location.pathname === '/services/ausbildung-in-germany' ? 'salmon': ''}`}}> Ausbildung in Germany</Link>
            <Link to="/services/study-in-europe-uk" className="hover" style={{color:`${location.pathname === '/services/study-in-europe-uk' ? 'salmon': ''}`}}>Study in Europe & UK</Link>
            <Link to="/services/au-pair-in-europe" className="hover" style={{color:`${location.pathname === '/services/au-pair-in-europe' ? 'salmon': ''}`}}>Au Pair in Europe</Link>
            <Link to="/services/fsj-in-germany" className="hover" style={{color:`${location.pathname === '/services/fsj-in-germany' ? 'salmon': ''}`}}>FSJ in Germany</Link>
            <Link to="/services/german-language-a1-b2" className="hover" style={{color:`${location.pathname === '/services/german-language-a1-b2' ? 'salmon': ''}`}}>German Language A1–B2</Link>

          </Stack>
<Divider display={['block','block','none']}  my={'3'}/>

          {/* Quick Links */}
          <Stack dreamsansarcing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>
            <Link to="/" className="hover" style={{color:`${location.pathname === '/' ? 'salmon': ''}`}}>
              Home
            </Link>
             <Link to="/about_us" className="hover" style={{color:`${location.pathname === '/about_us' ? 'salmon': ''}`}}>About Us</Link>
            <Link to="/careers" className="hover" style={{color:`${location.pathname === '/careers' ? 'salmon': ''}`}}>Careers</Link>
           
          </Stack>
<Divider display={['block','block','none']} my={'3'}/>

          {/* Contact Us */}
          <Stack dreamsansarcing={4}>
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
                <a href="tel:+23442343423">
                <Text fontWeight="600">Call us</Text>
                <Text fontSize="sm">+2340234803</Text>
                </a>
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
                <a href="mailto:info@dreamsansar.com">
                <Text fontWeight="600">Send Email</Text>
                <Text fontSize="sm">info@dreamsansar.com</Text>
                </a>
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
          justify="dreamsansarce-between"
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
