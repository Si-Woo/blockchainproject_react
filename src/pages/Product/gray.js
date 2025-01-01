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
import React from 'react';
import { useTranslation } from 'react-i18next';
import svgLogo from '../../images/white.svg';

const Gray = () => {
    const { t } = useTranslation();

    return (
        <Box w="100%" maxW="container.xl" mx="auto" textAlign="center">
            <Box marginLeft={10} marginRight={10}>
                <Image
                    src={require("../../images/gray.jpeg")}
                    alt="image1"
                    height={400}
                    mx="auto"
                    objectFit="contain"
                />
            </Box>
            
            <Box w="100%" display="flex" justifyContent="center" alignItems="center" mt={10}>
                <HStack spacing={5} w="100%" maxW="500px" justifyContent="space-between" px={4} marginRight={3}>
                    <a href='https://play.google.com/store/apps/details?id=com.planetchain.frontend&pcampaignid=web_share' target='_blank' rel='noopener noreferrer'>
                        <Image
                            src={require("../../images/google_kr.png")}
                            alt="image2"
                            height={100}
                            objectFit="contain"
                        />
                    </a>
                    <a href='https://apps.apple.com/kr/app/gray-%EC%B9%B4%ED%8E%98-%EC%BB%A4%ED%94%BC-%EC%B9%B4%ED%8E%98%EC%B0%BD%EC%97%85-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/id6474324626' target='_blank' rel='noopener noreferrer'>
                        <Image
                            src={svgLogo}
                            alt="logo"
                            height={70}
                            objectFit="contain"
                        />
                    </a>
                </HStack>
            </Box>

            <Text fontSize={22} color="white" mb={100} marginLeft={10} marginRight={10} textAlign="start">
                <p>{t("BlockChain Project의 두 번째 프로젝트인 Gray는 카페를 사랑하는 모든 사람들을 위한 공간입니다.")}</p>
                <br />
                <p>{t("Gray는 애플리케이션을 통해 카페 운영의 어려움, 트렌드 변화, 마케팅 팁 등 다양한 주제로 사장님들이 소통하고 서로 도움을 주고받는 공간입니다.")}</p>
                <p>{t("카페를 사랑하는 사람들이 직접 방문한 카페를 소개하고, 숨겨진 명소를 발견할 수 있는 커뮤니티입니다.")}</p>
                <br />
                <p>{t("지금 바로 가입하고 성공적인 카페 라이프를 시작하세요!")}</p>
            </Text>

            <Text fontSize={18} color="white" marginLeft={10} marginRight={10} textAlign="start">
                <p>{t("프로젝트 참여자")}</p>
            </Text>

            <HStack width="100%" justifyContent="start" align="center">
                <Box align="center" marginLeft={10} marginRight={10}>
                    <Popover>
                        <PopoverTrigger>
                            <Box cursor="pointer" display="flex" flexDirection="column" alignItems="center"> {/* 세로로 정렬 */}
                                <Image src={require("../../images/shu.png")} alt="image1" height={100} mb={2} /> {/* mb=2로 이미지와 텍스트 사이 여백 추가 */}
                                <Text>{t("이시우")}</Text>
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent color="white" bg="blue.800" borderColor='blue.800'>
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

        </Box>
    );
};

export default Gray;