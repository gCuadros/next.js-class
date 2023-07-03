'use client'

import { HStack, VStack } from '@chakra-ui/react'
import LikeButton from '../LikeButton'
import Link from 'next/link'

const PostList = ({ posts }) => {
  return (
    <VStack>
      <h1>Next.js MasterClass blog</h1>
      <VStack alignItems='flex-start'>
        {posts.map((post) => (
          <HStack key={post.id}>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
            <LikeButton />
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default PostList
