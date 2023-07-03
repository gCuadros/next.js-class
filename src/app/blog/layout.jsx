import SearchBar from '../../components/SearchBar'

const BlogLayout = ({ children }) => {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  )
}

export default BlogLayout
