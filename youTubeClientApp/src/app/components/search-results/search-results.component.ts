import { Component, Input, OnChanges } from '@angular/core';

import { IItem } from '../../models/search-item.model';
import { SortingDirection } from '../../models/search-response.model';
import { response } from '../../response/mock-response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() searchFormValue = '';

  @Input() filterWord = '';

  @Input() typeOfSortingByDate: SortingDirection | undefined;

  @Input() typeOfSortingByCountOfView: SortingDirection | undefined;

  youTubeResponse: IItem[] = [];

  ngOnChanges() {
    if (this.searchFormValue) {
      this.youTubeResponse = response.items.filter((item) =>
        item.snippet.title
          .toLowerCase()
          .includes(this.searchFormValue.toLowerCase())
      );
    } else {
      this.youTubeResponse = [];
    }
  }
}
