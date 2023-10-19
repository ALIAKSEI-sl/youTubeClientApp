import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { selectYouTubeResponse } from 'src/app/redux/selectors/customCards.selector';

import { IItem } from '../../models/search-item.model';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent implements OnInit, OnDestroy {
  youTubeResponse!: IItem[];

  youTubeResponse$!: Subscription;

  imgSrc = '';

  title = '';

  date = '';

  description = '';

  viewCount = '';

  likeCount = '';

  dislikeCount = '';

  commentCount = '';

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.youTubeResponse$ = this.store
      .select(selectYouTubeResponse)
      .subscribe((response) => (this.youTubeResponse = response));

    const itemResponse = this.youTubeResponse.find(
      (item) => item.id === this.route.snapshot.params['id']
    );
    if (itemResponse) {
      this.imgSrc = itemResponse.snippet.thumbnails.maxres.url;
      this.title = itemResponse.snippet.title;
      this.date = itemResponse.snippet.publishedAt;
      this.description = itemResponse.snippet.description;
      this.viewCount = itemResponse.statistics.viewCount;
      this.likeCount = itemResponse.statistics.likeCount;
      this.dislikeCount = itemResponse.statistics.dislikeCount;
      this.commentCount = itemResponse.statistics.commentCount;
    } else {
      this.router.navigateByUrl('/not-found');
    }
  }

  ngOnDestroy(): void {
    this.youTubeResponse$.unsubscribe();
  }
}
