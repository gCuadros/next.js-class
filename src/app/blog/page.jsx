import { fetcher } from '@/api/utils/fetcher'
import PostList from '../../components/PostList'

const BlogPage = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  const posts = await fetcher('https://jsonplaceholder.typicode.com/posts')

  return <PostList posts={posts} />
}

export default BlogPage
