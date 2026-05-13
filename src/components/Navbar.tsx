import { Box, Flex, Text } from "@chakra-ui/react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Platforms", href: "#platforms" },
  { label: "Deadlines", href: "#deadlines" },
];

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg="rgba(10, 15, 26, 0.85)"
      backdropFilter="blur(12px)"
      borderBottom="1px solid rgba(255,255,255,0.06)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: "20px", md: "40px" }}
        py="14px"
        justify="space-between"
        align="center"
      >
        <Flex align="center" gap="10px">
          <Box
            w="8px"
            h="8px"
            borderRadius="50%"
            bg="#D4AF37"
            boxShadow="0 0 8px #D4AF37"
          />
          <Text
            fontFamily="'Bebas Neue', sans-serif"
            fontSize={{ base: "18px", md: "22px" }}
            letterSpacing="0.12em"
            color="white"
          >
            WC26
            <Box as="span" color="#D4AF37" mx="6px">
              ×
            </Box>
            NYNJ
          </Text>
        </Flex>

        <Flex gap={{ base: "16px", md: "32px" }} align="center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
