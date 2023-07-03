interface NextFetchRequestConfig {
  revalidate?: number | false
  tags?: string[]
}

interface RequestInit {
  next?: NextFetchRequestConfig | undefined
}

export const fetcher = <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  return fetch(url, { ...options, next: { revalidate: 60 } }).then((res) =>
    res.json()
  )
}
