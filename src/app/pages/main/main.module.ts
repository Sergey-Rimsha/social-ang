import { NgModule } from '@angular/core'
import { ProfileComponent } from './components/profile/profile.component'
import { UsersComponent } from './components/users/users.component'
import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './main.component'

@NgModule({
  declarations: [ProfileComponent, UsersComponent, MainComponent],
  imports: [MainRoutingModule],
})
export class MainModule {}
