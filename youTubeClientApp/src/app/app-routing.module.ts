import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core-module/guards/auth.guard';
import { AdminPagesComponent } from './core-module/pages/admin-pages/admin-pages.component';
import { NotFoundPagesComponent } from './core-module/pages/not-found-pages/not-found-pages.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./youtube-module/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-module/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: AdminPagesComponent,
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'notFound',
    component: NotFoundPagesComponent,
  },
  {
    path: '**',
    redirectTo: 'notFound',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
