'use client'

import { Skeleton, HStack, VStack, SkeletonCircle } from '@chakra-ui/react'

const PostItemSkeleton = () => (
  <HStack paddingTop='40px'>
    <Skeleton width='600px' height='180px' />
    <VStack>
      <Skeleton width='600px' height='80px' />
      <Skeleton width='600px' height='40px' />
      <HStack width='600px'>
        <SkeletonCircle size='10' />
        <Skeleton width='100%' height='20px' />
      </HStack>
    </VStack>
  </HStack>
)

export default PostItemSkeleton
