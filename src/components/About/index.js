import { Flex, Image, Text, Heading, Stack  , Box , Button} from "@chakra-ui/react";
import myPhoto from "../../images/me/me1.jpeg"
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
  return (
    <Flex direction="column">
        <Box>
    <Flex
       id="about-section"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      p={10}
      gap={10}
    >
      <Image
        src={myPhoto}
        alt="Profile"
        boxSize="250px"
        objectFit="cover"
        borderRadius="full"
        objectPosition="top"
        shadow="lg"
      />
      <Stack spacing={4} maxW="lg">
        <Heading as="h2" fontSize="2xl" color="#6f7a66" fontWeight="light">
          Merve Hediye Özen
        </Heading>
        <Text fontSize="md" color="#494d43" fontWeight="light">
          Merhaba! Ben Eskişehir Teknik Üniversitesi Bilgisayar Programcılığı
          öğrencisiyim. Frontend geliştirme, React ve modern web teknolojileri
          üzerine çalışıyorum. Aynı zamanda Web Tasarımı bölümünde ikinci üniversiteye devam ediyorum.
        </Text>
        <Text fontSize="md" color="#494d43" fontWeight="light">
          React, Redux, Chakra UI, JavaScript ve daha fazlasıyla projeler
          geliştiriyorum. Ayrıca GitHub hesabımda çeşitli uygulamalara göz atabilirsiniz.
        </Text>
      </Stack>
      </Flex>
    </Box>
    
      <Box>
        <Flex justifyContent="right" p="10px">
        <Button variant="ghost" onClick={() => navigate("/aboutme")} color="#69705e"> Daha fazla</Button>
        </Flex>
      </Box>
    
    </Flex>
  );
}

export default About;
