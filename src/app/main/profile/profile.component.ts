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
  imgDefault: string

  newImage!: File

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.userId$ = this.authService.userId$
    this.profile$ = this.profileService.profile$
    this.status$ = this.profileService.status$
    this.imgDefault = 'assets/img/default.jpg'
  }

  updateProfilePhoto(event: Event) {
    const inputElement = event.target as HTMLInputElement
    if (inputElement && inputElement.files) {
      this.newImage = inputElement.files[0]
    }
  }

  uploadedProfilePhoto() {
    this.profileService.putProfilePhoto(this.newImage)
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
      } else {
        this.userId$.subscribe(userId => {
          this.profileService.getProfile(userId)
          this.profileService.getProfileStatus(userId)
        })
      }
    })
  }
}
