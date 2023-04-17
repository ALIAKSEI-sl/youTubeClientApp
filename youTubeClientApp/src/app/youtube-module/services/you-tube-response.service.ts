import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, switchMap } from 'rxjs';
import { IItemSearch } from 'src/app/youtube-module/models/search-item.model';
import {
  IResponse,
  IResponseSearch,
} from 'src/app/youtube-module/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YouTubeResponseService {
  constructor(private http: HttpClient) {}

  getResult(searchTerm: string): Observable<IResponse> {
    const url = `search?type=video&part=snippet&maxResults=20&q=${searchTerm}`;
    return this.http.get<IResponseSearch>(url).pipe(
      switchMap((req: IResponseSearch) => {
        const listId = req.items
          .map((item: IItemSearch) => item.id.videoId)
          .join(',');
        const items = this.http.get<IResponse>(
          `videos?id=${listId}&part=snippet,statistics`
        );
        return items;
      })
    );
  }
}
