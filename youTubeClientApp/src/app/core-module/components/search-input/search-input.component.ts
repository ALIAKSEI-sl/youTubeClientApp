import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { IResponse } from 'src/app/youtube-module/models/search-response.model';
import { FilteringResultService } from 'src/app/youtube-module/services/filtering-result.service';
import { YouTubeResponseService } from 'src/app/youtube-module/services/you-tube-response.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Output() visibilitySettingsChange = new EventEmitter<boolean>();

  searchControl = new FormControl();

  areSettingsVisible = false;

  requestDelay$ = new Subject<string>();

  subscriptionOnSearchTerm!: Subscription;

  constructor(
    private youTubeResponseService: YouTubeResponseService,
    private filteringResultService: FilteringResultService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionOnSearchTerm = this.getSearchTerm()
      .pipe(
        switchMap((value: string) => {
          return this.getResult(value);
        })
      )
      .subscribe((response: IResponse) => {
        this.youTubeResponseService.youTubeResponse = response.items;
      });
  }

  ngOnDestroy(): void {
    this.subscriptionOnSearchTerm.unsubscribe();
  }

  changeSettingsVisibility() {
    this.areSettingsVisible = !this.areSettingsVisible;
    this.visibilitySettingsChange.emit(this.areSettingsVisible);
  }

  getResult(searchTerm: string): Observable<IResponse> {
    const response = this.youTubeResponseService.getResult(
      searchTerm.trim().toLowerCase()
    );
    this.filteringResultService.resetFiltering();
    this.router.navigateByUrl('/main');
    return response;
  }

  getSearchTerm(): Observable<string> {
    return this.requestDelay$.pipe(
      filter((value) => value.length > 2),
      debounceTime(500),
      distinctUntilChanged()
    );
  }

  submitForm() {
    this.requestDelay$.next(this.searchControl.value);
  }
}
