import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeModuleRoutingModule } from './youtube-module-routing.module';

@NgModule({
  declarations: [SearchItemComponent, SearchResultsComponent],
  imports: [CommonModule, YoutubeModuleRoutingModule, SharedModuleModule],
  exports: [SearchResultsComponent]
})
export class YoutubeModuleModule { }
