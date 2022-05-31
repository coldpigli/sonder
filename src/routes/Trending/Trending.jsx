import { Box } from '@chakra-ui/react'
import { Sidebar } from 'components'
import React from 'react'

const Trending = () => {
  return (
    <Box display='flex'>
      <Sidebar/>
      <Box>
        trending
      </Box>
    </Box>
  )
}

export default Trending