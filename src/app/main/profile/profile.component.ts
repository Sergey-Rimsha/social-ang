import { Component, OnInit } from '@angular/core'
import { ProfileService } from './service/profile.service'
import { Observable } from 'rxjs'
import { AuthService } from '../../core/services/auth.service'
import { ProfileData } from './models/profile.models'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'soc-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userId$: Observable<number>
  profile$: Observable<ProfileData>
  status$: Observable<string | undefined>
  changeMode: boolean = true

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.userId$ = this.authService.userId$
    this.profile$ = this.profileService.profile$
    this.status$ = this.profileService.status$
  }

  uploadedProfilePhoto(newPhoto: File) {
    this.profileService.putProfilePhoto(newPhoto)
  }

  saveStatus(newStatus: string) {
    this.profileService.putProfileStatus(newStatus)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramsUserId = params.get('userId')

      if (paramsUserId) {
        this.profileService.getProfile(+paramsUserId)
        this.profileService.getProfileStatus(+paramsUserId)
        this.changeMode = false
      } else {
        this.userId$.subscribe(userId => {
          this.profileService.getProfile(userId)
          this.profileService.getProfileStatus(userId)
        })
      }
    })
  }
}
