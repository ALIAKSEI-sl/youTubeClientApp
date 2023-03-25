import { Pipe, PipeTransform } from '@angular/core';

import { IItem } from '../../models/search-item.model';

@Pipe({
  name: 'sortingCountOfViews',
})
export class SortingCountOfViewsPipe implements PipeTransform {
  transform(itemResponse: IItem[], isIncreasing: boolean | null): IItem[] {
    if (isIncreasing === null) return itemResponse;
    if (isIncreasing) {
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
