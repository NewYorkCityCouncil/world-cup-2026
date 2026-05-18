import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const BALL_IMG =
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80";

export default function Intro() {
  return (
    <Box
      as="section"
      id="about"
      position="relative"
      py={{ base: "80px", md: "120px" }}
      px={{ base: "20px", md: "40px" }}
      bg="#0a0f1a"
    >
      {/* Subtle top border glow */}
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="200px"
        h="1px"
        bg="linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)"
      />

      <Flex
        maxW="1100px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        gap={{ base: "40px", md: "80px" }}
        align="center"
      >
        {/* Image column */}
        <MotionBox
          flex="0 0 auto"
          w={{ base: "100%", md: "320px" }}
          h={{ base: "240px", md: "380px" }}
          borderRadius="12px"
          overflow="hidden"
          position="relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={BALL_IMG}
            alt="Soccer ball on a green grass field"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(135deg, rgba(10,15,26,0.2), rgba(10,15,26,0.5))"
          />
          <Box
            position="absolute"
            bottom="16px"
            left="16px"
            fontSize="10px"
            fontWeight="500"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.5)"
            bg="rgba(0,0,0,0.4)"
            px="10px"
            py="4px"
            borderRadius="4px"
          >
            Photo &bull; Wesley Tingey / Unsplash
          </Box>
        </MotionBox>

        {/* Text column */}
        <MotionBox
          flex={1}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Text
            fontSize="11px"
            fontWeight="700"
            letterSpacing="0.2em"
            textTransform="uppercase"
            color="#D4AF37"
            mb="12px"
          >
            For NYC Business Owners
          </Text>

          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{ base: "32px", md: "44px" }}
            lineHeight="1.05"
            color="white"
            mb="24px"
            letterSpacing="0.02em"
          >
            FREE PROMOTIONAL
            <br />
            PLATFORMS FOR YOUR SMALL BUSINESS
          </Text>

          <Text
            fontSize={{ base: "15px", md: "16px" }}
            lineHeight="1.75"
            color="rgba(255,255,255,0.6)"
            maxW="520px"
          >
            Promote your World Cup-inspired activations—watch parties, themed menus, discounts, promotions, giveaways, etc—by taking advantage of several free promotional platforms to help you spread the word to locals and visitors alike.
          </Text>

          <Flex mt="32px" gap="24px" wrap="wrap">
            {[
              { num: "3", label: "Platforms" },
              { num: "5", label: "Boroughs" },
              { num: "Free", label: "To Submit" },
            ].map((stat) => (
              <Box key={stat.label}>
                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  fontSize="36px"
                  color="#D4AF37"
                  lineHeight="1"
                >
                  {stat.num}
                </Text>
                <Text
                  fontSize="11px"
                  fontWeight="600"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  color="rgba(255,255,255,0.4)"
                  mt="4px"
                >
                  {stat.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </MotionBox>
      </Flex>
    </Box>
  );
}
