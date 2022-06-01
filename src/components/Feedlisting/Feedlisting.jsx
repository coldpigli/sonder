import {Box, Heading, HStack,Stack,Text } from "@chakra-ui/react";
import { PostItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "services";

const Feedlisting = () => {

  const {postList} = useSelector((state)=>state.posts);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  return (
    <Box mt='1rem'>
      <HStack justify="space-between" mb="1rem">
        <Heading size="md">Scroll</Heading>
        <Text fontSize="sm">Showing Recent</Text>
      </HStack>
      <Stack align="stretch" spacing="6" borderRadius='1rem' direction='column-reverse'>
        {
          postList.map((post)=>{
          return <PostItem post={post}/>})
        }
      </Stack>
    </Box>
  );
};
export default Feedlisting;
