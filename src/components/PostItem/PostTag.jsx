import { Tag } from '@chakra-ui/react'

const PostTag = ({ tag }) => (
  <Tag size='md' variant='solid' color='white' bg='#149eca' key={tag}>
    {tag}
  </Tag>
)

export default PostTag
