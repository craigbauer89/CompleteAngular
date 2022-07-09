import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { Icheckuser } from './Interfaces/icheckuser';
import { IUsers } from './Interfaces/iusers';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlJsonServer = 'http://localhost:4201';
  authSubject = new BehaviorSubject<Icheckuser | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signup(obj: IUsers) {
    return this.http.post(this.urlJsonServer+'/register', obj);
  }

  login(obj: IUsers) {
    //this.loggedIn = true;
    return this.http.post<Icheckuser>(this.urlJsonServer+'/login', obj).pipe(
      /* tap(ele => console.log(ele)), */
      tap(data => {
        this.authSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data));
      })
    )
  }

}
