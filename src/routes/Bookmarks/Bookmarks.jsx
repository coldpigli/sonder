import { Box } from '@chakra-ui/react'
import { Sidebar } from 'components'
import React from 'react'

const Bookmarks = () => {
  return (
    <Box display='flex'>
      <Sidebar/>
      <Box>
        bookmarks
      </Box>
    </Box>
  )
}

export default Bookmarks