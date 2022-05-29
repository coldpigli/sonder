import { Box, calc, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { sidenavData } from "constants";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let activeStyle = {
    backgroundColor: "#6C5DD3",
    borderRadius: '1rem',
    color: "#FFFFFF"
  };

  return (
    <Box
      h="100vh"
      bg="#242731"
      position="sticky"
      p="1rem"
      top='0'
      borderRight='0.5px solid rgba(128, 129, 145, 0.25)'
    >
      <VStack h="100%" justify="space-between">
        <Box color="white">
          <Heading>S.</Heading>
        </Box>
        <Flex direction="column" justify="space-between" h="50%">
          {sidenavData.map((itemInfo) => {
            return (
              <NavLink
                to={itemInfo.path}
                key={itemInfo.id}
                style={({ isActive }) => (isActive ? activeStyle : {color: "#808191"})}
              >
                <Flex p="0.5rem" justifyContent="center">
                  <Icon as={itemInfo.icon} w={6} h={6} _hover={{color: "white"}}/>
                </Flex>
              </NavLink>
            );
          })}
        </Flex>
        <Box>
          <Icon as={MdOutlineLogout} color="#808191" w={8} h={8} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
