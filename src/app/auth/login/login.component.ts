import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../core/services/auth.service'

@Component({
  selector: 'soc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.minLength(4)],
      nonNullable: true,
    }),
    rememberMe: new FormControl<boolean>(false, { nonNullable: true }),
  })

  constructor(private authService: AuthService) {}

  onLoginSubmit() {
    this.authService.login(this.loginForm.value)
  }
}
