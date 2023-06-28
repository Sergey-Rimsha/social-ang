import { Component, OnInit } from '@angular/core'
import { AuthService } from './core/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'soc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'social-ang'
  isAuth$: boolean
  constructor(private authService: AuthService, private router: Router) {
    this.isAuth$ = this.authService.isAuth
  }

  ngOnInit() {
    if (!this.isAuth$) {
      this.router.navigate(['/auth'])
    }
  }
}
