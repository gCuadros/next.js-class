import PostItemSkeleton from '../../components/PostItem/PostItemSkeleton'

const Loading = () =>
  [...Array(10)].map((_, index) => <PostItemSkeleton key={index} />)

export default Loading
