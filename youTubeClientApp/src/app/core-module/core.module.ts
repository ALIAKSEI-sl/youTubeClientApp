import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared-module/shared.module';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { HeaderPagesComponent } from './pages/header-pages/header-pages.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';

@NgModule({
  declarations: [
    HeaderPagesComponent,
    SearchInputComponent,
    SortingComponent,
    UserLoginComponent,
    NotFoundPagesComponent,
    NotFoundComponent,
    CreateCardComponent,
    AdminPagesComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderPagesComponent, NotFoundPagesComponent, AdminPagesComponent],
})
export class CoreModule {}
