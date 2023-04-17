import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomCardsComponent } from './components/custom-cards/custom-cards.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ChangeColorBorderDirective } from './directives/change-color-border.directive';
import { InfoPagesComponent } from './pages/info-pages/info-pages.component';
import { MainPagesComponent } from './pages/main-pages/main-pages.component';
import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { SortingCountOfViewsPipe } from './pipes/sorting-count-of-views.pipe';
import { SortingDatePipe } from './pipes/sorting-date.pipe';
import { UploadDateFormatPipe } from './pipes/upload-date-format.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    InfoPagesComponent,
    MainPagesComponent,
    ItemInfoComponent,
    ChangeColorBorderDirective,
    FilterSearchPipe,
    SortingCountOfViewsPipe,
    SortingDatePipe,
    UploadDateFormatPipe,
    CustomCardsComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
