import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
  console.log(this.form.value)
    this.userService.signup(this.form.value).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['/login'])
      },
      err  => {
        console.log(err.error);
        this.error = err.error;
      }
    )
  }

}

