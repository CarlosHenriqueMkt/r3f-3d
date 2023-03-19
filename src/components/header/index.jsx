import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';


const MenuItem = ({ children, to = "/" }) => {
  return (
    <Link href={to}>
      <Text fontSize={{sm: "16px", md: "24px", lg: "32px"}}>
        {children}
      </Text>
    </Link>
  )
}

const NavHeader = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={10}>
      <MenuItem to="#canvas-container">3D Shiba Inu</MenuItem>
      <MenuItem to="/">Shiba's History</MenuItem>
    </Flex>
  );
};

export default NavHeader;
