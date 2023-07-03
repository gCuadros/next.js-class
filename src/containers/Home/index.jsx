'use client'

import { Flex, Container, Heading, Stack, Text, Button } from '@chakra-ui/react'
import Illustration from './Illustration'

const Home = () => {
  return (
    <Container maxW='5xl'>
      <Stack
        textAlign='center'
        align='center'
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight='110%'
        >
          El Framework de React{' '}
          <Text as='span' color='#149eca'>
            para la web
          </Text>
        </Heading>
        <Text color='gray.500' maxW='3xl'>
          Utilizado por algunas de las empresas más grandes del mundo, Next.js
          te permite crear aplicaciones web mediante las últimas características
          de React e integrando herramientas de JavaScript basadas en Rust para
          lograr las compilaciones más rápidas.
        </Text>
        <Flex w='full'>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default Home
