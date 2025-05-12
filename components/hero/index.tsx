import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   return (
     <>
       <Flex
         css={{
           gap: "$3",
           px: "$6",
           flexDirection: "column",
           alignContent: "center",
           justifyContent: "center",
           alignItems: "center",
           width: "100%",
           "@sm": {
             flexDirection: "row",
             mt: "$20",
           },
         }}
         justify={"center"}
       >
         <Box
           css={{
             pt: "$13",

             display: "flex",
             flexDirection: "column",
             gap: "$5",
           }}
         >
           <Box
             css={{
               maxWidth: "600px",
             }}
           >
             <Text
               h1
               css={{
                 display: "inline",
               }}
             >
               The glass & aluminium experts for {"  "}
             </Text>
             <Text
               h1
               css={{
               display: "inline",
               color: "#FFC107", // a darker yellow
               }}
             >
               all your project requirements
             </Text>
           </Box>

           <Text
             css={{
               color: "$accents8",
               maxWidth: "400px",
             }}
             size={"$lg"}
             span
           >
             Highest quality and customizability for your glass and aluminium
             ideas.
           </Text>
         </Box>
         <Box
           css={{
             "& img": {
               width: "775px",
               objectFit: "contain",
               margin: "",
             },
           }}
         >
           <img src="aluminium.jpg" alt="aluminium rods" />
         </Box>
       </Flex>
       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
       />
     </>
   );
};
