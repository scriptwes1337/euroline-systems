import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Flex } from "../styles/flex";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";

export const Features3 = () => {
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
            justifyContent: "space-around",
            px: "$32",
            flexDirection: "row",
          },
          "@md": {
            px: "$64",
          },
        }}
      >
        <Flex direction="column">
          <Text span css={{ color: "#FFC107" }}>
            Trusted Partner
          </Text>
          <Text h3>Proven Luxury Collaborations</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            Preferred by iconic brands for reliability and precision.
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
                Mandarin Oriental façade retrofit
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
                Marina Bay Sands restaurant systems
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
                45-day average project turnaround
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
            <img src="mandarin-oriental.png" alt="mandarin oriental" />
          </Box>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
