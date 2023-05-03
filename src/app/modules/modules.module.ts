import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile/profile.component'
import { UsersComponent } from './users/users.component'
import { ModulesRoutingModule } from './modules-routing.module'
import { ModulesComponent } from './modules.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  declarations: [ProfileComponent, UsersComponent, ModulesComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
})
export class ModulesModule {}
