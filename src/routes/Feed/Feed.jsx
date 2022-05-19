import { Box } from '@chakra-ui/react';
import { Sidebar } from 'components';
import React from 'react'

const Feed = () => {
  return (
    <Box p='1rem' display='flex'>
      <Sidebar/>
      <Box>
        loremTest
      </Box>
    </Box>
  )
}

export default Feed;