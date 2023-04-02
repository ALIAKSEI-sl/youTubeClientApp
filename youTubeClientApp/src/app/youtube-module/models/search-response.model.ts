import { IItem } from './search-item.model';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IItem[];
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SortingBy {
  date: SortingDirection | undefined;
  countOfView: SortingDirection | undefined;
  world: string;
}

export type SortingDirection = 'ASC' | 'DESC';

export type TypeElementColorDirective =
  | 'itemResponse'
  | 'item-card'
  | 'button-back'
  | 'block-description';
