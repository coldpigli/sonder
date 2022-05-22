import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AdditionalInfo,
  Feedlisting,
  ProfileHeader,
  Sidebar,
} from "components";

const UserProfile = () => {
  return (
    <Box p="1rem" display="flex" gap="12">
      <Sidebar />
      <Box flex="2">
        <VStack align="stretch">
          <ProfileHeader />
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab _focus={{ outline: "none" }}>Your Thoughts</Tab>
              <Tab _focus={{ outline: "none" }}>Bookmarked</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Feedlisting />
              </TabPanel>
              <TabPanel>
                <Feedlisting />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
      <AdditionalInfo />
    </Box>
  );
};

export default UserProfile;
