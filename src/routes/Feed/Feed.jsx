import {  Box, Button, useMediaQuery, VStack } from "@chakra-ui/react";
import { AdditionalInfo, CreatePost, Feedlisting, GreetingHeader, Sidebar, TopBar} from "components";
import BottomNav from "components/BottomNav/BottomNav";
import { fallbackData, urls } from "constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "services";

const Feed = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllUsers());
  },[])

  const [smallerDevice] = useMediaQuery('(max-width: 900px)') // checking if the device is less than 900px
  const {greetingSubHeaderFeed, greetingDescriptionFeed} = fallbackData;
  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav/>: <Sidebar />}
      <VStack minH="100vh" flex="2" gap="4" align="stretch" p = {`${smallerDevice?"1rem":"1rem 0"}`}>
        <TopBar/>
        <GreetingHeader greetingSubHeader={greetingSubHeaderFeed} greetingDescription={greetingDescriptionFeed} greetingImg={urls.helloBoy}/>
        <Box>
          <CreatePost />
        </Box>
        <Box>
          <Feedlisting />
        </Box>
      </VStack>
      {!smallerDevice && <AdditionalInfo/>}
    </Box>
  );
};

export default Feed;
