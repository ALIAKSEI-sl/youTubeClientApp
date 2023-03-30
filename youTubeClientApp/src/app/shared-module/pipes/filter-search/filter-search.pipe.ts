import { Pipe, PipeTransform } from '@angular/core';

import { IItem } from '../../../models/search-item.model';

@Pipe({
  name: 'filterSearch',
})
export class FilterSearchPipe implements PipeTransform {
  transform(itemResponse: IItem[], search: string): IItem[] {
    return itemResponse.filter((item) =>
      item.snippet.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
