import { fetcher } from '@/api/utils/fetcher'

const PostPage = async ({ params }) => {
  const { postId } = params
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const post = await fetcher(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  )

  return post.body
}

export default PostPage
