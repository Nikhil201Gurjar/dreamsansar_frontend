import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import BookingForm from "../components/Home/BookingForm";
import Services_Home_CP from "../components/Home/Services_Home_CP";
import FAQs_Home_CP from "../components/Home/FAQs_Home_CP";
const Testimonails = lazy(() => import("../components/Home/Testimonial"));
import { useDispatch, useSelector } from "react-redux";
import Header2 from "../components/Home/Header2";
import { handleFetchTestimonails } from "../store/TestimonailSlice";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DreamSansar Consultancy</title>
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
        <meta property="og:url" content="https://dreamsansar.com" />
      </Helmet>

      <section id="Home">
        {/* <Header /> */}
        <Header2 />

        <Services_Home_CP />

        <Suspense fallback={<Loading />}>
          <Testimonails />{" "}
        </Suspense>
        {/* <Testimonials testimonials={testimonails} /> */}

        <section id="BookingForm">
          <Flex
            direction={{ base: "column", md: "row" }}
            bgGradient="linear(to-r, pink.500, purple.600)"
            minH="100vh"
            p={[3, 4, 10]}
            color="white"
            position={"relative"}
            bg="black"
            id="BookingForm"
          >
            {/* Left Section */}
            <Box flex={1} p={3}>
              <Heading as="h1" size="2xl" mb={4}>
                Join Our Teams To Make Community Big
              </Heading>
              <Text fontSize="lg" opacity={0.8}>
                Here you can book your slot to communicate with us, and we will
                reach out to you under 48 hour.
              </Text>
            </Box>

            {/* Right Section - Form */}
            <Box
              flex={1}
              bg="white"
              borderRadius="lg"
              p={8}
              color="black"
              boxShadow="lg"
            >
              <BookingForm />
            </Box>
          </Flex>
        </section>

        <FAQs_Home_CP />
      </section>
    </>
  );
};

export default Home;
