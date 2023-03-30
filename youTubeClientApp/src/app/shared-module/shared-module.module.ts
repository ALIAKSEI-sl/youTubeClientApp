import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChangeColorBorderDirective } from './directives/change-color-border.directive/change-color-border.directive';
import { FilterSearchPipe } from './pipes/filter-search/filter-search.pipe';
import { SortingCountOfViewsPipe } from './pipes/sorting-count-of-views/sorting-count-of-views.pipe';
import { SortingDatePipe } from './pipes/sorting-date/sorting-date.pipe';

@NgModule({
  declarations: [
    ChangeColorBorderDirective,
    FilterSearchPipe,
    SortingCountOfViewsPipe,
    SortingDatePipe,
  ],
  imports: [CommonModule],
  exports: [
    ChangeColorBorderDirective,
    FilterSearchPipe,
    SortingCountOfViewsPipe,
    SortingDatePipe,
  ],
})
export class SharedModuleModule {}
