import React from "react";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// motion wrapper
const MotionBox = motion(Box);
const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

function Hero() {
  const navigate = useNavigate();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      bg="#7e9179"
      color="white"
      py={{ base: 20, md: 28 }}
      px={{ base: 4, md: 12 }}
      textAlign="center"
    >
      <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4} fontWeight="light"> 
        Welcome to My Portfolio
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }} mb={8} fontWeight="light">
        I'm Merve Hediye Özen – a passionate developer.
      </Text>
      <Stack direction="row" justify="center" spacing={4}>
        <Button bg="#dde8da" onClick={() => scrollToSection("about-section")} fontWeight="light" color="#6a7867">
          Learn More
        </Button>
        <Button variant="outline" colorScheme="whiteAlpha"  fontWeight="light"  onClick={() => scrollToSection("contact-section")}>
          Contact
        </Button>
      </Stack>
    </MotionBox>
  );
}

export default Hero;
