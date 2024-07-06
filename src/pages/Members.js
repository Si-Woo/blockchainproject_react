import React from 'react';
import { Box, Text, VStack, Image } from '@chakra-ui/react';
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

    <Box w="100%" maxW="container.xl" mx="auto" marginLeft={6}>
     <Text fontSize={22} fontWeight="bold" color="white" mb={4} align="center">
        {t("멤버")}
      </Text>
       <VStack spacing={4} alignItems="center"> {/* 세로 방향으로 중앙 정렬 */}
        {/* 첫 번째 이미지 왼쪽 정렬 */}
        <Box textAlign="left" width="100%" marginLeft={-20}> {/* 수평으로 요소를 정렬하기 위한 HStack */}
          <Box width="50%" float="left" align="center"> {/* 왼쪽 이미지 박스 */}
            <Image src={require("../images/shu.png")} alt="image1" height={100} mx="auto" />
            <Text>{t("이시우")}</Text>
          </Box>
        </Box>
        {/* 두 번째 이미지 오른쪽 정렬 */}
        <Box textAlign="right" width="100%"> {/* 수평으로 요소를 정렬하기 위한 HStack */}
          <Box width="50%" float="right" textAlign="center"> {/* 오른쪽 이미지 박스 */}
            <Image src={require("../images/zkdltid.jpg")} alt="image2" height={100} mx="auto" />
            <Text>{t("챈 카이샹")}</Text>
          </Box>
        </Box>
        {/* button example */}
        
      </VStack>
    </Box>
  );
};

export default Members;
