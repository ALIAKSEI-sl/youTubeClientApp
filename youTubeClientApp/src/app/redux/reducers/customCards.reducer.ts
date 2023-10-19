import { createReducer, on } from '@ngrx/store';

import { createCustomCards } from '../actions/customCards.action';
import { ICustomCardState, initialCustomCardState } from '../state.models';

export const customCardsReducer = createReducer(
  initialCustomCardState,
  on(
    createCustomCards,
    (state, { card }): ICustomCardState => ({
      ...state,
      customCards: [...state.customCards, card],
    })
  )
);
