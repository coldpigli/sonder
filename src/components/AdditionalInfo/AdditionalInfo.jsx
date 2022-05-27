import { Box, calc, VStack } from '@chakra-ui/react'
import { FindPeople, InfoBar, UserSnippet } from 'components'
import React from 'react'

const AdditionalInfo = () => {
  return (
    <Box
        flex="1"
        h={calc.subtract("100vh", "2rem")}
        position="sticky"
        top="1rem"
        borderRadius='1rem'
        padding='1rem'
        shadow='md'
      >
        <VStack align='stretch' spacing="8">
          <UserSnippet/>
          <InfoBar/>
          <InfoBar/>
          <InfoBar/>
          <FindPeople/>
        </VStack>
      </Box>
  )
}

export default AdditionalInfo