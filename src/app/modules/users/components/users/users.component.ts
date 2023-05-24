import { Component, OnInit, ViewChild } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { MatPaginator, PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'soc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  users$?: Observable<User[]>
  totalCount$: Observable<number>

  constructor(private userService: UsersService) {
    this.users$ = this.userService.users$
    this.totalCount$ = this.userService.totalCount$
  }

  onChangePagination(event: PageEvent) {
    const params = {
      page: event.pageIndex,
      count: event.pageSize,
    }

    console.log(event)
    this.userService.getUsers(params)
  }

  ngOnInit() {
    this.userService.getUsers({})
  }
}
