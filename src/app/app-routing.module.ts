import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromBlogs from './blog';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: fromBlogs.BlogComponent,
      },
      {
        path: 'potfolio',
        component: fromBlogs.PotfolioComponent,
      },
      {
        path: 'myself',
        component: fromBlogs.MyselfComponent,
      },
      {
        path: 'contact',
        component: fromBlogs.ContactComponent,
      },
      // {
      //   path: ':pet_id',
      //   component: fromBlogs.DetailComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
