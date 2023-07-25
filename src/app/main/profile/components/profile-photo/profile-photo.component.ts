import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'soc-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent {
  @Input() photo!: string | undefined
  imgDefault: string
  newPhoto!: File

  @Output() uploadedPhoto: EventEmitter<File> = new EventEmitter()

  constructor() {
    this.imgDefault = 'assets/img/default.jpg'
  }

  updateProfilePhoto(event: Event) {
    const inputElement = event.target as HTMLInputElement
    if (inputElement && inputElement.files) {
      this.newPhoto = inputElement.files[0]
    }
  }
  uploadedProfilePhoto() {
    this.uploadedPhoto.emit(this.newPhoto)
  }
}
