import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Icheckuser } from '../Interfaces/icheckuser';
import { IUsers } from '../Interfaces/iusers';
import { UsersService } from '../users.service';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss']
  
})
export class UsersPage implements OnInit {


  users: IUsers[] = [];

  error = undefined;

  constructor(private userService: UsersService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers()
    
   
    
    
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.userService.authSubject.subscribe(userLogin => {
      this.http.get<IUsers[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken})})
        .subscribe(
          resp => {
            console.log(resp)
            this.users = resp;
          },
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })
  }

 

}
