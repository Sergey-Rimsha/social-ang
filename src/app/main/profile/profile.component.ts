import { Component, OnInit } from '@angular/core'
import { ProfileService } from './service/profile.service'
import { Observable } from 'rxjs'
import { AuthService } from '../../core/services/auth.service'
import { ProfileData } from './models/profile.models'

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
  editeStatus: boolean = false

  newImage!: File

  newStatus!: string

  constructor(private profileService: ProfileService, private authService: AuthService) {
    this.userId$ = this.authService.userId$
    this.profile$ = this.profileService.profile$
    this.status$ = this.profileService.status$
    this.imgDefault = 'assets/img/default.jpg'
  }

  saveStatus() {
    this.editeStatus = false
    this.profileService.putProfileStatus(this.newStatus)
  }

  onEditeStatus() {
    this.editeStatus = !this.editeStatus
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

  ngOnInit() {
    console.log(this.profile$)
    this.userId$.subscribe(userId => {
      this.profileService.getProfile(userId)
      this.profileService.getProfileStatus(userId)
    })
  }
}
