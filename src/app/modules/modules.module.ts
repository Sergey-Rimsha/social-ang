import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent } from './profile/profile.component'
import { ModulesRoutingModule } from './modules-routing.module'
import { ModulesComponent } from './modules.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [ProfileComponent, ModulesComponent],
  imports: [CommonModule, ModulesRoutingModule, MatToolbarModule, MatListModule],
})
export class ModulesModule {}
