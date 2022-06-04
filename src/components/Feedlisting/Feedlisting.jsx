import {Box, Heading, HStack,Stack,Text } from "@chakra-ui/react";
import { PostItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "services";

const Feedlisting = ({userOnly}) => {

  const {postList} = useSelector((state)=>state.posts);
  const {userData} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const usersPosts = postList?.filter((post)=>post.username===userData.username);
  const displayPosts = (userOnly)?usersPosts:postList;
  
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
          displayPosts.map((post)=>{
          return <PostItem post={post}/>})
        }
      </Stack>
    </Box>
  );
};
export default Feedlisting;
