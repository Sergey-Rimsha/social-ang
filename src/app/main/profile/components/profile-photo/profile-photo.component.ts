import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'soc-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent {
  @Input() photo!: string | undefined
  @Input() changeMode!: boolean
  @Output() uploadedPhoto: EventEmitter<File> = new EventEmitter()

  imgDefault: string
  newPhoto!: File

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
