import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { LogoutPage } from './pages/logout/logout.page';
import { ProductsPage } from './pages/products/products.page';
import { RegisterPage } from './pages/register/register.page';
import { UsersPage } from './pages/users/users.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'users',
    component: UsersPage

  },
  {
    path: 'products',
    component: ProductsPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'logout',
    component: LogoutPage
  },
  {
    path: 'register',
    component: RegisterPage
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
