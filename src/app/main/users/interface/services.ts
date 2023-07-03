import { User } from './user'

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
