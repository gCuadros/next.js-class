// providers.tsx
'use client'
import { client } from '@/api/utils/client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => client)

  return (
    <CacheProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
