import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss']
})
export class LogoutPage implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

}
