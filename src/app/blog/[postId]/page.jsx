import { fetcher } from '@/api/utils/fetcher'
import PostDetail from '../../../components/PostDetail'

const PostPage = async ({ params }) => {
  const { postId } = params

  const post = await fetcher(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )

  return <PostDetail title={post.title} description={post.body} />
}

export default PostPage
