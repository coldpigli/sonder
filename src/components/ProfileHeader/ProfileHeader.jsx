import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
  Input,
} from "@chakra-ui/react";

import { BiArrowBack } from "react-icons/bi";
import {
  RiInstagramLine,
  RiFacebookCircleFill,
  RiGithubFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { urls } from "constants";
import { fallbackData } from "constants";
import { useRef } from "react";
import { EditProfile } from "components";

const ProfileHeader = ({ user }) => {
  const navigate = useNavigate();
  const coverImg = user.coverImg ?? urls.coverImg;
  const userBio = user.bio ?? fallbackData.userBio;
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");

  return (
    <Box borderRadius="1rem" bg="#242731">
      <VStack align="stretch">
        <HStack
          borderBottom="1px solid rgba(128, 129, 145, 0.25)"
          p="0.5rem 1rem"
        >
          <IconButton
            color="#808191"
            aria-label="Search database"
            variant="unstyled"
            fontSize="1.5rem"
            icon={<BiArrowBack />}
            onClick={() => navigate("/feed")}
          />
          <Text color="#808191">{"@" + user.username}</Text>
        </HStack>
        <VStack align="center">
          <Box p="1rem" bg="#242731" borderRadius="1rem">
            <Image
              objectFit="cover"
              src={coverImg}
              alt="Dan Abramov"
              borderRadius="1rem"
            />
          </Box>
          <VStack
            align="stretch"
            p="1rem"
            pos="relative"
            bottom={smallerDevice ? "5rem" : "7rem"}
            w="95%"
            spacing={6}
          >
            <HStack justify="space-between" align="flex-end">
              <Avatar
                size={smallerDevice ? "xl" : "2xl"}
                name={user.username}
                border="5px solid #242731"
                src={user.profileImg}
              />
              <Button variant="outline" ref={btnRef} onClick={onOpen}>
                Edit Profile
              </Button>
              <EditProfile isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
            </HStack>
            <HStack mt="1rem" align="center">
              <Heading size="md">
                {user.firstName + " " + user.lastName}
              </Heading>
              <Text fontSize="md" color="#808191">
                {"@" + user.username}
              </Text>
            </HStack>
            <Box color="#808191">
              <Text fontSize="md">{userBio}</Text>
            </Box>
            <HStack position="absolute" bottom="-20%">
              {user?.portfolioUrl && (
                <HStack color="#808191">
                  <Text>Portfolio</Text>
                  <Link color="#6C5DD3">{user?.portfolioUrl}</Link>
                </HStack>
              )}
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ProfileHeader;
