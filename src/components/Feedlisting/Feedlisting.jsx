import {Box, Heading, HStack,Stack,Text } from "@chakra-ui/react";
import { EmptyCard, PostItem } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "services";

const Feedlisting = ({userOnly}) => {

  const {postList} = useSelector((state)=>state.posts);
  const dispatch = useDispatch();
  const usersPosts = postList.filter((post)=>post.username===userOnly);
  const displayPosts = (userOnly)?usersPosts:postList;

  useEffect(()=>{
    if(postList.length===0)
    {
      dispatch(getAllPosts())
    }
  },[])

  return (
    <Box mt='1rem'>
      <HStack justify="space-between" mb="1rem">
        <Heading size="md">Scroll</Heading>
        <Text fontSize="sm">Showing Recent</Text>
      </HStack>
      <Stack align="stretch" spacing="6" borderRadius='1rem' direction='column-reverse'>
        { 
         (displayPosts.length!==0)? displayPosts?.map((post)=>{
          return <PostItem post={post}/>}):<EmptyCard/>
        }
      </Stack>
    </Box>
  );
};
export default Feedlisting;
