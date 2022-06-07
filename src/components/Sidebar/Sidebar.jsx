import { Box, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { sidenavData } from "constants";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "redux/slices/authSlice";

const Sidebar = () => {

  let activeStyle = {
    backgroundColor: "#6C5DD3",
    borderRadius: "1rem",
    color: "#FFFFFF",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    dispatch(logout());
    navigate("/login", {replace: true})
  }


  return (
    <Box
      h="100vh"
      bg="rgb(36, 39, 49)"
      position="sticky"
      p="1rem"
      top="0"
      borderRight="0.5px solid rgba(128, 129, 145, 0.25)"
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
                style={({ isActive }) =>
                  isActive ? activeStyle : { color: "#808191" }
                }
              >
                <Flex p="0.5rem" justifyContent="center">
                  <Icon
                    as={itemInfo.icon}
                    w={6}
                    h={6}
                    _hover={{ color: "white" }}
                  />
                </Flex>
              </NavLink>
            );
          })}
        </Flex>
        <Box>
          <Icon as={MdOutlineLogout} color="#808191" w={8} h={8} onClick={handleLogout} cursor='pointer'/>
        </Box>
      </VStack>
    </Box>
  );
};

export default Sidebar;
