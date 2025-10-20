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
} from '@chakra-ui/react'
import { FaCheck } from "react-icons/fa";

// Replace test data with your own
const features = Array.apply(null, Array(5)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  }
})

export default function Services_Home_CP() {
  return (
    <Box p={1}>
      <Stack spacing={3} as={Container} maxW={'full'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Everything you need to study, train, and work abroad</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>Specialized guidance for Germany (Ausbildung, FSJ, Work Visa, Language) and Study options across Europe and the UK. Au Pair available in Germany, Austria, Switzerland, Netherlands; FSJ only in Germany.
        </Text>
      </Stack>

      <Container maxW={'full'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={FaCheck} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}