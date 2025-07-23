import { Box, Heading, SimpleGrid, Text, Button, Link, Stack  , Divider} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const advancedProjects = [
     {
    id: "ecommerce",
    title: "E-Ticaret Platformu",
    description: "Çok dilli destekli, sepet sistemli gelişmiş e-ticaret web uygulaması.",
    tech: "React, Redux, Context API, Chakra UI",
    github: "https://github.com/mervehediyeozen/shopping-demo",
    live: "https://shopping-demo-wheat.vercel.app/Main",
  },
   {
    id: "checkers",
    title: "Turkish-Checkers Game",
    description: "Türk Daması kurallarına göre geliştirilmiş react projesi.",
    tech: "React, Redux, Chakra UI",
    github: "https://github.com/mervehediyeozen/turkish-checkers-game",
    live: "https://turkish-checkers-game-dun.vercel.app/",
  },
   {
    id:"type-fast",
    title: "Speed Typing Fast App",
    description: "Klavyede yazma hızınızı ölçen, oturum açıp giriş yapabileceğiniz,skorlarınızı tutabileceğiniz proje.",
    tech: "React, Redux, Chakra UI",
    github: "https://github.com/mervehediyeozen/speed--typing-test-app",
    live: "https://speed-typing-test-app.vercel.app/",
  },
  {
    id: "covid",
    title: "Covid-19 Tracker",
    description: "Global Covid-19 verilerini canlı olarak gösteren bir React projesi.",
    tech: "React, API, Chart.js",
    github: "https://github.com/mervehediyeozen/covid-19-global-tracker",
    live: "https://covid-19-global-tracker-delta.vercel.app/",
  },
  {
    id: "weather",
    title: "Hava Durumu Uygulaması",
    description: "Konum bazlı hava durumu bilgilerini gösteren uygulama.",
    tech: "React, Chakra UI, OpenWeather API",
    github: "https://github.com/mervehediyeozen/weather-app",
    live: "https://weather-app-two-theta-84.vercel.app/",
  },
  
 
];
const normalProjects = [
   
   {
    id: "puzzle-app",
    title: "Puzzle-App",
    description: "Parçaları eş bulmaya yönlendiren basit bir puzzle projesi.",
    tech: "React, Chakra UI, ,Redux",
    github: "https://github.com/mervehediyeozen/puzzle-app",
    live: "#",
  }, 
   {
    id: "youtube-clone",
    title: "Youtube-Clone",
    description: "Tasarım olarak birebir youtube web sitesi tasarımını yansıtan , tasarımsal proje.",
    tech: "React, Redux  , Chakra UI",
    github: "https://github.com/mervehediyeozen/youtube-clone",
    live: "#",
  },
 
  
 
];
const beginningProjects = [
   


  {
    id: "note-app",
    title: "Note-App",
    description: "Girilen nota arkaplan rengi verip kaydedebileceğiniz, sonra onu içeriğine göre aratabileceğiniz basit bir proje.",
    tech: "React, Chakra UI, ,Redux",
    github: "https://github.com/mervehediyeozen/genarator-app",
    live: "#",
  },
   {
    id: "markdown-format",
    title: "Markdown-Format",
    description: "Kullanıcının girdiği yazıları markdown formata dönüştüren proje.",
    tech: "React, Redux  , Chakra UI",
    github: "https://github.com/mervehediyeozen/markdown-app",
    live: "#",
  },
  {
    id: "ig-clone",
    title: "IG-Clone",
    description: "Tasarım olarak birebir instagram web sitesi tasarımını yansıtan , tasarımsal proje.",
    tech: "React, Redux  , Chakra UI",
    github: "https://github.com/mervehediyeozen/ig-clone",
    live: "#",
  },

  
 
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <Box maxW="1200px" mx="auto" py={16} px={6} id="projects-section">
      <Heading size="xl" mb={10} textAlign="center" color="#515e4d" fontWeight="light" >
        Projelerim
      </Heading>
      <Box mb="40px">
        <Divider  borderColor="#99ab8c"/>
      </Box>
       <Heading size="lg" mb={10} textAlign="left" color="#515e4d" fontWeight="light"> Advanced Projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {advancedProjects.map((proj) => (
          <MotionBox
            key={proj.id}
            borderWidth="1px"
            borderRadius="2xl"
            boxShadow="md"
            p={6}
            bg="white"
            cursor="pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/projects/${proj.id}`)}
          >
            <Heading size="md" mb={2} fontWeight="light">
              {proj.title}
            </Heading>
            <Text mb={2} color="#74876f">{proj.description}</Text>
            <Text fontSize="sm" color="#62857a" mb={4}>
              Teknolojiler: {proj.tech}
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href={proj.github} isExternal onClick={e => e.stopPropagation()}>
                <Button bg="#eaf0e6" size="sm" fontWeight="light" _hover={{bg:"#cedbc3"}}>
                  GitHub
                </Button>
              </Link>
              {proj.live !== "#" && proj.live ? (
                <Link href={proj.live} isExternal onClick={e => e.stopPropagation()}>
                  <Button bg="#cedbc3" size="sm" fontWeight="light" _hover={{bg:"#eaf0e6"}}>
                    Canlı Önizleme
                  </Button>
                </Link>
              ) : (
                <Button colorScheme="gray" size="sm" isDisabled>
                  Canlı Önizleme
                </Button>
              )}
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
          <Box mt="40px" mb="40px">
        <Divider  borderColor="#99ab8c"/>
      </Box>
       <Heading size="lg" mb={10} textAlign="left" color="#515e4d" fontWeight="light"> Intermediate level projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {normalProjects.map((proj) => (
          <MotionBox
            key={proj.id}
            borderWidth="1px"
            borderRadius="2xl"
            boxShadow="md"
            p={6}
            bg="white"
            cursor="pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/projects/${proj.id}`)}
          >
            <Heading size="md" mb={2} fontWeight="light">
              {proj.title}
            </Heading>
            <Text mb={2} color="#74876f">{proj.description}</Text>
            <Text fontSize="sm" color="#62857a" mb={4}>
              Teknolojiler: {proj.tech}
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href={proj.github} isExternal onClick={e => e.stopPropagation()}>
                <Button bg="#eaf0e6" size="sm" fontWeight="light" _hover={{bg:"#cedbc3"}}>
                  GitHub
                </Button>
              </Link>
              {proj.live !== "#" && proj.live ? (
                <Link href={proj.live} isExternal onClick={e => e.stopPropagation()}>
                  <Button bg="#cedbc3" size="sm" fontWeight="light" _hover={{bg:"#eaf0e6"}}>
                    Canlı Önizleme
                  </Button>
                </Link>
              ) : (
                <Button colorScheme="gray" size="sm" isDisabled>
                  Canlı Önizleme
                </Button>
              )}
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
        <Box mt="40px" mb="40px">
        <Divider  borderColor="#99ab8c"/>
      </Box>
       <Heading size="lg" mb={10} textAlign="left" color="#515e4d" fontWeight="light"> Beginning level projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {beginningProjects.map((proj) => (
          <MotionBox
            key={proj.id}
            borderWidth="1px"
            borderRadius="2xl"
            boxShadow="md"
            p={6}
            bg="white"
            cursor="pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/projects/${proj.id}`)}
          >
            <Heading size="md" mb={2} fontWeight="light">
              {proj.title}
            </Heading>
            <Text mb={2} color="#74876f">{proj.description}</Text>
            <Text fontSize="sm" color="#62857a" mb={4}>
              Teknolojiler: {proj.tech}
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href={proj.github} isExternal onClick={e => e.stopPropagation()}>
                <Button bg="#eaf0e6" size="sm" fontWeight="light" _hover={{bg:"#cedbc3"}}>
                  GitHub
                </Button>
              </Link>
              {proj.live !== "#" && proj.live ? (
                <Link href={proj.live} isExternal onClick={e => e.stopPropagation()}>
                  <Button bg="#cedbc3" size="sm" fontWeight="light" _hover={{bg:"#eaf0e6"}}>
                    Canlı Önizleme
                  </Button>
                </Link>
              ) : (
                <Button colorScheme="gray" size="sm" isDisabled>
                  Canlı Önizleme
                </Button>
              )}
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
