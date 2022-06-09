import {
    extendTheme,
  } from '@chakra-ui/react'
  
export const customTheme = extendTheme(
    {
      colors: {
        primary: '#6C5DD3',
        lightGrey: '#808191',
        lightBlue: '#242731'
      },
      fonts: {
        body: 'Poppins, sans-serif',
        heading: 'Poppins, sans-serif',
        mono: 'Poppins, sans-serif',
      },

    },
  )
