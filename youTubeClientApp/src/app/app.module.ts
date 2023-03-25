import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ChangeColorBorderDirective } from './directives/change-color-border.directive/change-color-border.directive';
import { FilterSearchPipe } from './pipes/filter-search/filter-search.pipe';
import { SortingCountOfViewsPipe } from './pipes/sorting-count-of-views/sorting-count-of-views.pipe';
import { SortingDatePipe } from './pipes/sorting-date/sorting-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SortingComponent,
    SearchInputComponent,
    UserLoginComponent,
    ChangeColorBorderDirective,
    FilterSearchPipe,
    SortingCountOfViewsPipe,
    SortingDatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
