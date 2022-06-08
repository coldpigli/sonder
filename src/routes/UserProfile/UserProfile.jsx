import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import {
  AdditionalInfo,
  Bookmarks,
  CreatePost,
  Feedlisting,
  ProfileHeader,
  Sidebar,
  TopBar,
} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)"); // checking if the device is less than 900px
  const {userData} = useSelector((state)=>state.auth);

  useEffect(()=>{},[userData]);

  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav /> : <Sidebar />}
      <VStack
        minH="100vh"
        flex="2"
        gap="4"
        align="stretch"
        p={`${smallerDevice ? "1rem 1rem 6rem 1rem" : "1rem 0"}`}
      >
        <TopBar />
        <ProfileHeader user={userData}/>
        <Box>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab  _selected={{ color: 'white', bg: '#6C5DD3' }}>Thoughts</Tab>
              <Tab  _selected={{ color: 'white', bg: '#6C5DD3' }}>Bookmarks</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Feedlisting userOnly={userData.username}/>
              </TabPanel>
              <TabPanel>
                <Bookmarks/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo />}
    </Box>
  );
};

export default UserProfile;
