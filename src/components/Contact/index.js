import { Box, Heading, VStack, Input, Textarea, Button, HStack, Link, useToast } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Contact() {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Lütfen tüm alanları doldurun.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Mesajınız gönderildi!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <MotionBox
      maxW="600px"
      
      mx="auto"
      py={16}
      px={6}
      id="contact-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Heading mb={8} textAlign="center" color="#6f7a66" fontWeight="light">
        İletişim
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input
            placeholder="Adınız"
            name="name"
            value={form.name}
            onChange={handleChange}
            focusBorderColor="teal.400"
          />
          <Input
            placeholder="E-posta Adresiniz"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            focusBorderColor="teal.400"
          />
          <Textarea
            placeholder="Mesajınız"
            name="message"
            value={form.message}
            onChange={handleChange}
            focusBorderColor="teal.400"
            rows={6}
          />
          <Button bg="#6f7a66" color="white" type="submit" width="full" _hover={{bg:"#dae6d1" , color:"#656b5a"}}>
            Gönder
          </Button>
        </VStack>
      </form>
      <HStack justify="center" mt={10} spacing={8} fontSize="2xl" color="#6f7a66">
        <Link href="mailto:mervehediyeozen98@gmail.com" isExternal aria-label="Email">
          <FaEnvelope />
        </Link>
        <Link href="https://github.com/mervehediyeozen" isExternal aria-label="GitHub">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/mervehediyeozen" isExternal aria-label="LinkedIn">
          <FaLinkedin />
        </Link>
        <Link href="tel:+905530846947" aria-label="Telefon">
          <FaPhone />
        </Link>
      </HStack>
    </MotionBox>
  );
}
