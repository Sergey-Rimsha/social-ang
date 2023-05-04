import { NgModule } from '@angular/core'
import { UsersComponent } from './components/users/users.component'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatPaginatorModule } from '@angular/material/paginator'
import { UsersRoutingModule } from './users-routing.module'

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatCardModule, MatPaginatorModule, MatButtonModule],
})
export class UsersModule {}
