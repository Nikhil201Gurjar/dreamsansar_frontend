import React from 'react';
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
} from '@chakra-ui/react';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'

import logo from '../assets/logo.jpeg'
import logo2 from '../assets/logo2.jpeg'
// import logo3 from '../assets/logo3.png'
import logo3 from '../assets/logo3.jpeg'
import logo4 from '../assets/logo4.jpeg'


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const navLinks = [{
      name: 'Services',
      dropdown: [
        { name: 'Ausbildung in Germany', href: '#ausbildung' },
        { name: 'Study in Europe & UK', href: '#study-europe' },
        { name: 'Work Visa – Nursing (Germany)', href: '#work-visa' },
        { name: 'Au Pair (DE / AT / CH / NL)', href: '#au-pair' },
        { name: 'FSJ in Germany (Only)', href: '#fsj' },
        { name: 'German Language A1–B2', href: '#language' },
      ]
    }
  ];


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      py={2}
      px={6}
      bg="transparent"
      position={'relative'}
    >
      {/* <Box id='right' position={'absolute'} width={'39.4vw'} borderRadius={'0% 0% 10% 70%'} height={'full'} left={'60%'}  background={'green'} transform={'translateX(-25%, -25%)'} zIndex={-1}
     >

      </Box> */}
      {/* Logo */}
      <Box background={'orange.100'} overflow={'hidden'}> 
        
       <Image src={logo4} width={'7vw'} />
       </Box>

      {/* <Text fontSize="2xl" fontWeight="bold"  cursor={'pointer'}>
        <Link to='/'>
        Dream
        <Text as="span" color={'orange.400'}>
          Sansar
        </Text>
        </Link>
      </Text> */}

      {/* Desktop Nav Links */}
      <HStack spacing={8} fontSize="md" fontWeight="500" color="gray.700" display={{ base: 'none', md: 'flex' }}>

        <Link to={'/'}>
              <Text >
              Home</Text>
            </Link>

              <Link to={'/about_us'}>
              <Text >
             About Us </Text>
            </Link>

            <Link to={'/careers'}>
              <Text >
             Career</Text>
            </Link>

      {navLinks.map((link, idx) =>
          link.dropdown && (
            <Menu key={idx} isLazy>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} variant="ghost" fontWeight="500">
                {link.name}
              </MenuButton>
              <MenuList>
                {link.dropdown.map((item, index) => (
                  <MenuItem key={index} as="a" href={item.href}>
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ))}

      </HStack>

      {/* Desktop Action Button */}
      {/* <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
        <Button variant={'solid'} colorScheme='orange' boxShadow={'md'}>
          Request a Callback
        </Button>
      </HStack> */}

      {/* Mobile Hamburger */}
      <IconButton
        icon={<FaBars />}
        aria-label="Open Menu"
        display={{ base: 'flex', md: 'none' }}
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
              {navLinks.map((link, idx) =>
                link.dropdown ? (
                  <Box key={idx} w="full">
                    <Text fontWeight="bold" mb={2}>
                      {link.name}
                    </Text>
                    <VStack align="start" pl={4}>
                      {link.dropdown.map((item, i) => (
                        <Link key={i} href={item.href} onClick={onClose}>
                          {item.name}
                        </Link>
                      ))}
                    </VStack>
                  </Box>
                ) : (
                  <Link key={idx} href={link.href} onClick={onClose}>
                    {link.name}
                  </Link>
                )
              )}
              <Button w="full" mt={4} colorScheme="orange" onClick={onClose}>
                Request a Callback
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
