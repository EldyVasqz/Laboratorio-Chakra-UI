import React from "react";
import { Stack, Box, Flex, Heading, Spacer, Image, Button } from "@chakra-ui/react";
import bike from '../images/bike.jpg'

const Lateral = () => {
  return (
    <Box as="header" bg="blue.500" w={300} h='300' color="white" bgImage={bike} bgSize='cover'>
      <Flex align="center" justify='center' direction='column' >

        <Heading fontWeight="light" mt='50' size="lg">DOMINA EL TERRENO</Heading>

        <Box mt='10px'>
        <Stack direction='column' spacing={4} align='center'>
        <Button width='250px' color='white' size='sm' colorScheme='teal' variant='outline'>
            VER DETALLES</Button>         

        <Button width='250px' color='white' size='sm' colorScheme='teal' variant='outline'>
            VER VIDEO</Button>
            </Stack>
            </Box>
            </Flex>
        
    </Box>
  );
};

export default Lateral;