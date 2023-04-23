import { NgModule } from '@angular/core'
import { ProfileComponent } from './components/profile/profile.component'
import { UsersComponent } from './components/users/users.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
