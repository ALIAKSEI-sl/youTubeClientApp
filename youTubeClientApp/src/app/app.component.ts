import { Component } from '@angular/core';

import { SortingDirection } from './models/search-response.model';

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

  getSearchFormValue(value: string) {
    this.searchFormValue = value;
    this.typeOfSortingByDate = undefined;
    this.typeOfSortingByCountOfView = undefined;
  }

  filterSearch(value: string) {
    this.filterWord = value;
  }

  filterDate() {
    this.typeOfSortingByCountOfView = undefined;
    if (!this.typeOfSortingByDate) {
      this.typeOfSortingByDate = 'ASC';
    } else {
      this.typeOfSortingByDate = this.typeOfSortingByDate === 'ASC' ? 'DESC' : 'ASC';
    }
  }

  filterCountOfViews() {
    this.typeOfSortingByDate = undefined;
    if (!this.typeOfSortingByCountOfView) {
      this.typeOfSortingByCountOfView = 'ASC';
    } else {
      this.typeOfSortingByCountOfView = this.typeOfSortingByCountOfView === 'ASC' ? 'DESC' : 'ASC';
    }
  }
}
