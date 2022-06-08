import { Box, Center, GridItem, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { SignupForm } from "components"
import { urls } from "constants"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div>
      <SimpleGrid columns={[1, null, 2]}>
        <GridItem>
            <Center minH='100vh' color='white'>
              <VStack spacing='1rem' align="start">
                <Heading as='h2' size='xl' color='primary'>
                   Signup
                </Heading>
                <Text>Signup to meet wierd, new people</Text>
                <SignupForm/>
                <Box>
                  <Text>Already sworn allegiance to us?  
                    <Link to="/login"><Text as='u'> Go to Login</Text></Link>
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

export default Signup