import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environments'
import { Injectable } from '@angular/core'
import { ResultCodeEnum } from '../enums/resultCode'
import { Path } from '../enums/path'
import { BehaviorSubject } from 'rxjs'
import { MeData, ResponseAuthLogin } from '../models/auth.models'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false
  userId$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  resolveAuthRequest: Function = () => {}
  authRequest = new Promise(resolve => {
    this.resolveAuthRequest = resolve
  })

  constructor(private http: HttpClient, private router: Router) {}

  login(data: Partial<{ email: string; password: string; rememberMe: boolean }>) {
    this.http
      .post<ResponseAuthLogin<{ userId: number }>>(`${environment.baseUrl}/auth/login`, data)
      .subscribe(res => {
        if (res.resultCode === ResultCodeEnum.success) {
          this.isAuth = true
          this.userId$.next(res.data.userId)
          this.router.navigate(['/'])
        }
      })
  }

  me() {
    this.http.get<ResponseAuthLogin<MeData>>(`${environment.baseUrl}/auth/me`).subscribe(res => {
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
