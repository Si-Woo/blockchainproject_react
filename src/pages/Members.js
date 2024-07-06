import React from 'react';
import { Box, Button, HStack, Text, VStack, Image } from '@chakra-ui/react';
import { CustomButtonRedHover, CustomButtonOutline } from '../components/CustomeButton';

import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useTranslation } from 'react-i18next';

const Members = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    console.log('handleClick');
  };

  const handleClick2 = ({ event }) => {
    console.log('handleClick2', event);
  };

  return (
    
      <Box w="100%" maxW="container.xl" mx="auto" marginLeft={6}>
        <Text fontSize={22} fontWeight="bold" color="white" mb={4}>
          {t("멤버")}
        </Text>
        <VStack spacing={4} align="center">
        <Image src={require("../images/shu.png")} alt="image1" height={100} mx="auto" />
        <Text>이시우</Text>
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
