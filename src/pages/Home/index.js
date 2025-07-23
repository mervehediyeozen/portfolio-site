import { Box  , Flex} from "@chakra-ui/react";
import Hero from "../../components/Hero";
import InfoCards from "../../components/InfoCards";
import About from "../../components/About";
import ProjectsSection from "../../components/ProjectsSection";
import Contact from "../../components/Contact";
import { Divider } from "@chakra-ui/react";

function Home() {
  return (
    <Flex flexDirection="column"> 
    <Box>
        <Hero />
        <Box bg="#ecf0eb">
      <InfoCards />
     
      <ProjectsSection />
       <Box>
        <Divider  borderColor="#99ab8c"/>
      </Box>
      <About />
      <Box>
        <Divider  borderColor="#99ab8c"/>
      </Box>
      <Contact/> 
      </Box>
    </Box>
    </Flex>
  );
}

export default Home;