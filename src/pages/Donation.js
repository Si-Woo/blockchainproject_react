import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, Flex, Image } from '@chakra-ui/react';

const Donation = () => {
    return (
        <Box w="100%" maxW="container.xl" mx="auto" p={4}>
            <Text fontSize="xl" mb={4}>
                도네이션 방법
            </Text>
            <Tabs>
                <TabList>
                    <Tab _selected={{ color: 'orange.500', borderBottomColor: "orange.500" }}>확장 프로그램</Tab>
                    <Tab _selected={{ color: 'orange.500', borderBottomColor: "orange.500" }}>모바일</Tab>
                </TabList>

                <TabPanels>
                <TabPanel>
            <Flex direction="column" alignItems="center">
              <Text mb={4}>
                <p>첫 번째 줄의 내용입니다.</p>
              </Text>
              <Image src={require("../images/web1.gif")} alt="image1" height={600} />
              <Text mt={4}>
                <p>두 번째 줄의 내용입니다.</p>
                <p>세 번째 줄의 내용입니다.</p>
              </Text>
            </Flex>
          </TabPanel>
                    <TabPanel>
                        <Text>Content for Tab 2</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Donation;
