import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import Link from 'next/link';

export const CTA = () => {
   return (
     <>
       <Flex
         css={{
           py: "$20",
           px: "$6",
         }}
         justify={"center"}
         direction={"column"}
         align={"center"}
       >
         <Text h3>Have aluminium or glass needs?</Text>
         <Text
           span
           css={{
             color: "$accents8",
             pb: "$15",
             textAlign: "center",
           }}
         >
           Get in touch with us. Its free, and we reply fast!
         </Text>

         <Button
           as={Link}
           href="https://wa.me/+6598908811"
           auto
           flat
           color="warning"
           target="_blank"
           rel="noopener noreferrer"
         >
           Contact Us Now
         </Button>
       </Flex>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
