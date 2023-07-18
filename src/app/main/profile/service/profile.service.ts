import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environments'
import { BehaviorSubject } from 'rxjs'
import { ProfileData } from '../models/profile.models'

export interface ResponseType<T> {
  data: T
  resultCode: number
  messages: string[]
  fieldsErrors: string[]
}

const rootObject: ProfileData = {
  aboutMe: '',
  contacts: {
    facebook: '',
    website: '',
    vk: '',
    twitter: '',
    instagram: '',
    youtube: '',
    github: '',
    mainLink: '',
  },
  lookingForAJob: true,
  lookingForAJobDescription: 'Описание о поиске работы',
  fullName: '',
  userId: 123456,
  photos: {
    small: '',
    large: '',
  },
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile$: BehaviorSubject<ProfileData> = new BehaviorSubject<ProfileData>(rootObject)
  status$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>('')

  constructor(private http: HttpClient) {}

  getProfile(userId: number) {
    this.http.get<ProfileData>(`${environment.baseUrl}/profile/${userId}`).subscribe(res => {
      this.profile$.next(res)
    })
  }

  getProfileStatus(userId: number) {
    this.http
      .get<string | undefined>(`${environment.baseUrl}/profile/status/${userId}`)
      .subscribe(res => {
        this.status$.next(res)
      })
  }

  putProfileStatus(status: string) {
    const { userId } = this.profile$.getValue()

    this.http.put(`${environment.baseUrl}/profile/status`, { status }).subscribe(() => {
      this.getProfileStatus(userId)
    })
  }

  putProfilePhoto(image: File) {
    const formData = new FormData()
    formData.append('image', image)
    this.http
      .put<ResponseType<{ photos: { small: string; large: string } }>>(
        `${environment.baseUrl}/profile/photo`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      .subscribe(res => {
        if (res.resultCode === 0) {
          let profile = this.profile$.getValue()
          profile = { ...profile, ...res.data }
          this.profile$.next(profile)
        }
      })
  }
}
