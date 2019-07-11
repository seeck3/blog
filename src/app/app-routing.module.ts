import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromBlogs from './blog';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog/myself',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: fromBlogs.MyselfComponent,
      },
      {
        path: 'myself',
        component: fromBlogs.MyselfComponent,
      },
      {
        path: 'gallery',
        component: fromBlogs.PhotoComponent,
      },
      {
        path: 'potfolio',
        component: fromBlogs.PotfolioComponent,
      },
      {
        path: 'contact',
        component: fromBlogs.ContactComponent,
      },
      {
        path: 'resume',
        component: fromBlogs.ResumeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
