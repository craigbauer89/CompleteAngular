import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { LogoutPage } from './pages/logout/logout.page';
import { RegisterPage } from './pages/register/register.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSidenavModule} from '@angular/material/sidenav';
// import { MatSidenavContent } from './material/material.module';

import {MaterialModule} from './material/material.module'
import { MatSidenavContent } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersPage,
    ProductsPage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatSliderModule,
    // MatSidenavModule,
    MaterialModule
   
    
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
