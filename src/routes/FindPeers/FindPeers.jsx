import { Box } from '@chakra-ui/react'
import { Sidebar } from 'components'
import React from 'react'

const FindPeers = () => {
  return (
    <Box display='flex'>
      <Sidebar/>
      <Box>
        Peers
      </Box>
    </Box>
  )
}

export default FindPeers