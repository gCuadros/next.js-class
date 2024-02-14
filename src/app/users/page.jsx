import { fetcher } from '@/api/utils/fetcher'
import UserList from '../../components/UserList'

const UserPage = async () => {
  const users = await fetcher('https://jsonplaceholder.typicode.com/users')

  return <UserList users={users} />
}

export default UserPage
