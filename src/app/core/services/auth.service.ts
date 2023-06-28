import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environments'
import { Injectable } from '@angular/core'

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

  constructor(private http: HttpClient, private router: Router) {}

  login(data: Partial<{ email: string; password: string; rememberMe: boolean }>) {
    this.http
      .post<ResponseAuthLogin<{}>>(`${environment.baseUrl}/auth/login`, data)
      .subscribe(res => {
        if (res.resultCode === 0) {
          this.isAuth = true
          this.router.navigate(['/profile'])
        }
      })
  }
}
