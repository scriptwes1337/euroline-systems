import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { FeatureIcon } from "../icons/FeatureIcon";
import { Flex } from "../styles/flex";
import { CheckIcon } from "../icons/CheckIcon";
import { Box } from "../styles/box";

export const Features1 = () => {
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
            Premium Aluminum Solutions
          </Text>
          <Text h3>Italian-Engineered Precision</Text>
          <Text
            span
            css={{
              maxWidth: "400px",
              color: "$accents8",
            }}
          >
            Our GS slim sliding systems (only 30mm thick) combine elegance with
            unmatched performance, rigorously tested for Singapore's high-rise
            demands.
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
                750PA water penetration resistance
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
                1800 pascal wind load certification
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
                European-compliant (EN1026/EN1027)
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
            <img src="/sliding-door.jpg" alt="sliding door" />
          </Box>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
