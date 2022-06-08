import { Box } from "@chakra-ui/react";
import { UserCard } from "components";

const SearchResultList = ({ searchList }) => {
  return (
    <Box>
      {searchList.length !== 0 ? (
        <Box
          position="absolute"
          maxH="15rem"
          top="4rem"
          bg="lightBlue"
          p="1rem"
          borderRadius="md"
          overflowY="scroll"
          border="1px solid white"
        >
          {searchList?.map((user) => (
            <UserCard currUserData={user} />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default SearchResultList;
