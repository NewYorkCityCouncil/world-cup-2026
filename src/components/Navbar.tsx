import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import councilSeal from '../../nyc-seal-blue (1).png'
import { LuSquareArrowOutUpLeft } from "react-icons/lu";

const NAV_ITEMS = [
  { label: "About", href: "https://council.nyc.gov/2026-world-cup/#about" },
  { label: "Platforms", href: "https://council.nyc.gov/2026-world-cup/#platforms" },
  { label: "Deadlines", href: "https://council.nyc.gov/2026-world-cup/#deadlines" },
  {label:<Flex  textWrap={'nowrap'} alignItems={'center'}><LuSquareArrowOutUpLeft/><Text pl={'1'}>New York City Council</Text></Flex>, href:"https://council.nyc.gov/"}
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
        <a href="https://council.nyc.gov/"><Image height="50px" backgroundColor={'white'} rounded="3xl" padding='1' src={councilSeal} alt="New York City Council Seal"  /></a>
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
