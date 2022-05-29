import {
  Box,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdSearch, MdNotificationsActive, MdExpandMore } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/slices/authSlice";

const UserSnippet = () => {

  const navigate = useNavigate();
  const {authToken} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    dispatch(logout());
    navigate("/login", {replace: true})
  }

  return (
    <Box>
      <HStack>
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<MdSearch color="black" size="1.5rem" />}
            />
            <Input
              type="text"
              variant="filled"
              bg="#E1E1E1"
              focusBorderColor="black"
            />
          </InputGroup>
        </Box>
        <IconButton
          variant="ghost"
          colorScheme="black"
          fontSize="2rem"
          icon={<MdNotificationsActive />}
          _focus={{
            outline: "none",
          }}
        />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              rightIcon={<MdExpandMore />}
              variant="outline"
            >
              <IconButton
                variant="ghost"
                colorScheme="black"
                fontSize="2rem"
                icon={<BsPersonSquare />}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserSnippet;
