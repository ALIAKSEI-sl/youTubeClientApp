import { Pipe, PipeTransform } from '@angular/core';

import { IItem } from '../../models/search-item.model';

@Pipe({
  name: 'sortingDate',
})
export class SortingDatePipe implements PipeTransform {
  transform(itemResponse: IItem[], isIncreasing: boolean | null): IItem[] {
    if (isIncreasing === null) return itemResponse;
    if (isIncreasing) {
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
