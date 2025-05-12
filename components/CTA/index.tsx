import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const CTA = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Have aluminium or glass needs?</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
               }}
            >
               Get in touch with us. Its free, and we reply fast!
            </Text>

            <Button>Contact Us Now</Button>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
