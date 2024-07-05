import React from 'react';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { CustomButtonRedHover, CustomButtonOutline } from '../components/CustomeButton';

import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
const Members = () => {

  const handleClick = () => {
    console.log('handleClick');
  };

  const handleClick2 = ({ event }) => {
    console.log('handleClick2', event);
  };

  return (
    
      <Box w="100%" maxW="container.xl" mx="auto" p={4}>
        <Text fontSize="xl" color="white" mb={4}>
          Members Page
        </Text>
        <VStack spacing={4} align="stretch">
          {/* button example */}
          <HStack spacing={4} wrap="wrap">
            <Button onClick={() => alert('0')}>Chakra Button With Default colorScheme</Button>
            <Button colorScheme="teal" onClick={() => console.log('1')}>Chakra Button 1</Button>
            <Button colorScheme="red" onClick={handleClick}>Chakra Button 2</Button>
            <Button colorScheme="teal" onClick={() => handleClick2({ event: 'test' })} variant="ghost">Chakra Button 3</Button>
            <Button colorScheme="teal" variant="link">Chakra Button 4</Button>
          </HStack>
          {/* custome button example */}
          <HStack spacing={4} wrap="wrap">
            <CustomButtonRedHover>Custom Button</CustomButtonRedHover>
            <CustomButtonOutline>Custom Button 2</CustomButtonOutline>
            <CustomButtonOutline size="sm">Custom Button 3</CustomButtonOutline>
            <ColorModeSwitcher />
          </HStack>
        </VStack>
    </Box>
  );
};

export default Members;
