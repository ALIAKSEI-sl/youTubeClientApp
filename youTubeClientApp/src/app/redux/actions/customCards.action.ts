import { createAction, props } from '@ngrx/store';

import { ICustomCard } from '../state.models';

export const createCustomCards = createAction(
  '[Admin] create custom cards',
  props<{ card: ICustomCard }>()
);
