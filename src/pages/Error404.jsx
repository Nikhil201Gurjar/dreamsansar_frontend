import React from 'react'

import { Link } from 'react-router-dom'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import Buttons from '../components/Buttons'
import { Helmet } from 'react-helmet-async'

//Components


const Error404 = () => {
  return (
    <>

       <Helmet>
            <title>DreamSansar Consultancy | Error 404</title>
            <meta
              name="description"
              content="DreamSansar Consultancy helps Nepali students with Ausbildung in Germany, Study in Europe & UK, FSJ, Au Pair, and German Language courses. "
            />
            <meta
              name="keywords"
              content="Ausbildung in Germany, Study in Germany, Nepali students, German language courses, visa support, DreamSansar Consultancy"
            />
            <meta property="og:title" content="DreamSansar Consultancy" />
            <meta
              property="og:description"
              content="Start your Ausbildung journey in Germany with DreamSansar Consultancy. Get expert visa help, placement, and training."
            />
            <meta
              property="og:image"
              content="https://dreamsansar.com/images/og-ausbildung.jpg"
            />
            <meta property="og:url" content="https://dreamsansar.com/*" />
          </Helmet>

      <Box >
        <Container mx={'auto'} minH={'60vh'} >
          <VStack alignItems={'center'} justifyContent={'center'} mt={'32'} spacing={'4'} >
            <Heading fontSize={'7xl'} >404</Heading>

            <Text size={'2xl'} children='Page Not Found' />

            <Link to='/'> <Buttons title={'Go Home'} /> </Link>
          </VStack>

        </Container>
      </Box>
    </>
  )
}

export default Error404