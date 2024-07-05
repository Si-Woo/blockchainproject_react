import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box w="100%" maxW="container.xl" mx="auto" p={4}>
      <Text fontSize="xl" mb={4}>
        About Page
      </Text>
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>Content for Tab 1</Text>
          </TabPanel>
          <TabPanel>
            <Text>Content for Tab 2</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default About;
