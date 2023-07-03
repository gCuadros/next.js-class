'use client'

import { HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { SiNextdotjs } from 'react-icons/si'
const links = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Users', href: '/users' }
]

const Navbar = () => {
  return (
    <HStack padding={12}>
      <Icon as={SiNextdotjs} />
      {links.map(({ label, href }) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </HStack>
  )
}

export default Navbar
