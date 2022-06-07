import { Box, Heading, VStack } from "@chakra-ui/react";
import { FindPeople, InfoBar } from "components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {SiCloudfoundry, SiSonarcloud, SiSnapcraft} from 'react-icons/si'

const AdditionalInfo = () => {
  const { userData } = useSelector((state) => state.auth);
  const { postList } = useSelector((state) => state.posts);
  const { followers, following } = userData;

  const getNumberOfUsersPost = () => {
    const res = postList?.filter((post) => post.username === userData.username);
    return res?.length;
  };

  return (
    <Box
      flex="1"
      h="100vh"
      position="sticky"
      top="0"
      borderLeft="0.5px solid rgba(128, 129, 145, 0.25)"
      p="1rem"
      color="white"
    >
      <VStack align="stretch" spacing="8" borderRadius="1rem" p="0 1rem">
        <Heading alignSelf="center">Profile Stats</Heading>
        <VStack spacing="4" align="stretch">
          <Link to="/peers">
            <InfoBar text="Following" metric={following?.length} icon={SiCloudfoundry} bgColor="#6C5DD3"/>
          </Link>
          <Link to="/peers">
            <InfoBar text="Followers" metric={followers?.length} icon={SiSnapcraft} bgColor="#6C5DD3"/>
          </Link>
          <Link to='/profile'>
          <InfoBar text="Thoughts" metric={getNumberOfUsersPost()} icon={SiSonarcloud} bgColor="#6C5DD3"/>
          </Link>
        </VStack>
        <FindPeople />
      </VStack>
    </Box>
  );
};

export default AdditionalInfo;
