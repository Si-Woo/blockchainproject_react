import React from 'react';
import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
  Popover,
  Flex,
  Grid,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
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
      <VStack spacing={4}>
        {/* 첫 번째 이미지 왼쪽 정렬 */}
        <HStack width="70%" justifyContent="left">
          <Box align="center"> {/* 왼쪽 이미지 박스 */}
            <Popover>
              <PopoverTrigger>
                <Box cursor="pointer">
                  <Image src={require("../images/shu.png")} alt="image1" height={100} mx="auto" />
                  <Text>{t("이시우")}</Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverCloseButton />
                <PopoverHeader>{t("프로필")}</PopoverHeader>
                <PopoverArrow bg='blue.800' />
                <PopoverBody textAlign="center">
                  <Flex direction="column" alignItems="center">
                    <Box textAlign="start">
                      <Grid templateColumns="100px 1fr" gap={2}>
                        <Text>{t("학력") + ":"}</Text>
                        <Text>{t("공학석사")}</Text>
                        <Text>{t("전문분야") + ":"}</Text>
                        <Text>{t("풀스택(앱)")}</Text>
                        <Text>{t("사용언어") + ":"}</Text>
                        <Text>Go, Dart, Python</Text>
                        <Text>{t("프레임워크") + ":"}</Text>
                        <Text>Flutter</Text>
                      </Grid>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>

          </Box>
        </HStack>
        {/* 두 번째 이미지 오른쪽 정렬 */}
        <HStack width="70%" justifyContent="right">
          <Box align="center"> {/* 오른쪽 이미지 박스 */}
            <Popover>
              <PopoverTrigger>
                <Box cursor="pointer">
                  <Image src={require("../images/zkdltid.jpg")} alt="image2" height={100} mx="auto" />
                  <Text>{t("챈 카이샹")}</Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverCloseButton />
                <PopoverHeader>{t("프로필")}</PopoverHeader>
                <PopoverArrow bg='blue.800' />
                <PopoverBody textAlign="center">
                  <Flex direction="column" alignItems="center">
                    <Box textAlign="start">
                      <Grid templateColumns="100px 1fr" gap={2}>
                        <Text>{t("학력") + ":"}</Text>
                        <Text>{t("공학석사")}</Text>
                        <Text>{t("전문분야") + ":"}</Text>
                        <Text>{t("풀스택(웹)")}</Text>
                        <Text>{t("사용언어") + ":"}</Text>
                        <Text>Go, JavaScript,<br />Python</Text>
                        <Text>{t("프레임워크") + ":"}</Text>
                        <Text>React</Text>
                      </Grid>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>

          </Box>
        </HStack>
        {/* button example */}
      </VStack>
    </Box>
  );
};

export default Members;
