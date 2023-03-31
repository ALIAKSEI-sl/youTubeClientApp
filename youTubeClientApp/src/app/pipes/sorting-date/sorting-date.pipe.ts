import { Pipe, PipeTransform } from '@angular/core';

import { IItem } from '../../models/search-item.model';
import { SortingDirection } from '../../models/search-response.model';

@Pipe({
  name: 'sortingDate',
})
export class SortingDatePipe implements PipeTransform {
  transform(
    itemResponse: IItem[],
    typeOfSorting: SortingDirection | undefined
  ): IItem[] {
    if (!typeOfSorting) return itemResponse;
    if (typeOfSorting === 'ASC') {
      return itemResponse.sort(
        (a, b) =>
          new Date(a.snippet.publishedAt).getTime() -
          new Date(b.snippet.publishedAt).getTime()
      );
    } else {
      return itemResponse.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
      );
    }
  }
}
