import { IItems } from '../models/search-item.model';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IItems[];
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
