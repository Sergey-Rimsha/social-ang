import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { ModulesComponent } from './modules.component'

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: '',
    component: ModulesComponent,
    children: [
      { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
