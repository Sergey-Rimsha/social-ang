import { Component } from '@angular/core'
import { AuthService } from '../../../core/services/auth.service'

@Component({
  selector: 'soc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  onClickLogout() {
    this.authService.logout()
  }
}
