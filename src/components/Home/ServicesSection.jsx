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

const services = [
  {
    id: 1,
    title: "Ausbildung in Germany",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
    description:
      "The German vocational training system (Ausbildung) combines classroom learning with on-the-job training. Earn while you learn and gain international certification to work across Germany.",
  },
  {
    id: 2,
    title: "Study in Germany",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Study tuition-free in world-renowned German universities. We guide you from university selection, visa documentation, to pre-departure support and settlement in Germany.",
  },
  {
    id: 3,
    title: "Study in UK & Europe",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore top universities across the UK and Europe. Get complete support for admission, SOP guidance, scholarship applications, and post-study visa opportunities.",
  },
  {
    id: 4,
    title: "Work Visa – Nursing (Germany)",
    image:
      "https://images.unsplash.com/photo-1588776814546-3d5f2c4e0a76?auto=format&fit=crop&w=1200&q=80",
    description:
      "Germany has huge demand for qualified nurses. We help you with credential verification, B2-level German training, and placement in reputed hospitals.",
  },
  {
    id: 5,
    title: "Au Pair (DE / AT / CH / NL)",
    image:
      "https://images.unsplash.com/photo-1594816995992-44d78e8d4c8b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Live with a host family in Germany, Austria, Switzerland, or the Netherlands. Learn the language, culture, and earn pocket money while taking care of kids.",
  },
  {
    id: 6,
    title: "FSJ in Germany (Only)",
    image:
      "https://images.unsplash.com/photo-1595453568076-661c7d2f1e00?auto=format&fit=crop&w=1200&q=80",
    description:
      "Join the ‘Freiwilliges Soziales Jahr’ (Voluntary Social Year) program. Gain valuable experience in healthcare, social services, or community projects while immersing in German culture.",
  },
  {
    id: 7,
    title: "German Language A1–B2",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    description:
      "Learn German from A1 to B2 level with certified instructors. Our online and classroom sessions prepare you for TELC / Goethe exams and real-life communication.",
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(services[0]);
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box py={20}  px={[6, 16]} bg={useColorModeValue("gray.50", "gray.900")}>
     

      {/* Services Menu */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mb={12}>
        {services.map((s) => (
          <Box
            key={s.id}
            bg={cardBg}
            p={6}
            rounded="xl"
            shadow={selected.id === s.id ? "xl" : "md"}
            border={selected.id === s.id ? "2px solid #FF6B6B" : "1px solid gray.200"}
            cursor="pointer"
            transition="0.3s"
            textAlign="center"
            _hover={{
              transform: "translateY(-5px)",
              shadow: "lg",
              border: "2px solid #FF6B6B",
            }}
            onClick={() => setSelected(s)}
          >
            <Text fontWeight="semibold">{s.title}</Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Selected Service Details */}
      <Fade in={selected}>
        <Flex
          direction={["column", "row"]}
          gap={8}
          align="center"
          justify="center"
          bg="white"
          p={8}
          rounded="2xl"
          shadow="lg"
        >
          <Image
            src={selected.image}
            alt={selected.title}
            borderRadius="2xl"
            boxSize={["100%", "400px"]}
            objectFit="cover"
          />
          <VStack align="flex-start" spacing={4} maxW="600px">
            <Text fontSize="2xl" fontWeight="bold">
              {selected.title}
            </Text>
            <Text color="gray.600">{selected.description}</Text>
            <Button colorScheme="orange" rounded="full">
              Learn More
            </Button>
          </VStack>
        </Flex>
      </Fade>
    </Box>
  );
}
