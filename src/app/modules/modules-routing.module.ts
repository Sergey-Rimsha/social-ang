import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { UsersComponent } from './users/users.component'
import { ModulesComponent } from './modules.component'

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
      { path: 'users', component: UsersComponent, pathMatch: 'full' },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
