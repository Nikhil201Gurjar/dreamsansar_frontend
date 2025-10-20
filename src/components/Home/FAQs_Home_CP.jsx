import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="full">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
          mb={10}
        >
          Frequently Asked Questions
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.100", color: "orange.600" }}>
                <Box flex="1" textAlign="left" fontWeight="500">
                  How quickly will I see results?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Results vary, but many users start noticing improvements within the
              first few weeks of use.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.100", color: "orange.600" }}>
                <Box flex="1" textAlign="left" fontWeight="500">
                  Do I need technical skills to set this up?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Not at all! The system is designed to be beginner-friendly, with
              simple setup steps and guides.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.100", color: "orange.600" }}>
                <Box flex="1" textAlign="left" fontWeight="500">
                  Will this work with my existing tools?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, it integrates with most popular tools and platforms seamlessly.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.100", color: "orange.600" }}>
                <Box flex="1" textAlign="left" fontWeight="500">
                  What if I'm not satisfied?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We offer a 30-day money-back guarantee. If you’re not satisfied,
              you’ll get a full refund.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.100", color: "orange.600" }}>
                <Box flex="1" textAlign="left" fontWeight="500">
                  How much does it cost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Pricing depends on the plan you choose, starting from as low as
              $19/month.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "orange.100", color: "orange.600" }}>
                <Box flex="1" textAlign="left" fontWeight="500">
                  Is my data secure?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Absolutely. We use bank-level encryption and follow industry best
              practices to ensure your data is safe.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Box>
  );
}
