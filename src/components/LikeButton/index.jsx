'use client'

import { Button, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  return (
    <Button
      background='none'
      color='red'
      transition='all ease 0.3'
      _hover={{ background: 'none', opacity: 0.5 }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setLiked(!liked)
      }}
    >
      {liked ? <Icon as={AiFillHeart} /> : <Icon as={AiOutlineHeart} />}
    </Button>
  )
}

export default LikeButton
