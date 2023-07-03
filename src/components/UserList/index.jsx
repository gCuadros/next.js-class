'use client'

import { Text, VStack } from '@chakra-ui/react'

const UserList = ({ users }) => {
  if (!users) return null

  return (
    <VStack>
      {users.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </VStack>
  )
}

export default UserList
