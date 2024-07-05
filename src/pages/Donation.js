import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Flex, Image } from '@chakra-ui/react';

const Donation = () => {
    return (
        <Box w="100%" maxW="container.xl" mx="auto" p={5}>
            <Text fontSize={30} fontWeight="bold" mb={4}>
                도네이션 방법
            </Text>
            <Tabs>
                <TabList>
                    <Tab _selected={{ color: "#ec6437", borderBottomColor: "#ec6437" }}>확장 프로그램</Tab>
                    <Tab _selected={{ color: "#ec6437", borderBottomColor: "#ec6437" }}>모바일</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Flex direction="column" alignItems="center">
                            <Text mb={4}>
                                <p>1. 지갑 방문 페이지에서 거래하려는 계정을 사용 중인지 확인한 후 화면 중앙의 '보내기' 버튼을 누르십시오.</p>
                                <br />
                                <p>2. 이제 수령인의 공용 주소를 입력해야 합니다. 주소록에 이미 주소를 저장했다면 이 단계에서 주소가 표시됩니다.</p>
                            </Text>
                            <Image src={require("../images/web1.gif")} alt="image1" height={600} mb={4} />
                            <Text mb={4}>
                                <p>3. 보낼 토큰 금액을 입력하고 '다음'을 클릭하십시오.</p>
                            </Text>
                            <Image src={require("../images/web2.gif")} alt="image2" height={600} mb={4} />
                            <Text mb={4}>
                                <p>4. 이제 거래의 예상 가스 요금이 표시되며, 이 요금은 조정할 수 있습니다. '확인'을 클릭하여 거래를 진행하기 전에 수신자 주소를 다시 확인하는 것이 좋습니다.</p>
                            </Text>
                            <Image src={require("../images/web3.gif")} alt="image2" height={600} mb={4} />
                            <Text mb={4}>
                                <p>5. 그러면 '작업' 탭에서 최근 거래 목록을 볼 수 있는 메인 페이지로 리디렉션됩니다.</p>
                            </Text>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex direction="column" alignItems="center">
                            <Text mb={4}>
                                <p>1. 계정 페이지로 이동하십시오. 여기서 '전송' 버튼을 누르십시오.
                                    <br />
                                    또한 홈페이지의 '자산' 탭에 표시된 토큰 자체를 클릭하여 토큰을 보낼 수도 있습니다.</p>
                                <br />
                                <p>2. 이제 보낼 주소를 입력해야 합니다. 클립보드의 주소(예: 다른 앱)에 붙여넣거나 주소록에서 주소를 선택하십시오.</p>
                            </Text>
                            <Image src={require("../images/mobile1.gif")} alt="image1" height={800} mb={4} />
                            <Text mb={4}>
                                <p>3. 이제 보낼 금액을 입력할 수 있는 화면으로 이동하십시오. 필요한 경우 금액 바로 위에 있는 파란색 상자에서 토큰 이름을 눌러 토큰 유형을 변경할 수도 있습니다.</p>
                            </Text>
                            <Image src={require("../images/mobile2.png")} alt="image2" height={800} mb={4} />
                            <Text mb={4}>
                                <p>4. '다음'을 누르면 확인 화면이 표시됩니다. 여기에 결제할 가스 요금을 포함한 거래의 세부 정보가 표시됩니다.</p>
                            </Text>
                            <Image src={require("../images/mobile3.png")} alt="image2" height={800} mb={4} />
                            <Text mb={4}>
                                <p>5. 또한 '예상 가스 요금' 박스에서 강조 표시된 이더리움 수량을 눌러 거래에 따르는 가스 설정을 편집할 수 있습니다.
                                    <br />
                                    '전송'을 눌러 거래를 확인하고 프로세스를 완료하십시오.</p>
                            </Text>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Donation;
