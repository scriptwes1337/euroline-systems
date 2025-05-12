import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import Image from 'next/image';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Products',
      'Projects',
      'About',
      'Contact',
      'Careers',
   ];
   return (
     <Navbar
       isBordered
       css={{
         overflow: "hidden",
         "& .nextui-navbar-container": {
           background: "$background",
           borderBottom: "none",
         },
       }}
     >
       <Navbar.Brand>
         <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
           <a href="/" style={{ all: 'unset', display: 'flex', alignItems: 'center', gap: 8, cursor: "pointer"}}>
            <Image
              src={"/euroline-systems-logo.png"}
              alt="Euroline Systems Logo"
              style={{ height: 40, width: 50 }}
              width={50}
              height={50}
            />
            <Text b color="inherit" hideIn="xs" css={{ lineHeight: 1 }}>
              Euroline Systems
            </Text>
           </a>
         <Navbar.Content
           hideIn="sm"
           css={{
             pl: "6rem",
           }}
         >
           <Navbar.Link href="/products">Products</Navbar.Link>
           <Navbar.Link href="/projects">Projects</Navbar.Link>
           <Navbar.Link href="/about">About</Navbar.Link>
           <Navbar.Link href="/careers">Careers</Navbar.Link>
         </Navbar.Content>
       </Navbar.Brand>

       <Navbar.Collapse>
         {collapseItems.map((item, index) => (
           <Navbar.CollapseItem key={item}>
             <Link
               color="inherit"
               css={{
                 minWidth: "100%",
               }}
               href="#"
             >
               {item}
             </Link>
           </Navbar.CollapseItem>
         ))}
         {/* <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem> */}
         {/* <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem> */}
       </Navbar.Collapse>
       <Navbar.Content>
         {/* <ModalLogin /> */}

         <Navbar.Item>
           <Button auto flat href="#">
             Conctact Us Now
           </Button>
         </Navbar.Item>
         {/* <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item> */}
         {/* <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item> */}
       </Navbar.Content>
     </Navbar>
   );
};
