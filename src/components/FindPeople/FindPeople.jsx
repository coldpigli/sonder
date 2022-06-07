import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FindPeople = () => {
  const { userList } = useSelector((state) => state.users);
  const { userData } = useSelector((state) => state.auth);

  const filterForExplore = () => {
    const exploreList = userList?.filter((item) => {
      const res = userData?.following?.find(
        (user) => item.username === user.username
      );
      if (!res) {
        return item;
      }
    });
    return exploreList.filter((item)=>item.username!==userData.username)
  };

  return (
    <VStack p="1rem" borderRadius="1rem" shadow="md" align="stretch">
      <HStack justify="space-between">
        <Heading size="sm">Explore</Heading>
        <Link to="/peers">
          <Text fontSize="sm">See all</Text>
        </Link>
      </HStack>
      <HStack spacing="8" over>
        {filterForExplore()
          ?.slice(0, 3)
          .map((item) => {
            return (
              <Box>
                <Link to={`/people/${item.username}`}>  
                <VStack>
                  <Image
                    boxSize="80px"
                    borderRadius="md"
                    objectFit="cover"
                    src={item.profileImg}
                    alt={item.username}
                  />
                  <Text fontSize="xs">{item.username}</Text>
                </VStack>
                </Link>
              </Box>
            );
          })}
      </HStack>
    </VStack>
  );
};

export default FindPeople;
