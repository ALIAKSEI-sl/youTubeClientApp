import { Component } from '@angular/core';

import { SortingDirection } from './shared-module/models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youTubeClientApp';

  searchFormValue = '';

  filterWord = '';

  typeOfSortingByDate: SortingDirection | undefined = undefined;

  typeOfSortingByCountOfView: SortingDirection | undefined = undefined;

  startSearchFormValue(value: string) {
    this.searchFormValue = value;
    this.typeOfSortingByDate = undefined;
    this.typeOfSortingByCountOfView = undefined;
  }

  startFilterSearch(value: string) {
    this.filterWord = value;
  }

  startFilterDate() {
    this.typeOfSortingByCountOfView = undefined;
    if (!this.typeOfSortingByDate) {
      this.typeOfSortingByDate = 'ASC';
    } else {
      this.typeOfSortingByDate =
        this.typeOfSortingByDate === 'ASC' ? 'DESC' : 'ASC';
    }
  }

  startFilterCountOfViews() {
    this.typeOfSortingByDate = undefined;
    if (!this.typeOfSortingByCountOfView) {
      this.typeOfSortingByCountOfView = 'ASC';
    } else {
      this.typeOfSortingByCountOfView =
        this.typeOfSortingByCountOfView === 'ASC' ? 'DESC' : 'ASC';
    }
  }
}
