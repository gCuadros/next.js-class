interface NextFetchRequestConfig {
  revalidate?: number | false
  tags?: string[]
}

interface RequestInit {
  next?: NextFetchRequestConfig | undefined
}

// getStaticProps
// fetch(url).then((res) =>res.json())

// getServerSideProps
// fetch(url, {cache: "no-store"}).then((res) =>res.json())

// ISR(Incremental static regeneration)
export const fetcher = <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  return fetch(url, { ...options, next: { revalidate: 60 } }).then((res) =>
    res.json()
  )
}
