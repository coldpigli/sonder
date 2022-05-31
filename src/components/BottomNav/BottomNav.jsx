import { Box, Flex, HStack, Icon } from '@chakra-ui/react'
import { sidenavData } from 'constants';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {

    let activeStyle = {
        backgroundColor: "#6C5DD3",
        borderRadius: "1rem",
        color: "#FFFFFF",
      };
    

  return (
    <Box
      w="100vw"
      bg="rgb(36, 39, 49)"
      position="fixed"
      p="1rem"
      bottom="0"
      left="0"
      right="0"
      zIndex="999"
      borderTop="0.5px solid rgba(128, 129, 145, 0.25)"
    >
        <HStack justify='space-between'>
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
        </HStack>
    </Box>
  )
}

export default BottomNav