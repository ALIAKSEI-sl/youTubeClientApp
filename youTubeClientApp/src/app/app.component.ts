import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youTubeClientApp';

  searchFormValue = '';

  filterWord = '';

  isDateIncreasing: boolean | null = null;

  isCountOfViewsIncreasing: boolean | null = null;

  getSearchFormValue(value: string) {
    this.searchFormValue = value;
    this.isDateIncreasing = null;
    this.isCountOfViewsIncreasing = null;
  }

  filterSearch(value: string) {
    this.filterWord = value;
  }

  filterDate() {
    this.isCountOfViewsIncreasing = null;
    if (this.isDateIncreasing === null) {
      this.isDateIncreasing = true;
    } else {
      this.isDateIncreasing = !this.isDateIncreasing;
    }
  }

  filterCountOfViews() {
    this.isDateIncreasing = null;
    if (this.isCountOfViewsIncreasing === null) {
      this.isCountOfViewsIncreasing = true;
    } else {
      this.isCountOfViewsIncreasing = !this.isCountOfViewsIncreasing;
    }
  }
}
