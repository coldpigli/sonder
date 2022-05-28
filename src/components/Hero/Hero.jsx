import {Box, Button, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { urls } from "constants/urls";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()
    const {text} = useTypewriter({
        words: ['Network', 'Shit Post', 'Be Wierd', 'Vent'],
        loop: 0,

      })

  return (
    <Flex wrap="wrap" m="0 auto" p="1rem" w={{base: "100%",md: "100%",xl: "90%"}}>
      <VStack justify='center' w={{base: "100%", md: "100%", xl: "50%"}} minH={{base: "50vh",md: "50vh",xl: "80vh"}}>
        <Heading size='3xl' textAlign='center'>
            Discover a New Era of Cool 
            <Box size='2xl' color='primary'>{text}<Cursor/></Box> 
        </Heading>
        <Box>
            <Button variant='outline' size='lg' onClick={()=>navigate('/login')}>Get Wierd</Button>
        </Box>
      </VStack>
      <Center w={{base: "100%", md: "100%", xl: "50%", }}>
        <video width="90%" height="30%" autoPlay={true} muted={true} loop={true}>
          <source src={urls.heroVideo} type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Center>
    </Flex>
  );
};

export default Hero;
