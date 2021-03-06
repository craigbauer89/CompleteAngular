import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    RegisterPage,
    LoginPage,
    HomePage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ]
})
export class RegisteruserModule { }
