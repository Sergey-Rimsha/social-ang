import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environments'
import { Injectable } from '@angular/core'
import { ResultCodeEnum } from '../enums/resultCode'
import { Path } from '../enums/path'
import { BehaviorSubject } from 'rxjs'

interface ResponseAuthLogin<T> {
  data: T
  message: string[]
  fieldsErrors: []
  resultCode: number
}

interface MeResponseData {
  email: string
  id: string
  login: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false
  userId$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  resolveAuthRequest: Function = () => {}
  authRequest = new Promise(resolve => {
    this.resolveAuthRequest = resolve
  })

  constructor(private http: HttpClient, private router: Router) {}

  login(data: Partial<{ email: string; password: string; rememberMe: boolean }>) {
    this.http
      .post<ResponseAuthLogin<{}>>(`${environment.baseUrl}/auth/login`, data)
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.isAuth = true
          this.router.navigate(['/'])
        }
      })
  }

  me() {
    this.http
      .get<ResponseAuthLogin<MeResponseData>>(`${environment.baseUrl}/auth/me`)
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.isAuth = true
          this.userId$.next(res.data.id)
        }
        this.resolveAuthRequest()
      })
  }

  logout() {
    this.http.delete<ResponseAuthLogin<{}>>(`${environment.baseUrl}/auth/login`).subscribe(res => {
      if (res.resultCode === ResultCodeEnum.success) {
        this.isAuth = false
        this.router.navigate([Path.auth])
      }
    })
  }
}
