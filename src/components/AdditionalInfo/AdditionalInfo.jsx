import { Box, Heading, VStack } from '@chakra-ui/react'
import { FindPeople, InfoBar } from 'components'

const AdditionalInfo = () => {
  return (
    <Box
        flex="1"
        h='100vh'
        position="sticky"
        top='0'
        borderLeft="0.5px solid rgba(128, 129, 145, 0.25)"
        p='1rem'
      >
        <VStack align='stretch' spacing="8" bg = '#242731'>
          <Box>
            <Heading>kjsdnaskjdn</Heading>
          </Box>
        </VStack>
      </Box>
  )
}

export default AdditionalInfo