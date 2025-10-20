import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import CareerPostCard from "../components/CareerPage/CareerCardApply"; // your existing component
import { useDispatch, useSelector } from "react-redux";
import { handleFetchCareerPosts } from "../store/CareerPostsSlice";

const CareerPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const dispatch = useDispatch();
  const {careerposts} = useSelector(state => state.careerposts);

  useEffect(()=>{
        dispatch(handleFetchCareerPosts());
  },[])

  // Sample mock data
  const careers = [
    { _id: 1, role: "Frontend Developer", qualifications: "React, JS", applicants: 5, number_of_posts: 2, image: "/career1.jpg" },
    { _id: 2, role: "UI/UX Designer", qualifications: "Figma, UI principles", applicants: 3, number_of_posts: 1, image: "/career2.jpg" },
  ];

  const filteredCareers = careers.filter((job) =>
    job.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box bg="gray.50" minH="100vh">
      {/* 1️⃣ Hero Section */}
     <Box
  position="relative"
  bgImage={`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')`}
  bgSize="cover"
  bgPos="center"
  py={{ base: 20, md: 28 }}
  textAlign="center"
  color="white"
>
        <Heading fontSize={{ base: "3xl", md: "5xl" }}>
          Join Our Team at BrightFuture
        </Heading>
        <Text fontSize="lg" mt={4} maxW="600px" mx="auto">
          We’re looking for passionate people to help us build innovative products that make a difference.
        </Text>
        <Button
          mt={8}
          colorScheme="orange"
          size="lg"
          onClick={() =>
            document.getElementById("openings-section").scrollIntoView({ behavior: "smooth" })
          }
        >
          View Open Positions
        </Button>
      </Box>

      {/* 2️⃣ Why Work With Us */}
      <Box py={20} textAlign="center" bg="white">
        <Heading size="lg">Why Work With Us?</Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mt={10} px={10}>
          {[
            { title: "Career Growth", desc: "Opportunities to learn and grow continuously." },
            { title: "Flexible Work", desc: "Hybrid and remote work options." },
            { title: "Great Culture", desc: "A supportive and inclusive workplace." },
            { title: "Innovation First", desc: "We encourage creativity and experimentation." },
          ].map((perk) => (
            <Box key={perk.title} p={6} bg="gray.100" rounded="xl" shadow="sm">
              <Heading fontSize="xl" color="orange.500">
                {perk.title}
              </Heading>
              <Text mt={2}>{perk.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* 3️⃣ Open Positions */}
      <Box id="openings-section" py={20} px={10}>
        <Heading textAlign="center" mb={10}>
          Open Positions
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {careerposts?.length > 0 ? (
            careerposts?.map((careerposts,i) =>
                  <CareerPostCard
          key={i}
          image={careerposts?.avatar?.url}
          title={careerposts?.role}
          description={careerposts?.role_details}
          qualifications={careerposts?.qualifications}
          applicants={careerposts?.number_of_applicants}
          posts={careerposts?.number_of_posts}
          _id={careerposts?._id}
        />)
          ) : (
            <Text textAlign="center" color="gray.500">
              No openings found.
            </Text>
          )}
        </SimpleGrid>
      </Box>

      
     
    </Box>
  );
};

export default CareerPage;

