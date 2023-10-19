import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core-module/guards/auth.guard';
import { AdminPagesComponent } from './core-module/pages/admin-pages/admin-pages.component';
import { LoginGuard } from './core-module/guards/login.guard';
import { NotFoundPagesComponent } from './core-module/pages/not-found-pages/not-found-pages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
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
    canActivate: [LoginGuard],
  },
  {
    path: 'admin',
    component: AdminPagesComponent,
  },
  {
    path: 'not-found',
    component: NotFoundPagesComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
