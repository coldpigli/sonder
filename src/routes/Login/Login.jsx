import {Box, Center, GridItem, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { LoginForm } from 'components'
import { urls } from 'constants/urls'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <SimpleGrid columns={[1, null, 2]}>
        <GridItem>
            <Center minH='100vh' color='white'>
              <VStack spacing='1rem' align="start">
                <Heading as='h2' size='xl' color='primary'>
                   Login
                </Heading>
                <Text>Login to meet wierd, new people</Text>
                <LoginForm/>
                <Box color='white'>
                  <Text>Haven't sworn allegiance to us yet?  
                    <Link to="/signup"><Text as='u'> Signup Now</Text></Link>
                  </Text>
                </Box>
              </VStack>
            </Center>
        </GridItem>
        <GridItem>
            <Image src={urls.heroVideo} alt='login-people' w='100%' h='100%' objectFit='cover' />
        </GridItem>
      </SimpleGrid>
    </div>
  )
}

export default Login