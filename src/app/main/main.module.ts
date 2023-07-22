import { NgModule } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ProfileComponent } from './profile/profile.component'
import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './main.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { HeaderComponent } from './components/header/header.component'
import { MenuComponent } from './components/menu/menu.component'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { ProfileStatusComponent } from './profile/components/profile-status/profile-status.component'

@NgModule({
  declarations: [
    ProfileComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    ProfileStatusComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    MatInputModule,
    FormsModule,
  ],
})
export class MainModule {}
