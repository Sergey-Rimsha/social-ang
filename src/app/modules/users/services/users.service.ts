import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environments'
import { BehaviorSubject } from 'rxjs'

export interface ResponseUsers {
  items: User[]
  totalCount: number
  error?: any
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

export interface getParams {
  count: number
  page: number
  term?: string
  friend?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  totalCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  error$: BehaviorSubject<null | string> = new BehaviorSubject<null | string>(null)

  constructor(private http: HttpClient) {}

  getUsers(pgParams?: getParams) {
    let params = {}
    if (pgParams) params = pgParams
    this.http
      .get<ResponseUsers>(`${environment.baseUrl}/users`, { params })
      .subscribe((res: ResponseUsers) => {
        if (res.error) {
          this.error$.next('some error')
        } else {
          this.users$.next(res.items)
          this.totalCount$.next(res.totalCount)
        }
      })
  }
}
