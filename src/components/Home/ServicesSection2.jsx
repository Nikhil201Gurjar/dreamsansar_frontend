import {
  Box,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  Flex,
  Fade,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";


import german_language_a1_b2 from '../../assets/services/german-language-a1-b2.avif'
import fsj_in_germany from '../../assets/services/fsj-in-germany.avif'
import au_pair_in_europe from '../../assets/services/au-pair-in-europe.avif'
import study_in_europe_uk from '../../assets/services/study-in-europe-uk.avif'
import ausbuildung_in_germany from '../../assets/services/ausbuildung-in-germany.avif'
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Ausbildung in Germany",
    image:ausbuildung_in_germany,
    description:
      "The German vocational training system (Ausbildung) combines classroom learning with on-the-job training. Earn while you learn and gain international certification to work across Germany.",
      href: "/services/ausbildung-in-germany"
  },
  {
    id: 3,
    title: "Study in Europe & UK",
    image: study_in_europe_uk,
    description:
      "Explore top universities across the UK and Europe. Get complete support for admission, SOP guidance, scholarship applications, and post-study visa opportunities.",
      href: "/services/study-in-europe-uk" 
  },
  {
    id: 5,
    title: "Au Pair in Europe",
    image:au_pair_in_europe,
    description:
      "Live with a host family in Germany, Austria, Switzerland, or the Netherlands. Learn the language, culture, and earn pocket money while taking care of kids.",
      href: "/services/au-pair-in-europe"
  },
  {
    id: 6,
    title: "FSJ in Germany",
    image: fsj_in_germany,
    description:
      "Join the ‘Freiwilliges Soziales Jahr’ (Voluntary Social Year) program. Gain valuable experience in healthcare, social services, or community projects while immersing in German culture.",
      href: "/services/fsj-in-germany"
  },
  {
    id: 7,
    title: "German Language A1–B2",
    image: german_language_a1_b2,
    description:
      "Learn German from A1 to B2 level with certified instructors. Our online and classroom sessions prepare you for TELC / Goethe exams and real-life communication.",
      href: "/services/german-language-a1-b2" 
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(services[0]);
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box
      py={[10, 16, 20]}
      px={[4, 8, 16]}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      

      {/* --- Services Menu --- */}
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing={[4, 6, 8]}
        mb={2}
        justifyItems="center"
      >
        {services.map((s) => (
          <Box
            key={s.id}
            bg={cardBg}
            p={2}
            w="full"
            textAlign="center"
            rounded="xl"
            border={
              selected.id === s.id ? "2px solid #FF6B6B" : "1px solid gray.200"
            }
            cursor="pointer"
            shadow={selected.id === s.id ? "xl" : "md"}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              shadow: "xl",
              border: "2px solid #FF6B6B",
            }}
            onClick={() => setSelected(s)}
          >
            <Text fontWeight="semibold" fontSize={["sm", "md", "lg"]}>
              {s.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* --- Selected Service Details --- */}
      <Fade in={selected} >
        <Flex
          direction={["column", "column", "row"]}
          gap={[6, 8, 12]}
          align="center"
          justify="center"
          bg={cardBg}
          p={3}
          rounded="2xl"
          shadow="xl"
         
        >
          <Image
            src={selected.image}
            alt={selected.title}
            borderRadius="2xl"
            w={"100%"}
            h={["220px", "280px", "350px"]}
            objectFit="cover"
            shadow="md"
          />
          <VStack align="flex-start" spacing={[3, 4, 5]} maxW={["100%", "80%", "50%"]}>
            <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold">
              {selected.title}
            </Text>
            <Text color="gray.600" fontSize={["sm", "md"]}>
              {selected.description}
            </Text>
            <Link to={selected?.href}>
            <Button
              colorScheme="green"
              rounded="full"
              size={["sm", "md"]}
              alignSelf={["center", "flex-start"]}
            >
              Learn More
            </Button>
</Link>
          </VStack>
        </Flex>
      </Fade>
    </Box>
  );
}
