import { createReducer, on } from '@ngrx/store';

import { updateYouTubeResponse } from '../actions/youTubeResponse.action';
import {
  initialYouTubeResponseState,
  IYouTubeResponseState,
} from '../state.models';

export const youTubeResponseReducer = createReducer(
  initialYouTubeResponseState,
  on(
    updateYouTubeResponse,
    (state, { youTubeResponse }): IYouTubeResponseState => ({
      ...state,
      youTubeResponse: [...youTubeResponse],
    })
  )
);
