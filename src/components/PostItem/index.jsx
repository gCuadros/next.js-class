import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react'

import PostTag from './PostTag'
import PostAuthor from './PostAuthor'
import LikeButton from '../LikeButton'

import { useProfileDetailsById } from '@/api/hooks/profile/useProfileById'

const PostItem = async ({ title, description, userId }) => {
  const { data: user, isLoading } = useProfileDetailsById({ userId })

  return (
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display='flex'
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent='space-between'
    >
      <Box
        display='flex'
        flex='1'
        marginRight='3'
        position='relative'
        alignItems='center'
      >
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex='2'
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop='5%'
        >
          <Image
            borderRadius='lg'
            src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
            alt='some good alt text'
            objectFit='contain'
          />
        </Box>
        <Box zIndex='1' width='100%' position='absolute' height='100%'>
          <Box
            bgGradient={
              ('radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)')
            }
            backgroundSize='20px 20px'
            opacity='0.4'
            height='100%'
          />
        </Box>
      </Box>
      <Box
        display='flex'
        flex='1'
        flexDirection='column'
        justifyContent='center'
        alignItems='flex-start'
        marginTop={{ base: '3', sm: '0' }}
      >
        <HStack>
          <PostTag tag='Engineering' />
          <PostTag tag='Frontend' />
        </HStack>

        <Heading marginTop='1'>{title}</Heading>
        <Text as='p' marginTop='2' color='gray.700' fontSize='lg'>
          {description}
        </Text>
        {user && (
          <PostAuthor
            name={user.name}
            date={new Date('2021-04-06T19:01:27Z')}
          />
        )}

        <Box marginTop={5}>
          <LikeButton marginTop={20} />
        </Box>
      </Box>
    </Box>
  )
}

export default PostItem
