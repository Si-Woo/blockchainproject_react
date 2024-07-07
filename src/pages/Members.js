import React from 'react';
import { Box, Text, VStack, Image, HStack } from '@chakra-ui/react';
// import { CustomButtonRedHover, CustomButtonOutline } from '../components/CustomeButton';

// import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { useTranslation } from 'react-i18next';

const Members = () => {
  const { t } = useTranslation();

  // const handleClick = () => {
  //   console.log('handleClick');
  // };

  // const handleClick2 = ({ event }) => {
  //   console.log('handleClick2', event);
  // };

  return (

    <Box w="100%" maxW="container.xl" mx="auto">
     <Text fontSize={22} fontWeight="bold" color="white" mb={4} align="center">
        {t("멤버")}
      </Text>
       <VStack spacing={4}> {/* 세로 방향으로 중앙 정렬 */}
        {/* 첫 번째 이미지 왼쪽 정렬 */}
        <HStack width="70%" justifyContent="left"> {/* 수평으로 요소를 정렬하기 위한 HStack */}
          <Box align="center"> {/* 왼쪽 이미지 박스 */}
            <Image src={require("../images/shu.png")} alt="image1" height={100} mx="auto" />
            <Text>{t("이시우")}</Text>
          </Box>
        </HStack>
        {/* 두 번째 이미지 오른쪽 정렬 */}
        <HStack width="70%" justifyContent="right"> {/* 수평으로 요소를 정렬하기 위한 HStack */}
          <Box align="center"> {/* 오른쪽 이미지 박스 */}
            <Image src={require("../images/zkdltid.jpg")} alt="image2" height={100} mx="auto" />
            <Text>{t("챈 카이샹")}</Text>
          </Box>
        </HStack>
        {/* button example */}
        
      </VStack>
    </Box>
  );
};

export default Members;
