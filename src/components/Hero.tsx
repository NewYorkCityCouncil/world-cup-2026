import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionFlex = motion.create(Flex);

// Free Unsplash images - soccer stadium by Vienna Reyes
const HERO_BG =
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <Box
      as="header"
      position="relative"
      h={{ base: "100vh", md: "100vh" }}
      minH="600px"
      overflow="hidden"
    >
      {/* Background image */}
      <MotionBox
        position="absolute"
        inset={0}
        backgroundImage={`url(${HERO_BG})`}
        backgroundSize="cover"
        backgroundPosition="center 30%"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* Dark gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(10,15,26,0.3) 0%, rgba(10,15,26,0.6) 40%, rgba(10,15,26,0.95) 85%, #0a0f1a 100%)"
      />

      {/* Accent line on left */}
      <MotionBox
        position="absolute"
        left={{ base: "20px", md: "60px" }}
        top="25%"
        bottom="25%"
        w="2px"
        bg="linear-gradient(180deg, transparent, #D4AF37, transparent)"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={2}
        h="100%"
        direction="column"
        justify="flex-end"
        pb={{ base: "80px", md: "120px" }}
        px={{ base: "20px", md: "80px" }}
        maxW="1200px"
        mx="auto"
      >
        {/* Pre-title */}
        <MotionText
          fontFamily="'DM Sans', sans-serif"
          fontSize={{ base: "11px", md: "13px" }}
          fontWeight="600"
          letterSpacing="0.25em"
          textTransform="uppercase"
          color="#D4AF37"
          mb="16px"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          New York / New Jersey &mdash; Summer 2026
        </MotionText>

        {/* Main headline */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Line 1: WORLD CUP 2026 */}
          <Flex align="baseline" gap={{ base: "10px", md: "16px" }} flexWrap="wrap">
            <Text
              fontFamily="'Bebas Neue', sans-serif"
              fontSize={{ base: "48px", md: "84px", lg: "110px" }}
              lineHeight="0.95"
              color="white"
              letterSpacing="0.02em"
            >
              WORLD CUP 2026
            </Text>

            {/* Gold accent line */}
     
          </Flex>

          {/* Line 2: SMALL BUSINESS OPPORTUNITIES */}
          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{ base: "28px", md: "48px", lg: "62px" }}
            lineHeight="1.05"
            color="rgba(255,255,255,0.45)"
            letterSpacing="0.06em"
            mt={{ base: "4px", md: "6px" }}
          >
            SMALL BUSINESS OPPORTUNITIES
          </Text>
        </MotionBox>

        {/* Subtitle */}
        <MotionText
          mt={{ base: "24px", md: "32px" }}
          fontFamily="'DM Sans', sans-serif"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="400"
          color="rgba(255,255,255,0.7)"
          maxW="560px"
          lineHeight="1.6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Free promotional platforms to help you capitalize on the world&apos;s biggest sporting event.
        </MotionText>

        {/* Scroll indicator */}
        <MotionFlex
          mt={{ base: "40px", md: "56px" }}
          align="center"
          gap="12px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Box
            w="1px"
            h="40px"
            bg="rgba(255,255,255,0.25)"
            position="relative"
            overflow="hidden"
          >
            <MotionBox
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="50%"
              bg="#D4AF37"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </Box>
          <Text
            fontSize="11px"
            fontWeight="500"
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.35)"
          >
            Scroll to explore
          </Text>
        </MotionFlex>
      </Flex>
    </Box>
  );
}
