import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'soc-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
})
export class ProfileStatusComponent {
  @Input() status!: string
  newStatus: string = this.status
  onEditeMode: boolean = false

  @Output() statusUpdated: EventEmitter<string> = new EventEmitter()

  onChangeEditeMode() {
    this.onEditeMode = true
  }

  saveStatus() {
    this.onEditeMode = false
    if (this.newStatus && this.newStatus !== this.status) {
      this.statusUpdated.emit(this.newStatus)
    }
  }
}
