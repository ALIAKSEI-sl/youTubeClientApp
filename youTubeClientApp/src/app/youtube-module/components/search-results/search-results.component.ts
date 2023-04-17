import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import {
  selectCustomCards,
  selectYouTubeResponse,
} from 'src/app/redux/selectors/customCards.selector';
import { ICustomCard } from 'src/app/redux/state.models';

import { IItem } from '../../models/search-item.model';
import { FilteringResultService } from '../../services/filtering-result.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  customCard!: Observable<ICustomCard[]>;

  youTubeResponse!: IItem[];

  youTubeResponse$!: Subscription;

  constructor(
    public filteringResultService: FilteringResultService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.customCard = this.store.select(selectCustomCards);
    this.youTubeResponse$ = this.store
      .select(selectYouTubeResponse)
      .subscribe((response) => (this.youTubeResponse = response));
  }

  ngOnDestroy(): void {
    this.youTubeResponse$.unsubscribe();
  }
}
