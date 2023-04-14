import { Component } from '@angular/core';

import { FilteringResultService } from 'src/app/youtube-module/services/filtering-result.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  filterWord = '';

  constructor(private filteringResultService: FilteringResultService) {}

  filterByDate() {
    this.filteringResultService.changeSortingByDate();
  }

  filterByCountOfView() {
    this.filteringResultService.changeSortingByCountOfView();
  }

  filterByWorld() {
    this.filteringResultService.changeSortingByWorld(this.filterWord);
  }
}
