import { Box, calc, Flex, Icon, VStack } from "@chakra-ui/react";
import { sidenavData } from "constants";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      h={calc.subtract("100vh", "2rem")}
      bg="black"
      borderRadius="1rem"
      position="sticky"
      p="1.5rem"
      top="1rem"
    >
      <VStack h="100%" justify="space-between">
        <Flex direction="column" justify="space-between" h="50%  ">
          {sidenavData.map((itemInfo) => {
            return (
              <NavLink to={itemInfo.path} key={itemInfo.id}>
                <Icon as={itemInfo.icon} color="white" w={8} h={8} />
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
