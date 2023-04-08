import { IItem, IItemSearch } from './search-item.model';

export interface IResponseSearch {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IItemSearch[];
}

export interface IResponse {
  kind: string;
  etag: string;
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
