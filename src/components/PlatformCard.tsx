import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink, FiAlertCircle } from "react-icons/fi";
import type { Platform } from "../data/platforms";

const MotionBox = motion.create(Box);

interface Props {
  platform: Platform;
  index: number;
}

export default function PlatformCard({ platform, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <MotionBox
      position="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      {/* Number watermark */}
      <Text
        position="absolute"
        top={{ base: "-20px", md: "-40px" }}
        right={isEven ? undefined : { base: "0", md: "0" }}
        left={isEven ? { base: "0", md: "0" } : undefined}
        fontFamily="'Bebas Neue', sans-serif"
        fontSize={{ base: "120px", md: "200px" }}
        lineHeight="1"
        color="rgba(255,255,255,0.025)"
        userSelect="none"
        pointerEvents="none"
      >
        0{platform.number}
      </Text>

      {/* Card */}
      <Box
        position="relative"
        bg="rgba(255,255,255,0.025)"
        border="1px solid rgba(255,255,255,0.06)"
        borderRadius="16px"
        p={{ base: "28px", md: "48px" }}
        _hover={{
          border: `1px solid ${platform.accentColor}22`,
          bg: "rgba(255,255,255,0.035)",
        }}
        transition="all 0.3s ease"
      >
        {/* Top accent bar */}
        <Box
          position="absolute"
          top={0}
          left="48px"
          right="48px"
          h="1px"
          bg={`linear-gradient(90deg, transparent, ${platform.accentColor}66, transparent)`}
        />

        {/* Header */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "flex-start" }}
          gap="16px"
          mb="28px"
        >
          <Box flex={1}>
            <Flex align="center" gap="12px" mb="8px">
              <Box
                w="6px"
                h="6px"
                borderRadius="50%"
                bg={platform.accentColor}
                boxShadow={`0 0 8px ${platform.accentColor}`}
              />
              <Text
                fontSize="11px"
                fontWeight="700"
                letterSpacing="0.2em"
                textTransform="uppercase"
                color={platform.accentColor}
              >
                Platform {platform.number}
              </Text>
            </Flex>

            <Text
              fontFamily="'Bebas Neue', sans-serif"
              fontSize={{ base: "28px", md: "36px" }}
              lineHeight="1.1"
              color="white"
              letterSpacing="0.02em"
            >
              {platform.title}
            </Text>

            <Text
              fontSize="13px"
              fontWeight="500"
              color="rgba(255,255,255,0.4)"
              mt="4px"
            >
              {platform.subtitle}
            </Text>
          </Box>

          {/* Site link pill */}
          <a
            href={platform.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: 600,
              color: "white",
              textDecoration: "none",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
          >
            {platform.siteName}
            <FiExternalLink size={14} />
          </a>
        </Flex>

        {/* Description */}
        <Text
          fontSize={{ base: "14px", md: "15px" }}
          lineHeight="1.75"
          color="rgba(255,255,255,0.55)"
          maxW="700px"
          mb="24px"
        >
          {platform.description}
        </Text>

        {/* Submit info */}
        <Box
          bg="rgba(255,255,255,0.03)"
          border="1px solid rgba(255,255,255,0.05)"
          borderRadius="10px"
          p={{ base: "20px", md: "24px" }}
          mb="24px"
        >
          <Text
            fontSize="11px"
            fontWeight="700"
            letterSpacing="0.15em"
            textTransform="uppercase"
            color="rgba(255,255,255,0.4)"
            mb="10px"
          >
            How to Submit
          </Text>
          <Text
            fontSize="14px"
            lineHeight="1.7"
            color="rgba(255,255,255,0.6)"
          >
            {platform.submitInfo}
          </Text>
        </Box>

        {/* Action links */}
        <Flex direction="column" gap="12px" mb={platform.bonus ? "28px" : "0"}>
          {platform.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                background: `${platform.accentColor}0D`,
                border: `1px solid ${platform.accentColor}22`,
                borderRadius: "10px",
                padding: "16px 24px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              <Box>
                <Text
                  fontSize={{ base: "13px", md: "14px" }}
                  fontWeight="600"
                  color="white"
                >
                  {link.label}
                </Text>
                {link.isDeadline && (
                  <Flex align="center" gap="6px" mt="4px">
                    <FiAlertCircle size={12} color="#ff6b6b" />
                    <Text fontSize="12px" fontWeight="600" color="#ff6b6b">
                      {link.deadlineText}
                    </Text>
                  </Flex>
                )}
              </Box>
              <FiExternalLink
                size={16}
                color={platform.accentColor}
                style={{ flexShrink: 0 }}
              />
            </a>
          ))}
        </Flex>

        {/* Bonus section */}
        {platform.bonus && (
          <Box
            borderTop="1px solid rgba(255,255,255,0.06)"
            pt="24px"
          >
            <Flex align="center" gap="8px" mb="10px">
              <Box
                px="8px"
                py="3px"
                borderRadius="4px"
                bg={`${platform.accentColor}1A`}
                fontSize="10px"
                fontWeight="700"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color={platform.accentColor}
              >
                Bonus
              </Box>
              <Text fontSize="14px" fontWeight="600" color="white">
                {platform.bonus.title}
              </Text>
            </Flex>
            <Text
              fontSize="14px"
              lineHeight="1.7"
              color="rgba(255,255,255,0.5)"
              maxW="650px"
            >
              {platform.bonus.description}
            </Text>
          </Box>
        )}
      </Box>
    </MotionBox>
  );
}
