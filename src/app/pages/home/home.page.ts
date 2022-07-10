import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  gousers() {
this.userService.gousers()
  }

  goproducts() {
    this.userService. goproducts()
  }
  

}
