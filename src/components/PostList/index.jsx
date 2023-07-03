'use client'

import { HStack, VStack } from '@chakra-ui/react'

import Link from 'next/link'
import PostItem from '../PostItem'

const PostList = ({ posts }) => {
  return (
    <VStack>
      <h1>Next.js MasterClass blog</h1>
      <VStack alignItems='flex-start'>
        {posts.map((post) => (
          <HStack key={post.id}>
            <Link href={`blog/${post.id}`}>
              <PostItem
                title={post.title}
                description={post.body}
                userId={post.userId}
              />
            </Link>
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default PostList
