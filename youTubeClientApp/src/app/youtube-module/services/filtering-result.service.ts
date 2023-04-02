import { Injectable } from '@angular/core';

import { SortingBy } from 'src/app/youtube-module/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class FilteringResultService {
  sortingBy: SortingBy = {
    date: undefined,
    countOfView: undefined,
    world: '',
  };

  changeSortingByDate() {
    this.sortingBy.countOfView = undefined;
    if (!this.sortingBy.date) {
      this.sortingBy.date = 'ASC';
    } else {
      this.sortingBy.date = this.sortingBy.date === 'ASC' ? 'DESC' : 'ASC';
    }
  }

  changeSortingByCountOfView() {
    this.sortingBy.date = undefined;
    if (!this.sortingBy.countOfView) {
      this.sortingBy.countOfView = 'ASC';
    } else {
      this.sortingBy.countOfView =
        this.sortingBy.countOfView === 'ASC' ? 'DESC' : 'ASC';
    }
  }

  changeSortingByWorld(filterWord: string) {
    this.sortingBy.world = filterWord;
  }

  resetFiltering() {
    this.sortingBy.date = undefined;
    this.sortingBy.countOfView = undefined;
  }
}
