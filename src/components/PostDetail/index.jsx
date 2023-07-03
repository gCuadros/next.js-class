'use client'

import { Heading, Text, VStack } from '@chakra-ui/react'

const PostDetail = ({ title, description }) => (
  <VStack paddingTop='40px' spacing='2' alignItems='flex-start'>
    <Heading as='h2'>{title}</Heading>
    <Text as='p' fontSize='lg'>
      {description}
    </Text>
  </VStack>
)

export default PostDetail
