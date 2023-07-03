import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environments'
import { Injectable } from '@angular/core'
import { ResultCodeEnum } from '../enums/resultCode'
import { Path } from '../enums/path'

interface ResponseAuthLogin<T> {
  data: T
  message: string[]
  fieldsErrors: []
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false

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
    this.http.get<ResponseAuthLogin<{}>>(`${environment.baseUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodeEnum.success) {
        this.isAuth = true
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
