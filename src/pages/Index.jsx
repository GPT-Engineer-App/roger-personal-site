import React from "react";
import { Box, Container, Heading, Text, Image, VStack, HStack, Link, Button, Icon, chakra } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebookF, FaTrophy } from "react-icons/fa";

const federerImage = "https://images.unsplash.com/photo-1531315396756-905d68d21b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSb2dlciUyMEZlZGVyZXJ8ZW58MHx8fHwxNzEwMzE4NzUzfDA&ixlib=rb-4.0.3&q=80&w=1080";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="white"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: "gray.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Image borderRadius="full" boxSize="150px" src={federerImage} alt="Roger Federer" />
        <Heading as="h1">Roger Federer</Heading>
        <Text fontSize="lg">Roger Federer is a Swiss professional tennis player. He is ranked No. 8 in the world by the Association of Tennis Professionals. He has won 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal and Novak Djokovic.</Text>
        <HStack spacing={4}>
          <SocialButton label="Twitter" href="https://twitter.com/rogerfederer">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Instagram" href="https://instagram.com/rogerfederer">
            <FaInstagram />
          </SocialButton>
          <SocialButton label="Facebook" href="https://facebook.com/Federer">
            <FaFacebookF />
          </SocialButton>
        </HStack>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Achievements
          </Heading>
          <VStack spacing={3} alignItems="flex-start">
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>20 Grand Slam Titles</Text>
            </HStack>
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>31 Grand Slam Finals</Text>
            </HStack>
            <HStack>
              <Icon as={FaTrophy} w={5} h={5} />
              <Text>310 weeks at No. 1 in the ATP rankings</Text>
            </HStack>
          </VStack>
        </Box>
        <Button colorScheme="blue" leftIcon={<FaTrophy />}>
          View More
        </Button>
      </VStack>
    </Container>
  );
};

// Helper component for accessibility
const VisuallyHidden = ({ children }) => <Box style={{ position: "absolute", height: "1px", width: "1px", margin: "-1px", padding: 0, overflow: "hidden", clip: "rect(0, 0, 0, 0)", border: 0 }}>{children}</Box>;

export default Index;
