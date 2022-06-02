import { Box, Flex, Heading, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdNotificationsActive, MdExpandMore } from "react-icons/md"
import { BsPersonSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/slices/authSlice";

const TopBar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    dispatch(logout());
    navigate("/login", {replace: true})
  }


  return (
    <Flex
      align="center"
      justify="space-between"
      borderRadius="1rem"
      w="100%"
    >
      <Box color="#6C5DD3">
        <Heading>Sonder.</Heading>
      </Box>
      <HStack>
      <IconButton
          variant="ghost"
          fontSize="2rem"
          icon={<MdNotificationsActive />}
          color = "#808191"
          _focus={{
            outline: "none",
          }}
        />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              rightIcon={<MdExpandMore />}
              variant="ghost"
              color="#808191"
              _hover={{color: "white"}}
            >
              <IconButton
                variant="ghost"
                color= "#808191"
                fontSize="2rem"
                icon={<BsPersonSquare />}
                _hover={{color: "white"}}
                _focus={{outline:"none"}}
              />
            </MenuButton>
            <MenuList bg="#21242D">
              <MenuItem onClick={()=>navigate("/profile")} _hover={{backgroundColor: "#242731", color: "white"}}_focus={{backgroundColor: "#242731", color: "white"}}>Profile</MenuItem>
              <MenuItem onClick={handleLogout} _hover={{backgroundColor: "#242731", color: "white"}} _focus={{backgroundColor: "#242731", color: "white"}}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Flex>
  );
};

export default TopBar;
