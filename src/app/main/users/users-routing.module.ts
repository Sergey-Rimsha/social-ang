import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from './components/users/users.component'
import { NgModule } from '@angular/core'

const routes: Routes = [{ path: '', component: UsersComponent, pathMatch: 'full' }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
