'use client'

import { HStack, Input } from '@chakra-ui/react'
import { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('busca un post')

  return (
    <HStack marginBottom={3}>
      <Input
        value={search}
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
      />
    </HStack>
  )
}

export default SearchBar
