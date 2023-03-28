import { IItem } from '../models/search-item.model';

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

export type SortingDirection = 'ASC' | 'DESC';
