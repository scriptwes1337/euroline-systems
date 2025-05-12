import { Divider, Link, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Footer = () => {
   return (
     <Flex
       css={{
         py: "$20",
         px: "$6",
         justifyContent: "center",
         alignItems: "center",
         width: "100%",
       }}
     >
       <Flex
         css={{
           gap: "$20",
           justifyContent: "center",
           alignItems: "center",
           width: "100%",
           flexWrap: "wrap",
         }}
       >
         {/* Copyright */}
         <Flex direction="column" css={{ gap: "$2", alignItems: "center" }}>
           <Text span css={{ color: "$accents8" }}>
             © {new Date().getFullYear()} Euroline Systems
           </Text>
         </Flex>

         <Flex direction="column" css={{ gap: "$2", alignItems: "center" }}>
           <Text span css={{ color: "$accents8" }}>
             <Link href="/privacy" css={{ color: "$accents8" }}>
               Privacy Policy
             </Link>
           </Text>
         </Flex>

         {/* Contact Details Column */}
         <Flex
           direction="column"
           css={{ gap: "$2", minWidth: "180px", alignItems: "center" }}
         >
           <Text b css={{ color: "$accents8" }}>
             Contact
           </Text>
           <Text css={{ color: "$accents8" }}>
             alstontan@eurolinesystems.com
           </Text>
           <Text css={{ color: "$accents8" }}>+65 9890 8811</Text>
         </Flex>
       </Flex>
     </Flex>
   );
};
