import { createAction, props } from '@ngrx/store';

import { IItem } from 'src/app/youtube-module/models/search-item.model';

export const updateYouTubeResponse = createAction(
  '[Main] youTube response',
  props<{ youTubeResponse: IItem[] }>()
);
