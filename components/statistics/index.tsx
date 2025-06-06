import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
     <>
       <Box
         css={{
           pt: "$20",
           pb: "$16",
           px: "$6",
         }}
       >
         <Flex direction={"column"} align={"center"}>
           <Text
             h3
             css={{
               textAlign: "center",
             }}
           >
             Over 500+ projects completed
           </Text>
           <Text
             span
             css={{
               maxWidth: "800px",
               textAlign: "center",
             }}
           >
             Our core team has completed over 500 projects throughout their 30+
             years of experience
           </Text>
         </Flex>
         <Flex
           direction={"row"}
           wrap={"wrap"}
           justify={"center"}
           css={{
             gap: "4rem",
             pt: "$16",
             "@sm": {
               gap: "10rem",
             },
           }}
         >
           <Flex direction={"column"}>
             <Text h2 css={{ color: "#FFC107" }}>
               500+
             </Text>
             <Text span css={{ textAlign: "center" }} weight={"medium"}>
               Customers
             </Text>
           </Flex>
           <Flex direction={"column"}>
             <Text h2 css={{ color: "#FFC107" }}>
               1000+
             </Text>
             <Text span css={{ textAlign: "center" }} weight={"medium"}>
               Projects
             </Text>
           </Flex>
           <Flex direction={"column"}>
             <Text h2 css={{ color: "#FFC107" }}>
               1998
             </Text>
             <Text span css={{ textAlign: "center" }} weight={"medium"}>
               Established
             </Text>
           </Flex>
         </Flex>
       </Box>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
