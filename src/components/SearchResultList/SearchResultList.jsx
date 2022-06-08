import { Box } from "@chakra-ui/react";
import { UserCard } from "components";
import { useEffect } from "react";

const SearchResultList = ({searchList}) => {

    useEffect(()=>{},[searchList]);

  return (
    <Box position="absolute" maxH='15rem' top='4rem' bg='lightBlue' p='1rem' borderRadius='md' overflowY='scroll' border='1px solid white'>
      {
         searchList.length ? searchList?.map((user)=><UserCard currUserData={user}/>) : <Box>No users found</Box>
      }
    </Box>
  );
};

export default SearchResultList;
