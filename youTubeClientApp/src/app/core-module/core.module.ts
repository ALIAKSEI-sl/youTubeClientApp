import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared-module/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
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
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderPagesComponent, NotFoundPagesComponent],
})
export class CoreModule {}
