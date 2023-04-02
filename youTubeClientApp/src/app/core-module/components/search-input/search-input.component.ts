import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { FilteringResultService } from 'src/app/youtube-module/services/filtering-result.service';
import { YouTubeResponseService } from 'src/app/youtube-module/services/you-tube-response.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() visibilitySettingsChange = new EventEmitter<boolean>();

  searchTerm = 'angular';

  areSettingsVisible = false;

  constructor(
    private youTubeResponseService: YouTubeResponseService,
    private filteringResultService: FilteringResultService,
    private router: Router
  ) {}

  changeSettingsVisibility() {
    this.areSettingsVisible = !this.areSettingsVisible;
    this.visibilitySettingsChange.emit(this.areSettingsVisible);
  }

  sendSearchTerm() {
    this.youTubeResponseService.sendRequest(
      this.searchTerm.trim().toLowerCase()
    );
    this.filteringResultService.resetFiltering();
    this.router.navigateByUrl('/main');
  }
}
