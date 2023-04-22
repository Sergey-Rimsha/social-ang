import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environments'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient, private router: Router) {}

  login(data: Partial<{ email: string; password: string; rememberMe: boolean }>) {
    this.http.post(`${environment.baseUrl}/auth/login`, data).subscribe(res => {
      console.log(res)
    })
  }
}
