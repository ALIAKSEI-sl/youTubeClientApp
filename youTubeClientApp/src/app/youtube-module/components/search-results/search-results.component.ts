import { Component } from '@angular/core';

import { FilteringResultService } from '../../services/filtering-result.service';
import { YouTubeResponseService } from '../../services/you-tube-response.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  constructor(
    public youTubeResponseService: YouTubeResponseService,
    public filteringResultService: FilteringResultService
  ) {}
}
