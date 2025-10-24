import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  SimpleGrid,
  Icon,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import {
  FaHandshake,
  FaThumbsUp,
  FaClock,
  FaCheck,
  FaPuzzlePiece,
  FaRegUserCircle,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Buttons from "../components/Buttons";
import FormInput, { FormInputTextArea } from "../components/FormInput";
import { SERVER } from "../GlobalFunctions";

import { LuMapPin } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

import about_us from "../assets/about_us.jpg";
import toast from "react-hot-toast";

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    contact_address: "",
    user_concern: "",
  });

  const handlePhoneChange = (value) =>
    setFormData({ ...formData, contact_address: value });

  const handleOnChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (
      !formData.contact_address ||
      !formData.email ||
      !formData.user_name ||
      !formData.user_concern
    ) {
      setLoading(false);
      toast.error("All fields are required");
      return;
    }

    if (formData.contact_address.length < 10) {
      setLoading(false);
      toast.error("Phone number is not valid");
      return;
    }

    if (formData.user_concern.length < 12) {
      setLoading(false);
      toast.error("user_concern must be 12 char long");
      return;
    }

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      setLoading(false);
      toast.error(`${formData.email} is not an valid email`);
      return;
    }

    try {
      const url = `${SERVER}/contact_us`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      if (data.success === true) {
        toast.success(data.msg);
      } else toast.error(data.msg);
    } catch (error) {
      const msg = error?.msg ? error?.msg : error;
      toast.error(msg);
    }

    setFormData({
      user_name: "",
      email: "",
      contact_address: "",
      user_concern: "",
    });

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>About Us | DreamSansar Consultancy</title>
        <meta
          name="description"
          content="DreamSansar Consultancy helps Nepali students with Ausbildung in Germany, Study in Europe & UK, FSJ, Au Pair, and German Language courses. "
        />
        <meta
          name="keywords"
          content="Ausbildung in Germany, Study in Germany, Nepali students, German language courses, visa support, DreamSansar Consultancy, about us"
        />
        <meta
          property="og:title"
          content="About Us | DreamSansar Consultancy"
        />
        <meta
          property="og:description"
          content="Start your Ausbildung journey in Germany with DreamSansar Consultancy. Get expert visa help, placement, and training."
        />
        <meta
          property="og:image"
          content="https://dreamsansar.com/images/og-ausbildung.jpg"
        />
        <meta property="og:url" content="https://dreamsansar.com/about_us" />
      </Helmet>

      <Box bg="gray.50" color="gray.800" overflowX="hidden">
        {/* -------- Section 1: Hero / About Us -------- */}
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify="center"
          py={[10, 16, 20]}
          px={[4, 8, 16]}
          gap={[8, 10, 14]}
        >
          {/* Left Image */}
          <Box flex="1" textAlign="center" width={'100%'}>
            <Image
              src={about_us}
              alt="About us"
              borderRadius="2xl"
              shadow="lg"
              objectFit="cover"
              w="100%"
              h={["250px", "350px", "420px"]}
            />
          </Box>

          {/* Right Content */}
          <Box flex="1" textAlign={["center", "center", "left"]}>
            <Text
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight="bold"
              mb={4}
              lineHeight="shorter"
            >
              About{" "}
              <Text as="span" color="orange.400">
                DreamSansar
              </Text>
            </Text>
            <Text textAlign={"left"} fontSize={["md", "lg"]} lineHeight="1.8">
              DreamSansar is committed to empowering students and professionals
              to achieve their global ambitions. With years of experience and
              trusted partnerships, we provide accurate guidance, career
              opportunities, and training to help you grow personally and
              professionally.
              <br />
              <br />
              Our team believes in transparency, trust, and delivering results
              that genuinely make a difference.
            </Text>
          </Box>
        </Flex>

        {/* -------- Section 2: Mission & Vision -------- */}
        <Box py={[10, 16, 20]} px={[4, 8, 16]} textAlign="center" bg="white">
          <Text fontSize={["2xl", "3xl"]} fontWeight="bold" mb={[6, 10]}>
            Our Mission & Vision
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={[6, 10]}>
            <Box bg="gray.100" p={[6, 8]} borderRadius="xl" shadow="md">
              <Text fontWeight="bold" fontSize="xl" mb={3}>
                🎯 Our Mission
              </Text>
              <Text fontSize={["sm", "md"]}>
                To deliver transparent, quality career and education guidance
                services that empower individuals to achieve global success and
                personal growth.
              </Text>
            </Box>
            <Box bg="gray.100" p={[6, 8]} borderRadius="xl" shadow="md">
              <Text fontWeight="bold" fontSize="xl" mb={3}>
                🚀 Our Vision
              </Text>
              <Text fontSize={["sm", "md"]}>
                To be a globally trusted partner in transforming lives through
                education, opportunity, and career advancement.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* -------- Section 3: Our Principles -------- */}
        {/* -------- Section 3: Our Principles -------- */}
        <Box py={20} px={[6, 16]} textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" mb={10}>
            Our Principles
          </Text>

          <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
            {[
              { icon: FaHandshake, title: "Trust" },
              { icon: FaThumbsUp, title: "Honesty" },
              { icon: FaClock, title: "Open" },
              { icon: FaCheck, title: "Clarity" },
              { icon: FaPuzzlePiece, title: "Creative" },
            ].map((item, idx) => (
              <Box
                key={idx}
                bg="white"
                p={8}
                borderRadius="xl"
                shadow="lg"
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                transition="0.3s"
                cursor={"pointer"}
              >
                <VStack spacing={4}>
                  <Box
                    bg="blue.600"
                    color="white"
                    borderRadius="full"
                    p={5}
                    fontSize="2xl"
                  >
                    <Icon as={item.icon} />
                  </Box>
                  <Text fontWeight="bold">{item.title}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        {/* -------- Section 4: Contact Us -------- */}
        <Box py={[10, 16, 20]} px={[4, 8, 16]} bg="white">
          <Text
            textAlign="center"
            fontSize={["2xl", "3xl"]}
            fontWeight="bold"
            mb={[6, 10]}
          >
            Contact Us
          </Text>

          <Flex
            direction={["column", "column", "row"]}
            gap={[8, 10]}
            align="stretch"
          >
            {/* Left: Map */}
            <Box flex="1" borderRadius="xl" overflow="hidden" shadow="md">
              <VStack p={"3"} alignItems={'flex-start'}>
                <Text fontSize={'2xl'} textAlign={"center"}>
                  Get in touch
                </Text>
                <Text textAlign={'left'}>We usually respond within one business day.</Text>
                <HStack align={'flex-start'} >
                  <LuMapPin />
                  <Text>Baneshwor, Kathmandu, Nepal</Text>
                </HStack>
                <a target="_blank" href="tel:+234238402334">
                  <HStack>
                    <FaPhoneVolume />
                    <Text>+234238402334</Text>
                  </HStack>
                </a>
                <a target="_blank" href="mailto:info@dreamsansareducation.com">
                  <HStack mb={'3'}>
                    <CiMail />
                    <Text>info@dreamsansareducation.com</Text>
                  </HStack>
                </a>
<Box width={'100%'}>

  <iframe src="https://www.google.com/maps/embed?pb=!4v1761233704538!6m8!1m7!1s4FAHJZZA7Qwapop4N9aXxQ!2m2!1d27.6883077916164!2d85.33501270797336!3f190.78168616860964!4f8.108796599684368!5f0.4000000000000002"  width="100%"
                  style={{ border: 0, height: "400px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            

                </Box>
              </VStack>
            </Box>
            {/* Right: Form */}
            <Box flex="1" bg="gray.50" p={[6, 8]} borderRadius="xl" shadow="md">
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                  <FormInput
                    type="text"
                    label="Enter Full Name"
                    icon={<FaRegUserCircle />}
                    name="user_name"
                    placeholder="John Doe"
                    value={formData.user_name}
                    handleChange={handleOnChange}
                  />

                  <FormInput
                    type="email"
                    label="Enter Email"
                    icon={<AiOutlineMail />}
                    name="email"
                    placeholder="johndoe23@gmail.com"
                    value={formData.email}
                    handleChange={handleOnChange}
                  />

                  <Box w="full">
                    <Text mb={2} fontWeight="medium">
                      Contact Number
                    </Text>
                    <PhoneInput
                      country="us"
                      value={formData.contact_address}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        width: "100%",
                        height: "45px",
                        fontSize: "16px",
                      }}
                    />
                  </Box>

                  <FormInputTextArea
                    label="Enter Your Concern"
                    name="user_concern"
                    placeholder="Type your user_concern..."
                    value={formData.user_concern}
                    handleChange={handleOnChange}
                  />

                  <Buttons
                    isloading={loading}
                    type="submit"
                    title="Make My Chance"
                    width="full"
                    handleClick={handleSubmit}
                  />
                </VStack>
              </form>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
