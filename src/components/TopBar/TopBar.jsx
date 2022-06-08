import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdExpandMore, MdOutlineSearch } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "redux/slices/authSlice";
import { SearchResultList } from "components";
import { useState } from "react";
import { filterUsers } from "utils";

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");
  const {userList} = useSelector((state)=>state.users);
  const [searchList, setSearchList] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const menuStyle = { backgroundColor: "lightGrey", color: "white" };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const getSearchResults = (e) => {
    setSearchItem(e.target.value);
    setSearchList(filterUsers(userList, searchItem));
  }

  return (
    <Flex align="center" justify="space-between" borderRadius="1rem" w="100%">
      <Box color="primary">
        <Link to='/feed'><Heading>Sonder.</Heading></Link>
      </Box>
      <HStack>
        <Box>
        {
          smallerDevice?null:<InputGroup>
          <InputLeftElement pointerEvents='none' children={<MdOutlineSearch color='gray.300' />}/>
            <Input type="text" placeholder="Search Users" onChange={(e)=>getSearchResults(e)}/>
          </InputGroup>
        }
        {
          searchItem?.length!==0 && <SearchResultList searchList={searchList}/>
        }
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              rightIcon={<MdExpandMore />}
              variant="ghost"
              color="lightGrey"
              _hover={{ color: "white" }}
            >
              <IconButton
                variant="ghost"
                color="lightGrey"
                fontSize="2rem"
                icon={<BsPersonSquare />}
                _hover={{ color: "white" }}
                _focus={{ outline: "none" }}
              />
            </MenuButton>
            <MenuList bg="#21242D">
              <MenuItem
                onClick={() => navigate("/profile")}
                _hover={menuStyle}
                _focus={menuStyle}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                _hover={menuStyle}
                _focus={menuStyle}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
    </Flex>
  );
};

export default TopBar;
