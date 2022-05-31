import {Box, Heading, HStack,Text, VStack } from "@chakra-ui/react";
import { PostItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "services";

const Feedlisting = () => {

  const {userData} = useSelector((state)=>state.auth);
  const {postList} = useSelector((state)=>state.posts);
  const dispatch = useDispatch();
  console.log("User data", userData);
  console.log("Post list", postList);

  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  return (
    <Box mt='1rem'>
      <HStack justify="space-between" mb="1rem">
        <Heading size="md">Scroll</Heading>
        <Text fontSize="sm">Showing Recent</Text>
      </HStack>
      <VStack align="stretch" spacing="6" borderRadius='1rem'>
        {
          postList.map((post)=>{
          console.log("checking time run")
          return <PostItem post={post}/>})
        }
      </VStack>
    </Box>
  );
};
export default Feedlisting;
