import { Button, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { AcmeLogo } from "../navbar/logo";
import { Flex } from "../styles/flex";

export const Trusted = () => {
  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          pt: "$20",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          Trusted by over 100+ partners
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          Over 100+ partners have seeked our help for their glass and aluminium needs
        </Text>
        <Grid.Container
          gap={6}
          alignItems="center"
          justify="center"
          css={{
            width: "100%",
            "@sm": {
              width: "100%",
            },
            "&  span": {
              whiteSpace: "pre",
            },
          }}
        >
          <Grid sm={3} justify="center">
            <Flex align={"center"} justify={"center"}>
              <Text weight={"semibold"} span size={"$lg"}>
                AC Consortium Architects
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"} justify={"center"}>
              <Text weight={"semibold"} span size={"$lg"}>
                K2LD Architects
              </Text>
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"} justify={"center"}>
              <Text weight={"semibold"} span size={"$lg"}>
                ar + d Architects
              </Text>
            </Flex>
          </Grid>{" "}
          <Grid sm={3} justify="center">
            <Flex align={"center"} justify={"center"}>
              <Text weight={"semibold"} span size={"$lg"}>
                Mandarin Oriental Hotel
              </Text>
            </Flex>
          </Grid>
        </Grid.Container>
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
