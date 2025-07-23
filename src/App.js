import Home from "./pages/Home";
import { Route  , Routes } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetails";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
  <>   

   <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/aboutme" element={<AboutMe />} />
   </Routes>
  </>
  );
}

export default App;
