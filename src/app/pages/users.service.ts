import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';
import { Icheckuser } from './Interfaces/icheckuser';
import { IUsers } from './Interfaces/iusers';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlJsonServer = 'http://localhost:4201';
  authSubject = new BehaviorSubject<Icheckuser | null>(null);
  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { 
    this.restoreUserLogin();
  }

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

  logout() {
    /* this.loggedIn = false; */
    console.log('Logout')
    this.authSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }

  restoreUserLogin() {
    const json = localStorage.getItem('isAuthenticated');
    if(json) {
      const user = JSON.parse(json);
      if(this.helper.isTokenExpired(user.accessToken)) {
        localStorage.removeItem('isAuthenticated');
        return
      } else {
        this.authSubject.next(user);
      }
    }
  }

  gousers() {
    this.router.navigate(['/users']);
      }
    
  goproducts() {
        this.router.navigate(['/products']);
      }
      
  
}
