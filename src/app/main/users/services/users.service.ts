import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environments'
import { BehaviorSubject, map } from 'rxjs'
import { getParams, ResponseUsers, User } from '../models/auth.models'
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

  followUser(userId: number) {
    this.http
      .post(`${environment.baseUrl}/follow/${userId}`, {})
      .pipe(
        map(() => {
          const stateUsers = this.users$.getValue()
          stateUsers.forEach(user => {
            if (user.id === userId) user.followed = true
          })
          return stateUsers
        })
      )
      .subscribe((users: User[]) => {
        this.users$.next(users)
      })
  }
  unfollowUser(userId: number) {
    this.http
      .delete(`${environment.baseUrl}/follow/${userId}`)
      .pipe(
        map(() => {
          const stateUsers = this.users$.getValue()
          stateUsers.forEach(user => {
            if (user.id === userId) user.followed = false
          })
          return stateUsers
        })
      )
      .subscribe((users: User[]) => {
        this.users$.next(users)
      })
  }
}
