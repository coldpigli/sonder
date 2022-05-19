import { Box, calc, Flex, Icon, VStack } from "@chakra-ui/react";
import { sidenavData } from "constants";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let activeStyle = {
    borderLeft: "4px solid white",
  };

  return (
    <Box
      h={calc.subtract("100vh", "2rem")}
      bg="black"
      borderRadius="1rem"
      position="sticky"
      top="1rem"
      p="1rem"
      boxShadow='lg'
    >
      <VStack h="100%" justify="space-between">
        <Flex direction="column" justify="space-between" h="50%  ">
          {sidenavData.map((itemInfo) => {
            return (
              <NavLink
                to={itemInfo.path}
                key={itemInfo.id}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <Flex p="0.5rem" justifyContent="center">
                  <Icon as={itemInfo.icon} color="white" w={8} h={8} />
                </Flex>
              </NavLink>
            );
          })}
        </Flex>
        <Box>
          <Icon as={MdOutlineLogout} color="white" w={8} h={8} />
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
