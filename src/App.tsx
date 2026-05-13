import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import PlatformCard from "./components/PlatformCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { PLATFORMS } from "./data/platforms";

function App() {
  return (
    <Box minH="100vh" bg="#0a0f1a" overflow="hidden">
      <Navbar />
      <Hero />
      <Intro />
      <Box
        as="section"
        id="platforms"
        maxW="1100px"
        mx="auto"
        px={{ base: "20px", md: "40px" }}
        py={{ base: "60px", md: "100px" }}
        display="flex"
        flexDirection="column"
        gap={{ base: "48px", md: "72px" }}
      >
        {PLATFORMS.map((platform, index) => (
          <PlatformCard key={platform.id} platform={platform} index={index} />
        ))}
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
