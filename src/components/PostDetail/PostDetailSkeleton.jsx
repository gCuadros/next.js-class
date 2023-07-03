'use client'

import { Skeleton, Stack } from '@chakra-ui/react'

const PostDetailSkeleton = () => (
  <Stack paddingTop='40px'>
    <Skeleton height='60px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
)

export default PostDetailSkeleton
