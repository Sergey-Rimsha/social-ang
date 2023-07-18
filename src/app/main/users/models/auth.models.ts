export interface ResponseUsers {
  items: User[]
  totalCount: number
  error?: any
}

export interface getParams {
  count: number
  page: number
  term?: string
  friend?: boolean
}

export interface UserPhotos {
  small?: any
  large?: any
}

export interface User {
  name: string
  id: number
  photos: UserPhotos
  status?: any
  followed: boolean
}
