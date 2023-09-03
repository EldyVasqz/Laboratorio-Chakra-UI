import React from "react";
import { Stack, Box, Flex, Heading, Spacer, Image, Button } from "@chakra-ui/react";
import bike from '../images/bike.jpg'

const Header = () => {
  return (
    <Box mb='10' as="header" bg="blue.500" w={800} h='300' color="white" bgImage={bike} bgSize='cover'>
      <Flex align="center" justify='center' direction='column' >

        <Heading fontWeight="light" mt='50' size="lg">DOMINA EL TERRENO</Heading>

        <Box mt='10px'>
        <Stack  width='250px' direction='row' spacing={4} align='center'>
        <Button color='white' size='sm' colorScheme='teal' variant='outline'>
            VER DETALLES</Button>         

        <Button width='115px' color='white' size='sm' colorScheme='teal' variant='outline'>
            VER VIDEO</Button>
            </Stack>
            </Box>
            </Flex>
        
    </Box>
  );
};

export default Header;
