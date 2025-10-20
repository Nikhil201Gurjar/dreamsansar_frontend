import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Link,
  HStack,
  VStack,
  Image,
  IconButton,
   Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";

import header_png from '../assets/header3.png'
import airplane from '../assets/airplane2.jpg'
import country from '../assets/country.jpg'

import { FaChevronDown,FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <Box w="100%"  bg="white" >
    

      {/* Hero Section */}
      <Flex
        align="center"
        justify={"space-between"}
     py={6}
        px={12}
        direction={{ base: "column", md: "row" }}
      >
        {/* Left Side */}
        <VStack align={"flex-start"} spacing={6} maxW="lg" p={'2'}>
          <Text color="orange.400" fontWeight={'bold'} fontSize="sm">
                YOUR GATEWAY TO GLOBAL CAREERS
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
          >
            Turn your <Text as="span" color="orange.400">dream</Text> into reality with Ausbildung in Germany
          </Heading>
          <Text color="gray.500" fontSize="md">
          We specialize in guiding students and professionals to build their future through 
    Ausbildung in Germany, as well as study, work, and cultural exchange opportunities 
    across Europe/UK.
          </Text>

          {/* Buttons */}
          <HStack spacing={6} justifyContent={['left','center']} alignItems={['flex-start','center']}>
            <Button colorScheme="orange" size="md" rounded="full" >
               Start Your Journey
            </Button>
            
          </HStack>
        </VStack>

        {/* Right Side (Image) */}
        <Box >
          
            <Box pos={'relative'} overflow={'hidden'} >
 {/* <Box id='right' position={'absolute'} width={'100vw'} height={'full'} borderRadius={'0% 0 10% 70%'}     background={'orange.400'} transform={'translateX(-25%, -25%)'}
               >
          
                </Box> */}
             
  <Image
            src={airplane}
            alt="Traveller"
            position={'absolute'}
            width={'9vw'}
            right={'-1%'}
         
          />
           <Image
            src={country}
            alt="Traveller"
            position={'absolute'}
            width={'9vw'}
            left={'25%'}
            bottom={'10%'}
          />
          <Image
            src={header_png}
            alt="Traveller"
         
          />
            </Box>
          
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
