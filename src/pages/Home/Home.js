import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
// import { CustomButtonRedHover, CustomButtonOutline } from '../../components/CustomeButton';

// import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';
import { useTranslation } from 'react-i18next';

// import svgLogo from '../../images/white.svg';

const Home = () => {
  const { t } = useTranslation();

  // const handleClick = () => {
  //   console.log('handleClick');
  // };

  // const handleClick2 = ({ event }) => {
  //   console.log('handleClick2', event);
  // };

  return (

    <Box w="100%" maxW="container.xl" mx="auto" textAlign="center">
      <Box marginLeft={10} marginRight={10}>
        <Image
          src={require("../../images/logo.png")}
          alt="image1"
          height={400}
          mx="auto"
          objectFit="contain"
        />
      </Box>
      <Text fontSize={22} color="white" mb={100} marginLeft={10} marginRight={10} textAlign="start">
        <p>{t("BlockChain Project는 혁신성과 잠재력으로 우리의 세상을 변화시키고 있는 블록체인 기술을 통해 더 나은 세상을 만들고자 합니다.")}</p>
        <p>{t("투명성, 신뢰성, 그리고 탈중앙화된 시스템을 기반으로 한 블록체인 기술이 다양한 산업에서 변화를 이끌어 낼 수 있다고 믿습니다.")}</p>
        <br />
        <p>{t("BlockChain Project 팀은 블록체인 뿐만 아니라 다양한 분야의 사람들이 자신의 역량 발휘하여 다양한 프로젝트를 통해 자신을 발전시키기 위해 노력하는 열정적인 사람들로 구성되어있습니다.")}</p>
        <br />
        <p>{t("BlockChain Project 팀에 합류하길 원하시는 분은 contact@blockchainproject.ai로 문의 부탁드립니다.")}</p>
      </Text>
    </Box>
  );
};

export default Home;