import { Component, OnInit, ViewChild } from '@angular/core'
import { UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { User } from '../../interface/user'

@Component({
  selector: 'soc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator
  users$?: Observable<User[]>
  totalCount$: Observable<number>
  imgDefault: string

  constructor(private userService: UsersService) {
    this.users$ = this.userService.users$
    this.totalCount$ = this.userService.totalCount$
    this.imgDefault = 'assets/img/default.jpg'
  }

  onChangePagination(event: PageEvent) {
    const paramsPg = {
      page: event.pageIndex + 1,
      count: event.pageSize,
    }
    this.userService.getUsers(paramsPg)
  }

  onFollowUser(userId: number) {
    console.log('follow', userId)
    this.userService.followUser(userId)
  }

  unfollowUser(userId: number) {
    this.userService.unfollowUser(userId)
  }

  ngOnInit() {
    this.userService.getUsers()
  }
}
