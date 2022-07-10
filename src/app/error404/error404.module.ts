import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPage } from './error/error.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ErrorPage,
  }
];

@NgModule({
  declarations: [
    ErrorPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Error404Module { }
