import { Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

const partners = [
  "AC Consortium Architects",
  "K2LD Architects",
  "ar + d Architects",
  "Mandarin Oriental Hotel",
];

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
          gap={2}
          alignItems="center"
          justify="center"
          css={{
            width: "100%",
            mt: "$10",
            mb: "$10",
          }}
        >
          {partners.map((name) => (
            <Grid xs={12} sm={6} md={3} key={name} justify="center" css={{ py: "$8" }}>
              <Flex align={"center"} justify={"center"}>
                <Text
                  weight={"semibold"}
                  span
                  size={"$lg"}
                  css={{
                    textAlign: "center",
                    wordBreak: "break-word",
                    maxWidth: "180px",
                  }}
                >
                  {name}
                </Text>
              </Flex>
            </Grid>
          ))}
        </Grid.Container>
      </Flex>

      <Divider
        css={{ position: "relative", width: "100%", mt: "$5" }}
      />
    </>
  );
};
