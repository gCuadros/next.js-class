import { fetcher } from '@/api/utils/fetcher'
import UserList from '../../components/UserList'
import Counter from '../../components/Counter'

const UserPage = async () => {
  const users = await fetcher('https://jsonplaceholder.typicode.com/users')
  return  (
    <>
    <Counter/>
    <UserList users={users} />
  
  </>
  
  )
}

export default UserPage
