import { Pipe, PipeTransform } from '@angular/core';

import { IItem } from '../../../shared-module/models/search-item.model';
import { SortingDirection } from '../../../shared-module/models/search-response.model';

@Pipe({
  name: 'sortingCountOfViews',
})
export class SortingCountOfViewsPipe implements PipeTransform {
  transform(
    itemResponse: IItem[],
    typeOfSorting: SortingDirection | undefined
  ): IItem[] {
    if (!typeOfSorting) return itemResponse;
    if (typeOfSorting === 'ASC') {
      return itemResponse.sort(
        (a, b) => +a.statistics.viewCount - +b.statistics.viewCount
      );
    } else {
      return itemResponse.sort(
        (a, b) => +b.statistics.viewCount - +a.statistics.viewCount
      );
    }
  }
}
