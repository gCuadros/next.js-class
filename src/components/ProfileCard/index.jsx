'use client'

import { useProfileDetailsById } from '@/api/hooks/profile/useProfileById'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge
} from '@chakra-ui/react'
import Link from 'next/link'

const ProfileCard = ({ userId }) => {
  const { data: profile, isLoading } = useProfileDetailsById({ userId })

  if (isLoading || !profile) {
    return 'cargando'
  }

  return (
    <Center py={6} padding={20}>
      <Box
        maxW='320px'
        w='full'
        bg='white'
        boxShadow='2xl'
        rounded='lg'
        p={6}
        textAlign='center'
      >
        <Avatar
          size='2xl'
          src='https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=1380&t=st=1688345796~exp=1688346396~hmac=0f7de6e3cf53a3d719e1a25fb769dd176a21f78a10e2d9cf7ef1112b102d9e78'
          alt='Avatar Alt'
          mb={4}
          pos='relative'
        />
        <Heading fontSize='2xl' fontFamily='body'>
          {name}
        </Heading>
        <Text fontWeight={600} color='gray.500' mb={4}>
          @{profile.username}
        </Text>
        <Link href={profile.website} fontWeight={600} color='gray.500' mb={4}>
          {profile.website}
        </Link>
        <Text textAlign='center' color='gray.700' px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or me
          in your posts
        </Text>

        <Stack align='center' justify='center' direction='row' mt={6}>
          <Badge px={2} py={1} bg='gray.50' fontWeight='400'>
            #art
          </Badge>
          <Badge px={2} py={1} bg='gray.50' fontWeight='400'>
            #photography
          </Badge>
          <Badge px={2} py={1} bg='gray.50' fontWeight='400'>
            #music
          </Badge>
        </Stack>

        <Stack mt={8} direction='row' spacing={4}>
          <Button
            flex={1}
            fontSize='sm'
            rounded='full'
            _focus={{
              bg: 'gray.200'
            }}
          >
            Message
          </Button>
          <Button
            flex={1}
            fontSize='sm'
            rounded='full'
            bg='blue.400'
            color='white'
            boxShadow='0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            _hover={{
              bg: 'blue.500'
            }}
            _focus={{
              bg: 'blue.500'
            }}
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default ProfileCard
