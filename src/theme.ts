import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "'DM Sans', sans-serif",
      bg: "#0a0f1a",
      color: "#f0f0f0",
      scrollBehavior: "smooth",
    },
    "*": {
      boxSizing: "border-box",
    },
    "::selection": {
      bg: "#8B1A32",
      color: "white",
    },
  },
});

export const system = createSystem(defaultConfig, config);
