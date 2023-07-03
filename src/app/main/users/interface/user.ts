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
