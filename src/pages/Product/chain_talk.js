import {
    Box,
    Text,
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
import React from "react";
import { useTranslation } from "react-i18next";
import svgLogo from '../../images/white.svg';

const ChainTalk = () => {
    const { t } = useTranslation();

    return (
        <Box w="100%" maxW="container.xl" mx="auto" textAlign="center">
            <Box marginLeft={10} marginRight={10}>
                <Image
                    src={require("../../images/chaintalk.jpg")}
                    alt="image1"
                    height={400}
                    mx="auto"
                    objectFit="contain"
                />
            </Box>
            
            <Box w="100%" display="flex" justifyContent="center" alignItems="center" mt={10}>
                <HStack spacing={5} w="100%" maxW="500px" justifyContent="space-between" px={4} marginRight={3}>
                    <a href='https://play.google.com/store/apps/details?id=com.planetchain.chaintalk&pcampaignid=web_share' target='_blank' rel='noopener noreferrer'>
                        <Image
                            src={require("../../images/google_kr.png")}
                            alt="image2"
                            height={100}
                            objectFit="contain"
                        />
                    </a>
                    <a href='https://apps.apple.com/kr/app/chaintalk/id6505109545' target='_blank' rel='noopener noreferrer'>
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
                <p>{t("BlockChain Project는 혁신성과 잠재력으로 우리의 세상을 변화시키고 있는 블록체인 기술을 통해 더 나은 세상을 만들고자 합니다.")}</p>
                <p>{t("투명성, 신뢰성, 그리고 탈중앙화된 시스템을 기반으로 한 블록체인 기술이 다양한 산업에서 변화를 이끌어 낼 수 있다고 믿습니다.")}</p>
                <br />
                <p>{t("BlockChain Project의 첫 번째 프로젝트인 ChainTalk은 블록체인 기술을 활용하여 기존 중앙 DB에 저장되던 모든 데이터를 사용자가 직접 소유하고 관리할 수 있도록 합니다. 이를 통해 데이터의 주권을 사용자에게 돌려주고, 더 높은 수준의 프라이버시와 보안을 제공합니다.")}</p>
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

export default ChainTalk;