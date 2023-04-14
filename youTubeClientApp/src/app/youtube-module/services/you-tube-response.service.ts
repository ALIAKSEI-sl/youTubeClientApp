import { Injectable } from '@angular/core';

import { IItem } from 'src/app/youtube-module/models/search-item.model';

import { response } from '../../youtube-module/response/mock-response';

@Injectable({
  providedIn: 'root',
})
export class YouTubeResponseService {
  youTubeResponse: IItem[] = [];

  sendRequest(searchTerm: string) {
    if (searchTerm) {
      this.youTubeResponse = response.items.filter((item) =>
        item.snippet.title.toLowerCase().includes(searchTerm)
      );
    } else {
      this.youTubeResponse = [];
    }
  }
}
