import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { Path } from './core/enums/path'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  {
    path: Path.auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
