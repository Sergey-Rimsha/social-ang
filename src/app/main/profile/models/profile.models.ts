export interface ProfileData {
  aboutMe: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: Photos
}

export interface Contacts {
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
