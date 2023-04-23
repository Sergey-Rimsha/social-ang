import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Path } from './core/enums/path'

const routes: Routes = [
  {
    path: Path.auth,
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
