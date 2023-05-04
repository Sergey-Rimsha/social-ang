import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'soc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$?: Observable<User[]>
  totalCount$: Observable<number>

  constructor(private userService: UsersService) {
    this.users$ = this.userService.users$
    this.totalCount$ = this.userService.totalCount$
  }

  ngOnInit() {
    this.userService.getUsers()
  }
}
