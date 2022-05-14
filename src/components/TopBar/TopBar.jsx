import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {

    const navigate = useNavigate();

  return (
    <Flex align='center' justify='space-between' p='1rem' m="0 auto" width={{
        base: '100%',
        md: '100%', 
        xl: '90%', 
      }}>
        <Box>
            <Heading>Sonder.</Heading>
        </Box>
        <Box>
            <Button onClick={()=>navigate('/login')}>Login</Button>
        </Box>
    </Flex>
  )
}

export default TopBar;