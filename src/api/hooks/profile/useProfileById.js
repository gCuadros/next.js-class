import { useQuery } from '@tanstack/react-query'

import { fetcher } from '../../utils/fetcher'

export const profileDetailKey = (props) => [
  {
    id: 'profile',
    scope: 'profile',
    entity: 'profile',
    ...props
  }
]

export const fetchProfiletDetail = async ({ queryKey: [{ userId }] }) => {
  const response = await fetcher(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  return response
}

export const useProfileDetailsById = (props) =>
  useQuery({
    queryKey: profileDetailKey(props),
    queryFn: fetchProfiletDetail
  })
