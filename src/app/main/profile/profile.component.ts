import { Component, OnInit } from '@angular/core'
import { ProfileData, ProfileService } from './service/profile.service'
import { Observable } from 'rxjs'
import { AuthService } from '../../core/services/auth.service'

@Component({
  selector: 'soc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId$: Observable<string>
  profile$: Observable<ProfileData>

  constructor(private profileService: ProfileService, private authService: AuthService) {
    this.userId$ = this.authService.userId$
    this.profile$ = this.profileService.profile$
  }

  ngOnInit() {
    this.userId$.subscribe(userId => {
      this.profileService.getProfile(userId)
    })
  }
}
