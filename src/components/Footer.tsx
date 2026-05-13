import { Box, Flex, Text } from "@chakra-ui/react";

const FOOTER_BG =
  "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=1920&q=60";

export default function Footer() {
  return (
    <Box as="footer" position="relative" overflow="hidden">
      {/* Background */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${FOOTER_BG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        opacity={0.12}
      />
      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, #0a0f1a, rgba(10,15,26,0.95))"
      />

      <Box position="relative" zIndex={2}>
        {/* Divider */}
        <Box
          maxW="1100px"
          mx="auto"
          px={{ base: "20px", md: "40px" }}
          pt={{ base: "60px", md: "80px" }}
        >
          <Box
            h="1px"
            bg="linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)"
          />
        </Box>

        {/* Key deadlines reminder */}
        <Box
          maxW="1100px"
          mx="auto"
          px={{ base: "20px", md: "40px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{ base: "28px", md: "36px" }}
            color="white"
            letterSpacing="0.02em"
            mb="24px"
          >
            KEY DEADLINES
          </Text>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: "16px", md: "24px" }}
          >
            {[
              {
                date: "May 22",
                label: "World Rewards Program Enrollment",
                color: "#D4AF37",
              },
              {
                date: "May 27",
                label: "NYC Tourism Submissions Open",
                color: "#2E86DE",
              },
              {
                date: "June 1",
                label: "LiveMap.NYC Submission Deadline",
                color: "#27AE60",
              },
              {
                date: "July 1",
                label: "NYC Tourism Rolling Deadline",
                color: "#2E86DE",
              },
            ].map((d) => (
              <Box
                key={d.label}
                flex={1}
                bg="rgba(255,255,255,0.03)"
                border="1px solid rgba(255,255,255,0.06)"
                borderRadius="10px"
                p={{ base: "16px", md: "20px" }}
                borderLeft={`3px solid ${d.color}`}
              >
                <Text
                  fontFamily="'Bebas Neue', sans-serif"
                  fontSize="22px"
                  color={d.color}
                  lineHeight="1"
                  mb="6px"
                >
                  {d.date}
                </Text>
                <Text
                  fontSize="12px"
                  lineHeight="1.4"
                  color="rgba(255,255,255,0.5)"
                >
                  {d.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Bottom bar */}
        <Box
          borderTop="1px solid rgba(255,255,255,0.04)"
          py="24px"
          px={{ base: "20px", md: "40px" }}
        >
          <Flex
            maxW="1100px"
            mx="auto"
            justify="space-between"
            align="center"
            direction={{ base: "column", md: "row" }}
            gap="12px"
          >
            <Text
              fontSize="12px"
              color="rgba(255,255,255,0.3)"
              textAlign={{ base: "center", md: "left" }}
            >
              All images sourced from Unsplash &mdash; free for commercial use,
              no attribution required.
            </Text>
            <Text
              fontSize="12px"
              color="rgba(255,255,255,0.3)"
              textAlign={{ base: "center", md: "right" }}
            >
              World Cup 2026 NYNJ &bull; Small Business Resource Guide
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
