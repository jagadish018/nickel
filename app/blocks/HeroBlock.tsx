import React from 'react'
import { gray } from "@radix-ui/colors";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";

const HeroBlock = () => {
  return (
    <Box
      style={{
        marginTop: "128px",
        marginBottom: "128px",
      }}
    >
      <Container>
        <Box
          style={{
            border: "1px",
            borderStyle: "dashed",
            borderColor: gray.gray6,
            padding: "16px",
          }}
        >
          <Flex direction="column" align="center">
            <Heading
              align="center"
              size="9"
              style={{ padding: "24px", maxWidth: "776px" }}
            >
              The React Framework for the Web
            </Heading>

            <Box
              as="div"
              style={{
                borderBottom: "1px",
                borderBottomStyle: "dashed",
                borderColor: gray.gray6,
                width: "100%",
              }}
            />

            <Text
              align="center"
              style={{
                maxWidth: "776px",
                padding: "24px",
              }}
            >
              Used by some of the world's largest companies, Next.js enables you
              to create high-quality web applications with the power of React
              components.
            </Text>
            <Box
              as="div"
              style={{
                borderBottom: "1px",
                borderBottomStyle: "dashed",
                borderColor: gray.gray6,
                width: "100%",
              }}
            />
            <Flex
              direction="row"
              gap="4"
              style={{ padding: "24px", maxWidth: "776px" }}
            >
              <Button size="4">Get Started</Button>
              <Button size="4" variant="soft">
                Learn Next.js
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroBlock