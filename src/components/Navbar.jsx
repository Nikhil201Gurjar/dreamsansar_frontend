import React from "react";
import {
  Flex,
  HStack,
  VStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Image,
} from "@chakra-ui/react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logo.jpeg";
import logo2 from "../assets/logo2.jpeg";
// import logo3 from '../assets/logo3.png'
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/logo4.jpeg";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const navLinks = [
    {
      name: "Services",
      dropdown: [
        { name: "Ausbildung in Germany", href: "/services/ausbildung-in-germany" },
        { name: "Study in Europe & UK", href: "/services/study-in-europe-uk" },
        { name: "Au Pair in Europe", href: "/services/au-pair-in-europe" },
        { name: "FSJ in Germany", href: "/services/fsj-in-germany" },
        { name: "German Language A1–B2", href: "/services/german-language-a1-b2" },
      ],
    },
  ];

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      py={2}
      px={6}
      bg="transparent"
      position={"relative"}
    >
      {/* <Box id='right' position={'absolute'} width={'39.4vw'} borderRadius={'0% 0% 10% 70%'} height={'full'} left={'60%'}  background={'green'} transform={'translateX(-25%, -25%)'} zIndex={-1}
     >

      </Box> */}
      {/* Logo */}
      <Link to="/">
        <Box background={"orange.100"} cursor={"pointer"} overflow={"hidden"}>
          <Image src={logo4} width={"7.5vw"} />
        </Box>
      </Link>

      {/* <Text fontSize="2xl" fontWeight="bold"  cursor={'pointer'}>
        <Link to='/'>
        Dream
        <Text as="span" color={'orange.400'}>
          Sansar
        </Text>
        </Link>
      </Text> */}

      {/* Desktop Nav Links */}
      <HStack
        spacing={8}
        fontSize="md"
        fontWeight="500"
        color="gray.700"
        display={{ base: "none", md: "flex" }}
      >
        <Link to={"/"}>
          <Text _hover={{color:'salmon'}} color={location.pathname === '/' && 'salmon'}>Home</Text>
        </Link>

        <Link to={"/about_us"}>
          <Text _hover={{color:'salmon'}} color={location.pathname === '/about_us' && 'salmon'}>About Us </Text>
        </Link>

        {/* <Link to={"/careers"}>
          <Text _hover={{color:'salmon'}} color={location.pathname === '/careers' && 'salmon'}>Career</Text>
        </Link> */}

        

        {navLinks.map(
          (link, idx) =>
            link.dropdown && (
              <Menu key={idx} isLazy>
                <MenuButton
                  as={Button}
                  rightIcon={<FaChevronDown />}
                  variant="ghost"
                  fontWeight="500"
                >
                  {link.name}
                </MenuButton>
                <MenuList>
                  {link.dropdown.map((item, index) => (
                    <MenuItem _hover={{color:'salmon'}} color={location.pathname === '/' && 'salmon'}  key={index} as="a" href={item.href}>
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )
        )}

        
      </HStack>


      {/* Mobile Hamburger */}
      <IconButton
        icon={<FaBars />}
        aria-label="Open Menu"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="ghost"
      />

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={4} mt={10} align="start">
             <Link to={"/"}>
          <Text _hover={{color:'salmon'}} color={location.pathname === '/' && 'salmon'} onClick={onClose}>Home</Text>
        </Link>

        <Link to={"/about_us"}>
          <Text _hover={{color:'salmon'}} color={location.pathname === '/' && 'salmon'} onClick={onClose}>About Us </Text>
        </Link>

        <Link to={"/careers"}>
          <Text _hover={{color:'salmon'}} color={location.pathname === '/' && 'salmon'} onClick={onClose}>Career</Text>
        </Link>

        {navLinks.map(
          (link, idx) =>
            link.dropdown && (
              <Menu key={idx} isLazy>
                <MenuButton
                  rightIcon={<FaChevronDown />}
                  as={Button}
                  variant="unstyled"
                  m={0}
                  p={0}
                  fontWeight="500"
                >
                  {link.name}
                </MenuButton>
                <MenuList>
                  {link.dropdown.map((item, index) => (
                    <MenuItem onClick={onClose} _hover={{color:'salmon'}} color={location.pathname === '/' && 'salmon'} key={index} as="a" href={item.href}>
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )
        )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
