export interface ResponseAuthLogin<T> {
  data: T
  message: string[]
  fieldsErrors: []
  resultCode: number
}

export interface MeData {
  email: string
  id: number
  login: string
}
