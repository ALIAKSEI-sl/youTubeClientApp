import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [AppComponent, SearchResultsComponent, SearchItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModuleModule,
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
