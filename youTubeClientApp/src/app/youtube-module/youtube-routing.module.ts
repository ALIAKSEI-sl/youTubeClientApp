import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoPagesComponent } from './pages/info-pages/info-pages.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';

const routes: Routes = [
  {
    path: '',
    component: MainPagesComponent,
  },
  {
    path: ':id',
    component: InfoPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
