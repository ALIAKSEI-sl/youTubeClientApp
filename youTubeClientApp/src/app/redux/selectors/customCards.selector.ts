import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICustomCardState, IYouTubeResponseState } from '../state.models';

const selectCustomCardsState =
  createFeatureSelector<ICustomCardState>('customCardsState');

const selectYouTubeResponseState = createFeatureSelector<IYouTubeResponseState>(
  'youTubeResponseState'
);

export const selectCustomCards = createSelector(
  selectCustomCardsState,
  (state: ICustomCardState) => state.customCards
);

export const selectYouTubeResponse = createSelector(
  selectYouTubeResponseState,
  (state: IYouTubeResponseState) => state.youTubeResponse
);
