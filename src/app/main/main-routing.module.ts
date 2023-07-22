import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { MainComponent } from './main.component'
import { Path } from '../core/enums/path'

const routes: Routes = [
  { path: '', redirectTo: Path.profile, pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: Path.profile, component: ProfileComponent, pathMatch: 'full' },
      { path: `${Path.profile}/:userId`, component: ProfileComponent, pathMatch: 'full' },
      {
        path: Path.users,
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
