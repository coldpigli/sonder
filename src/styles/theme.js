import {
    extendTheme,
  } from '@chakra-ui/react'
  
export const customTheme = extendTheme(
    {
      colors: {
        primary: '#1c7d5e',
      },
      fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
      },

    },
  )
