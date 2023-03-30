import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    SortingComponent,
    UserLoginComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModuleModule {}
