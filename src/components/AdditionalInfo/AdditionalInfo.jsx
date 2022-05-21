import { Box, calc, VStack } from '@chakra-ui/react'
import { InfoBar, UserSnippet } from 'components'
import React from 'react'

const AdditionalInfo = () => {
  return (
    <Box
        flex="1"
        h={calc.subtract("100vh", "2rem")}
        position="sticky"
        top="1rem"
        borderRadius='1rem'
        padding='2rem'
        bg="#F8F8F8"
      >
        <VStack align='stretch' spacing='6'>
          <UserSnippet/>
          <InfoBar/>
          <InfoBar/>
          <InfoBar/>
        </VStack>
      </Box>
  )
}

export default AdditionalInfo