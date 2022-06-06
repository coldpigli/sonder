import { Box, useMediaQuery, VStack } from '@chakra-ui/react';
import { AdditionalInfo, ProfileHeader, Sidebar, TopBar } from 'components';
import BottomNav from 'components/BottomNav/BottomNav';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllUsers, getUser } from 'services';
const PeopleProfile = () => {

    const [smallerDevice] = useMediaQuery("(max-width: 900px)"); // checking if the device is less than 900px
    const {userData} = useSelector((state)=>state.auth);
    const {userList} = useSelector((state)=>state.users);
    const {username} = useParams();
    console.log("user list", userList);
    console.log("username", username)
    const [viewingUser, setViewingUser] = useState();
    console.log("viewing user", viewingUser);
    const dispatch = useDispatch();

    const getUserId = (username) => {
        const user = userList?.find((user)=>user.username===username);
        return user._id;
    }

    useEffect(()=>{
        (async()=>{
            const {user} = await getUser(getUserId(username));
            setViewingUser(user);
        })()
    },[])

    return (
      <Box display="flex" gap="12" color="white">
        {smallerDevice ? <BottomNav /> : <Sidebar />}
        <VStack
          minH="100vh"
          flex="2"
          gap="4"
          align="stretch"
          p={`${smallerDevice ? "1rem" : "1rem 0"}`}
        >
          <TopBar />
          {
             viewingUser && <ProfileHeader user={viewingUser}/>
          }
          <Box>
            User Data
          </Box>
        </VStack>
        {!smallerDevice && <AdditionalInfo />}
      </Box>
    );
}

export default PeopleProfile