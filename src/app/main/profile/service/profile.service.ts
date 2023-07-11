import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environments'
import { BehaviorSubject } from 'rxjs'

export interface ProfileData {
  aboutMe: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: Photos
}

interface Contacts {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}

export interface Photos {
  small: string
  large: string
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

  constructor(private http: HttpClient) {}

  getProfile(userId: string) {
    this.http.get<ProfileData>(`${environment.baseUrl}/profile/${userId}`).subscribe(res => {
      console.log(res)
      this.profile$.next(res)
    })
  }
}
