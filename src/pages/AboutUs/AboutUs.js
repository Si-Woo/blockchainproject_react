import React from "react";
import { Box, Text, HStack } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <Box w="100%" maxW="container.xl" mx="auto" textAlign="center">
            <Text fontSize={26} fontWeight="bold" color="white" mb={3} marginLeft={10} marginRight={10} textAlign="start">
                {t("우리의 이야기")}
            </Text>
            <Text fontSize={22} color="white" mb={100} marginLeft={10} marginRight={10} textAlign="start">
                {t("저희는 각자의 분야에서 개발자로 있으며 각기 다른 전문 분야에서 경험을 쌓아온 사람들로 이루어진 팀입니다. 블록체인 기술에 대한 열정과 호기심을 바탕으로, 취미로 블록체인 프로젝트를 선정하여 개발하는 커뮤니티를 운영하고 있습니다.")}
            </Text>
            <Text fontSize={26} fontWeight="bold" color="white" mb={3} marginLeft={10} marginRight={10} textAlign="start">
                {t("우리의 목표")}
            </Text>
            <Text fontSize={22} color="white" mb={100} marginLeft={10} marginRight={10} textAlign="start">
                <p>{t("블록체인 기술의 잠재력과 가능성에 매료된 우리는, 이 혁신적인 기술을 활용하여 더 나은 세상을 만들고자 합니다. 다양한 아이디어를 바탕으로 프로젝트를 선정하고, 각자의 전문 지식과 경험을 살려 실제로 구현해나가는 과정을 통해 블록체인 기술을 더 깊이 이해하고, 더 많은 사람들과 그 가치를 공유하고자 합니다.")}</p>
                {/* <p>{t("블록체인, AI, 게임 등 다양한 분야의 프로젝트를 진행하고 있으며")}</p>
                <br />
                <p>{t("BlockChain Project의 첫 번째 프로젝트인 ChainTalk은 블록체인 기술을 활용하여 기존 중앙 DB에 저장되던 모든 데이터를 사용자가 직접 소유하고 관리할 수 있도록 합니다. 이를 통해 데이터의 주권을 사용자에게 돌려주고, 더 높은 수준의 프라이버시와 보안을 제공합니다.")}</p> */}
            </Text>
            <Text fontSize={26} fontWeight="bold" color="white" mb={3} marginLeft={10} marginRight={10} textAlign="start">
                {t("우리의 가치")}
            </Text>
            <Text fontSize={22} color="white" mb={100} marginLeft={10} marginRight={10} textAlign="start">
                {t("우리는 블록체인 기술이 단순한 유행을 넘어, 투명성과 신뢰성을 제공하고 다양한 산업에 혁신을 가져올 수 있는 중요한 도구라고 믿습니다. 우리의 프로젝트를 통해 이러한 가치를 널리 알리고, 더 많은 사람들이 블록체인 기술의 혜택을 누릴 수 있도록 하는 것이 우리의 목표입니다.")}
            </Text>
            <Text fontSize={26} fontWeight="bold" color="white" mb={3} marginLeft={10} marginRight={10} textAlign="start">
                {t("연락처")}
            </Text>
            <Text fontSize={22} color="white" mb={10} marginLeft={10} marginRight={10} textAlign="start">
                {t("저희 프로젝트에 관심을 가져주셔서 감사합니다. 더 자세한 정보나 협업 문의는 아래 연락처로 언제든지 연락해 주세요.")}
            </Text>
            <HStack marginLeft={12} wrap="wrap">
                <Text fontSize={22} fontWeight="bold" color="white" textAlign="start">
                    ·
                </Text>
                <Text fontSize={22} color="white" textAlign="start">
                    {t("이메일") + ":"}
                </Text>
                <Text fontSize={22} color="#ec6437" marginRight={10} textAlign="start">
                    {t("contact@blockchainproject.ai")}
                </Text>
            </HStack>
        </Box>
    );
};

export default AboutUs;