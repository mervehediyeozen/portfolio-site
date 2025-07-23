import { Box, Heading, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaUserAlt, FaLaptopCode, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);

const cards = [
  {
    title: "About Me",
    description: "Get to know more about my background and journey.",
    icon: <FaUserAlt size="24" />,
   onClick: () => {
      const el = document.getElementById("about-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
  {
    title: "Projects",
    description: "Explore the work I've done using modern technologies.",
    icon: <FaLaptopCode size="24" />,
    onClick: () => {
      const el = document.getElementById("projects-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
  {
    title: "Contact",
    description: "Feel free to reach out and connect with me.",
    icon: <FaEnvelope size="24" />,
    onClick: () => {
      const el = document.getElementById("contact-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
];

export default function InfoCards() {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 3 }}
      spacing={10}
      p={8}
      // Responsive padding ve margin
      // Ek olarak grid gap hover için smooth transition verebiliriz
      sx={{
        transition: "all 0.3s ease",
        "&:hover > div": {
          transform: "scale(1.02)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        },
      }}
    >
      {cards.map((card, index) => (
        <MotionBox
          key={index}
          p={6}
          borderRadius="xl"
          shadow="lg"
          bg="gray.100"
          cursor={card.onClick ? "pointer" : "default"}
          onClick={card.onClick ? card.onClick : undefined}
          role={card.onClick ? "button" : undefined}
          tabIndex={card.onClick ? 0 : undefined}
          onKeyPress={(e) => {
            if (card.onClick && (e.key === "Enter" || e.key === " ")) {
              card.onClick();
            }
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
        >
          <HStack spacing={3} mb={3} color="#5c665a">
            {card.icon}
            <Heading fontSize="xl" fontWeight="light">{card.title}</Heading>
          </HStack>
          <Text color="#222421" fontWeight="light"> {card.description}</Text>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}
