import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { YouTubeResponseService } from '../../services/you-tube-response.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss'],
})
export class ItemInfoComponent implements OnInit {
  imgSrc = '';

  title = '';

  date = '';

  description = '';

  viewCount = '';

  likeCount = '';

  dislikeCount = '';

  commentCount = '';

  constructor(
    private route: ActivatedRoute,
    private youTubeResponseService: YouTubeResponseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const itemResponse = this.youTubeResponseService.youTubeResponse.find(
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
}
