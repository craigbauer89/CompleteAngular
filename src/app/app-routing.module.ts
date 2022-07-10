import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth.guard';
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
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    component: UsersPage

  },
  {
    path: 'products',
    canActivate: [AuthGuard],
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
  },
  {
    path: '**',
    /* component: ErrPage */
    loadChildren: () => import('./error404/error404.module').then(m => m.Error404Module)
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
