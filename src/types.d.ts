type Nullable<T> = T | null | undefined

type Fn<T = void> = () => T

interface Project {
  id: number
  title: string
  images?: string[]
  tags?: string[]
  url?: string
  description?: string
}
