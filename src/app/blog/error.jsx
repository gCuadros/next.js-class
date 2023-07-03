'use client' // Error components must be Client Components

import { Button, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <Text>Something went wrong!</Text>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}

export default Error
