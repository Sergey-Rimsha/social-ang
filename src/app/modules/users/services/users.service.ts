import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
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
  count?: number
  page?: number
  term?: string
  friend?: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  totalCount$ = new BehaviorSubject<number>(0)
  error$ = new BehaviorSubject<null | string>(null)

  constructor(private http: HttpClient) {}

  getUsers(param: getParams) {
    const params = new HttpParams().set('count', (param.count = 10)).set('page', (param.page = 1))
    this.http
      .get<ResponseUsers>(`${environment.baseUrl}/users`, { params })
      .subscribe((res: ResponseUsers) => {
        console.log(res)
        if (res.error) {
          this.error$.next('some error')
        } else {
          this.users$.next(res.items)
          this.totalCount$.next(res.totalCount)
        }
      })
  }
}
