import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { BoxIcon } from "../icons/BoxIcon";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Flex } from "../styles/flex";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";

export const Features2 = () => {
  return (
    <>
      <Flex
        direction={"column"}
        css={{
          gap: "1rem",
          pt: "$20",
          justifyContent: "center",
          alignItems: "center",
          px: "$6",

          "@sm": {
            gap: "5rem",
            flexDirection: "row-reverse",
            px: "$16",
          },
          "@md": {
            justifyContent: "space-evenly",
          },
        }}
      >
        <Flex direction="column" align={"center"}>
          <Text span css={{ color: "$blue600" }}>
            Technical Mastery
          </Text>
          <Text h3>From Blueprint to Build</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            We transform architectural visions into reality with in-house
            engineering expertise.
          </Text>
          <Flex
            css={{
              py: "$2",
              gap: "$5",
            }}
          >
            <CheckIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                9+ years of façade specialization
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$2",
              gap: "$5",
            }}
          >
            <CheckIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Custom thermal/soundproof solutions
              </Text>
            </Flex>
          </Flex>
          <Flex
            css={{
              py: "$2",
              gap: "$5",
            }}
          >
            <CheckIcon />
            <Flex direction={"column"}>
              <Text h4 weight={"medium"}>
                Full project lifecycle management
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex align={"center"}>
          <Box
            css={{
              "& img": {
                width: "500px",
                objectFit: "contain",
                margin: "",
              },
            }}
          >
            <img src="tower.jpg" alt="sliding door" />
          </Box>
        </Flex>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
