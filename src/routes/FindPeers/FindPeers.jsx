import { Box, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery, VStack } from '@chakra-ui/react'
import { AdditionalInfo, GreetingHeader, Sidebar, TopBar, UserCard } from 'components'
import BottomNav from 'components/BottomNav/BottomNav';
import { urls } from 'constants';
import { fallbackData } from 'constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from 'services';

const FindPeers = () => {
  
  const [smallerDevice] = useMediaQuery('(max-width: 900px)') // checking if the device is less than 900px
  const {greetingSubHeaderPeers, greetingDescriptionPeers} = fallbackData;
  const {userList} = useSelector((state)=>state.users);
  const {userData} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  const filterForExplore = () => {
    const exploreList = userList?.filter((item)=>{
      const res = userData?.following?.find((user)=>item.username===user.username);
      if(!res){
        return item;
      }
    }) 
    return exploreList
  }

  useEffect(()=>{
    dispatch(getAllUsers());
  },[])

  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav/>: <Sidebar />}
      <VStack minH="100vh" flex="2" gap="6" align="stretch" p = {`${smallerDevice?"1rem":"1rem 0"}`}>
        <TopBar/>
        <GreetingHeader greetingSubHeader={greetingSubHeaderPeers} greetingDescription={greetingDescriptionPeers} greetingImg={urls.panda}/>
        <Tabs variant='soft-rounded'>
            <TabList mb="1em">
              <Tab  _selected={{ color: 'white', bg: '#6C5DD3' }}>Following</Tab>
              <Tab  _selected={{ color: 'white', bg: '#6C5DD3' }}>Followers</Tab>
              <Tab  _selected={{ color: 'white', bg: '#6C5DD3' }}>Explore</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={[1, 2, 2]} spacing='40px'>
                  {
                    userData?.following?.map((user)=>{
                      return <UserCard currUserData={user}/>
                    })
                  }
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
              <SimpleGrid columns={[1, 2, 2]} spacing='40px'>
                {
                    userData?.followers?.map((user)=>{
                      return <UserCard currUserData={user}/>
                    })
                }
              </SimpleGrid>
              </TabPanel>
              <TabPanel>
              <SimpleGrid columns={[1, 2, 2]} spacing='40px'>
                {
                  filterForExplore()?.map((user)=>{
                    return <UserCard currUserData={user}/>
                  })
                }
              </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
      </VStack>
      {!smallerDevice && <AdditionalInfo/>}
    </Box>
  );
}

export default FindPeers