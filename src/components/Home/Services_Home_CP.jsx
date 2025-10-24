'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa";
import ServicesSection from './ServicesSection';
import ServicesSection2 from './ServicesSection2';


export default function Services_Home_CP() {
  return (
    <Box p={1}>
      <Stack spacing={3} as={Container} maxW={'full'} textAlign={'center'} bg={useColorModeValue("gray.50", "gray.900")}>
        <Text
                fontSize={"sm"}
                textAlign="center"
                mb={3}
              >
                Our Services
              </Text>

        <Heading fontSize={'3xl'}>Everything you need to study, train, and work abroad</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>Specialized guidance for Germany (Ausbildung, FSJ, Work Visa, Language) and Study options across Europe and the UK. Au Pair available in Germany, Austria, Switzerland, Netherlands; FSJ only in Germany.
        </Text>
      </Stack>

      {/* <ServicesSection /> */}
      <ServicesSection2 />
    </Box>
  )
}